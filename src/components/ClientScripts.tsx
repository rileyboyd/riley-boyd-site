"use client";
import { useEffect } from "react";

// Make jQuery available globally
if (typeof window !== "undefined") {
  // Import jQuery dynamically
  import("jquery").then(($) => {
    (window as any).$ = $.default;
    (window as any).jQuery = $.default;
  });
}

export default function ClientScripts() {
  useEffect(() => {
    // Initialize scripts when component mounts
    if (typeof window !== "undefined") {
      // Initialize all the components
      try {
        // Wait for jQuery to be available
        const initScripts = () => {
          const $ = (window as any).$;
          if (!$) {
            setTimeout(initScripts, 100);
            return;
          }

          // Initialize Isotope for portfolio
          if ($(".rb-isotope").length) {
            // Import isotope dynamically
            import("isotope-layout").then((Isotope) => {
              $(".rb-isotope").isotope({
                itemSelector: ".rb-isotope-item",
                layoutMode: "masonry",
              });
            });
          }

          // Initialize other components as needed
          // Add more initialization code here as needed
        };

        initScripts();
      } catch (error) {
        console.error("Error initializing client scripts:", error);
      }
    }
  }, []);

  return null; // This component doesn't render anything
}
