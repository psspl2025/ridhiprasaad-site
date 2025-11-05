"use client";
import { useSearchParams } from "next/navigation";

export default function NotFoundClient() {
  const params = useSearchParams();
  const ref = params.get("ref");
  return ref ? <p className="mt-2 text-gray-600">Ref: {ref}</p> : null;
}
