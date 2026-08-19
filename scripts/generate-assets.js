const fs = require('fs');
const path = require('path');

const dirs = [
  'public/images/flags',
  'public/images/sports',
  'public/images/payments',
  'public/images/blogs',
  'public/images/icons'
];

dirs.forEach(dir => {
  const fullPath = path.join(process.cwd(), dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }
});

// Helper to write SVG that looks like crisp PNG badge
const flags = {
  india: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <defs>
      <clipPath id="circleClip"><circle cx="50" cy="50" r="48" /></clipPath>
      <radialGradient id="ring" cx="50%" cy="50%" r="50%">
        <stop offset="90%" stop-color="#ffffff" stop-opacity="0"/>
        <stop offset="100%" stop-color="#000000" stop-opacity="0.3"/>
      </radialGradient>
    </defs>
    <circle cx="50" cy="50" r="48" fill="#ffffff" stroke="#e5e7eb" stroke-width="2"/>
    <g clip-path="url(#circleClip)">
      <rect x="0" y="2" width="100" height="32" fill="#ff9933"/>
      <rect x="0" y="34" width="100" height="32" fill="#ffffff"/>
      <rect x="0" y="66" width="100" height="32" fill="#138808"/>
      <!-- Ashoka Chakra -->
      <circle cx="50" cy="50" r="12" stroke="#000080" stroke-width="2" fill="none"/>
      <circle cx="50" cy="50" r="2.5" fill="#000080"/>
      ${Array.from({length: 24}).map((_, i) => {
        const angle = (i * 15) * Math.PI / 180;
        const x2 = 50 + 12 * Math.cos(angle);
        const y2 = 50 + 12 * Math.sin(angle);
        return `<line x1="50" y1="50" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="#000080" stroke-width="1"/>`;
      }).join('')}
    </g>
    <circle cx="50" cy="50" r="48" fill="url(#ring)" stroke="#374151" stroke-width="1.5"/>
  </svg>`,

  zimbabwe: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <defs>
      <clipPath id="zimClip"><circle cx="50" cy="50" r="48" /></clipPath>
      <radialGradient id="ringZ" cx="50%" cy="50%" r="50%">
        <stop offset="90%" stop-color="#ffffff" stop-opacity="0"/>
        <stop offset="100%" stop-color="#000000" stop-opacity="0.3"/>
      </radialGradient>
    </defs>
    <circle cx="50" cy="50" r="48" fill="#ffffff" stroke="#e5e7eb" stroke-width="2"/>
    <g clip-path="url(#zimClip)">
      <rect x="0" y="2" width="100" height="14" fill="#006400"/>
      <rect x="0" y="16" width="100" height="14" fill="#ffd700"/>
      <rect x="0" y="30" width="100" height="14" fill="#d40000"/>
      <rect x="0" y="44" width="100" height="12" fill="#000000"/>
      <rect x="0" y="56" width="100" height="14" fill="#d40000"/>
      <rect x="0" y="70" width="100" height="14" fill="#ffd700"/>
      <rect x="0" y="84" width="100" height="14" fill="#006400"/>
      <!-- Triangle on hoist -->
      <polygon points="2,2 45,50 2,98" fill="#ffffff" stroke="#000000" stroke-width="2"/>
      <!-- Red Star -->
      <polygon points="18,38 22,46 30,46 24,51 26,59 18,54 11,59 13,51 7,46 15,46" fill="#d40000"/>
      <!-- Zimbabwe bird silhouette -->
      <circle cx="18" cy="48" r="4" fill="#ffd700"/>
    </g>
    <circle cx="50" cy="50" r="48" fill="url(#ringZ)" stroke="#374151" stroke-width="1.5"/>
  </svg>`,

  bangladesh: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <defs>
      <clipPath id="bdClip"><circle cx="50" cy="50" r="48" /></clipPath>
      <radialGradient id="ringBD" cx="50%" cy="50%" r="50%">
        <stop offset="90%" stop-color="#ffffff" stop-opacity="0"/>
        <stop offset="100%" stop-color="#000000" stop-opacity="0.3"/>
      </radialGradient>
    </defs>
    <circle cx="50" cy="50" r="48" fill="#006a4e" stroke="#e5e7eb" stroke-width="2"/>
    <g clip-path="url(#bdClip)">
      <rect x="0" y="0" width="100" height="100" fill="#006a4e"/>
      <circle cx="45" cy="50" r="24" fill="#f42a41"/>
    </g>
    <circle cx="50" cy="50" r="48" fill="url(#ringBD)" stroke="#374151" stroke-width="1.5"/>
  </svg>`,

  england: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <defs>
      <clipPath id="engClip"><circle cx="50" cy="50" r="48" /></clipPath>
      <radialGradient id="ringEng" cx="50%" cy="50%" r="50%">
        <stop offset="90%" stop-color="#ffffff" stop-opacity="0"/>
        <stop offset="100%" stop-color="#000000" stop-opacity="0.3"/>
      </radialGradient>
    </defs>
    <circle cx="50" cy="50" r="48" fill="#ffffff" stroke="#e5e7eb" stroke-width="2"/>
    <g clip-path="url(#engClip)">
      <rect x="0" y="0" width="100" height="100" fill="#ffffff"/>
      <!-- St George Cross -->
      <rect x="40" y="0" width="20" height="100" fill="#ce1124"/>
      <rect x="0" y="40" width="100" height="20" fill="#ce1124"/>
    </g>
    <circle cx="50" cy="50" r="48" fill="url(#ringEng)" stroke="#374151" stroke-width="1.5"/>
  </svg>`,

  canada: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <defs>
      <clipPath id="canClip"><circle cx="50" cy="50" r="48" /></clipPath>
      <radialGradient id="ringCan" cx="50%" cy="50%" r="50%">
        <stop offset="90%" stop-color="#ffffff" stop-opacity="0"/>
        <stop offset="100%" stop-color="#000000" stop-opacity="0.3"/>
      </radialGradient>
    </defs>
    <circle cx="50" cy="50" r="48" fill="#ffffff" stroke="#e5e7eb" stroke-width="2"/>
    <g clip-path="url(#canClip)">
      <rect x="0" y="0" width="25" height="100" fill="#ff0000"/>
      <rect x="25" y="0" width="50" height="100" fill="#ffffff"/>
      <rect x="75" y="0" width="25" height="100" fill="#ff0000"/>
      <!-- Maple Leaf -->
      <path d="M50 25 L53 38 L62 34 L59 44 L68 47 L65 54 L72 58 L63 64 L65 72 L54 67 L52 78 L48 78 L46 67 L35 72 L37 64 L28 58 L35 54 L32 47 L41 44 L38 34 L47 38 Z" fill="#ff0000"/>
    </g>
    <circle cx="50" cy="50" r="48" fill="url(#ringCan)" stroke="#374151" stroke-width="1.5"/>
  </svg>`,

  australia: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <defs>
      <clipPath id="ausClip"><circle cx="50" cy="50" r="48" /></clipPath>
    </defs>
    <circle cx="50" cy="50" r="48" fill="#00247d" stroke="#e5e7eb" stroke-width="2"/>
    <g clip-path="url(#ausClip)">
      <rect x="0" y="0" width="100" height="100" fill="#00247d"/>
      <rect x="0" y="0" width="50" height="50" fill="#00247d"/>
      <!-- Union Jack canton -->
      <path d="M0 0 L50 50 M50 0 L0 50" stroke="#ffffff" stroke-width="6"/>
      <path d="M0 0 L50 50 M50 0 L0 50" stroke="#cc0000" stroke-width="3"/>
      <path d="M25 0 L25 50 M0 25 L50 25" stroke="#ffffff" stroke-width="10"/>
      <path d="M25 0 L25 50 M0 25 L50 25" stroke="#cc0000" stroke-width="6"/>
      <!-- Commonwealth Star -->
      <polygon points="25,65 28,73 36,73 30,78 32,86 25,81 18,86 20,78 14,73 22,73" fill="#ffffff"/>
      <!-- Southern Cross stars -->
      <circle cx="75" cy="25" r="3" fill="#ffffff"/>
      <circle cx="85" cy="45" r="3" fill="#ffffff"/>
      <circle cx="65" cy="50" r="3" fill="#ffffff"/>
      <circle cx="75" cy="70" r="3" fill="#ffffff"/>
      <circle cx="78" cy="55" r="2" fill="#ffffff"/>
    </g>
  </svg>`
};

Object.entries(flags).forEach(([name, svg]) => {
  fs.writeFileSync(path.join(process.cwd(), `public/images/flags/${name}.svg`), svg);
  fs.writeFileSync(path.join(process.cwd(), `public/images/flags/${name}.png.svg`), svg);
});

// Football Teams
const footballTeams = {
  arsenal: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <circle cx="50" cy="50" r="46" fill="#db0007" stroke="#9c824a" stroke-width="4"/>
    <path d="M25 50 L75 50 L65 42 L65 58 Z" fill="#9c824a"/>
    <text x="50" y="34" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-size="14" font-weight="900">ARSENAL</text>
  </svg>`,
  chelsea: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <circle cx="50" cy="50" r="46" fill="#034694" stroke="#dba111" stroke-width="4"/>
    <circle cx="50" cy="50" r="36" fill="#ffffff"/>
    <text x="50" y="55" text-anchor="middle" fill="#034694" font-family="sans-serif" font-size="12" font-weight="900">CHELSEA</text>
  </svg>`,
  realmadrid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <circle cx="50" cy="54" r="40" fill="#ffffff" stroke="#febe10" stroke-width="4"/>
    <path d="M30 65 L70 35" stroke="#482583" stroke-width="8"/>
    <text x="50" y="24" text-anchor="middle" fill="#febe10" font-size="20">👑</text>
  </svg>`,
  barcelona: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <circle cx="50" cy="50" r="46" fill="#a50044" stroke="#edbb00" stroke-width="4"/>
    <rect x="25" y="20" width="50" height="60" rx="6" fill="#004d98"/>
    <text x="50" y="55" text-anchor="middle" fill="#edbb00" font-family="sans-serif" font-size="16" font-weight="900">FCB</text>
  </svg>`
};

Object.entries(footballTeams).forEach(([name, svg]) => {
  fs.writeFileSync(path.join(process.cwd(), `public/images/sports/${name}.svg`), svg);
});

// Payment method icons
const payments = {
  upi: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 40" width="80" height="40">
    <rect width="80" height="40" rx="6" fill="#181824" stroke="#38bdf8" stroke-width="1"/>
    <text x="40" y="26" text-anchor="middle" fill="#38bdf8" font-family="sans-serif" font-size="16" font-weight="900">UPI</text>
  </svg>`,
  crypto: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 40" width="80" height="40">
    <rect width="80" height="40" rx="6" fill="#181824" stroke="#f59e0b" stroke-width="1"/>
    <text x="40" y="26" text-anchor="middle" fill="#f59e0b" font-family="sans-serif" font-size="14" font-weight="900">₿ CRYPTO</text>
  </svg>`,
  card: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 40" width="80" height="40">
    <rect width="80" height="40" rx="6" fill="#181824" stroke="#e879f9" stroke-width="1"/>
    <text x="40" y="26" text-anchor="middle" fill="#e879f9" font-family="sans-serif" font-size="13" font-weight="800">💳 CARD</text>
  </svg>`,
  netbanking: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 40" width="80" height="40">
    <rect width="80" height="40" rx="6" fill="#181824" stroke="#22c55e" stroke-width="1"/>
    <text x="40" y="26" text-anchor="middle" fill="#22c55e" font-family="sans-serif" font-size="12" font-weight="800">🏦 BANK</text>
  </svg>`
};

Object.entries(payments).forEach(([name, svg]) => {
  fs.writeFileSync(path.join(process.cwd(), `public/images/payments/${name}.svg`), svg);
});

console.log('Successfully generated flag, sports, and payment image assets.');
