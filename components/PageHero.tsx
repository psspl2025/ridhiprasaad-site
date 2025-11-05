"use client";

import Image from "next/image";
import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { useId } from "react";

/* -------------------------------- Types -------------------------------- */

type Align = "left" | "center" | "right";
type Dir = "r" | "l" | "t" | "b" | "tr" | "tl" | "br" | "bl";

type CustomProps = {
  /** Main heading */
  title: string;
  /** Optional subheading */
  subtitle?: string;

  /** Background image src, e.g. "/hero/services-hero.webp" */
  image: string;

  /** If the image conveys meaning, set decorative=false and provide imageAlt */
  decorative?: boolean;
  imageAlt?: string;

  /** Optional UI blocks */
  actions?: ReactNode;
  breadcrumb?: ReactNode;

  /** Tailwind classes appended after bg-gradient-to-* (e.g. "from-slate-900/70 via-slate-900/40 to-transparent") */
  overlayClassName?: string;
  /** Gradient direction */
  overlayDir?: Dir;

  /** Optional bottom fade into page background */
  bottomFade?: boolean;

  /** Edge-to-edge hero that breaks out of containers */
  fullBleed?: boolean;

  /** Preload image on critical pages */
  priority?: boolean;

  /** Extra classes for the <Image/> */
  imageClassName?: string;

  /** Object position for focal point, e.g. "center 30%" */
  objectPosition?: string;

  /** Next/Image placeholder options */
  placeholder?: "blur" | "empty";
  blurDataURL?: string;

  /** Minimum height utility classes (unified default height site-wide) */
  minH?: string; // e.g. "min-h-[320px] md:min-h-[440px]"

  /** Text alignment inside hero */
  align?: Align;

  /** Background fallback color while image loads */
  bgColor?: string; // tailwind color classes, e.g. "bg-slate-900"
};

type Props = CustomProps & Omit<HTMLAttributes<HTMLElement>, keyof CustomProps>;

/* ------------------------------ Component ------------------------------ */

export default function PageHero({
  title,
  subtitle,
  image,
  decorative = true,
  imageAlt = "",
  actions,
  breadcrumb,
  overlayClassName = "from-slate-900/70 via-slate-900/40 to-transparent",
  overlayDir = "r",
  bottomFade = false,
  fullBleed = false,
  priority = false,
  imageClassName = "",
  objectPosition,
  placeholder = "empty",
  /** alias so identifier exists in scope when passing to <Image/> */
  blurDataURL: blurDataURLProp,
  // ✅ unified default height across the site
  minH = "min-h-[320px] md:min-h-[440px]",
  align = "left",
  bgColor = "bg-slate-900",
  className,
  ...rest
}: Props) {
  const headingId = useId();

  const frame = fullBleed
    ? "mx-[calc(50%-50vw)] w-screen rounded-none border-0"
    : "rounded-3xl border border-gray-200";

  const dirMap: Record<Dir, string> = {
    r: "bg-gradient-to-r",
    l: "bg-gradient-to-l",
    t: "bg-gradient-to-t",
    b: "bg-gradient-to-b",
    tr: "bg-gradient-to-tr",
    tl: "bg-gradient-to-tl",
    br: "bg-gradient-to-br",
    bl: "bg-gradient-to-bl",
  };

  const alignWrap =
    align === "center"
      ? "items-center text-center"
      : align === "right"
      ? "items-end text-right"
      : "items-start text-left";

  return (
    <section
      className={`relative isolate overflow-hidden ${frame} ${bgColor} ${minH} ${className ?? ""}`}
      aria-labelledby={headingId}
      {...rest}
    >
      {/* Background image + overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt={decorative ? "" : imageAlt}
          aria-hidden={decorative ? "true" : undefined}
          role={decorative ? "presentation" : undefined}
          fill
          sizes="100vw"
          priority={priority}
          className={`h-full w-full object-cover ${imageClassName}`}
          style={objectPosition ? ({ objectPosition } as CSSProperties) : undefined}
          placeholder={placeholder}
          /* only pass blurDataURL when using blur placeholder */
          blurDataURL={placeholder === "blur" ? blurDataURLProp : undefined}
        />

        {/* Gradient overlay */}
        <div className={`absolute inset-0 ${dirMap[overlayDir]} ${overlayClassName}`} />

        {/* Optional bottom fade to blend into page */}
        {bottomFade && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-black/10" />
        )}
      </div>

      {/* Foreground content (constrained to site width) */}
      <div className="relative z-10 content py-14 md:py-16">
        <div className={`flex flex-col gap-0 ${alignWrap}`}>
          {breadcrumb && (
            <nav className="mb-3 text-xs text-white/80" aria-label="Breadcrumb">
              {breadcrumb}
            </nav>
          )}

          <h1
            id={headingId}
            className="font-display text-4xl md:text-5xl font-extrabold text-white drop-shadow-sm"
          >
            {title}
          </h1>

          {subtitle && <p className="mt-3 max-w-3xl text-white/90">{subtitle}</p>}

          {actions && <div className="mt-6 flex flex-wrap gap-3">{actions}</div>}
        </div>
      </div>
    </section>
  );
}
