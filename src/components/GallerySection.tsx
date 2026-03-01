import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { useIsMobile } from "@/hooks/use-mobile";
import gallery1 from "@/assets/gallery/gallery-1.jpeg";
import gallery2 from "@/assets/gallery/gallery-2.jpeg";
import gallery3 from "@/assets/gallery/gallery-3.jpeg";
import gallery4 from "@/assets/gallery/gallery-4.jpeg";
import gallery5 from "@/assets/gallery/gallery-5.jpeg";
import gallery6 from "@/assets/gallery/gallery-6.jpeg";
import gallery7 from "@/assets/gallery/gallery-7.jpeg";
import gallery8 from "@/assets/gallery/gallery-8.jpeg";
import gallery9 from "@/assets/gallery/gallery-9.jpeg";
import gallery10 from "@/assets/gallery/gallery-10.jpeg";

const galleryImages = [
  { src: gallery1, alt: "Emerging Partner Award Ceremony", caption: "Emerging Partner Recognition" },
  { src: gallery2, alt: "SLV Diesel Powerol Showroom", caption: "Our Powerol Showroom" },
  { src: gallery3, alt: "Award Ceremony - Team Photo", caption: "Award Ceremony" },
  { src: gallery4, alt: "Partner Award - Team", caption: "Partnership Award" },
  { src: gallery5, alt: "Team Group Photo", caption: "Our Team" },
  { src: gallery6, alt: "Mahindra Powerol Generator Display", caption: "Powerol Generator Display" },
  { src: gallery7, alt: "Generator Installation - Team", caption: "Generator Installation" },
  { src: gallery8, alt: "Mahindra Generator Installation", caption: "Mahindra Generator Install" },
  { src: gallery9, alt: "Generator Delivery", caption: "Generator Delivery" },
  { src: gallery10, alt: "Powerol Generator Installation", caption: "Powerol Installation" },
];

function usePerPage() {
  const [perPage, setPerPage] = useState(4);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setPerPage(w < 640 ? 1 : w < 1024 ? 2 : 4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return perPage;
}

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [page, setPage] = useState(0);
  const { ref, isInView } = useInView();
  const perPage = usePerPage();

  const totalPages = Math.ceil(galleryImages.length / perPage);

  const slidePrev = useCallback(() => setPage((p) => (p - 1 + totalPages) % totalPages), [totalPages]);
  const slideNext = useCallback(() => setPage((p) => (p + 1) % totalPages), [totalPages]);

  // Reset page when perPage changes
  useEffect(() => { setPage(0); }, [perPage]);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = useCallback(() => setLightbox(null), []);
  const prev = useCallback(() => setLightbox((i) => (i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : 0)), []);
  const next = useCallback(() => setLightbox((i) => (i !== null ? (i + 1) % galleryImages.length : 0)), []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightbox !== null) {
        if (e.key === "ArrowLeft") prev();
        else if (e.key === "ArrowRight") next();
        else if (e.key === "Escape") closeLightbox();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightbox, prev, next, closeLightbox]);

  const visibleImages = galleryImages.slice(page * perPage, page * perPage + perPage);

  return (
    <section id="gallery" className="py-24 relative" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 ${isInView ? "animate-fade-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary text-sm font-medium tracking-wide">OUR GALLERY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Moments &{" "}
            <span className="text-primary">Milestones</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A glimpse into our journey — from award ceremonies to successful generator installations across Karnataka.
          </p>
        </div>

        {/* Carousel */}
        <div className={`relative ${isInView ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
          {/* Arrows */}
          <button
            onClick={slidePrev}
            className="absolute -left-2 md:-left-5 top-1/2 -translate-y-1/2 z-10 bg-card/90 hover:bg-primary text-foreground hover:text-primary-foreground w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg border border-border/40 transition-all duration-200"
            aria-label="Previous images"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={slideNext}
            className="absolute -right-2 md:-right-5 top-1/2 -translate-y-1/2 z-10 bg-card/90 hover:bg-primary text-foreground hover:text-primary-foreground w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg border border-border/40 transition-all duration-200"
            aria-label="Next images"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Images Row */}
          <div className="overflow-hidden mx-6 md:mx-8">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${page * 100}%)` }}
            >
              {/* Render all pages inline for smooth sliding */}
              {Array.from({ length: totalPages }).map((_, pageIdx) => (
                <div
                  key={pageIdx}
                  className="flex-shrink-0 w-full flex gap-4"
                >
                  {galleryImages.slice(pageIdx * perPage, pageIdx * perPage + perPage).map((image, idx) => {
                    const globalIdx = pageIdx * perPage + idx;
                    return (
                      <div
                        key={globalIdx}
                        className="flex-1 min-w-0 group relative overflow-hidden rounded-xl cursor-pointer border border-border/30 hover:border-primary/50 shadow-md hover:shadow-xl transition-all duration-300"
                        onClick={() => openLightbox(globalIdx)}
                      >
                        <div className="aspect-[4/3] overflow-hidden">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                        <div className="absolute inset-0 bg-background/0 group-hover:bg-background/50 transition-all duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2">
                            <ZoomIn className="w-8 h-8 text-primary" />
                            <span className="text-foreground text-sm font-medium text-center px-2">{image.caption}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === page ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-foreground hover:text-primary transition-colors z-10"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-card/80 hover:bg-primary text-foreground hover:text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 z-10"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="max-w-5xl max-h-[85vh] relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryImages[lightbox].src}
              alt={galleryImages[lightbox].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
            />
            <p className="text-center text-muted-foreground mt-3 text-sm">
              {galleryImages[lightbox].caption} — {lightbox + 1} / {galleryImages.length}
            </p>
          </div>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-card/80 hover:bg-primary text-foreground hover:text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 z-10"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
