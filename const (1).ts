import { useEffect, useRef } from "react";

export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Small delay to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target); // Stop observing once visible
            }
          });
        },
        { threshold: 0.05, rootMargin: "0px 0px -30px 0px" }
      );

      const revealElements = el.querySelectorAll(".reveal");
      revealElements.forEach((child) => observer.observe(child));

      // Store cleanup
      (el as any).__revealObserver = observer;
    }, 100);

    return () => {
      clearTimeout(timer);
      const observer = (el as any).__revealObserver;
      if (observer) observer.disconnect();
    };
  }, []);

  return ref;
}
