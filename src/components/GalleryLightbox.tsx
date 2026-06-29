import { useCallback, useEffect, useState } from "react";

export interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
}

// Workshop gallery. Hydrated client:visible — interactions only matter once
// the grid scrolls into view.
export default function GalleryLightbox({ items }: { items: GalleryItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir: number) =>
      setOpen((i) =>
        i === null ? i : (i + dir + items.length) % items.length
      ),
    [items.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  return (
    <>
      <ul className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3 border border-border">
        {items.map((item, i) => (
          <li key={item.src} className="bg-background">
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="group flex w-full flex-col text-left focus-visible:outline-2 focus-visible:outline-primary"
            >
              <div className="relative overflow-hidden aspect-square border-b border-border">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
              </div>
              <div className="flex items-center justify-between gap-3 p-5">
                <div>
                  <span className="label-caps block">
                    Ref {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-1 block font-display text-primary uppercase tracking-[0.05em]">
                    {item.caption}
                  </span>
                </div>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="shrink-0 text-text-muted transition-colors group-hover:text-accent"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="7" />
                  <line x1="16.5" y1="16.5" x2="21" y2="21" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
              </div>
            </button>
          </li>
        ))}
      </ul>

      {open !== null && (
        <div
          className="fixed inset-0 z-50 bg-dark/90 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={items[open].caption}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-4 right-4 text-on-dark/80 hover:text-on-dark p-2"
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
          <figure
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={items[open].src}
              alt={items[open].alt}
              className="w-full max-h-[78vh] object-contain border border-on-dark/20"
            />
            <figcaption className="mt-3 text-center label-caps text-on-dark/80">
              {items[open].caption}
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); step(-1); }}
            aria-label="Previous"
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-on-dark/80 hover:text-on-dark p-2"
          >
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); step(1); }}
            aria-label="Next"
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-on-dark/80 hover:text-on-dark p-2"
          >
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      )}
    </>
  );
}
