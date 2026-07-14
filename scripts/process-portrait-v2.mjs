import sharp from "sharp";

const src =
  "C:/Users/Admin/Downloads/WhatsApp Image 2026-07-14 at 11.04.41 PM.jpeg";

const box = { left: 140, top: 230, width: 480, height: 620 };
const W = 700;
const H = 903;

// Feathered alpha mask: opaque ellipse over the subject, fading to
// transparent at the frame edges (used to blend a sharp cutout over a
// blurred backdrop — simulated depth of field, no segmentation needed).
const maskSvg = Buffer.from(
  `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
     <defs>
       <radialGradient id="m" cx="49%" cy="42%" r="62%">
         <stop offset="35%" stop-color="#fff" stop-opacity="1"/>
         <stop offset="100%" stop-color="#fff" stop-opacity="0"/>
       </radialGradient>
     </defs>
     <rect width="${W}" height="${H}" fill="url(#m)"/>
   </svg>`,
);

const sharpBuf = await sharp(src).extract(box).resize(W, H).toBuffer();

const blurredBuf = await sharp(sharpBuf)
  .modulate({ saturation: 0.82, brightness: 0.97 })
  .blur(22)
  .toBuffer();

const cutout = await sharp(sharpBuf)
  .ensureAlpha()
  .composite([{ input: maskSvg, blend: "dest-in" }])
  .png()
  .toBuffer();

await sharp(blurredBuf)
  .composite([{ input: cutout }])
  .jpeg({ quality: 90 })
  .toFile("D:/Claude/portfolio/public/images/sachin-portrait-large.jpg");

console.log("wrote graded depth-of-field test-crop-v2.jpg");
