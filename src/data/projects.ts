export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  type: string;
  description: string;
  status: string;
  tags: string[];
  role: string;
  problem: string;
  architecture: string[];
  implementation: string[];
  results: string;
  limitations: string;
  displayGif: string;
  gallery: string[];
  github?: string;
  featured?: boolean;
  media?: { type: 'model' | 'image'; src: string; alt: string };
};

const placeholder = (title: string) => ({
  role: `Design, prototyping, and integration for the ${title} project.`,
  problem: `A placeholder project brief describing the design challenge behind ${title}.`,
  architecture: ['Modular hardware and software interfaces', 'Iterative testing and integration workflow', 'Documented decisions for future revisions'],
  implementation: ['Built and tested the core system in small, repeatable steps', 'Focused on reliable interfaces between subsystems', 'Captured lessons from each prototype iteration'],
  results: 'Dummy project details for now. More technical results will be added as the project documentation is finalized.',
  limitations: 'This is placeholder copy and does not represent a final performance claim.',
});

export const projects: Project[] = [
  {
    slug: 'fls-gpt-sol-61',
    title: 'FLS using GPT Sol 6.1',
    shortTitle: 'FLS using GPT Sol 6.1',
    type: 'Robot manipulation',
    description: 'A robot manipulation experiment using GPT Sol 6.1 to explore structured task execution.',
    status: 'Experiment',
    tags: ['GPT Sol 6.1', 'Manipulation', 'Robot learning'],
    displayGif: '/media/peg_transfer_gpt.gif',
    gallery: ['/media/peg_transfer_gpt.gif'],
    ...placeholder('FLS using GPT Sol 6.1'),
  },
  {
    slug: 'painting-gpt-sol-61',
    title: 'Painting using GPT Sol 6.1',
    shortTitle: 'Painting using GPT Sol 6.1',
    type: 'Generative robotics',
    description: 'An experiment in turning language and visual ideas into a physical painting workflow.',
    status: 'Experiment',
    tags: ['GPT Sol 6.1', 'Creative tools', 'Fabrication'],
    displayGif: '/media/world_map_gpt.gif',
    gallery: ['/media/world_map_gpt.gif'],
    ...placeholder('painting using GPT Sol 6.1'),
  },
  {
    slug: 'cv-system',
    title: 'Computer vision system',
    shortTitle: 'Computer vision',
    type: 'Robot perception',
    description: 'A computer vision system built from scratch for recognizing and understanding visual information.',
    status: 'Prototype',
    tags: ['Computer vision', 'Python', 'Perception'],
    displayGif: '/media/projects/cv-system/cv-system-display.gif',
    gallery: [
      '/media/projects/cv-system/WhatsApp Image 2026-10-11 at 15.10.03.jpeg',
      '/media/projects/cv-system/WhatsApp Image 2026-10-11 at 15.10.03 (1).jpeg',
      '/media/projects/cv-system/WhatsApp Image 2026-10-11 at 15.10.03 (2).jpeg',
    ],
    ...placeholder('computer vision system'),
  },
  {
    slug: 'nexus-rover',
    title: 'NEXUS exploration rover',
    shortTitle: 'NEXUS rover',
    type: 'Space robotics',
    description: 'A modular rover concept exploring autonomy, sensing, and mobility for challenging environments.',
    status: 'In development',
    tags: ['ROS 2', 'Autonomy', 'Embedded systems'],
    displayGif: '/media/projects/nexus/nexus-display.gif',
    gallery: ['/media/projects/nexus/WhatsApp Image 2026-10-11 at 15.00.02.jpeg', '/media/projects/nexus/nexus-gallery-2.gif'],
    github: 'https://github.com/AdyaaKhera',
    featured: true,
    ...placeholder('NEXUS exploration rover'),
  },
  {
    slug: 'project-vulcan',
    title: 'Project Vulcan',
    shortTitle: 'Project Vulcan',
    type: 'Space robotics',
    description: 'A project exploring a rugged robotic system through rapid prototyping and mechanical experimentation.',
    status: 'Prototype',
    tags: ['Robotics', 'Mechanical design', 'Prototyping'],
    displayGif: '/media/projects/project-vulcan/project-vulcan-display.gif',
    gallery: [
      '/media/projects/project-vulcan/WhatsApp Image 2026-10-11 at 14.48.15.jpeg',
      '/media/projects/project-vulcan/WhatsApp Image 2026-10-11 at 14.48.15 (1).jpeg',
      '/media/projects/project-vulcan/WhatsApp Image 2026-10-11 at 14.48.26.jpeg',
      '/media/projects/project-vulcan/WhatsApp Image 2026-10-11 at 14.50.44.jpeg',
    ],
    ...placeholder('Project Vulcan'),
  },
  {
    slug: 'l1-rocket',
    title: 'L1 rocket',
    shortTitle: 'L1 rocket',
    type: 'Space robotics',
    description: 'A rocket project exploring hands-on aerospace design, testing, and launch preparation.',
    status: 'In progress',
    tags: ['Aerospace', 'Fabrication', 'Testing'],
    displayGif: '/media/projects/l1-rocket/l1-rocket-display.gif',
    gallery: [
      '/media/projects/l1-rocket/WhatsApp Image 2026-10-11 at 14.49.35.jpeg',
      '/media/projects/l1-rocket/WhatsApp Image 2026-10-11 at 14.49.45.jpeg',
      '/media/projects/l1-rocket/l1-rocket-gallery-3.gif',
    ],
    ...placeholder('L1 rocket'),
  },
  {
    slug: 'cubesat-prototype',
    title: '1U CubeSat prototype',
    shortTitle: '1U CubeSat',
    type: 'Space robotics',
    description: 'A compact spacecraft prototype for thinking through power, packaging, communications, and subsystem boundaries.',
    status: 'Prototype',
    tags: ['Systems engineering', 'Space systems', 'Telemetry'],
    displayGif: '/media/projects/cubesat/cubesat-display.gif',
    gallery: ['/media/projects/cubesat/WhatsApp Image 2026-10-11 at 15.03.25.jpeg'],
    featured: true,
    ...placeholder('1U CubeSat prototype'),
  },
  {
    slug: 'warehouse-amr',
    title: 'Warehouse autonomous mobile robot',
    shortTitle: 'Warehouse AMR',
    type: 'Unmanned Ground Vehicle',
    description: 'A warehouse-oriented mobile robot study centered on dependable motion and clear autonomy interfaces.',
    status: 'Prototype',
    tags: ['Mobile robotics', 'Navigation', 'Controls'],
    displayGif: '/media/projects/warehouseAMR/warehouse-amr-display.gif',
    gallery: ['/media/projects/warehouseAMR/warehouse-amr-gallery.gif'],
    ...placeholder('warehouse autonomous mobile robot'),
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
