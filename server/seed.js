import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const sampleCourses = [
  {
    title: "Complete Web Development Bootcamp",
    description: "Master HTML, CSS, JavaScript, React, Node.js, and MongoDB. Build 15+ real-world projects and become a full-stack developer.",
    instructor: "Dr. Angela Yu",
    category: "Programming",
    level: "Beginner",
    price: 89.99,
    duration: "54 hours",
    rating: 4.8,
    students: 12543
  },
  {
    title: "Python for Data Science and Machine Learning",
    description: "Learn Python programming and use it for data analysis, visualization, and machine learning with Pandas, NumPy, Matplotlib, and Scikit-learn.",
    instructor: "Jose Portilla",
    category: "Data Science",
    level: "Intermediate",
    price: 94.99,
    duration: "42 hours",
    rating: 4.7,
    students: 9876
  },
  {
    title: "UI/UX Design Masterclass",
    description: "Learn user interface and user experience design from scratch. Master Figma, design thinking, prototyping, and usability testing.",
    instructor: "Sarah Johnson",
    category: "Design",
    level: "Beginner",
    price: 79.99,
    duration: "28 hours",
    rating: 4.9,
    students: 7654
  },
  {
    title: "Digital Marketing Fundamentals",
    description: "Complete guide to SEO, social media marketing, email marketing, and Google Ads. Learn to create effective marketing campaigns.",
    instructor: "Neil Patel",
    category: "Marketing",
    level: "Beginner",
    price: 69.99,
    duration: "32 hours",
    rating: 4.6,
    students: 15234
  },
  {
    title: "Advanced React and Redux",
    description: "Master React hooks, context API, Redux, Redux Toolkit, and advanced patterns. Build scalable applications with best practices.",
    instructor: "Maximilian Schwarzmüller",
    category: "Programming",
    level: "Advanced",
    price: 99.99,
    duration: "48 hours",
    rating: 4.8,
    students: 8765
  },
  {
    title: "Business Strategy and Leadership",
    description: "Learn strategic planning, team management, decision making, and leadership skills to advance your business career.",
    instructor: "Michael Porter",
    category: "Business",
    level: "Intermediate",
    price: 84.99,
    duration: "36 hours",
    rating: 4.7,
    students: 6543
  },
  {
    title: "Photography Masterclass",
    description: "Complete photography course covering camera basics, composition, lighting, portrait, landscape, and photo editing with Lightroom.",
    instructor: "Phil Ebiner",
    category: "Photography",
    level: "Beginner",
    price: 74.99,
    duration: "40 hours",
    rating: 4.8,
    students: 11234
  },
  {
    title: "Mobile App Development with React Native",
    description: "Build iOS and Android apps with React Native. Learn navigation, state management, API integration, and deployment.",
    instructor: "Stephen Grider",
    category: "Programming",
    level: "Intermediate",
    price: 89.99,
    duration: "38 hours",
    rating: 4.7,
    students: 5678
  },
  {
    title: "Graphic Design Theory and Practice",
    description: "Master typography, color theory, layout design, and branding. Use Adobe Illustrator and Photoshop like a professional.",
    instructor: "Lindsay Marsh",
    category: "Design",
    level: "Beginner",
    price: 69.99,
    duration: "26 hours",
    rating: 4.6,
    students: 8901
  },
  {
    title: "AWS Certified Solutions Architect",
    description: "Prepare for AWS certification. Learn EC2, S3, RDS, Lambda, VPC, CloudFormation, and best practices for cloud architecture.",
    instructor: "Stephane Maarek",
    category: "Programming",
    level: "Advanced",
    price: 99.99,
    duration: "52 hours",
    rating: 4.9,
    students: 13456
  },
  {
    title: "Content Marketing Strategy",
    description: "Learn to create compelling content, develop content calendars, and measure content performance across multiple channels.",
    instructor: "Ann Handley",
    category: "Marketing",
    level: "Intermediate",
    price: 79.99,
    duration: "24 hours",
    rating: 4.7,
    students: 4567
  },
  {
    title: "Machine Learning A-Z",
    description: "Hands-on Python and R in data science. Master machine learning algorithms, deep learning, NLP, and reinforcement learning.",
    instructor: "Kirill Eremenko",
    category: "Data Science",
    level: "Advanced",
    price: 94.99,
    duration: "44 hours",
    rating: 4.8,
    students: 10234
  }
];

async function main() {
  console.log('Starting seed...');
  
  // Clear existing courses
  await prisma.course.deleteMany({});
  console.log('Cleared existing courses');
  
  // Create new courses
  for (const course of sampleCourses) {
    await prisma.course.create({
      data: course
    });
  }
  
  console.log(`Created ${sampleCourses.length} courses`);
  console.log('Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
