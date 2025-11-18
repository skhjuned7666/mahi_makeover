export function cloudUrl(publicId, opts = '') {
  const cloud = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  if (!cloud) throw new Error('NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME not set');
  const prefix = `https://res.cloudinary.com/${cloud}/image/upload`;
  const params = ['f_auto','q_auto',opts].filter(Boolean).join(',');
  return `${prefix}/${params}/${publicId}.jpg`;
}