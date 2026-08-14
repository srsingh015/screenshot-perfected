import { type ReactNode } from "react";
import { site, type ratings } from "@/data/site";

/* ── Pending states ─────────────────────────────────────────────
   Prices render as an em-dash in the numeral column, with a single
   quiet notice per page. Timings get one hairline note. Everything
   else unconfirmed is omitted entirely — never placeholdered. */

export function PriceDash() {
  return (
    <span className="num text-stone" aria-label="Price not published">
      —
    </span>
  );
}

export function Notice({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <p className="flex flex-wrap items-baseline gap-3 border-t border-rule pt-3 text-[16px] text-stone">
      <span className="label shrink-0 text-pistachio-600">{label}</span>
      <span className="measure">{children}</span>
    </p>
  );
}

export function PricesNotice() {
  return (
    <Notice label="Prices">
      Our full price list is being finalised for the website. Please call{" "}
      <a href={site.phoneHref} className="text-ink underline underline-offset-4">
        {site.phoneDisplay}
      </a>{" "}
      or ask for a menu at the table.
    </Notice>
  );
}

export function TimingsNotice() {
  return (
    <div className="border-t border-rule pt-3">
      <p className="flex flex-wrap items-baseline gap-3 text-[16px] text-stone">
        <span className="label shrink-0 text-pistachio-600">Timings</span>
        <span className="measure">
          We are confirming our published hours. Please call to check today’s timings.
        </span>
      </p>
      <a href={site.phoneHref} className="link-rule mt-3 inline-block text-ink">
        Call {site.phoneDisplay}
      </a>
    </div>
  );
}

/* ── Section label device: 01 ——————— THE PASTRY COUNTER ─────── */
export function SectionLabel({
  n,
  children,
  tone = "stone",
}: {
  n?: string;
  children: ReactNode;
  tone?: "stone" | "light";
}) {
  return (
    <div
      className={`flex items-center gap-4 ${tone === "light" ? "text-pistachio-100" : "text-stone"}`}
    >
      {n ? <span className="label text-pistachio-600">{n}</span> : null}
      <span
        aria-hidden="true"
        className={`h-px flex-1 ${tone === "light" ? "bg-pistachio-400/50" : "bg-rule"}`}
      />
      <span className="label">{children}</span>
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-4 text-stone">
      <span className="label">{children}</span>
      <span aria-hidden="true" className="h-px flex-1 bg-rule" />
    </div>
  );
}

/* ── The pure-veg mark: FSSAI green square, drawn in code ─────── */
export function VegMark({
  size = 18,
  withWords = false,
  className = "",
}: {
  size?: number;
  withWords?: boolean;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        role="img"
        aria-label="Vegetarian mark"
        className="shrink-0"
      >
        <rect
          x="1.5"
          y="1.5"
          width="21"
          height="21"
          rx="0"
          fill="none"
          stroke="var(--veg)"
          strokeWidth="2.5"
        />
        <circle cx="12" cy="12" r="6" fill="var(--veg)" />
      </svg>
      {withWords ? (
        <span className="label">100% Vegetarian Kitchen</span>
      ) : null}
    </span>
  );
}

/* ── Terrazzo: deterministic SVG, 12%, used in three places only ── */
function chips(seed: number, n: number) {
  let s = seed;
  const rnd = () => ((s = (s * 1103515245 + 12345) % 2147483648) / 2147483648);
  const fills = ["var(--terrazzo)", "var(--pistachio-400)", "var(--caramel-600)", "var(--stone)"];
  return Array.from({ length: n }, (_, i) => ({
    cx: rnd() * 340,
    cy: rnd() * 340,
    rx: 4 + rnd() * 5,
    ry: 3 + rnd() * 4,
    rot: rnd() * 180,
    fill: fills[i % fills.length],
  }));
}

export function TerrazzoDivider({
  className = "",
  height = 64,
}: {
  className?: string;
  height?: number;
}) {
  return (
    <div
      aria-hidden="true"
      className={`w-full overflow-hidden bg-limewash-2 ${className}`}
      style={{ height }}
    >
      <svg className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="terrazzo" width="340" height="340" patternUnits="userSpaceOnUse">
            <rect width="340" height="340" fill="var(--limewash-2)" />
            <g opacity="0.12">
              {chips(7, 110).map((c, i) => (
                <ellipse
                  key={i}
                  cx={c.cx}
                  cy={c.cy}
                  rx={c.rx}
                  ry={c.ry}
                  fill={c.fill}
                  transform={`rotate(${c.rot} ${c.cx} ${c.cy})`}
                />
              ))}
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#terrazzo)" />
      </svg>
    </div>
  );
}

/* Houndstooth: reservation panel only, 3% */
export function houndstoothStyle(): React.CSSProperties {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><g fill='%23241C17' fill-opacity='0.03'><path d='M0 0h12v12H0z'/><path d='M12 12h12v12H12z'/><path d='M12 0l12 12H12z'/><path d='M0 12l12 12H0z'/></g></svg>`;
  return { backgroundImage: `url("data:image/svg+xml,${svg}")`, backgroundRepeat: "repeat" };
}

/* ── Ratings, always attributed and dated — as ruled rows ────── */
export function RatingSource({ r }: { r: (typeof ratings)[number] }) {
  return (
    <div className="index-row grid-cols-[auto_1fr_auto] gap-4">
      <p className="num text-[22px]">{r.score} ★</p>
      <div>
        <p className="text-[17px]">{r.platform}</p>
        {"sub" in r && r.sub ? <p className="text-[15px] text-stone">{r.sub}</p> : null}
      </div>
      <p className="label text-stone">
        {r.count} · read {r.read}
      </p>
    </div>
  );
}

/* ── Layout helpers ───────────────────────────────────────────── */
export function Section({
  children,
  className = "",
  tinted = false,
  id,
  scale = 1,
  bleed = false,
}: {
  children: ReactNode;
  className?: string;
  tinted?: boolean;
  id?: string;
  /** deliberate variation in vertical rhythm: 0.7, 1 or 1.4 */
  scale?: number;
  bleed?: boolean;
}) {
  return (
    <section
      id={id}
      className={`${tinted ? "bg-limewash-2" : ""} ${className}`}
      style={{
        paddingTop: `calc(var(--space-section) * ${scale})`,
        paddingBottom: `calc(var(--space-section) * ${scale})`,
      }}
    >
      <div className={bleed ? "" : "shell"}>{children}</div>
    </section>
  );
}

/* Travels-well marker, set as label text — never a coloured pill */
export function TravelBadge({ travels }: { travels: "well" | "table" }) {
  return (
    <span className="label text-stone">
      {travels === "table" ? "Best at the table" : "Travels well"}
    </span>
  );
}
