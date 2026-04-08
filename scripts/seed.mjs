/**
 * Strapi Resume CMS - Seed Script
 *
 * Usage (Strapi must be running on http://localhost:1337):
 *   node scripts/seed.mjs <admin-email> <admin-password>
 *
 * Example:
 *   node scripts/seed.mjs admin@example.com MyPassword123!
 *
 * What this script does:
 *  1. Logs in with your admin credentials
 *  2. Sets public "find" permissions on all content types
 *  3. Seeds profile (about), contact, experiences, educations, skills, works
 */

const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';

const EMAIL    = process.argv[2];
const PASSWORD = process.argv[3];

if (!EMAIL || !PASSWORD) {
  console.error('Usage: node scripts/seed.mjs <admin-email> <admin-password>');
  process.exit(1);
}

// ─── Helpers ────────────────────────────────────────────────────────────────

function log(msg)  { console.log(`  ✓  ${msg}`); }
function warn(msg) { console.warn(`  ⚠  ${msg}`); }

async function adminFetch(path, options = {}) {
  const res = await fetch(`${STRAPI_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });
  const text = await res.text();
  let body;
  try { body = JSON.parse(text); } catch { body = text; }
  if (!res.ok) {
    throw new Error(`${options.method || 'GET'} ${path} → ${res.status}: ${JSON.stringify(body)}`);
  }
  return body;
}

// ─── Step 1: Admin Login ─────────────────────────────────────────────────────

console.log('\n🔐 Logging in to Strapi admin...');
const loginData = await adminFetch('/admin/login', {
  method: 'POST',
  body: JSON.stringify({ email: EMAIL, password: PASSWORD }),
});
const adminToken = loginData?.data?.token;
if (!adminToken) throw new Error('Login succeeded but no token returned');
log(`Authenticated as ${EMAIL}`);

const authHeaders = { Authorization: `Bearer ${adminToken}` };

// ─── Step 2: Set Public Permissions ─────────────────────────────────────────

console.log('\n🔓 Setting public read permissions...');

// Get "Public" role ID from users-permissions plugin
const rolesData = await adminFetch('/users-permissions/roles', { headers: authHeaders });
const publicRole = (rolesData?.roles || rolesData?.data || []).find(
  (r) => r.type === 'public' || r.name?.toLowerCase() === 'public',
);
if (!publicRole) {
  warn('Could not find Public role – skipping permission setup. Set permissions manually in Strapi admin panel.');
} else {
  const roleId = publicRole.id ?? publicRole.documentId;
  const contentTypes = ['about', 'contact', 'experience', 'education', 'skill', 'work'];
  const permissions = {};
  for (const ct of contentTypes) {
    const uid = `api::${ct}.${ct}`;
    permissions[uid] = { controllers: { [ct]: { find: { enabled: true }, findOne: { enabled: true } } } };
  }
  await adminFetch(`/users-permissions/roles/${roleId}`, {
    method: 'PUT',
    headers: authHeaders,
    body: JSON.stringify({ permissions }),
  });
  log('Public "find" permissions enabled for all content types');
}

// ─── Step 3: Helper – create via Content Manager ─────────────────────────────

async function createEntry(singularId, data) {
  return adminFetch(`/content-manager/collection-types/api::${singularId}.${singularId.split('::').pop()}`, {
    method: 'POST',
    headers: authHeaders,
    body: JSON.stringify(data),
  });
}

async function updateSingleType(singularId, data) {
  return adminFetch(`/content-manager/single-types/api::${singularId}.${singularId}`, {
    method: 'PUT',
    headers: authHeaders,
    body: JSON.stringify(data),
  });
}

// ─── Step 4: Seed About (Single Type) ────────────────────────────────────────

console.log('\n👤 Seeding About / Profile...');
try {
  await updateSingleType('about', {
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
  });
  log('About profile seeded');
} catch (err) {
  warn(`About seed failed: ${err.message}`);
}

// ─── Step 5: Seed Contact (Single Type) ──────────────────────────────────────

console.log('\n📞 Seeding Contact...');
try {
  await updateSingleType('contact', {
    email: 'aminkarmous2000@gmail.com',
    phone: '+974 33863134',
    github: 'https://github.com/Amine809',
    githubLabel: 'github.com/Amine809',
    linkedin: 'https://www.linkedin.com/in/mohamed-amine-karmous-887983203/',
    facebook: 'https://facebook.com',
    dribbble: 'https://dribbble.com',
    website: '',
  });
  log('Contact seeded');
} catch (err) {
  warn(`Contact seed failed: ${err.message}`);
}

// ─── Step 6: Seed Experiences ─────────────────────────────────────────────────

console.log('\n💼 Seeding Experiences...');

const experiences = [
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
];

for (const exp of experiences) {
  try {
    await createEntry('experience', exp);
    log(`Experience: ${exp.title} @ ${exp.company}`);
  } catch (err) {
    warn(`Experience "${exp.title}" failed: ${err.message}`);
  }
}

// ─── Step 7: Seed Education ───────────────────────────────────────────────────

console.log('\n🎓 Seeding Education...');

const educationItems = [
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
];

for (const edu of educationItems) {
  try {
    await createEntry('education', edu);
    log(`Education: ${edu.title}`);
  } catch (err) {
    warn(`Education "${edu.title}" failed: ${err.message}`);
  }
}

// ─── Step 8: Seed Skills ──────────────────────────────────────────────────────

console.log('\n🛠  Seeding Skills...');

const skills = [
  { order: 1,  name: 'Python',     icon: '/images/home/education-skill/figma-icon.svg',      rating: 5, category: 'AI' },
  { order: 2,  name: 'PyTorch',    icon: '/images/home/education-skill/photoshop-icon.svg',   rating: 5, category: 'AI' },
  { order: 3,  name: 'TensorFlow', icon: '/images/home/education-skill/sketch-icon.svg',      rating: 4, category: 'AI' },
  { order: 4,  name: 'LangChain',  icon: '/images/home/education-skill/adobe-icon.svg',       rating: 5, category: 'AI' },
  { order: 5,  name: 'FastAPI',    icon: '/images/home/education-skill/framer-icon.svg',      rating: 5, category: 'Backend' },
  { order: 6,  name: 'Kubernetes', icon: '/images/home/education-skill/invision-icon.svg',    rating: 4, category: 'DevOps' },
  { order: 7,  name: 'Docker',     icon: '/images/home/education-skill/figma-icon.svg',       rating: 5, category: 'DevOps' },
  { order: 8,  name: 'Azure',      icon: '/images/home/education-skill/photoshop-icon.svg',   rating: 4, category: 'Cloud' },
  { order: 9,  name: 'OpenAI API', icon: '/images/home/education-skill/sketch-icon.svg',      rating: 5, category: 'AI' },
  { order: 10, name: 'React',      icon: '/images/home/education-skill/adobe-icon.svg',       rating: 4, category: 'Frontend' },
  { order: 11, name: 'Next.js',    icon: '/images/home/education-skill/framer-icon.svg',      rating: 4, category: 'Frontend' },
  { order: 12, name: 'Spring Boot',icon: '/images/home/education-skill/invision-icon.svg',    rating: 4, category: 'Backend' },
];

for (const skill of skills) {
  try {
    await createEntry('skill', skill);
    log(`Skill: ${skill.name}`);
  } catch (err) {
    warn(`Skill "${skill.name}" failed: ${err.message}`);
  }
}

// ─── Step 9: Seed Works ───────────────────────────────────────────────────────

console.log('\n🖼  Seeding Works...');

const works = [
  { order: 1, title: 'Mug Sticker Designing',     client: 'John Honnai', slug: 'mug-sticker-designing',     link: '#' },
  { order: 2, title: 'Mobile App Design',          client: 'John Honnai', slug: 'mobile-app-design',          link: '#' },
  { order: 3, title: 'Fashion Website Template',   client: 'John Honnai', slug: 'fashion-website-template',   link: '#' },
  { order: 4, title: 'Book Cover Design',          client: 'John Honnai', slug: 'book-cover-design',          link: '#' },
  { order: 5, title: 'Mobile App Design II',       client: 'John Honnai', slug: 'mobile-app-design-2',        link: '#' },
  { order: 6, title: 'Mug Sticker Designing II',   client: 'John Honnai', slug: 'mug-sticker-designing-2',    link: '#' },
];

for (const work of works) {
  try {
    await createEntry('work', work);
    log(`Work: ${work.title}`);
  } catch (err) {
    warn(`Work "${work.title}" failed: ${err.message}`);
  }
}

console.log('\n✅ Seed completed!\n');
console.log('Next steps:');
console.log('  1. Open http://localhost:1337/admin and verify your content');
console.log('  2. Upload images for works and your profile in the Media Library');
console.log('  3. Set the NEXT_PUBLIC_STRAPI_URL=http://localhost:1337 in your Next.js .env.local');
console.log('  4. Start Next.js: cd ../Resume-Nextjs-1.0.0 && npm run dev\n');
