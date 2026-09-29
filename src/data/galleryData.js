import carpetBefore from '../assets/before-after/carpet-before.webp';
import carpetAfter from '../assets/before-after/carpet-after.webp';
import sofaBefore from '../assets/before-after/sofa-before.webp';
import sofaAfter from '../assets/before-after/sofa-after.webp';
import stairsBefore from '../assets/before-after/stairs-before.webp';
import stairsAfter from '../assets/before-after/stairs-after.webp';
import rugBefore from '../assets/before-after/rug-before.webp';
import rugAfter from '../assets/before-after/rug-after.webp';
import carBefore from '../assets/before-after/car-before.webp';
import carAfter from '../assets/before-after/car-after.webp';
import mattressBefore from '../assets/before-after/mattress-before.webp';
import mattressAfter from '../assets/before-after/mattress-after.webp';

import review1 from '../assets/screenshots/customer-review-01.webp';
import review2 from '../assets/screenshots/customer-review-02.webp';
import review3 from '../assets/screenshots/customer-review-03.webp';
import review4 from '../assets/screenshots/customer-review-04.webp';
import review5 from '../assets/screenshots/customer-review-05.webp';
import review6 from '../assets/screenshots/customer-review-06.webp';
import review7 from '../assets/screenshots/customer-review-07.webp';
import review8 from '../assets/screenshots/customer-review-08.webp';
import review9 from '../assets/screenshots/customer-review-09.webp';
import review10 from '../assets/screenshots/customer-review-10.webp';
import review11 from '../assets/screenshots/customer-review-11.webp';

export const beforeAfterGallery = [
  {
    id: 'carpet-clean',
    title: 'Living Room Deep Steam Carpet Revival',
    category: 'Carpets',
    location: 'Manchester, UK',
    description: 'Stubborn food, coffee, and high-traffic soiling completely removed using industrial hot-water extraction. Dry to touch in under 2 hours.',
    beforeImg: carpetBefore,
    afterImg: carpetAfter,
    tag: 'Carpet Cleaning',
    stats: '100% Stain Extraction • Neutral pH Rinse',
    altBefore: 'Heavily stained living room carpet before cleaning Manchester UK',
    altAfter: 'Spotless revitalised living room carpet after steam clean UK'
  },
  {
    id: 'sofa-revival',
    title: 'Fabric Sectional Sofa Stain & Grease Extraction',
    category: 'Sofas & Couches',
    location: 'Leeds, UK',
    description: 'Delicate fabric shampooing and dual-vacuum extraction eliminated ingrained dirt, grease, and pet odours without colour fading.',
    beforeImg: sofaBefore,
    afterImg: sofaAfter,
    tag: 'Sofa Cleaning',
    stats: 'Deep Fibre Conditioning • Odour Neutralised',
    altBefore: 'Soiled grey fabric couch with food and watermark stains UK',
    altAfter: 'Immaculately clean sofa after professional upholstery extraction'
  },
  {
    id: 'stairs-carpet',
    title: 'Staircase High-Traffic Mud & Soil Restoration',
    category: 'Stairs',
    location: 'Birmingham, UK',
    description: 'Heavy entryway and staircase wear restored to original pile fluffiness. Protected against rapid re-soiling with stain-guard shield.',
    beforeImg: stairsBefore,
    afterImg: stairsAfter,
    tag: 'Stair Cleaning',
    stats: 'Industrial High-Pressure • Pile Lifted',
    altBefore: 'Muddy tracked staircase runner carpet before professional cleaning UK',
    altAfter: 'Bright clean staircase carpet after professional steam cleaning UK'
  },
  {
    id: 'oriental-rug',
    title: 'Luxury Persian Area Rug Rejuvenation',
    category: 'Rugs',
    location: 'Liverpool, UK',
    description: 'Precision wool-safe temperature controlled rinse. Removed embedded grit, dust mites, and spills while preserving vivid natural dyes.',
    beforeImg: rugBefore,
    afterImg: rugAfter,
    tag: 'Rug Cleaning',
    stats: 'Wool-Safe Certified • Vibrant Colour Restored',
    altBefore: 'Dull dirty oriental area rug with spill stains before UK cleaning',
    altAfter: 'Vibrant clean Persian rug after professional wool-safe wash UK'
  },
  {
    id: 'car-interior',
    title: 'Vehicle Interior Fabric & Car Seat Shampoo',
    category: 'Car Seats',
    location: 'Sheffield, UK',
    description: 'Complete water extraction for vehicle seats, eliminating milk spills, road grime, salt, and stale interior smells.',
    beforeImg: carBefore,
    afterImg: carAfter,
    tag: 'Car Seat Cleaning',
    stats: 'Antibacterial Sanitised • Same-Day Quick Dry',
    altBefore: 'Car seat with watermarks and drink spill stains before car detailing',
    altAfter: 'Spotless extracted car interior seats after professional detailing'
  },
  {
    id: 'mattress-clean',
    title: 'Master Bedroom Mattress Sanitisation & Stain Removal',
    category: 'Mattresses',
    location: 'Chester, UK',
    description: 'High-temperature hygienic steam extraction eradicates 99.9% of dust mites, sweat residues, and allergens for healthy sleep.',
    beforeImg: mattressBefore,
    afterImg: mattressAfter,
    tag: 'Mattress Cleaning',
    stats: '99.9% Dust Mite Free • Anti-Allergen Shield',
    altBefore: 'Discoloured stained mattress surface before steam sanitisation',
    altAfter: 'Hygienic bright white mattress after professional sanitisation'
  }
];

const reviewScreenshotDimensions = [
  [713, 1479], [708, 1478], [706, 1477], [713, 1492], [708, 1491],
  [717, 1492], [720, 1497], [717, 1487], [713, 1488], [720, 1483],
  [720, 1481],
];

export const reviewScreenshots = [
  review1, review2, review3, review4, review5, review6,
  review7, review8, review9, review10, review11
].map((image, index) => {
  const [width, height] = reviewScreenshotDimensions[index];
  return {
    id: `customer-review-${index + 1}`,
    image,
    width,
    height,
    highlight: 'Customer WhatsApp conversation',
    alt: `WhatsApp conversation about a completed AW Professional Carpet Cleaning service, screenshot ${index + 1}`,
  };
});
