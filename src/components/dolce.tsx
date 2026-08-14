import { type ReactNode } from "react";
import { site, type ratings } from "@/data/site";

/* ── ConfirmPending ─────────────────────────────────────────────
   A missing fact must look missing. Never replaced by a guess. */
export function ConfirmPending({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center gap-1 rounded-[4px] border border-dashed border-caramel-600 bg-caramel-100 px-2 py-0.5 font-mono text-[15px] text-ink"
      title={`Awaiting confirmation from Dolce. Call ${site.phoneDisplay}.`}
      aria-label={`${label} — to be confirmed. Please call ${site.phoneDisplay}.`}
      style={{ cursor: "help" }}
    >
      ⌛ To confirm — {label}
    </span>
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
          rx="2"
          fill="none"
          stroke="var(--veg)"
          strokeWidth="2.5"
        />
        <circle cx="12" cy="12" r="6" fill="var(--veg)" />
      </svg>
      {withWords ? (
        <span className="eyebrow text-[12px] leading-tight sm:text-[13px]">
          100% Vegetarian Kitchen
        </span>
      ) : null}
    </span>
  );
}

/* ── Terrazzo: deterministic SVG, the floor of the room ───────── */
function chips(seed: number, n: number) {
  let s = seed;
  const rnd = () => ((s = (s * 1103515245 + 12345) % 2147483648) / 2147483648);
  const fills = ["var(--terrazzo)", "var(--pistachio-100)", "var(--caramel-100)", "var(--rule)"];
  return Array.from({ length: n }, (_, i) => ({
    x: rnd() * 340,
    y: rnd() * 340,
    r: 2 + rnd() * 7,
    rot: rnd() * 90,
    fill: fills[i % fills.length],
  }));
}

export function TerrazzoDivider({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`h-16 w-full overflow-hidden ${className}`}>
      <svg className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="terrazzo" width="340" height="340" patternUnits="userSpaceOnUse">
            <rect width="340" height="340" fill="var(--limewash-2)" />
            <g opacity="0.55">
              {chips(7, 90).map((c, i) => (
                <rect
                  key={i}
                  x={c.x}
                  y={c.y}
                  width={c.r * 2}
                  height={c.r}
                  rx="1"
                  fill={c.fill}
                  transform={`rotate(${c.rot} ${c.x} ${c.y})`}
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

export function houndstoothStyle(): React.CSSProperties {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><g fill='%23241C17' fill-opacity='0.06'><path d='M0 0h12v12H0z'/><path d='M12 12h12v12H12z'/><path d='M12 0l12 12H12z'/><path d='M0 12l12 12H0z'/></g></svg>`;
  return { backgroundImage: `url("data:image/svg+xml,${svg}")`, backgroundRepeat: "repeat" };
}

/* ── Ratings, always attributed and dated ─────────────────────── */
export function RatingSource({ r }: { r: (typeof ratings)[number] }) {
  return (
    <div className="card-dolce p-4">
      <p className="font-mono text-2xl">{r.score} ★</p>
      <p className="mt-1 text-[15px] font-medium">{r.platform}</p>
      <p className="text-[14px] text-stone">
        {r.count} · read {r.read}
      </p>
      {"sub" in r && r.sub ? <p className="mt-2 text-[14px] text-stone">{r.sub}</p> : null}
    </div>
  );
}

/* ── Layout helpers ───────────────────────────────────────────── */
export function Section({
  children,
  className = "",
  tinted = false,
  id,
}: {
  children: ReactNode;
  className?: string;
  tinted?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`${tinted ? "bg-limewash-2" : ""} px-5 py-14 sm:px-8 sm:py-20 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow text-pistachio-600">{children}</p>;
}

export function TravelBadge({ travels }: { travels: "well" | "table" }) {
  return travels === "table" ? (
    <span className="rounded-[4px] bg-pistachio-100 px-2 py-0.5 font-mono text-[13px] text-pistachio-800">
      Best at the table
    </span>
  ) : (
    <span className="rounded-[4px] bg-limewash-2 px-2 py-0.5 font-mono text-[13px] text-stone">
      Travels well
    </span>
  );
}
