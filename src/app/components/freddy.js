// Original QuHacks artwork: Freddy keeps his duck bill, green hoodie, and laptop.
// Shared vector shapes keep every pose consistent and sharp at any screen size.
function DuckHead() {
  return (
    <g stroke="#173f30" strokeWidth="3.5" strokeLinejoin="round">
      <path d="M47 113C27 95 28 51 52 29 68 14 105 16 124 38c19 21 18 57-1 77Z" fill="#477c4b" />
      <path d="M49 96C35 68 47 38 71 33c-2-9 3-16 10-19-2 8 3 10 8 15 28-2 46 24 41 51-2 20-15 36-41 36-19 0-33-7-40-20Z" fill="#ffe79a" />
      <path d="M50 63c3-15 13-23 25-26" stroke="#fff7ce" strokeWidth="6" strokeLinecap="round" />
      <ellipse cx="67" cy="72" rx="5.5" ry="8" fill="#173f30" stroke="none" />
      <ellipse cx="106" cy="72" rx="5.5" ry="8" fill="#173f30" stroke="none" />
      <circle cx="69" cy="69" r="1.8" fill="white" stroke="none" />
      <circle cx="108" cy="69" r="1.8" fill="white" stroke="none" />
      <ellipse cx="55" cy="86" rx="8" ry="5" fill="#f3bc6d" stroke="none" opacity=".65" />
      <ellipse cx="118" cy="86" rx="8" ry="5" fill="#f3bc6d" stroke="none" opacity=".65" />
      <path d="M72 88c10-9 23-8 31 0 8 2 10 7 5 11-11 10-35 8-45 0-6-5 0-10 9-11Z" fill="#f7ae36" />
      <path d="M65 95c11 4 27 5 42 0" fill="none" stroke="#bd7626" strokeWidth="2" strokeLinecap="round" />
    </g>
  );
}

export function DuckMark() {
  return <svg viewBox="27 12 114 108" fill="none" aria-hidden="true"><DuckHead /></svg>;
}

export default function Freddy({ pose = 'coding' }) {
  const label = pose === 'wave' ? 'waving hello' : pose === 'note' ? 'planning the hackathon' : 'coding on a laptop';
  return (
    <svg viewBox="0 0 190 210" fill="none" role="img" aria-label={`Freddy, the QuHacks duck, ${label}`}>
      <ellipse cx="96" cy="199" rx="66" ry="7" fill="#092a20" opacity=".2" />
      <g stroke="#173f30" strokeWidth="3.5" strokeLinejoin="round" strokeLinecap="round">
        <path d="M66 180c-7 4-19 7-20 13 9 4 25 5 37 0l1-13m26 0 2 14c14 4 30 1 37-3-4-6-17-10-24-12" fill="#f7ae36" />
        <path d="M60 105c-14 10-19 35-17 58 1 15 20 25 44 26 28 2 52-8 54-27 2-22-8-45-23-55Z" fill="#477c4b" />
        <path d="M56 159c22 8 52 9 77 0l-2 18c-23 11-47 8-70 0Z" fill="#356340" stroke="none" />
        {pose === 'wave' ? <>
          <path d="M122 117c15-6 18-19 20-36 0-9 9-15 15-8 5 6 2 13 2 19 12-7 20-2 17 8-7 26-24 44-43 46" fill="#ffe79a" />
          <path d="M127 115c6-2 12-6 16-11l16 15c-6 13-16 23-26 27" fill="#477c4b" />
          <path d="M49 120c-20 10-25 34-13 41 8 5 16-8 23-20" fill="#ffe79a" />
          <path d="M47 116c-8 6-14 15-17 22l21 12 11-20" fill="#477c4b" />
          <path d="M160 54 166 44m7 23 11-3" stroke="#e6c36c" />
        </> : <>
          <path d="M47 122c-20 10-18 39-5 43l18-22m63-23c19 5 27 34 14 43l-18-15" fill="#477c4b" />
        </>}
        <path d="m65 106 10 17 13-9 15 10 14-17" fill="#36653e" />
        <path d="m79 121-2 19m24-17 2 18" stroke="#c9d69e" strokeWidth="2.5" />
        <path d="M86 156c-1-13 7-19 20-22 0 15-7 24-20 22Z" fill="#cfdf9d" stroke="none" />
        <path d="m87 159 12-16" stroke="#c0d58d" strokeWidth="2" />

      </g>
      <DuckHead />
      {pose === 'coding' && <g stroke="#173f30" strokeWidth="3.5" strokeLinejoin="round">
        <path d="M29 142h96a5 5 0 0 1 5 4l9 43H45Z" fill="#234a3d" />
        <path d="M32 144h89l8 36H41Z" fill="#38614b" stroke="none" />
        <path d="m72 156-8 7 8 6m24-13 8 7-8 6m-11-16-7 20" stroke="#e2eab8" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M37 187h113v5c-25 8-90 9-113 0Z" fill="#9fae78" />
        <path d="M139 161c14-6 24 5 17 14-4 5-11 6-19 5" fill="#ffe79a" />
      </g>}
      {pose === 'note' && <g stroke="#173f30" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round">
        <rect x="47" y="136" width="79" height="56" rx="5" fill="#d1a367" transform="rotate(-7 47 136)" />
        <path d="m53 140 63-8 5 47-63 8Z" fill="#fff0c2" stroke="none" />
        <path d="m69 136 28-3-1-8-25 3Z" fill="#597b4b" />
        <path d="m67 150 8 3 5-9m5 4 22-3m-38 20 8 3 5-9m5 4 22-3" stroke="#597b4b" strokeWidth="2" />
        <path d="M128 149c15-5 18 12 8 17l-9 2" fill="#ffe79a" />
        <path d="m145 136 12-21" stroke="#f2cc69" strokeWidth="5" />
      </g>}
    </svg>
  );
}
