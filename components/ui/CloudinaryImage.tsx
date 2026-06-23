import Image, { type ImageProps } from "next/image";

type CloudinaryImageProps = Omit<ImageProps, "unoptimized">;

/** Cloudinary portfolio assets are often SVGs; bypass Next image optimizer. */
export function CloudinaryImage({ alt = "", ...props }: CloudinaryImageProps) {
  return <Image {...props} alt={alt} unoptimized />;
}
