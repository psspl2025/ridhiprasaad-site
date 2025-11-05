// First + last initials; ignore common honorifics
export function initials(name: string) {
  const cleaned = name.trim().replace(/^(mr|ms|mrs|dr|er|sri|smt)\.?\s+/i, "");
  const parts = cleaned.split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return ((parts[0][0] ?? "") + (parts.at(-1)?.[0] ?? "")).toUpperCase();
}

const AVATAR_COLORS = [
  "bg-amber-100 text-amber-800",
  "bg-blue-100 text-blue-800",
  "bg-emerald-100 text-emerald-800",
  "bg-purple-100 text-purple-800",
  "bg-rose-100 text-rose-800",
];

export function colorFor(name?: string) {
  const n = (name ?? "").trim();
  if (!n) return AVATAR_COLORS[0];
  const idx = (n.charCodeAt(0) + n.length) % AVATAR_COLORS.length;
  return AVATAR_COLORS[idx];
}
