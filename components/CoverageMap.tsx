export default function CoverageMap({ style }: { style: "outline" | "heat" | "pins" }) {
  const indiaPath =
    "M45,20 L75,20 L88,28 L96,25 L110,33 L115,45 L120,55 L115,70 L120,82 L112,90 L104,94 L103,104 L92,112 L82,112 L70,120 L63,126 L55,125 L46,116 L42,100 L46,90 L40,78 L42,64 L35,54 L36,40 L43,34 Z";
  const mahaPath =
    "M70,82 L78,78 L86,82 L92,80 L98,84 L101,92 L96,98 L89,100 L84,96 L78,98 L72,94 Z";

  const mahaPins: Array<[number, number]> = [
    [92, 98], [86, 95], [82, 92], [78, 96], [74, 92], [88, 100], [80, 100], [76, 102], [72, 104],
  ];

  return (
    <svg viewBox="0 0 160 150" className="h-48 w-full">
      {style === "heat" && (
        <defs>
          <radialGradient id="mhHeat" cx="60%" cy="65%" r="45%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.85" />
            <stop offset="70%" stopColor="#f59e0b" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.05" />
          </radialGradient>
        </defs>
      )}

      <path d={indiaPath} className="fill-white stroke-gray-300" strokeWidth="1.3" vectorEffect="non-scaling-stroke" />
      <path
        d={mahaPath}
        className={style === "heat" ? "fill-[url(#mhHeat)] stroke-amber-600/50" : "fill-white stroke-amber-600"}
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
      />

      {style === "pins" &&
        mahaPins.map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="2.7" className="fill-amber-600" />
            <circle cx={x} cy={y} r="5.5" className="fill-amber-500/15" />
          </g>
        ))}

      {style === "outline" && <text x="66" y="90" className="text-[9px] fill-gray-700">Maharashtra</text>}
      <text x="48" y="30" className="text-[8px] fill-gray-500">India (schematic)</text>
    </svg>
  );
}
