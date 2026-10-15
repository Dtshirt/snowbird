// License-free destination illustrations. These are original SVG scenes
// authored for the Snowbird site — free to use, modify, or replace with
// real photography by dropping a `heroImage` URL onto the destination data
// and updating `DestinationHeroImage` below.

export function FloridaScene({ className = '', ariaHidden = true }) {
  return (
    <svg
      viewBox="0 0 1200 500"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden={ariaHidden || undefined}
    >
      <defs>
        <linearGradient id="fl-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFC48A" />
          <stop offset="55%" stopColor="#FFA07A" />
          <stop offset="100%" stopColor="#F27676" />
        </linearGradient>
        <linearGradient id="fl-water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3DA5D9" />
          <stop offset="100%" stopColor="#0B587C" />
        </linearGradient>
      </defs>
      <rect width="1200" height="500" fill="url(#fl-sky)" />
      <circle cx="880" cy="180" r="70" fill="#FFEEB8" opacity="0.95" />
      <circle cx="880" cy="180" r="120" fill="#FFEEB8" opacity="0.15" />
      <path d="M0 360 Q300 340 600 355 T1200 350 L1200 500 L0 500 Z" fill="url(#fl-water)" opacity="0.95" />
      <path d="M0 380 Q300 360 600 375 T1200 370" stroke="rgba(255,255,255,0.35)" strokeWidth="2" fill="none" />
      <path d="M0 405 Q300 385 600 400 T1200 395" stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none" />
      {/* Palm tree - center left */}
      <g transform="translate(220, 200)">
        <rect x="-5" y="0" width="10" height="170" rx="4" fill="#3a2b1a" />
        <PalmFronds />
      </g>
      {/* Palm tree - right */}
      <g transform="translate(980, 240)">
        <rect x="-4" y="0" width="8" height="130" rx="4" fill="#3a2b1a" />
        <PalmFronds scale="0.85" />
      </g>
      {/* Small distant palm */}
      <g transform="translate(720, 280)" opacity="0.7">
        <rect x="-3" y="0" width="6" height="90" rx="4" fill="#2a1c10" />
        <PalmFronds scale="0.6" />
      </g>
    </svg>
  );
}

export function ArizonaScene({ className = '', ariaHidden = true }) {
  return (
    <svg
      viewBox="0 0 1200 500"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden={ariaHidden || undefined}
    >
      <defs>
        <linearGradient id="az-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F7B267" />
          <stop offset="45%" stopColor="#F4845F" />
          <stop offset="100%" stopColor="#C1440E" />
        </linearGradient>
      </defs>
      <rect width="1200" height="500" fill="url(#az-sky)" />
      <circle cx="620" cy="320" r="90" fill="#FFD787" opacity="0.9" />
      {/* Distant mountain range */}
      <path d="M0 340 L120 260 L220 300 L360 240 L480 300 L600 260 L740 320 L880 270 L1000 310 L1100 260 L1200 300 L1200 500 L0 500 Z"
        fill="#7a2f1a" opacity="0.8" />
      {/* Mid mountain range */}
      <path d="M0 400 L100 360 L220 400 L340 340 L500 400 L640 360 L800 410 L920 360 L1050 400 L1200 370 L1200 500 L0 500 Z"
        fill="#5a2213" opacity="0.85" />
      {/* Ground */}
      <path d="M0 430 L1200 430 L1200 500 L0 500 Z" fill="#3a170a" />
      {/* Saguaro cactus - left */}
      <SaguaroCactus x={260} y={290} scale={1} />
      {/* Saguaro cactus - center right */}
      <SaguaroCactus x={820} y={310} scale={1.1} />
      {/* Small cactus - right */}
      <SaguaroCactus x={1020} y={370} scale={0.55} />
    </svg>
  );
}

export function TexasScene({ className = '', ariaHidden = true }) {
  return (
    <svg
      viewBox="0 0 1200 500"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden={ariaHidden || undefined}
    >
      <defs>
        <linearGradient id="tx-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFD08A" />
          <stop offset="50%" stopColor="#F5A45D" />
          <stop offset="100%" stopColor="#B8532A" />
        </linearGradient>
      </defs>
      <rect width="1200" height="500" fill="url(#tx-sky)" />
      <circle cx="900" cy="200" r="60" fill="#FFF3D6" opacity="0.9" />
      <circle cx="900" cy="200" r="120" fill="#FFF3D6" opacity="0.15" />
      {/* Distant flat plain */}
      <path d="M0 360 L1200 340 L1200 500 L0 500 Z" fill="#8a4a1f" opacity="0.85" />
      {/* Near ground */}
      <path d="M0 410 L1200 400 L1200 500 L0 500 Z" fill="#5a2d10" />
      {/* Windmill silhouette */}
      <g transform="translate(300, 200)">
        <line x1="0" y1="60" x2="0" y2="210" stroke="#241608" strokeWidth="4" />
        <line x1="-10" y1="210" x2="10" y2="210" stroke="#241608" strokeWidth="3" />
        <line x1="-6" y1="180" x2="6" y2="180" stroke="#241608" strokeWidth="2" />
        <line x1="-3" y1="60" x2="3" y2="60" stroke="#241608" strokeWidth="3" />
        <circle cx="0" cy="55" r="6" fill="#241608" />
        {/* blades */}
        <g transform="translate(0, 55) rotate(15)">
          {[0, 60, 120, 180, 240, 300].map((r) => (
            <path key={r} d="M0 0 L28 -3 L26 0 L28 3 Z" fill="#241608" transform={`rotate(${r})`} />
          ))}
        </g>
      </g>
      {/* Prickly pear cactus - front */}
      <g transform="translate(800, 350)">
        <ellipse cx="0" cy="0" rx="26" ry="35" fill="#2d4a1f" />
        <ellipse cx="-22" cy="-20" rx="18" ry="22" fill="#3a5a29" />
        <ellipse cx="24" cy="-14" rx="20" ry="24" fill="#3a5a29" />
        <ellipse cx="6" cy="-40" rx="14" ry="18" fill="#4a6a34" />
      </g>
      {/* Longhorn silhouette - far right */}
      <g transform="translate(1000, 380)" opacity="0.8">
        <ellipse cx="0" cy="0" rx="45" ry="18" fill="#241608" />
        <rect x="-40" y="0" width="6" height="24" fill="#241608" />
        <rect x="-20" y="0" width="6" height="24" fill="#241608" />
        <rect x="10" y="0" width="6" height="24" fill="#241608" />
        <rect x="30" y="0" width="6" height="24" fill="#241608" />
        <ellipse cx="-45" cy="-8" rx="12" ry="10" fill="#241608" />
        {/* horns */}
        <path d="M-58 -12 Q-70 -20 -74 -14 M-32 -12 Q-20 -20 -16 -14" stroke="#241608" strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function CaliforniaScene({ className = '', ariaHidden = true }) {
  return (
    <svg
      viewBox="0 0 1200 500"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden={ariaHidden || undefined}
    >
      <defs>
        <linearGradient id="ca-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFC48A" />
          <stop offset="45%" stopColor="#FFA07A" />
          <stop offset="100%" stopColor="#E86A5C" />
        </linearGradient>
      </defs>
      <rect width="1200" height="500" fill="url(#ca-sky)" />
      <circle cx="960" cy="260" r="70" fill="#FFEEB8" opacity="0.9" />
      {/* Distant San Jacinto mountains */}
      <path d="M0 320 L100 220 L200 260 L340 180 L480 250 L620 200 L780 280 L900 220 L1050 270 L1200 240 L1200 500 L0 500 Z"
        fill="#6d3a5a" opacity="0.75" />
      <path d="M0 380 L120 320 L280 370 L440 300 L580 360 L740 320 L900 380 L1050 340 L1200 360 L1200 500 L0 500 Z"
        fill="#4a2740" opacity="0.85" />
      {/* Pool line */}
      <path d="M0 460 L1200 460 L1200 500 L0 500 Z" fill="#4B9CD3" opacity="0.75" />
      <path d="M0 470 Q300 465 600 470 T1200 468" stroke="rgba(255,255,255,0.35)" strokeWidth="2" fill="none" />
      {/* Palm cluster - left */}
      <g transform="translate(180, 260)">
        <rect x="-5" y="0" width="10" height="200" rx="4" fill="#2b1a12" />
        <PalmFronds />
      </g>
      <g transform="translate(240, 280)">
        <rect x="-4" y="0" width="8" height="180" rx="4" fill="#2b1a12" />
        <PalmFronds scale="0.85" />
      </g>
      {/* Palm - right */}
      <g transform="translate(1000, 240)">
        <rect x="-5" y="0" width="10" height="220" rx="4" fill="#2b1a12" />
        <PalmFronds scale="1.05" />
      </g>
    </svg>
  );
}

// ── Shared drawing primitives ─────────────────────────────────────────────

function PalmFronds({ scale = 1 }) {
  const s = Number(scale);
  return (
    <g transform={`scale(${s})`}>
      {[
        { rot: -80, len: 90 },
        { rot: -50, len: 100 },
        { rot: -20, len: 105 },
        { rot: 10, len: 105 },
        { rot: 40, len: 100 },
        { rot: 70, len: 90 }
      ].map((f, i) => (
        <path
          key={i}
          d={`M 0 0 Q ${f.len * 0.35} ${-15} ${f.len} 0 Q ${f.len * 0.35} 15 0 0 Z`}
          fill="#2c5a2c"
          transform={`rotate(${f.rot})`}
        />
      ))}
      <circle cx="0" cy="0" r="8" fill="#1e3f1e" />
    </g>
  );
}

function SaguaroCactus({ x, y, scale = 1 }) {
  return (
    <g transform={`translate(${x}, ${y}) scale(${scale})`}>
      {/* main trunk */}
      <rect x="-14" y="0" width="28" height="150" rx="14" fill="#2f5a2f" />
      {/* left arm */}
      <rect x="-46" y="30" width="16" height="60" rx="8" fill="#2f5a2f" />
      <rect x="-46" y="16" width="16" height="20" rx="8" fill="#2f5a2f" />
      <path d="M-38 30 L-38 16 A8 8 0 0 1 -22 16 L-22 30 Z" fill="#2f5a2f" />
      {/* right arm */}
      <rect x="30" y="50" width="16" height="55" rx="8" fill="#2f5a2f" />
      <rect x="30" y="36" width="16" height="20" rx="8" fill="#2f5a2f" />
      {/* subtle ribs */}
      <line x1="-6" y1="10" x2="-6" y2="140" stroke="#1c3d1c" strokeWidth="1" opacity="0.5" />
      <line x1="6" y1="10" x2="6" y2="140" stroke="#1c3d1c" strokeWidth="1" opacity="0.5" />
    </g>
  );
}

// ── Public router: pick a scene by destination slug ───────────────────────

const scenes = {
  florida: FloridaScene,
  arizona: ArizonaScene,
  texas: TexasScene,
  california: CaliforniaScene
};

export function DestinationScene({ slug, className, ariaHidden }) {
  const Scene = scenes[slug];
  if (!Scene) return null;
  return <Scene className={className} ariaHidden={ariaHidden} />;
}

// ── Hero image with photo fallback ────────────────────────────────────────
// If a destination has `heroImage` set (a URL to an Unsplash / Pexels photo),
// render that; otherwise (or if the photo fails to load) render our
// license-free SVG scene.
export function DestinationHeroImage({ destination, className = '', height = 'h-56 sm:h-72 lg:h-80' }) {
  if (!destination) return null;

  if (destination.heroImage) {
    return (
      <ClientHeroPhoto
        src={destination.heroImage}
        alt={destination.heroImageAlt || `${destination.name} snowbird scenery`}
        fallbackSlug={destination.slug}
        className={className}
        height={height}
      />
    );
  }

  return (
    <div className={`relative overflow-hidden ${height} ${className}`}>
      <DestinationScene slug={destination.slug} className="absolute inset-0 h-full w-full" />
    </div>
  );
}

// A photo tile that reveals the SVG fallback if the image fails to load.
// Uses a CSS background so a 404 simply paints nothing and the SVG shows through —
// no event handlers needed, so this stays safe to render from Server Components.
function ClientHeroPhoto({ src, alt, fallbackSlug, className, height }) {
  return (
    <div
      className={`relative overflow-hidden ${height} ${className}`}
      role="img"
      aria-label={alt}
    >
      <DestinationScene slug={fallbackSlug} className="absolute inset-0 h-full w-full" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${src}')` }}
      />
      {/* Subtle dark overlay to improve any overlaid text */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
    </div>
  );
}
