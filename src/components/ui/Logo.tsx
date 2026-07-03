export function NRISLogo({ className = "w-32 h-auto" }: { className?: string }) {
  const blueColor = "#0066cc";
  const redColor = "#ed1c24";

  return (
    <svg viewBox="0 0 200 100" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* N and R */}
      <text x="10" y="75" fontFamily="Arial, Helvetica, sans-serif" fontSize="65" fontWeight="900" fill={blueColor} letterSpacing="-2">NR</text>
      
      {/* Umbrella Canopy */}
      <path 
        d="M 110 45 
           A 30 30 0 0 1 170 45 
           A 10 10 0 0 0 150 45
           A 10 10 0 0 0 130 45
           A 10 10 0 0 0 110 45 Z" 
        fill={redColor} 
      />
      
      {/* I Dot (Inside umbrella) */}
      <circle cx="140" cy="30" r="5" fill={blueColor} />
      
      {/* I Stem */}
      <rect x="135" y="48" width="10" height="23" rx="2" fill={blueColor} />
      
      {/* Umbrella Handle */}
      <path 
        d="M 140 71 V 85 A 6 6 0 0 0 152 85 V 78" 
        fill="none" 
        stroke={redColor} 
        strokeWidth="8" 
        strokeLinecap="round" 
      />

      {/* S */}
      <text x="160" y="75" fontFamily="Arial, Helvetica, sans-serif" fontSize="65" fontWeight="900" fill={blueColor} letterSpacing="-2">S</text>
    </svg>
  );
}
