import carpetResultImg from '../assets/before-after/carpet-after.webp';
import rugResultImg from '../assets/before-after/rug-after.webp';
import sofaResultImg from '../assets/before-after/sofa-after.webp';
import mattressResultImg from '../assets/before-after/mattress-after.webp';
import stairsResultImg from '../assets/before-after/stairs-after.webp';
import carSeatResultImg from '../assets/before-after/car-after.webp';

export const servicesData = [
  {
    id: 'carpet-cleaning',
    title: 'Carpet Cleaning',
    category: 'Carpets & Flooring',
    badge: 'Most Popular',
    image: carpetResultImg,
    alt: 'Freshly steam-cleaned living-room carpet after professional hot-water extraction in Manchester',
    tagline: 'Deep steam extraction restoring fibre bounce and freshness.',
    description: 'Our industrial multi-stage hot water extraction lifts deep-seated dirt, dust mites, pet dander, and tough stains without soaking your underlay. Suitable for wool, nylon, polyester, and berber carpets.',
    features: [
      'Multi-stage pre-spray & stain treatment',
      'High-pressure steam vacuum extraction',
      'Rapid drying within 1.5 - 2.5 hours',
      'Neutralises odours & kills bacteria'
    ],
    popularFor: 'Living rooms, bedrooms, hallways & full home deep cleans'
  },
  {
    id: 'rug-cleaning',
    title: 'Rug Cleaning',
    category: 'Rugs & Runners',
    badge: 'Fibre Safe',
    image: rugResultImg,
    alt: 'Freshly cleaned Persian-style area rug after fibre-safe professional washing in Liverpool',
    tagline: 'Specialist care for oriental, wool, synthetic and Persian rugs.',
    description: 'We utilise pH-balanced cleaning solutions tailored to your rug’s specific dye and fibre construction, ensuring zero colour bleeding while thoroughly flushing out grit and embedded allergens.',
    features: [
      'Delicate fibre & colourfastness testing',
      'Deep dust & grit vibration extraction',
      'Specialist fringes & border grooming',
      'Safe on wool, silk, shaggy & vintage weaves'
    ],
    popularFor: 'Persian, Turkish, modern wool, and high-pile shaggy rugs'
  },
  {
    id: 'sofa-cleaning',
    title: 'Sofa Cleaning',
    category: 'Upholstery',
    badge: 'Customer Choice',
    image: sofaResultImg,
    alt: 'Grey fabric sofa after professional stain removal and upholstery steam cleaning in Leeds',
    tagline: 'Revitalise your fabric or velvet sofas to look brand new.',
    description: 'Over time, sofas accumulate body oils, grease, beverage spills, and crumbs. Our upholstery steam tooling penetrates deep into sofa cushions without saturating foam interiors.',
    features: [
      'Gentle agitation of delicate sofa fabrics',
      'Stubborn grease & beverage spot removal',
      'Sanitising antibacterial rinse',
      'Fabric protection spray option available'
    ],
    popularFor: 'Corner suites, L-shaped sectionals, 2 & 3-seater sofas'
  },
  {
    id: 'couch-cleaning',
    title: 'Couch Cleaning',
    category: 'Upholstery',
    badge: 'Pet Friendly',
    image: sofaResultImg,
    alt: 'Deep-cleaned family couch after upholstery extraction and odour removal in a UK home',
    tagline: 'Eliminate daily living marks, food spills, and pet scents.',
    description: 'Restore the beauty and hygiene of your family couches. We remove trapped pet hair, pet accidents, and everyday grime, leaving your couch feeling soft and smelling immaculate.',
    features: [
      'Pet enzyme odour neutraliser applied',
      'Non-toxic pet & child-safe formulas',
      'Cushion edge and crevice deep vacuuming',
      'Fast drying with turbo air movers'
    ],
    popularFor: 'Reclining couches, futons, fabric lounges'
  },
  {
    id: 'chair-armchair-cleaning',
    title: 'Chair & Armchair Cleaning',
    category: 'Chairs',
    badge: 'Detail Care',
    image: sofaResultImg,
    alt: 'Fresh upholstery finish showing the level of fabric detailing achieved on armchairs and dining chairs',
    tagline: 'Precision detailing for armchairs, recliners & dining chairs.',
    description: 'From velvet wingback chairs to upholstered dining seat sets, we carefully extract ground-in dirt, tea, wine, and food stains while preserving original upholstery texture.',
    features: [
      'Tailored hand-tool extraction',
      'Delicate fabric protection',
      'Set discounts for 4, 6 or 8 dining chairs',
      'Safe on chenille, linen, velvet & microfiber'
    ],
    popularFor: 'Armchairs, tub chairs, office chairs & dining sets'
  },
  {
    id: 'upholstery-cleaning',
    title: 'Upholstery Cleaning',
    category: 'Specialist Fabric',
    badge: 'Complete Home',
    image: sofaResultImg,
    alt: 'Real upholstery cleaning finish on fabric furniture after deep extraction in a UK home',
    tagline: 'Comprehensive fabric restoration across your entire home.',
    description: 'Breathe new life into footstools, ottomans, fabric headboards, and heavy drapery. Our eco-friendly solutions leave zero sticky residue, preventing premature re-soiling.',
    features: [
      'Zero residue anti-resoiling formula',
      'Eliminates allergen build-up and musty odours',
      'Protective Scotchgard sealant available',
      'Safe for homes with asthma or allergy sufferers'
    ],
    popularFor: 'Ottomans, footstools, fabric headboards, pelmets'
  },
  {
    id: 'mattress-cleaning',
    title: 'Mattress Cleaning',
    category: 'Sanitisation',
    badge: 'Hygienic Sleep',
    image: mattressResultImg,
    alt: 'Bright, sanitised mattress surface after high-temperature steam cleaning in Chester',
    tagline: 'Hospital-grade sanitisation removing 99.9% of dust mites.',
    description: 'We spend a third of our lives in bed. Our high-temperature steam extraction neutralises dust mites, sweat stains, dead skin cells, and bed bugs, ensuring pure hygienic sleep.',
    features: [
      'Medical-grade anti-allergen steam rinse',
      'Removes biological stains & yellow water rings',
      'Deodorising lavender/fresh linen mist',
      'Dry & sleep-ready the same evening'
    ],
    popularFor: 'Single, double, king & super king mattresses'
  },
  {
    id: 'stair-cleaning',
    title: 'Stair Cleaning',
    category: 'Carpets & Flooring',
    badge: 'High Impact',
    image: stairsResultImg,
    alt: 'Restored staircase carpet after high-traffic mud and soil extraction in Birmingham',
    tagline: 'Restore high-traffic stairs, landings, and hallway runners.',
    description: 'Stairs bear the brunt of household foot traffic, trapping grit at the base of the pile. Our specialised handheld stair extractors thoroughly scrub risers, treads, and bullnoses.',
    features: [
      'Precision step-by-step hand extraction',
      'Stubborn shoe polish & mud treatment',
      'Fibre conditioning restores pile bounce',
      'Complete landing and runner clean included'
    ],
    popularFor: 'Straight stairs, spiral staircases, landings & hallways'
  },
  {
    id: 'car-seat-cleaning',
    title: 'Car Seat Cleaning',
    category: 'Automotive',
    badge: 'Mobile Service',
    image: carSeatResultImg,
    alt: 'Fabric car seats after mobile wet-extraction cleaning on a UK driveway',
    tagline: 'Deep extraction shampoo for vehicle seats & boot carpets.',
    description: 'Spilled coffee on the commute? Kids dropped ice cream on the back seats? We perform deep mobile extraction on car seats, floor mats, and boot lining right outside your driveway.',
    features: [
      'Commercial wet-extraction for car seats',
      'Removes stubborn milk, drink & oil spills',
      'Antibacterial sanitisation eliminates car odors',
      'Front & rear seat bundle savings'
    ],
    popularFor: 'Family cars, SUVs, rideshare taxis, commercial vans'
  }
];
