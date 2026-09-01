export function ApiTaskManagerCover() {
    return (
        <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
            <defs>
                <linearGradient id="api-bg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#e4e4e7" />
                    <stop offset="45%" stopColor="#52525b" />
                    <stop offset="100%" stopColor="#000000" />
                </linearGradient>
                <linearGradient id="api-icon" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#1e1b4b" />
                    <stop offset="100%" stopColor="#020617" />
                </linearGradient>
                <filter id="api-shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#000000" floodOpacity="0.5" />
                </filter>
            </defs>
            <rect width="400" height="300" fill="url(#api-bg)" />
            <g
                className="origin-center transition-transform duration-500 group-hover:scale-110"
                style={{ transformBox: "fill-box" }}
            >
                <g filter="url(#api-shadow)">
                    <rect x="140" y="65" width="120" height="130" rx="34" fill="url(#api-icon)" />
                </g>
                <rect x="140" y="65" width="120" height="130" rx="34" fill="none" stroke="#ffffff" strokeOpacity="0.06" />

                <path
                    d="M200 88 L228 100 V128 C228 148 216 163 200 170 C184 163 172 148 172 128 V100 Z"
                    fill="none"
                    stroke="#818cf8"
                    strokeWidth="5"
                    strokeLinejoin="round"
                />
                <circle cx="200" cy="122" r="7" fill="#818cf8" />
                <rect x="196" y="122" width="8" height="16" rx="3" fill="#818cf8" />

                <circle cx="248" cy="80" r="12" fill="#818cf8" />
                <rect x="152" y="178" width="96" height="4" rx="2" fill="#818cf8" />
            </g>
        </svg>
    );
}