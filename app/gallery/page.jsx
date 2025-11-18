import dynamic from "next/dynamic";
import map from "../../cloudinary-map.json";

const CloudSlider = dynamic(() => import("@/components/CloudSlider"), {
  ssr: false,
});

export default function GalleryPage() {
  const imageList = map.map((i) => i.publicId);
  return (
    <div>
      <h1>Bridal Gallery</h1>
      <CloudSlider images={imageList} />
    </div>
  );
}
