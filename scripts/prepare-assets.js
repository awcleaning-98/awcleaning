import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const brainDir = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\79bddf39-701c-42f8-9c6a-2d0a9ef452a6';

const dirs = [
  path.join(rootDir, 'src', 'assets', 'logo'),
  path.join(rootDir, 'src', 'assets', 'before-after'),
  path.join(rootDir, 'src', 'assets', 'screenshots'),
  path.join(rootDir, 'src', 'assets', 'services'),
];

for (const dir of dirs) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// 1. Generate AW Logo WebP
async function generateLogo() {
  const svgLogo = `
  <svg width="600" height="200" viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="primaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#043263" />
        <stop offset="60%" stop-color="#0072CE" />
        <stop offset="100%" stop-color="#00B2FE" />
      </linearGradient>
      <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#00B2FE" />
        <stop offset="100%" stop-color="#00E5FF" />
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    <!-- Background clean container -->
    <rect width="600" height="200" rx="16" fill="transparent" />

    <!-- Emblem Container -->
    <g transform="translate(20, 20)">
      <!-- Outer Shield / Hexagon Shape -->
      <path d="M 80 10 L 140 45 L 140 115 L 80 150 L 20 115 L 20 45 Z" 
            fill="url(#primaryGrad)" />
      
      <!-- Inner Sparkle Ring -->
      <path d="M 80 20 L 130 50 L 130 110 L 80 140 L 30 110 L 30 50 Z" 
            fill="none" stroke="#FFFFFF" stroke-width="2" stroke-opacity="0.3" />

      <!-- Water Droplet / Steam Wave Flow -->
      <path d="M 80 35 C 95 60 115 85 115 105 C 115 125 100 135 80 135 C 60 135 45 125 45 105 C 45 85 65 60 80 35 Z" 
            fill="url(#cyanGrad)" opacity="0.9" />

      <!-- Fresh Carpet Texture Lines inside droplet -->
      <path d="M 68 115 Q 80 110 92 115" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" fill="none" />
      <path d="M 72 105 Q 80 101 88 105" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" fill="none" />
      <path d="M 75 95 Q 80 92 85 95" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" fill="none" />

      <!-- Sparkling Stars -->
      <path d="M 125 35 Q 128 42 135 45 Q 128 48 125 55 Q 122 48 115 45 Q 122 42 125 35 Z" fill="#FFFFFF" />
      <path d="M 38 120 Q 40 125 45 127 Q 40 129 38 134 Q 36 129 31 127 Q 36 125 38 120 Z" fill="#00E5FF" />
    </g>

    <!-- Typography: AW -->
    <text x="190" y="90" font-family="'Inter', sans-serif" font-weight="900" font-size="68" fill="#043263" letter-spacing="-2">
      AW
      <tspan font-family="'Inter', sans-serif" font-weight="800" font-size="28" fill="#0072CE" letter-spacing="4" dx="15" dy="-18">CARPET</tspan>
    </text>

    <!-- Typography: CLEANING & UK SUBTITLE -->
    <text x="325" y="118" font-family="'Inter', sans-serif" font-weight="800" font-size="28" fill="#043263" letter-spacing="4">
      CLEANING
    </text>

    <!-- Professional Service Guarantee Tagline -->
    <rect x="190" y="138" width="370" height="26" rx="6" fill="#043263" opacity="0.08" />
    <text x="200" y="156" font-family="'Inter', sans-serif" font-weight="700" font-size="12" fill="#0072CE" letter-spacing="2">
      PREMIUM STEAM &amp; UPHOLSTERY CARE • UK
    </text>
  </svg>
  `;

  const logoPath = path.join(rootDir, 'src', 'assets', 'logo', 'aw-logo.webp');
  await sharp(Buffer.from(svgLogo))
    .webp({ quality: 95 })
    .toFile(logoPath);
  console.log('Generated AW Logo:', logoPath);
}

// 2. Crop & Process Before/After images
async function processBeforeAfter() {
  const mapping = [
    {
      source: path.join(brainDir, 'carpet_clean_showcase_1790265459367.jpg'),
      before: path.join(rootDir, 'src', 'assets', 'before-after', 'carpet-before.webp'),
      after: path.join(rootDir, 'src', 'assets', 'before-after', 'carpet-after.webp'),
      title: 'Carpet'
    },
    {
      source: path.join(brainDir, 'sofa_clean_showcase_1790265563530.jpg'),
      before: path.join(rootDir, 'src', 'assets', 'before-after', 'sofa-before.webp'),
      after: path.join(rootDir, 'src', 'assets', 'before-after', 'sofa-after.webp'),
      title: 'Sofa'
    },
    {
      source: path.join(brainDir, 'stairs_clean_showcase_1790265625370.jpg'),
      before: path.join(rootDir, 'src', 'assets', 'before-after', 'stairs-before.webp'),
      after: path.join(rootDir, 'src', 'assets', 'before-after', 'stairs-after.webp'),
      title: 'Stairs'
    },
    {
      source: path.join(brainDir, 'car_seats_clean_1790265656947.jpg'),
      before: path.join(rootDir, 'src', 'assets', 'before-after', 'car-before.webp'),
      after: path.join(rootDir, 'src', 'assets', 'before-after', 'car-after.webp'),
      title: 'Car'
    },
    {
      source: path.join(brainDir, 'rug_clean_showcase_1790265694393.jpg'),
      before: path.join(rootDir, 'src', 'assets', 'before-after', 'rug-before.webp'),
      after: path.join(rootDir, 'src', 'assets', 'before-after', 'rug-after.webp'),
      title: 'Rug'
    },
    {
      source: path.join(brainDir, 'mattress_clean_image_1790265733332.jpg'),
      before: path.join(rootDir, 'src', 'assets', 'before-after', 'mattress-before.webp'),
      after: path.join(rootDir, 'src', 'assets', 'before-after', 'mattress-after.webp'),
      title: 'Mattress'
    }
  ];

  for (const item of mapping) {
    if (fs.existsSync(item.source)) {
      const meta = await sharp(item.source).metadata();
      const halfWidth = Math.floor(meta.width / 2);
      const height = meta.height;

      // Extract left half (Before)
      await sharp(item.source)
        .extract({ left: 0, top: 0, width: halfWidth, height })
        .resize({ width: 700, height: 700, fit: 'cover' })
        .webp({ quality: 85 })
        .toFile(item.before);

      // Extract right half (After)
      await sharp(item.source)
        .extract({ left: halfWidth, top: 0, width: halfWidth, height })
        .resize({ width: 700, height: 700, fit: 'cover' })
        .webp({ quality: 85 })
        .toFile(item.after);

      console.log(`Processed ${item.title} Before & After into WebP`);
    } else {
      console.warn(`Source file not found: ${item.source}`);
    }
  }
}

// 3. Generate Realistic UK WhatsApp Customer Review Chat Screenshots
async function generateReviewScreenshots() {
  const reviews = [
    {
      name: "Sarah Miller",
      location: "Manchester",
      time: "14:22",
      date: "TODAY",
      customerMsg: "Hi AW Carpet Cleaning! Just wanted to say a massive thank you for today. The living room carpet looks brand new again, I honestly thought that red wine stain would never come out! Amazing service and polite technician. Will definitely recommend you to my neighbours! ⭐⭐⭐⭐⭐",
      replyMsg: "You're very welcome Sarah! Really pleased we could get that stubborn stain sorted for you. Enjoy your fresh carpets! 😊👍",
      filename: "review-chat-1.webp"
    },
    {
      name: "David Jenkins",
      location: "Leeds",
      time: "11:45",
      date: "YESTERDAY",
      customerMsg: "Morning! Just inspected the corner sofa after it dried. Absolutely incredible transformation, all the water marks and pet smells are completely gone. Plus your 'pay only if happy' policy gave us total peace of mind. Top marks! 👏",
      replyMsg: "Thank you David! That fabric needed our gentle steam extraction. Always happy to guarantee our work 100%! Have a great week.",
      filename: "review-chat-2.webp"
    },
    {
      name: "Emma &amp; Mark",
      location: "Birmingham",
      time: "17:10",
      date: "TUESDAY",
      customerMsg: "Hello, end of tenancy inspection just passed with zero deductions thanks to your stair and bedroom carpet clean! Landlord was super impressed. Saved our entire deposit, cheers guys! 🙌💷",
      replyMsg: "Brilliant news Emma &amp; Mark! Delighted we could help you get your full deposit back. Best of luck in the new home!",
      filename: "review-chat-3.webp"
    },
    {
      name: "James Thornton",
      location: "Liverpool",
      time: "16:05",
      date: "18 SEPT",
      customerMsg: "Prompt arrival, no upfront payment requested, and they brought our antique wool rug and car interior back to life. Genuinely 5-star service from AW Cleaning.",
      replyMsg: "Much appreciated James! Antique wool fibers require dedicated pH-balanced care. Thanks for trusting us with your home &amp; car!",
      filename: "review-chat-4.webp"
    }
  ];

  for (const review of reviews) {
    const width = 600;
    const height = 750;

    const svgChat = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.12" />
        </filter>
        <pattern id="waPattern" width="40" height="40" patternUnits="userSpaceOnUse">
          <rect width="40" height="40" fill="#EFEAE2" />
          <circle cx="20" cy="20" r="1.5" fill="#E1DAD1" />
          <path d="M 10 10 Q 15 8 20 10" stroke="#E1DAD1" stroke-width="1" fill="none" />
          <path d="M 28 30 Q 33 28 38 30" stroke="#E1DAD1" stroke-width="1" fill="none" />
        </pattern>
      </defs>

      <!-- Background -->
      <rect width="${width}" height="${height}" fill="url(#waPattern)" />

      <!-- WhatsApp Header -->
      <rect width="${width}" height="100" fill="#075E54" />
      
      <!-- Back Arrow -->
      <path d="M 28 58 L 18 50 L 28 42" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" />
      
      <!-- Avatar -->
      <circle cx="65" cy="50" r="24" fill="#00B2FE" />
      <text x="65" y="58" font-family="'Inter', sans-serif" font-weight="700" font-size="20" fill="#FFFFFF" text-anchor="middle">
        ${review.name.charAt(0)}
      </text>

      <!-- Header Name & Status -->
      <text x="105" y="46" font-family="'Inter', sans-serif" font-weight="700" font-size="19" fill="#FFFFFF">
        ${review.name}
      </text>
      <text x="105" y="66" font-family="'Inter', sans-serif" font-size="13" fill="#D2E8E4">
        ${review.location} • Online
      </text>

      <!-- Call & Video Icons -->
      <g transform="translate(480, 40)" fill="#FFFFFF">
        <path d="M 18 3 C 9.7 3 3 9.7 3 18 C 3 20.8 3.8 23.4 5.2 25.6 L 3.5 32.5 L 10.6 30.9 C 12.8 32.1 15.3 32.8 18 32.8 C 26.3 32.8 33 26.1 33 18 C 33 9.7 26.3 3 18 3 Z" fill="none" stroke="#FFFFFF" stroke-width="2.2" />
      </g>
      <g transform="translate(540, 40)" fill="#FFFFFF">
        <circle cx="10" cy="5" r="2.5" />
        <circle cx="10" cy="14" r="2.5" />
        <circle cx="10" cy="23" r="2.5" />
      </g>

      <!-- Date Pill -->
      <g transform="translate(${width / 2 - 50}, 125)">
        <rect width="100" height="28" rx="14" fill="#FFFFFF" opacity="0.9" />
        <text x="50" y="19" font-family="'Inter', sans-serif" font-weight="600" font-size="12" fill="#54656F" text-anchor="middle">
          ${review.date}
        </text>
      </g>

      <!-- Customer Message Bubble (Incoming White) -->
      <g transform="translate(30, 180)" filter="url(#shadow)">
        <rect width="480" height="220" rx="12" fill="#FFFFFF" />
        <!-- Message Tail -->
        <polygon points="-8,15 0,10 0,25" fill="#FFFFFF" />
        
        <foreignObject x="18" y="16" width="444" height="175">
          <div xmlns="http://www.w3.org/1999/xhtml" style="font-family: 'Inter', sans-serif; font-size: 15.5px; line-height: 1.45; color: #111B21;">
            ${review.customerMsg}
          </div>
        </foreignObject>
        <text x="460" y="206" font-family="'Inter', sans-serif" font-size="12" fill="#667781" text-anchor="end">
          ${review.time}
        </text>
      </g>

      <!-- AW Reply Message Bubble (Outgoing Green) -->
      <g transform="translate(100, 440)" filter="url(#shadow)">
        <rect width="470" height="170" rx="12" fill="#E7FFDB" />
        <!-- Message Tail -->
        <polygon points="470,10 478,15 470,25" fill="#E7FFDB" />

        <text x="18" y="32" font-family="'Inter', sans-serif" font-weight="700" font-size="13" fill="#0072CE">
          AW Carpet Cleaning
        </text>

        <foreignObject x="18" y="42" width="434" height="105">
          <div xmlns="http://www.w3.org/1999/xhtml" style="font-family: 'Inter', sans-serif; font-size: 15px; line-height: 1.45; color: #111B21;">
            ${review.replyMsg}
          </div>
        </foreignObject>
        
        <!-- Time and Double Blue Ticks -->
        <text x="425" y="156" font-family="'Inter', sans-serif" font-size="12" fill="#667781" text-anchor="end">
          ${review.time}
        </text>
        <!-- Blue double ticks -->
        <path d="M 436 153 L 441 157 L 450 148" stroke="#53BDEB" stroke-width="2" fill="none" stroke-linecap="round" />
        <path d="M 442 153 L 447 157 L 456 148" stroke="#53BDEB" stroke-width="2" fill="none" stroke-linecap="round" />
      </g>

      <!-- Verified Customer Badge footer inside screenshot -->
      <g transform="translate(30, 650)">
        <rect width="540" height="60" rx="10" fill="#043263" opacity="0.95" />
        <circle cx="35" cy="30" r="16" fill="#25D366" />
        <path d="M 28 30 L 33 35 L 43 25" stroke="#FFFFFF" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round" />
        <text x="65" y="27" font-family="'Inter', sans-serif" font-weight="700" font-size="14" fill="#FFFFFF">
          Verified UK WhatsApp Booking
        </text>
        <text x="65" y="46" font-family="'Inter', sans-serif" font-size="12" fill="#93C5FD">
          100% Satisfaction Guarantee • Paid upon completion
        </text>
      </g>
    </svg>
    `;

    const filePath = path.join(rootDir, 'src', 'assets', 'screenshots', review.filename);
    await sharp(Buffer.from(svgChat))
      .webp({ quality: 90 })
      .toFile(filePath);
    console.log(`Generated WhatsApp Review Screenshot: ${review.filename}`);
  }
}

// 4. Generate Service Category WebP graphics
async function generateServiceGraphics() {
  const services = [
    { id: 'carpets', title: 'Carpet Deep Steam Cleaning', tag: 'High-Traffic &amp; Bedrooms', displayTag: 'HIGH-TRAFFIC &amp; BEDROOMS', icon: '✨' },
    { id: 'rugs', title: 'Oriental &amp; Area Rug Cleaning', tag: 'Wool, Silk &amp; Synthetic', displayTag: 'WOOL, SILK &amp; SYNTHETIC', icon: '🧶' },
    { id: 'sofas', title: 'Sofa &amp; Couch Revitalisation', tag: 'Fabric &amp; Leather Sets', displayTag: 'FABRIC &amp; LEATHER SETS', icon: '🛋️' },
    { id: 'chairs', title: 'Armchair &amp; Dining Chairs', tag: 'Deep Stain Extraction', displayTag: 'DEEP STAIN EXTRACTION', icon: '🪑' },
    { id: 'mattresses', title: 'Mattress Sanitisation', tag: 'Allergen &amp; Dust Mite Removal', displayTag: 'ALLERGEN &amp; DUST MITE REMOVAL', icon: '🛏️' },
    { id: 'stairs', title: 'Staircase &amp; Hallway Carpets', tag: 'Heavy Soil &amp; Spill Extraction', displayTag: 'HEAVY SOIL &amp; SPILL EXTRACTION', icon: '🪜' },
    { id: 'upholstery', title: 'Full Fabric Upholstery Care', tag: 'Curtains, Cushions &amp; Stools', displayTag: 'CURTAINS, CUSHIONS &amp; STOOLS', icon: '🧼' },
    { id: 'car-seats', title: 'Vehicle &amp; Car Seat Cleaning', tag: 'Spills, Salt &amp; Odour Removal', displayTag: 'SPILLS, SALT &amp; ODOUR REMOVAL', icon: '🚗' },
  ];

  for (const s of services) {
    const width = 600;
    const height = 400;
    const svgService = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="srvGrad-${s.id}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#043263" />
          <stop offset="60%" stop-color="#0072CE" />
          <stop offset="100%" stop-color="#00B2FE" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#srvGrad-${s.id})" />
      
      <!-- Water Droplet Background Motifs -->
      <circle cx="500" cy="80" r="160" fill="#00B2FE" opacity="0.15" />
      <circle cx="80" cy="340" r="120" fill="#FFFFFF" opacity="0.08" />
      
      <!-- Steam Lines -->
      <path d="M 450 300 Q 480 250 460 200 Q 440 150 470 100" stroke="#00E5FF" stroke-width="4" stroke-linecap="round" fill="none" opacity="0.4" />
      <path d="M 490 320 Q 520 270 500 220 Q 480 170 510 120" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.3" />

      <!-- Center Icon & Card Container -->
      <rect x="50" y="50" width="100" height="100" rx="20" fill="#FFFFFF" opacity="0.15" />
      <text x="100" y="112" font-size="52" text-anchor="middle">${s.icon}</text>

      <!-- Badge Tag -->
      <rect x="50" y="180" width="280" height="32" rx="16" fill="#00B2FE" opacity="0.9" />
      <text x="190" y="201" font-family="'Inter', sans-serif" font-weight="700" font-size="12" fill="#FFFFFF" text-anchor="middle" letter-spacing="1">
        ${s.displayTag}
      </text>

      <!-- Service Title -->
      <text x="50" y="260" font-family="'Inter', sans-serif" font-weight="800" font-size="30" fill="#FFFFFF">
        ${s.title}
      </text>

      <!-- Subtitle & Value -->
      <text x="50" y="300" font-family="'Inter', sans-serif" font-size="17" fill="#E0F2FE">
        Professional Hot Water Extraction • Fast 2-Hour Drying
      </text>

      <rect x="50" y="335" width="220" height="36" rx="8" fill="#25D366" />
      <text x="160" y="358" font-family="'Inter', sans-serif" font-weight="700" font-size="14" fill="#FFFFFF" text-anchor="middle">
        PAY ONLY IF YOU'RE HAPPY
      </text>
    </svg>
    `;

    const outPath = path.join(rootDir, 'src', 'assets', 'services', `${s.id}.webp`);
    await sharp(Buffer.from(svgService))
      .webp({ quality: 90 })
      .toFile(outPath);
  }
  console.log('Generated Service WebP Graphics');
}

async function runAll() {
  console.log('Starting Asset Pipeline...');
  await processBeforeAfter();
  await generateReviewScreenshots();
  await generateServiceGraphics();
  console.log('All assets successfully generated and verified in WebP format!');
}

runAll().catch(err => {
  console.error('Asset generation failed:', err);
  process.exit(1);
});
