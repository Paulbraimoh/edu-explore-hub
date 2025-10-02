export interface Course {
  id: number;
  title: string;
  university: string;
  duration: string;
  location: string;
  fees_usd: number;
  description: string;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Computer Science",
    university: "University of Lagos",
    duration: "4 years",
    location: "Lagos, Nigeria",
    fees_usd: 1500,
    description: "A comprehensive undergraduate program covering programming, data structures, algorithms, and computer systems."
  },
  {
    id: 2,
    title: "Mechanical Engineering",
    university: "Obafemi Awolowo University",
    duration: "5 years",
    location: "Ile-Ife, Nigeria",
    fees_usd: 1800,
    description: "Focuses on the design, analysis, and manufacturing of mechanical systems with hands-on projects."
  },
  {
    id: 3,
    title: "Medicine & Surgery",
    university: "University of Ibadan",
    duration: "6 years",
    location: "Ibadan, Nigeria",
    fees_usd: 2500,
    description: "Comprehensive program in medical sciences, clinical skills, and healthcare practice."
  },
  {
    id: 4,
    title: "Business Administration",
    university: "Covenant University",
    duration: "4 years",
    location: "Ota, Nigeria",
    fees_usd: 2000,
    description: "Prepares students for leadership roles in business with courses on finance, marketing, and management."
  },
  {
    id: 5,
    title: "Architecture",
    university: "Ahmadu Bello University",
    duration: "5 years",
    location: "Zaria, Nigeria",
    fees_usd: 1700,
    description: "Blends creativity and technical skills to train architects for residential and commercial projects."
  },
  {
    id: 6,
    title: "Economics",
    university: "University of Benin",
    duration: "4 years",
    location: "Benin City, Nigeria",
    fees_usd: 1400,
    description: "Provides knowledge in microeconomics, macroeconomics, and econometrics for business and policy-making."
  },
  {
    id: 7,
    title: "Law",
    university: "University of Nigeria, Nsukka",
    duration: "5 years",
    location: "Nsukka, Nigeria",
    fees_usd: 2200,
    description: "Covers constitutional, criminal, and corporate law with practical exposure to legal practice."
  },
  {
    id: 8,
    title: "Mass Communication",
    university: "Babcock University",
    duration: "4 years",
    location: "Ogun State, Nigeria",
    fees_usd: 1600,
    description: "Focuses on journalism, media studies, and digital communication technologies."
  },
  {
    id: 9,
    title: "Pharmacy",
    university: "University of Jos",
    duration: "5 years",
    location: "Jos, Nigeria",
    fees_usd: 1900,
    description: "Covers pharmaceutical sciences, drug formulation, and clinical pharmacy with practical training."
  },
  {
    id: 10,
    title: "Electrical Engineering",
    university: "Federal University of Technology, Akure",
    duration: "5 years",
    location: "Akure, Nigeria",
    fees_usd: 1750,
    description: "Teaches power systems, electronics, and telecommunications with practical lab experience."
  }
];
