import sharp from "sharp";

const src =
  "C:/Users/Admin/Downloads/WhatsApp Image 2026-07-14 at 10.39.23 PM (1).jpeg";
const box = { left: 320, top: 378, width: 380, height: 380 };
const OUT = 640;

const vignette = Buffer.from(
  `<svg width="${OUT}" height="${OUT}">
     <defs>
       <radialGradient id="v" cx="48%" cy="40%" r="62%">
         <stop offset="50%" stop-color="#000" stop-opacity="0"/>
         <stop offset="100%" stop-color="#000" stop-opacity="0.38"/>
       </radialGradient>
       <radialGradient id="corner" cx="88%" cy="18%" r="45%">
         <stop offset="0%" stop-color="#000" stop-opacity="0.32"/>
         <stop offset="100%" stop-color="#000" stop-opacity="0"/>
       </radialGradient>
     </defs>
     <rect width="${OUT}" height="${OUT}" fill="url(#v)"/>
     <rect width="${OUT}" height="${OUT}" fill="url(#corner)"/>
   </svg>`,
);

await sharp(src)
  .extract(box)
  .resize(OUT, OUT)
  .modulate({ saturation: 0.8, brightness: 0.98 })
  .composite([{ input: vignette, blend: "multiply" }])
  .jpeg({ quality: 90 })
  .toFile("D:/Claude/portfolio/public/images/sachin-portrait.jpg");

console.log("wrote public/images/sachin-portrait.jpg");
