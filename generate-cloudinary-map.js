// generate-cloudinary-map.js

const fs = require('fs');

const path = require('path');



const cloud = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

if (!cloud) {

  console.error('Set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME');

  process.exit(1);

} 



const folder = path.join(__dirname, 'images_to_upload', 'brids');



if (!fs.existsSync(folder)) {

  console.error('Folder not found:', folder);

  process.exit(1);

}



const files = fs.readdirSync(folder);



const map = files

  .filter(f => /\.(jpe?g|png|webp|avif)$/i.test(f))

  .map(f => {

    const name = path.parse(f).name;

    const ext = path.extname(f).toLowerCase();

    const publicId = `brids/${name}`;

    const url = `https://res.cloudinary.com/${cloud}/image/upload/f_auto,q_auto/${publicId}${ext}`;

    return { file: f, publicId, url };

  });



fs.writeFileSync('cloudinary-map.json', JSON.stringify(map, null, 2));

console.log('Wrote cloudinary-map.json with', map.length, 'entries');