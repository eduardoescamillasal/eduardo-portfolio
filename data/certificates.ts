export type Certificate = {
  title: string;
  platform: string;
  issuer: string;
  kind: "Course" | "Specialization" | "Track" | "Guided project";
  courses?: string[];
  url?: string;
  preview?: string;
  completedOn?: string;
  hours?: number;
  honors?: boolean;
  featured?: boolean;
};

// Details transcribed from supplied certificates; older screenshot-only entries retained.
export const certificates: Certificate[] = [
  {
    "title": "Associate Data Scientist in Python",
    "platform": "DataCamp",
    "issuer": "DataCamp",
    "kind": "Track",
    "hours": 88,
    "completedOn": "January 30, 2022",
    "preview": "/certificates/datacamp-associate-data-scientist-in-python.pdf",
    "featured": true
  },
  {
    "title": "Machine Learning Scientist in Python",
    "platform": "DataCamp",
    "issuer": "DataCamp",
    "kind": "Track",
    "hours": 93,
    "completedOn": "January 18, 2022",
    "preview": "/certificates/datacamp-machine-learning-scientist-in-python.pdf",
    "featured": true
  },
  {
    "title": "Data Engineer in Python",
    "platform": "DataCamp",
    "issuer": "DataCamp",
    "kind": "Track",
    "hours": 40,
    "completedOn": "December 31, 2024",
    "preview": "/certificates/datacamp-data-engineer-in-python.pdf",
    "featured": true
  },
  {
    "title": "Associate Data Engineer in SQL",
    "platform": "DataCamp",
    "issuer": "DataCamp",
    "kind": "Track",
    "hours": 28,
    "completedOn": "April 8, 2025",
    "preview": "/certificates/datacamp-associate-data-engineer-in-sql.pdf",
    "featured": true
  },
  {
    "title": "Mathematics for Machine Learning",
    "platform": "Coursera",
    "issuer": "Imperial College London",
    "kind": "Specialization",
    "completedOn": "March 21, 2020",
    "preview": "/certificates/coursera-LQGRAWP85KYC.pdf",
    "url": "https://coursera.org/verify/specialization/LQGRAWP85KYC",
    "featured": true,
    "courses": [
      "Mathematics for Machine Learning: Linear Algebra",
      "Mathematics for Machine Learning: Multivariate Calculus",
      "Mathematics for Machine Learning: PCA"
    ]
  },
  {
    "title": "Divide and Conquer, Sorting and Searching, and Randomized Algorithms",
    "platform": "Coursera",
    "issuer": "Stanford Online",
    "kind": "Course",
    "completedOn": "June 16, 2024",
    "preview": "/certificates/coursera-8XPDRW8H9L5K.pdf",
    "url": "https://coursera.org/verify/8XPDRW8H9L5K",
    "featured": true
  },
  {
    "title": "Build a Modern Computer from First Principles: From Nand to Tetris (Project-Centered Course)",
    "platform": "Coursera",
    "issuer": "Hebrew University of Jerusalem",
    "kind": "Course",
    "completedOn": "November 5, 2020",
    "preview": "/certificates/coursera-TVJPHYYHZ9SH.pdf",
    "url": "https://coursera.org/verify/TVJPHYYHZ9SH",
    "featured": true
  },
  {
    "title": "Automated Reasoning: satisfiability",
    "platform": "Coursera",
    "issuer": "28DIGITAL",
    "kind": "Course",
    "completedOn": "October 8, 2020",
    "preview": "/certificates/coursera-DBSHCPXFVAV8.pdf",
    "url": "https://coursera.org/verify/DBSHCPXFVAV8"
  },
  {
    "title": "Bayesian Statistics: From Concept to Data Analysis",
    "platform": "Coursera",
    "issuer": "University of California, Santa Cruz",
    "kind": "Course",
    "completedOn": "April 18, 2020",
    "preview": "/certificates/coursera-ED85A87PCRZQ.pdf",
    "url": "https://coursera.org/verify/ED85A87PCRZQ",
    "honors": true
  },
  {
    "title": "Advanced Linear Models for Data Science 1: Least Squares",
    "platform": "Coursera",
    "issuer": "Johns Hopkins University",
    "kind": "Course",
    "completedOn": "April 15, 2020",
    "preview": "/certificates/coursera-6R89G6LDRJJW.pdf",
    "url": "https://coursera.org/verify/6R89G6LDRJJW"
  },
  {
    "title": "Advanced Linear Models for Data Science 2: Statistical Linear Models",
    "platform": "Coursera",
    "issuer": "Johns Hopkins University",
    "kind": "Course",
    "completedOn": "April 19, 2020",
    "preview": "/certificates/coursera-MFD5UV9M2BEX.pdf",
    "url": "https://coursera.org/verify/MFD5UV9M2BEX"
  },
  {
    "title": "Discrete Mathematics",
    "platform": "Coursera",
    "issuer": "Shanghai Jiao Tong University",
    "kind": "Course",
    "completedOn": "May 6, 2021",
    "preview": "/certificates/coursera-SUP75BKWXW7Y.pdf",
    "url": "https://coursera.org/verify/SUP75BKWXW7Y"
  },
  {
    "title": "Combinatorics and Probability",
    "platform": "Coursera",
    "issuer": "University of California San Diego",
    "kind": "Course",
    "completedOn": "October 22, 2020",
    "preview": "/certificates/coursera-3M5EZAZBNDKV.pdf",
    "url": "https://coursera.org/verify/3M5EZAZBNDKV"
  },
  {
    "title": "Mathematical Biostatistics Boot Camp 1",
    "platform": "Coursera",
    "issuer": "Johns Hopkins University",
    "kind": "Course",
    "completedOn": "April 9, 2020",
    "preview": "/certificates/coursera-4TY97M54XSC9.pdf",
    "url": "https://coursera.org/verify/4TY97M54XSC9"
  },
  {
    "title": "Version Control of a Python Project using Git",
    "platform": "Coursera",
    "issuer": "Coursera Guided Projects",
    "kind": "Guided project",
    "completedOn": "October 29, 2020",
    "preview": "/certificates/coursera-65EK5TUUM3VN.pdf",
    "url": "https://coursera.org/verify/65EK5TUUM3VN"
  },
  {
    "title": "Analyse numérique pour ingénieurs",
    "platform": "Coursera",
    "issuer": "École Polytechnique Fédérale de Lausanne",
    "kind": "Course",
    "completedOn": "September 23, 2020",
    "preview": "/certificates/coursera-FE6EM5WAFUQJ.pdf",
    "url": "https://coursera.org/verify/FE6EM5WAFUQJ"
  },
  {
    "title": "Differential Equations for Engineers",
    "platform": "Coursera",
    "issuer": "The Hong Kong University of Science and Technology",
    "kind": "Course",
    "completedOn": "September 11, 2020",
    "preview": "/certificates/coursera-G6NX9YMWUYNT.pdf",
    "url": "https://coursera.org/verify/G6NX9YMWUYNT"
  },
  {
    "title": "Data-driven Astronomy",
    "platform": "Coursera",
    "issuer": "The University of Sydney",
    "kind": "Course",
    "completedOn": "March 31, 2020",
    "preview": "/certificates/coursera-H5U7VD3E2QKV.pdf",
    "url": "https://coursera.org/verify/H5U7VD3E2QKV"
  },
  {
    "title": "Introduction to Graph Theory",
    "platform": "Coursera",
    "issuer": "University of California San Diego",
    "kind": "Course",
    "completedOn": "October 23, 2020",
    "preview": "/certificates/coursera-JD6SG4ESDJ28.pdf",
    "url": "https://coursera.org/verify/JD6SG4ESDJ28"
  },
  {
    "title": "Digital Signal Processing 1: Basic Concepts and Algorithms",
    "platform": "Coursera",
    "issuer": "École Polytechnique Fédérale de Lausanne",
    "kind": "Course",
    "completedOn": "September 14, 2020",
    "preview": "/certificates/coursera-NYP99P3PQWM2.pdf",
    "url": "https://coursera.org/verify/NYP99P3PQWM2"
  },
  {
    "title": "Differential Equations Part I Basic Theory",
    "platform": "Coursera",
    "issuer": "Korea Advanced Institute of Science and Technology (KAIST)",
    "kind": "Course",
    "completedOn": "March 1, 2021",
    "preview": "/certificates/coursera-PRNMZTRAR7GJ.pdf",
    "url": "https://coursera.org/verify/PRNMZTRAR7GJ"
  },
  {
    "title": "Number Theory and Cryptography",
    "platform": "Coursera",
    "issuer": "University of California San Diego",
    "kind": "Course",
    "completedOn": "October 18, 2020",
    "preview": "/certificates/coursera-V4X3EXZWEQLS.pdf",
    "url": "https://coursera.org/verify/V4X3EXZWEQLS"
  },
  {
    "title": "Introduction to Complex Analysis",
    "platform": "Coursera",
    "issuer": "Wesleyan University",
    "kind": "Course",
    "completedOn": "July 31, 2016",
    "preview": "/certificates/coursera-XBPDPKEN84KM.pdf",
    "url": "https://coursera.org/verify/XBPDPKEN84KM"
  },
  {
    "title": "Technical Support Fundamentals",
    "platform": "Coursera",
    "issuer": "Google",
    "kind": "Course",
    "completedOn": "March 2, 2020",
    "preview": "/certificates/coursera-Z37N8BGRUJ4J.pdf",
    "url": "https://coursera.org/verify/Z37N8BGRUJ4J"
  },
  {
    "title": "Differential Calculus through Data and Modeling",
    "platform": "Coursera",
    "issuer": "Johns Hopkins University",
    "kind": "Specialization",
    "courses": [
      "Calculus through Data & Modeling: Precalculus Review",
      "Calculus through Data & Modeling: Limits & Derivatives",
      "Calculus through Data & Modeling: Differentiation Rules",
      "Calculus through Data & Modeling: Applying Differentiation"
    ],
    "completedOn": "April 30, 2021",
    "url": "https://www.coursera.org/account/accomplishments/specialization/8G89JNJ4VQ79",
    "preview": "/certificates/differential-calculus-johns-hopkins.png"
  },
  {
    "title": "Single Variable Calculus",
    "platform": "Coursera",
    "issuer": "University of Pennsylvania",
    "kind": "Course"
  },
  {
    "title": "Calculus: Single Variable Part 3 - Integration",
    "platform": "Coursera",
    "issuer": "University of Pennsylvania",
    "kind": "Course"
  },
  {
    "title": "Calculus: Single Variable Part 4 - Applications",
    "platform": "Coursera",
    "issuer": "University of Pennsylvania",
    "kind": "Course"
  }
];
