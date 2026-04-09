export const works: Work[] = [
  {
  slug: 'edustream',
  title: 'EduStream',
  category: 'Ed-Tech / LMS',
  subtext: 'A smart LMS for teachers and students.',
  color: '#7C6D5E',
  coverColor: '#2A3132',
  year: '2024',
  tags: ['React', 'Node.js', 'Express.js', 'Firebase'],
  problem: 'Teachers lacked a unified space to create and manage courses. Students had no centralized way to track progress across subjects.',
  approach: 'Built a role-based system — teachers get a course studio with drag-and-drop modules, students get a personalized dashboard with real-time Firebase sync.',
  results: ['500+ active learners onboarded', 'Course creation time cut by 60%', '4.8 / 5 avg student satisfaction', 'Live demo & full GitHub repo'],
},

 {
  slug: 'edustream',
  title: 'EduStream',
  category: 'Ed-Tech / LMS',
  subtext: 'A smart LMS for teachers and students.',
  color: '#7C6D5E',
  coverColor: '#2A3132',
  year: '2024',
  tags: ['React', 'Node.js', 'Express.js', 'Firebase'],
  problem: 'Teachers lacked a unified space to create and manage courses. Students had no centralized way to track progress across subjects.',
  approach: 'Built a role-based system — teachers get a course studio with drag-and-drop modules, students get a personalized dashboard with real-time Firebase sync.',
  results: ['500+ active learners onboarded', 'Course creation time cut by 60%', '4.8 / 5 avg student satisfaction', 'Live demo & full GitHub repo'],
},
  
  
];

export function getWorkBySlug(slug: string) {
  return works.find((work) => work.slug === slug);
}