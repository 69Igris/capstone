import express from 'express';
import { PrismaClient } from '@prisma/client';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();
const prisma = new PrismaClient();


router.post('/', authMiddleware, async (req, res) => {
  try {
    const { courseId } = req.body;
    const userId = req.user.id;

    // Check if already enrolled
    const existingEnrollment = await prisma.enrollment.findUnique({
      where: {
        userId_courseId: {
          userId,
          courseId
        }
      }
    });

    if (existingEnrollment) {
      return res.status(400).json({ message: 'Already enrolled in this course' });
    }

    // Check if course exists
    const course = await prisma.course.findUnique({
      where: { id: courseId }
    });

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    // Create enrollment
    const enrollment = await prisma.enrollment.create({
      data: {
        userId,
        courseId
      }
    });

    // Update course student count
    await prisma.course.update({
      where: { id: courseId },
      data: {
        students: {
          increment: 1
        }
      }
    });

    res.status(201).json({
      success: true,
      message: 'Successfully enrolled in course',
      enrollment
    });
  } catch (error) {
    console.error('Enrollment error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});


router.get('/my-courses', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;

    const enrollments = await prisma.enrollment.findMany({
      where: { userId },
      include: {
        course: true
      },
      orderBy: {
        enrolledAt: 'desc'
      }
    });

    res.json({
      success: true,
      enrollments
    });
  } catch (error) {
    console.error('Get enrollments error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});


router.put('/:id/progress', authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const { progress } = req.body;
    const userId = req.user.id;

    const enrollment = await prisma.enrollment.findFirst({
      where: {
        id,
        userId
      }
    });

    if (!enrollment) {
      return res.status(404).json({ message: 'Enrollment not found' });
    }

    const updatedEnrollment = await prisma.enrollment.update({
      where: { id },
      data: {
        progress: parseInt(progress),
        completed: parseInt(progress) >= 100
      }
    });

    res.json({
      success: true,
      enrollment: updatedEnrollment
    });
  } catch (error) {
    console.error('Update progress error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// @route   DELETE /api/enrollments/:id
// @desc    Unenroll from course
// @access  Private
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const enrollment = await prisma.enrollment.findFirst({
      where: {
        id,
        userId
      }
    });

    if (!enrollment) {
      return res.status(404).json({ message: 'Enrollment not found' });
    }

    await prisma.enrollment.delete({
      where: { id }
    });

    // Decrement course student count
    await prisma.course.update({
      where: { id: enrollment.courseId },
      data: {
        students: {
          decrement: 1
        }
      }
    });

    res.json({
      success: true,
      message: 'Successfully unenrolled from course'
    });
  } catch (error) {
    console.error('Unenroll error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export default router;
