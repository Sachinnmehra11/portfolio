import sharp from "sharp";

const src =
  "C:/Users/Admin/Downloads/WhatsApp Image 2026-07-14 at 11.04.41 PM.jpeg";

// Tighter crop than v2 — less background overall, no blur trick this time.
const box = { left: 154, top: 240, width: 452, height: 580 };
const W = 700;
const H = 900;

const vignette = Buffer.from(
  `<svg width="${W}" height="${H}">
     <defs>
       <radialGradient id="v" cx="49%" cy="38%" r="65%">
         <stop offset="48%" stop-color="#000" stop-opacity="0"/>
         <stop offset="100%" stop-color="#000" stop-opacity="0.42"/>
       </radialGradient>
       <radialGradient id="corner" cx="90%" cy="10%" r="42%">
         <stop offset="0%" stop-color="#000" stop-opacity="0.3"/>
         <stop offset="100%" stop-color="#000" stop-opacity="0"/>
       </radialGradient>
       <radialGradient id="corner2" cx="8%" cy="8%" r="38%">
         <stop offset="0%" stop-color="#000" stop-opacity="0.26"/>
         <stop offset="100%" stop-color="#000" stop-opacity="0"/>
       </radialGradient>
     </defs>
     <rect width="${W}" height="${H}" fill="url(#v)"/>
     <rect width="${W}" height="${H}" fill="url(#corner)"/>
     <rect width="${W}" height="${H}" fill="url(#corner2)"/>
   </svg>`,
);

await sharp(src)
  .extract(box)
  .resize(W, H)
  .modulate({ saturation: 0.82, brightness: 0.96 })
  .composite([{ input: vignette, blend: "multiply" }])
  .jpeg({ quality: 90 })
  .toFile("D:/Claude/portfolio/public/images/sachin-portrait-large.jpg");

console.log("wrote test-crop-v3.jpg, box:", box);
