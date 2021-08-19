import React, { useContext } from "react";
import ImageGallery from "react-image-gallery";
import { imagesContext } from "../commonContext/context";
import './gallary.css';
function GallaryImages() {
  const images = useContext(imagesContext).map((item) => {
    return {
      original: item.url,
      thumbnail: item.url,
      title: item.title,
      id: item.id,
    };
  });
  return (
    <ImageGallery
      items={images}
      useTranslate3D={true}
      showBullets={true}
      showIndex={true}
      lazyLoad={true}
    />
  );
}
export default GallaryImages;
