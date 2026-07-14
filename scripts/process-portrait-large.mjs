import sharp from "sharp";

const src =
  "C:/Users/Admin/Downloads/WhatsApp Image 2026-07-14 at 10.39.23 PM (1).jpeg";

// Taller half-body crop (source is 960x1280): hair-top down to hands/pocket.
const box = { left: 240, top: 330, width: 560, height: 760 };
const OUT_W = 700;
const OUT_H = 950;

const vignette = Buffer.from(
  `<svg width="${OUT_W}" height="${OUT_H}">
     <defs>
       <radialGradient id="v" cx="46%" cy="30%" r="60%">
         <stop offset="45%" stop-color="#000" stop-opacity="0"/>
         <stop offset="100%" stop-color="#000" stop-opacity="0.4"/>
       </radialGradient>
       <radialGradient id="corner" cx="90%" cy="14%" r="40%">
         <stop offset="0%" stop-color="#000" stop-opacity="0.3"/>
         <stop offset="100%" stop-color="#000" stop-opacity="0"/>
       </radialGradient>
     </defs>
     <rect width="${OUT_W}" height="${OUT_H}" fill="url(#v)"/>
     <rect width="${OUT_W}" height="${OUT_H}" fill="url(#corner)"/>
   </svg>`,
);

await sharp(src)
  .extract(box)
  .resize(OUT_W, OUT_H)
  .modulate({ saturation: 0.8, brightness: 0.98 })
  .composite([{ input: vignette, blend: "multiply" }])
  .jpeg({ quality: 90 })
  .toFile("D:/Claude/portfolio/public/images/sachin-portrait-large.jpg");

console.log("wrote test-crop-large.jpg, box:", box);
