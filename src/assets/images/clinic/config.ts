export interface ClinicImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  category: 'exterior' | 'interior' | 'equipment' | 'team';
  isPrimary?: boolean;
  index?: number; // For dummy image generation
}

// This is a dummy config that uses the DummyImage component
// Replace with actual images when available
export const clinicImages: ClinicImage[] = [
  // Exterior/Location Images
  {
    id: 'exterior-main',
    src: 'dummy:exterior-main', // Special format to indicate dummy image
    alt: 'Om Muktinath Building Exterior',
    title: 'Our Clinic Building',
    description: 'The main entrance of Om Muktinath clinic in Syangja',
    category: 'exterior',
    isPrimary: true,
    index: 1
  },
  {
    id: 'exterior-side',
    src: 'dummy:exterior-side',
    alt: 'Side View of Om Muktinath Clinic',
    title: 'Clinic Side View',
    description: 'View of our clinic from the main road',
    category: 'exterior',
    index: 2
  },
  {
    id: 'exterior-neighborhood',
    src: 'dummy:exterior-neighborhood',
    alt: 'Neighborhood View',
    title: 'Neighborhood View',
    description: 'Om Muktinath clinic in the context of the surrounding area',
    category: 'exterior',
    index: 3
  },
  
  // Interior Images
  {
    id: 'interior-reception',
    src: 'dummy:interior-reception',
    alt: 'Om Muktinath Reception Area',
    title: 'Reception Area',
    description: 'Our welcoming reception area where patients can check in',
    category: 'interior',
    isPrimary: true,
    index: 1
  },
  {
    id: 'interior-waiting',
    src: 'dummy:interior-waiting',
    alt: 'Waiting Room',
    title: 'Patient Waiting Area',
    description: 'Comfortable waiting area for patients and families',
    category: 'interior',
    index: 2
  },
  {
    id: 'interior-treatment',
    src: 'dummy:interior-treatment',
    alt: 'Treatment Room',
    title: 'Treatment Room',
    description: 'One of our modern treatment rooms where patients receive care',
    category: 'interior',
    index: 3
  },
  
  // Equipment Images
  {
    id: 'equipment-main',
    src: 'dummy:equipment-main',
    alt: 'Dental Chair and Equipment',
    title: 'Modern Dental Equipment',
    description: 'State-of-the-art dental chair and treatment equipment',
    category: 'equipment',
    isPrimary: true,
    index: 1
  },
  {
    id: 'equipment-xray',
    src: 'dummy:equipment-xray',
    alt: 'X-Ray Equipment',
    title: 'X-Ray System',
    description: 'Advanced digital X-ray system for accurate diagnostics',
    category: 'equipment',
    index: 2
  },
  {
    id: 'equipment-sterilization',
    src: 'dummy:equipment-sterilization',
    alt: 'Sterilization Equipment',
    title: 'Sterilization Equipment',
    description: 'Modern equipment ensuring the highest hygiene standards',
    category: 'equipment',
    index: 3
  },
  
  // Team Images
  {
    id: 'team-full',
    src: 'dummy:team-full',
    alt: 'Om Muktinath Team',
    title: 'Our Dedicated Team',
    description: 'Meet the professional team at Om Muktinath',
    category: 'team',
    isPrimary: true,
    index: 1
  },
  {
    id: 'team-doctors',
    src: 'dummy:team-doctors',
    alt: 'Our Doctors',
    title: 'Medical Professionals',
    description: 'Our experienced doctors providing excellent care',
    category: 'team',
    index: 2
  },
  {
    id: 'team-staff',
    src: 'dummy:team-staff',
    alt: 'Support Staff',
    title: 'Support Staff',
    description: 'Our friendly staff ensuring a smooth experience',
    category: 'team',
    index: 3
  }
];

// Function to get the primary location image
export function getLocationImage(): ClinicImage | undefined {
  return clinicImages.find(img => img.category === 'exterior' && img.isPrimary);
}

// Function to get images by category
export function getImagesByCategory(category: ClinicImage['category']): ClinicImage[] {
  return clinicImages.filter(img => img.category === category);
}

// Function to check if an image is a dummy
export function isDummyImage(image?: ClinicImage): boolean {
  return !!image && image.src.startsWith('dummy:');
}
