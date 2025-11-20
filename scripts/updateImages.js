const fs = require('fs');
const path = require('path');

// Read the imgUrls.txt file
const imgUrlsPath = path.join(__dirname, '..', 'imgUrls.txt');
const imgUrls = fs.readFileSync(imgUrlsPath, 'utf8')
  .split('\n')
  .map(url => url.trim())
  .filter(url => url.length > 0);

console.log(`Found ${imgUrls.length} image URLs`);

// Update portfolio.ts
const portfolioPath = path.join(__dirname, '..', 'data', 'portfolio.ts');
let portfolioContent = fs.readFileSync(portfolioPath, 'utf8');

// Generate portfolio items
const categories = ['Bridal', 'Engagement', 'Party', 'Photoshoot'];
const portfolioItems = imgUrls.slice(0, 16).map((url, index) => {
  const category = categories[index % categories.length];
  const altTexts = [
    "Bridal makeup artist applying foundation",
    "Makeup artist applying highlighter",
    "Bride getting finishing touches",
    "Engagement glam portrait",
    "Makeup artist perfecting eyeliner",
    "Party ready makeup look",
    "Makeup brush set on table",
    "Photoshoot ready glam",
    "Editorial beauty closeup",
    "Bridal makeup palette and brushes",
    "Professional makeup artist working",
    "Close-up of bridal eye makeup",
    "Bride with natural makeup look",
    "Vintage bridal makeup style",
    "Bridal makeup with floral accessories",
    "Contouring techniques for brides"
  ];
  
  return `  {
    src: "${url}",
    alt: "${altTexts[index] || altTexts[0]}",
    category: "${category}"
  }`;
});

const newPortfolioContent = `const portfolio = [
${portfolioItems.join(',\n')}
];

export default portfolio;
`;

fs.writeFileSync(portfolioPath, newPortfolioContent);
console.log('Updated portfolio.ts');

// Update ServicesTestimonials.tsx
const servicesTestimonialsPath = path.join(__dirname, '..', 'components', 'sections', 'ServicesTestimonials.tsx');
let servicesTestimonialsContent = fs.readFileSync(servicesTestimonialsPath, 'utf8');

// Use first 4 images for services
const serviceImages = imgUrls.slice(0, 4);
const fallbackImage = imgUrls[0] || '';

const imageMapEntries = [
  `      "Bridal Glam":
        "${serviceImages[0] || fallbackImage}",`,
  `      "Engagement Look":
        "${serviceImages[1] || fallbackImage}",`,
  `      "Party Makeup":
        "${serviceImages[2] || fallbackImage}",`,
  `      "Photoshoot Makeup":
        "${serviceImages[3] || fallbackImage}",`
];

// Replace the imageMap section
const imageMapRegex = /\/\/ Map service titles to appropriate images[\s\S]*?};/g;
const newImageMap = `    // Map service titles to appropriate images
    const imageMap: Record<string, string> = {
${imageMapEntries.join('\n')}
    };`;

servicesTestimonialsContent = servicesTestimonialsContent.replace(imageMapRegex, newImageMap);

// Update the fallback image
const fallbackRegex = /return \([\s\S]*?imageMap\[title\] \|\|[\s\S]*?\);/g;
const newFallback = `    return (
      imageMap[title] ||
      "${fallbackImage}"
    );`;

servicesTestimonialsContent = servicesTestimonialsContent.replace(fallbackRegex, newFallback);

// Remove any duplicate comments
servicesTestimonialsContent = servicesTestimonialsContent.replace(/\/\/ Map service titles to appropriate images\s+\/\/ Map service titles to appropriate images/, '// Map service titles to appropriate images');

fs.writeFileSync(servicesTestimonialsPath, servicesTestimonialsContent);
console.log('Updated ServicesTestimonials.tsx');

// Update HeroImageCarousel.tsx
const heroCarouselPath = path.join(__dirname, '..', 'components', 'sections', 'HeroImageCarousel.tsx');
let heroCarouselContent = fs.readFileSync(heroCarouselPath, 'utf8');

// Use first 7 images for hero carousel
const carouselImages = imgUrls.slice(0, 7);
const carouselItems = carouselImages.map((url, index) => {
  const altTexts = [
    "Bridal makeup example 1",
    "Bridal makeup example 2",
    "Bridal makeup example 3",
    "Bridal makeup example 4",
    "Bridal makeup example 5",
    "Bridal makeup example 6",
    "Bridal makeup example 7"
  ];
  
  return `    {
      url: "${url}",
      alt: "${altTexts[index] || altTexts[0]}",
    }`;
});

// Replace the images array
const imagesArrayRegex = /\/\/ Images from Cloudinary based on your cloudinary-map.json[\s\S]*?];/g;
const newImagesArray = `  // Images from Cloudinary based on your cloudinary-map.json
  const images = [
${carouselItems.join(',\n')}
  ];`;

heroCarouselContent = heroCarouselContent.replace(imagesArrayRegex, newImagesArray);

// Remove any duplicate comments
heroCarouselContent = heroCarouselContent.replace(/\/\/ Images from Cloudinary based on your cloudinary-map.json\s+\/\/ Images from Cloudinary based on your cloudinary-map.json/, '// Images from Cloudinary based on your cloudinary-map.json');

fs.writeFileSync(heroCarouselPath, heroCarouselContent);
console.log('Updated HeroImageCarousel.tsx');

console.log('All image references updated successfully!');