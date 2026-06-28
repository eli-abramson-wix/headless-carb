import { useEffect, useState } from "react";

// Above-fold, per-visitor conversion control. Hydrated client:load so it's
// tappable immediately. Hidden on the form page itself.
export default function MobileStickyBar({ label }: { label: string }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setHidden(window.location.pathname.startsWith("/service-request"));
  }, []);

  if (hidden) return null;

  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-surface border-t border-border p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
      <a
        href="/service-request"
        className="btn btn-accent w-full"
        data-sticky-cta
      >
        {label}
      </a>
    </div>
  );
}
