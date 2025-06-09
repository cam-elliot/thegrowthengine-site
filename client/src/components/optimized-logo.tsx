import logoPath from "@assets/The Growth Engine logo white trans_1749378744342.png";
import { useState, useEffect } from "react";

interface OptimizedLogoProps {
  className?: string;
  priority?: boolean;
}

export default function OptimizedLogo({ className, priority = false }: OptimizedLogoProps) {
  return (
    <img 
      src={logoPath} 
      alt="The Growth Engine" 
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      {...(priority && { fetchPriority: "high" as const })}
      width="144"
      height="96"
      style={{
        maxWidth: '100%',
        height: 'auto'
      }}
    />
  );
}