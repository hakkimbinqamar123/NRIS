export function NRISLogo({ className = "w-32 h-auto" }: { className?: string }) {
  const blueColor = "#0066cc";
  const redColor = "#ed1c24";

  return (
    <svg viewBox="0 0 210 100" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Text drawn first so it naturally tucks behind the umbrella canopy */}
      {/* Using stroke/linejoin to guarantee a rounded, thick font appearance universally */}
      <text x="5" y="85" fontFamily="Arial Black, Impact, sans-serif" fontSize="62" fontWeight="900" fill={blueColor} stroke={blueColor} strokeWidth="4" strokeLinejoin="round">N</text>
      <text x="55" y="85" fontFamily="Arial Black, Impact, sans-serif" fontSize="62" fontWeight="900" fill={blueColor} stroke={blueColor} strokeWidth="4" strokeLinejoin="round">R</text>
      <text x="155" y="85" fontFamily="Arial Black, Impact, sans-serif" fontSize="62" fontWeight="900" fill={blueColor} stroke={blueColor} strokeWidth="4" strokeLinejoin="round">S</text>

      {/* Handle (Drawn before stem so joint is hidden) */}
      <path 
        d="M 125 70 V 88 A 9 9 0 0 0 143 88 V 75" 
        fill="none" 
        stroke={redColor} 
        strokeWidth="10" 
        strokeLinecap="round" 
      />

      {/* Stem of the 'I' */}
      <rect x="120" y="45" width="10" height="30" rx="2" fill={blueColor} />

      {/* Umbrella Canopy with Bell Shape and Top Spike */}
      <path 
        d="M 75 55 
           C 75 25, 100 10, 123 10
           L 123 6
           Q 125 3 127 6
           L 127 10
           C 150 10, 175 25, 175 55
           A 22 22 0 0 0 135 55
           A 12 12 0 0 0 115 55
           A 22 22 0 0 0 75 55 Z" 
        fill={redColor} 
      />

      {/* Dot of the 'I' (Oval) */}
      <ellipse cx="125" cy="28" rx="4.5" ry="7.5" fill={blueColor} />
    </svg>
  );
}
