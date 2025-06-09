import { useEffect } from 'react';

export default function PerformanceMonitor() {
  useEffect(() => {
    // Optimize viewport for mobile
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1, viewport-fit=cover');
    }

    // Preload critical resources
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.as = 'image';
    preloadLink.href = '/favicon.ico';
    document.head.appendChild(preloadLink);

    // Optimize images and videos after page load
    setTimeout(() => {
      // Add loading="lazy" to images not already optimized
      document.querySelectorAll('img:not([loading])').forEach(img => {
        img.setAttribute('loading', 'lazy');
      });
      
      // Add decoding="async" to images
      document.querySelectorAll('img:not([decoding])').forEach(img => {
        img.setAttribute('decoding', 'async');
      });
    }, 1000);
  }, []);

  return null;
}