export type Project = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  type: string;
  year: string;
  description: string;
  github?: string;
  demo?: string;
  status: string;
  featured?: boolean;
  tags: string[];
  role: string;
  problem: string;
  architecture: string[];
  implementation: string[];
  results: string;
  limitations: string;
  media?: { type: 'model' | 'image'; src: string; alt: string };
};

export const projects: Project[] = [
  {
    slug: 'nexus-rover',
    number: '01',
    title: 'NEXUS exploration rover',
    shortTitle: 'NEXUS rover',
    type: 'Field robotics · autonomy',
    year: '2024—25',
    description: 'A modular rover platform for navigating uncertain terrain and turning sensor data into actionable spatial context.',
    github: 'https://github.com/AdyaaKhera',
    status: 'In development',
    featured: true,
    tags: ['ROS 2', 'Navigation', 'Embedded systems'],
    role: 'Systems integration, autonomy, and mechanical-electrical interface',
    problem: 'Design a small, repairable mobile platform that can carry perception and autonomy experiments without coupling the work to a single hardware revision.',
    architecture: ['Differential-drive chassis with serviceable electronics bay', 'ROS 2 nodes for sensing, state estimation, and command interfaces', 'Modular payload interface for cameras and future range sensing'],
    implementation: ['Separated hardware drivers from behavior logic to make bench testing possible', 'Defined a repeatable bring-up sequence for power, communication, and actuation', 'Documented interfaces as the rover evolved across mechanical revisions'],
    results: 'The public repository is the source of truth for verified implementation details and results.',
    limitations: 'Public performance metrics and field-test data will be added only after the relevant work is cleared for disclosure.',
    media: { type: 'model', src: '', alt: 'Interactive NEXUS rover model placeholder' }
  },
  {
    slug: 'cubesat-prototype',
    number: '02',
    title: '1U CubeSat prototype',
    shortTitle: '1U CubeSat',
    type: 'Space systems · embedded',
    year: '2024',
    description: 'A compact spacecraft prototype used to reason about power, communications, packaging, and subsystem boundaries.',
    github: 'https://github.com/AdyaaKhera',
    status: 'Prototype',
    featured: true,
    tags: ['Systems engineering', 'PCB design', 'Telemetry'],
    role: 'Subsystem design and integration',
    problem: 'Explore how strict volume, power, and interface constraints shape a small spacecraft architecture.',
    architecture: ['1U mechanical envelope with explicit board and harness interfaces', 'Power and telemetry treated as shared system contracts', 'Test points designed into the prototype instead of added after assembly'],
    implementation: ['Mapped subsystem dependencies before selecting implementation details', 'Used interface documentation to keep software and hardware work parallel', 'Kept unknowns visible rather than presenting unverified mission claims'],
    results: 'The prototype communicates a systems approach; verified electrical and mission results remain tied to the original project documentation.',
    limitations: 'This is a prototype, not a flight-qualified spacecraft. No flight heritage or mission performance is implied.',
    media: { type: 'model', src: '', alt: 'Interactive CubeSat model placeholder' }
  },
  {
    slug: 'neural-ik-arm',
    number: '03',
    title: 'Neural inverse-kinematics arm simulation',
    shortTitle: 'Neural IK arm',
    type: 'Robot learning · manipulation',
    year: '2024',
    description: 'A simulation study of learned inverse kinematics, with the classical geometry kept visible as a baseline and debugging tool.',
    github: 'https://github.com/AdyaaKhera',
    status: 'Simulation',
    featured: true,
    tags: ['Python', 'PyTorch', 'Simulation'],
    role: 'Modeling, training pipeline, and evaluation design',
    problem: 'Investigate whether a learned mapping can provide useful joint estimates while preserving interpretable failure modes.',
    architecture: ['Forward-kinematics generator for synthetic training pairs', 'Learned end-effector-to-joint mapping', 'Classical solver retained for comparison and diagnostics'],
    implementation: ['Separated data generation, training, and evaluation so each could be inspected independently', 'Tracked coordinate conventions explicitly across the pipeline', 'Focused evaluation on reproducible error reporting rather than a single headline number'],
    results: 'See the linked source repository for the current implementation and verified evaluation outputs.',
    limitations: 'Simulation results do not establish hardware performance. Workspace coverage, singularities, and transfer behavior require further study.',
    media: { type: 'model', src: '', alt: 'Interactive robotic arm model placeholder' }
  },
  {
    slug: 'warehouse-amr',
    number: '04',
    title: 'Warehouse autonomous mobile robot',
    shortTitle: 'Warehouse AMR',
    type: 'Mobile robotics · navigation',
    year: '2023—24',
    description: 'A warehouse-oriented mobile robot study centered on dependable motion, clear interfaces, and operational constraints.',
    github: 'https://github.com/AdyaaKhera',
    status: 'Prototype',
    tags: ['Mobile robotics', 'Planning', 'Controls'],
    role: 'Robot software and integration',
    problem: 'Connect perception, planning, and low-level motion into a system that behaves predictably in a structured environment.',
    architecture: ['Layered navigation stack with explicit command ownership', 'Safety limits between planner output and actuator commands', 'Simulation-first workflow for fast iteration'],
    implementation: ['Built testable boundaries between localization, planning, and control', 'Used scenario-based checks for stop, reroute, and goal completion behaviors', 'Documented assumptions about the operating environment'],
    results: 'The public project materials contain the verified implementation scope; no unverified throughput or accuracy claims are made here.',
    limitations: 'A warehouse prototype is not evidence of production reliability. Deployment would require site-specific validation and safety review.',
    media: { type: 'model', src: '', alt: 'Interactive warehouse mobile robot model placeholder' }
  },
  {
    slug: 'tactile-manipulation',
    number: '05',
    title: 'Tactile manipulation research',
    shortTitle: 'Tactile manipulation',
    type: 'Research · contact-rich manipulation',
    year: 'Ongoing',
    description: 'Research contributions through MARS Lab, presented at the level approved for public disclosure.',
    status: 'Disclosure-limited',
    tags: ['Tactile sensing', 'Robot learning', 'Research'],
    role: 'Research contributor',
    problem: 'Understand how contact information can improve manipulation decisions under uncertainty.',
    architecture: ['Details intentionally limited to approved public information', 'Research questions framed around sensing, representation, and control'],
    implementation: ['Contributed within the lab’s review and documentation process', 'Separates public technical context from unpublished methods and results'],
    results: 'Publication and result details will be added when approved for public release.',
    limitations: 'Unpublished work, internal data, and restricted implementation details are intentionally not included.'
  }
];

export const featuredProjects = projects.filter((project) => project.featured);
