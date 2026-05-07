"use client";

import { galleryItems } from "@/data/gallery";
import GalleryCard from "./GalleryCard";

export default function WorkGallery() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 bg-white">
      <h2 className="font-sans text-6xl font-bold mb-10  text-accent-blue py-4 ">Daily Work Gallery</h2>

      {/* Masonry Columns */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6">
        {galleryItems.map((item) => (
          <GalleryCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}