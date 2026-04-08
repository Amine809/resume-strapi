import type { Core } from '@strapi/strapi';

const SEED_DATA = {
  about: {
    name: 'Mohamed Amine Karmous',
    jobTitle: 'AI & Software Engineer',
    heroTagline:
      'Passionate AI Engineer dedicated to building intelligent solutions that drive innovation. ' +
      'Specializing in machine learning, natural language processing, and full-stack AI development. ' +
      "Let's transform ideas into impactful applications.",
    bio:
      'AI & Software Engineer specializing in LLM, NLP and its Arabic applications, LLM fine-tuning, ' +
      'chatbots, Machine learning, deep learning and computer vision. Experienced with Python, ' +
      'PyTorch/TensorFlow, Hugging Face, FastAPI, LangChain/LangGraph, n8n, and cloud deployment ' +
      '(Azure/AWS/GCP). Skilled in building scalable AI models and APIs for real-world applications ' +
      'with expertise in MLOps, microservices architectures, and production-ready deployment.',
    yearsOfExperience: '03',
    happyClients: '165+',
    projectsCompleted: '1800+',
    languages: ['English', 'French', 'Arabic'],
  },

  contact: {
    email: 'aminkarmous2000@gmail.com',
    phone: '+974 33863134',
    github: 'https://github.com/Amine809',
    githubLabel: 'github.com/Amine809',
    linkedin: 'https://www.linkedin.com/in/mohamed-amine-karmous-887983203/',
    facebook: 'https://facebook.com',
    dribbble: 'https://dribbble.com',
    website: '',
  },

  experiences: [
    {
      order: 1,
      year: '11/2025 – Present',
      title: 'AI & Robotics Engineer',
      company: 'Capital Technology Solutions',
      type: 'Fulltime',
      description:
        'Built and deployed enterprise AI systems using LangChain, OpenAI, RAG, and Pinecone. ' +
        'Developed advanced autonomous intelligence for Promobot V3. ' +
        'Designed large-scale sales and footfall forecasting models for Qatar Museums. ' +
        'Built AI-driven automotive analytics platform for Al Manaï dealership.',
    },
    {
      order: 2,
      year: '01/2025 – 10/2025',
      title: 'Full-Stack Generative AI Engineer',
      company: 'TANIT AI',
      type: 'Fulltime',
      description:
        'Built medical fertility-assistant chatbot using React, Spring Boot, FastAPI, and OpenAI/Claude models. ' +
        'Designed medical entity extraction with SciSpaCy and spaCy. ' +
        'Developed LangGraph multi-agent flows and microservices with Azure DevOps CI/CD pipelines.',
    },
    {
      order: 3,
      year: '07/2024 – 12/2024',
      title: 'AI Full Stack Developer',
      company: 'Horizop Energy',
      type: 'Fulltime',
      description:
        'Built full-stack Angular + Spring Boot platform for EV license plate detection. ' +
        'Developed PyTorch-based segmentation model with 95% accuracy for Yolov8. ' +
        'Created ML regression model for EV consumption prediction with 91% accuracy. ' +
        'Added MLOps with MLflow and Kubernetes deployment.',
    },
    {
      order: 4,
      year: '03/2024 – 07/2024',
      title: 'AI and Computer Vision Developer',
      company: 'OMNILINK',
      type: 'Fulltime',
      description:
        'Built table detection and recognition system using YOLOv8 and PaddleOCR achieving 98% precision. ' +
        'Contributed to advanced OCR model evaluation and dataset annotation pipeline. ' +
        'Integrated MLOps workflow using Kubeflow and MLflow.',
    },
    {
      order: 5,
      year: '06/2023 – 09/2023',
      title: 'Mobile and AI Application Developer',
      company: 'LAB-IT',
      type: 'Fulltime',
      description:
        'Built complete delivery app with Flutter + Firebase. ' +
        'Designed hybrid recommendation system using TF-IDF, collaborative filtering, Word2Vec/FastText embeddings.',
    },
  ],

  educations: [
    {
      order: 1,
      title: 'Artificial Intelligence Engineering Degree - 2025',
      description: 'Specialized in AI, Machine Learning, and Deep Learning from Epi Digital School',
    },
    {
      order: 2,
      title: "Bachelor's Degree in Computer Science - 2022",
      description:
        'Graduated from Isitcom with focus on software development and computer science fundamentals',
    },
  ],

  skills: [
    { order: 1,  name: 'Python',      icon: '/images/home/education-skill/figma-icon.svg',     rating: 5, category: 'AI' },
    { order: 2,  name: 'PyTorch',     icon: '/images/home/education-skill/photoshop-icon.svg',  rating: 5, category: 'AI' },
    { order: 3,  name: 'TensorFlow',  icon: '/images/home/education-skill/sketch-icon.svg',     rating: 4, category: 'AI' },
    { order: 4,  name: 'LangChain',   icon: '/images/home/education-skill/adobe-icon.svg',      rating: 5, category: 'AI' },
    { order: 5,  name: 'FastAPI',     icon: '/images/home/education-skill/framer-icon.svg',     rating: 5, category: 'Backend' },
    { order: 6,  name: 'Kubernetes',  icon: '/images/home/education-skill/invision-icon.svg',   rating: 4, category: 'DevOps' },
    { order: 7,  name: 'Docker',      icon: '/images/home/education-skill/figma-icon.svg',      rating: 5, category: 'DevOps' },
    { order: 8,  name: 'Azure',       icon: '/images/home/education-skill/photoshop-icon.svg',  rating: 4, category: 'Cloud' },
    { order: 9,  name: 'OpenAI API',  icon: '/images/home/education-skill/sketch-icon.svg',     rating: 5, category: 'AI' },
    { order: 10, name: 'React',       icon: '/images/home/education-skill/adobe-icon.svg',      rating: 4, category: 'Frontend' },
    { order: 11, name: 'Next.js',     icon: '/images/home/education-skill/framer-icon.svg',     rating: 4, category: 'Frontend' },
    { order: 12, name: 'Spring Boot', icon: '/images/home/education-skill/invision-icon.svg',   rating: 4, category: 'Backend' },
  ],

  works: [
    { order: 1, title: 'Mug Sticker Designing',     client: 'John Honnai', slug: 'mug-sticker-designing',     link: '#', videoUrl: '' },
    { order: 2, title: 'Mobile App Design',          client: 'John Honnai', slug: 'mobile-app-design',          link: '#', videoUrl: '' },
    { order: 3, title: 'Fashion Website Template',   client: 'John Honnai', slug: 'fashion-website-template',   link: '#', videoUrl: '' },
    { order: 4, title: 'Book Cover Design',          client: 'John Honnai', slug: 'book-cover-design',          link: '#', videoUrl: '' },
    { order: 5, title: 'Mobile App Design II',       client: 'John Honnai', slug: 'mobile-app-design-2',        link: '#', videoUrl: '' },
    { order: 6, title: 'Mug Sticker Designing II',   client: 'John Honnai', slug: 'mug-sticker-designing-2',    link: '#', videoUrl: '' },
  ],
};

export default {
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    await seedData(strapi);
  },
};

async function seedData(strapi: Core.Strapi) {
  const log = (msg: string) => strapi.log.info(`[seed] ${msg}`);
  const docs = (uid: string) => strapi.documents(uid as any);

  // ── About (single type) ──────────────────────────────────────────────────
  try {
    const existing = await docs('api::about.about').findFirst({});
    if (!existing) {
      await docs('api::about.about').create({ data: SEED_DATA.about as any });
      log('About seeded');
    } else {
      log('About already exists – skipping');
    }
  } catch (e: any) {
    strapi.log.warn(`[seed] About failed: ${e.message}`);
  }

  // ── Contact (single type) ────────────────────────────────────────────────
  try {
    const existing = await docs('api::contact.contact').findFirst({});
    if (!existing) {
      await docs('api::contact.contact').create({ data: SEED_DATA.contact as any });
      log('Contact seeded');
    } else {
      log('Contact already exists – skipping');
    }
  } catch (e: any) {
    strapi.log.warn(`[seed] Contact failed: ${e.message}`);
  }

  // ── Experiences ──────────────────────────────────────────────────────────
  try {
    const count = await docs('api::experience.experience').count({});
    if (count === 0) {
      for (const exp of SEED_DATA.experiences) {
        await docs('api::experience.experience').create({ data: exp as any });
      }
      log(`${SEED_DATA.experiences.length} experiences seeded`);
    } else {
      log('Experiences already exist – skipping');
    }
  } catch (e: any) {
    strapi.log.warn(`[seed] Experiences failed: ${e.message}`);
  }

  // ── Educations ───────────────────────────────────────────────────────────
  try {
    const count = await docs('api::education.education').count({});
    if (count === 0) {
      for (const edu of SEED_DATA.educations) {
        await docs('api::education.education').create({ data: edu as any });
      }
      log(`${SEED_DATA.educations.length} educations seeded`);
    } else {
      log('Educations already exist – skipping');
    }
  } catch (e: any) {
    strapi.log.warn(`[seed] Educations failed: ${e.message}`);
  }

  // ── Skills ───────────────────────────────────────────────────────────────
  try {
    const count = await docs('api::skill.skill').count({});
    if (count === 0) {
      for (const skill of SEED_DATA.skills) {
        await docs('api::skill.skill').create({ data: skill as any });
      }
      log(`${SEED_DATA.skills.length} skills seeded`);
    } else {
      log('Skills already exist – skipping');
    }
  } catch (e: any) {
    strapi.log.warn(`[seed] Skills failed: ${e.message}`);
  }

  // ── Works ─────────────────────────────────────────────────────────────────
  try {
    const count = await docs('api::work.work').count({});
    if (count === 0) {
      for (const work of SEED_DATA.works) {
        await docs('api::work.work').create({ data: work as any });
      }
      log(`${SEED_DATA.works.length} works seeded`);
    } else {
      log('Works already exist – skipping');
    }
  } catch (e: any) {
    strapi.log.warn(`[seed] Works failed: ${e.message}`);
  }
}

