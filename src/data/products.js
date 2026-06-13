// ─── Product data with variant-based structure ───
// Each product has multiple variants (fit × colorway).
// The PDP handles variant selection client-side via Alpine.js.

export const products = [
  {
    slug: "box-hood",
    name: "Stitch White Jumper",
    price: 169,
    description:
      "The TBC white-stitch embroidery on AS Colour's box hood. 350 GSM mid-heavyweight anti-pill CVC fleece, drop shoulder, kangaroo pocket, self-fabric lined hood. Built for comfort and durability.",
    variants: [
      {
        fitKey: "unisex",
        fit: "Unisex Relaxed",
        colorKey: "white-stitch",
        colorway: "White Stitch on Black",
        code: "5171 AS",
        weight: "350 GSM · Anti-Pill CVC Fleece",
        sizes: ["M", "L", "XL"],
        swatch: "#FFFFFF",
        badge: "Limited",
        price: 169,
        image: "/shop/hood-stitch-back.png",
        images: ["/shop/hood-stitch-back.png", "/shop/hood-stitch-front.png"],
        stripe: "https://buy.stripe.com/5kQ9AScgdgWW4j14B81wY0c",
      },
    ],
  },
];
