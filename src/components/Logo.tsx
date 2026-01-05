interface LogoProps {
  onClick?: () => void;
  className?: string;
  variant?: 'light' | 'dark';
}

export function Logo({ onClick, className = '', variant = 'light' }: LogoProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const iconColor = variant === 'dark' ? '#FFFFFF' : '#0F4C5C';
  const textColor = variant === 'dark' ? '#FFFFFF' : '#0F4C5C';

  return (
    <div 
      onClick={handleClick}
      className={`flex items-center gap-2.5 ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {/* Icon - Shield with checkmark */}
      <svg 
        width="32" 
        height="32" 
        viewBox="0 0 32 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Shield outline */}
        <path 
          d="M16 3L6 7.5V14.5C6 21.5 11 26.5 16 29C21 26.5 26 21.5 26 14.5V7.5L16 3Z" 
          stroke={iconColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Checkmark */}
        <path 
          d="M12 16L15 19L20 13" 
          stroke={iconColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Text */}
      <span 
        className="tracking-tight select-none"
        style={{ 
          color: textColor,
          fontSize: '20px',
          fontWeight: 600,
          fontFamily: 'Inter, system-ui, sans-serif'
        }}
      >
        AuthenX
      </span>
    </div>
  );
}
