export function NRISLogo({ className = "w-32 h-auto" }: { className?: string }) {
  const blueColor = "#0066cc";
  const redColor = "#ed1c24";

  return (
    <svg viewBox="0 0 250 100" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Handle (Drawn first so the blue stem covers its top joint) */}
      <path 
        d="M 145 60 V 73 A 10 10 0 0 0 165 73 V 62" 
        fill="none" 
        stroke={redColor} 
        strokeWidth="12" 
        strokeLinecap="round" 
      />

      {/* Stem of the 'I' */}
      <rect x="139" y="40" width="12" height="25" rx="1" fill={blueColor} />

      {/* Umbrella Canopy */}
      <path 
        d="M 105 50 
           A 40 40 0 0 1 185 50 
           A 20 20 0 0 0 158.33 50
           A 20 20 0 0 0 131.66 50
           A 20 20 0 0 0 105 50 Z" 
        fill={redColor} 
      />

      {/* Dot of the 'I' */}
      <circle cx="145" cy="28" r="6" fill={blueColor} />

      {/* N and R */}
      <text x="5" y="85" fontFamily="Arial Black, Impact, sans-serif" fontSize="72" fontWeight="900" fill={blueColor} letterSpacing="-2">NR</text>

      {/* S */}
      <text x="178" y="85" fontFamily="Arial Black, Impact, sans-serif" fontSize="72" fontWeight="900" fill={blueColor}>S</text>
    </svg>
  );
}
