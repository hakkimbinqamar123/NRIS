export function NRISLogo({ className = "w-32 h-auto" }: { className?: string }) {
  const blueColor = "#0066cc";

  return (
    <svg viewBox="0 0 190 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <text 
        x="5" 
        y="80" 
        fontFamily="Arial Black, Impact, sans-serif" 
        fontSize="68" 
        fontWeight="900" 
        fill={blueColor} 
        stroke={blueColor} 
        strokeWidth="4" 
        strokeLinejoin="round" 
        letterSpacing="2"
      >
        NRIS
      </text>
    </svg>
  );
}
