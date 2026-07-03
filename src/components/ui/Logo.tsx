import Image from 'next/image';

export function NRISLogo({ className = "w-32 h-auto" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <Image 
        src="/images/nris_ai_logo.png" 
        alt="NRIS Logo" 
        width={300}
        height={150}
        className="w-full h-auto object-contain"
        priority
      />
    </div>
  );
}
