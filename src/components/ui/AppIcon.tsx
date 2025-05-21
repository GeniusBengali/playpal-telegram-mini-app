import {IconContext, type IconType} from "react-icons";

export const AppIcon = ({
  Icon,
  className,
  startColor,
  stopColor,
  fillColor = "#d6d6d6",
  size = 36,
  transform = "rotate(45)",
  deviation = "3"
}: {
  Icon: IconType,
  size?: number|string;
  startColor?: string;
  stopColor?: string;
  transform?: string;
  deviation?: string;
  fillColor?: string;
  className?: string;
}) => {
  return (
    <svg width="36" height="36">
      <defs>
        <linearGradient id="neonGradient" gradientTransform={transform}>
          <stop offset="0%" stopColor={startColor} />
          <stop offset="100%" stopColor={stopColor} />
        </linearGradient>
        <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation={deviation} result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#neonGlow)">
        <IconContext.Provider value={{ attr: { fill: stopColor ? "url(#neonGradient)" : fillColor, className: className } }}>
          <Icon size={size} />
        </IconContext.Provider>
      </g>
    </svg>
  )
}