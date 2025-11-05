export default function NameSplit({ full }: { full: string }) {
  const parts = full.trim().split(/\s+/);
  const first = parts.shift() || "";
  return (
    <span>
      <span className="font-semibold text-gray-900">{first}</span>{" "}
      <span className="text-gray-800">{parts.join(" ")}</span>
    </span>
  );
}
