import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { site } from "@/data/site";
import { VegMark } from "@/components/dolce";

const nav = [
  { to: "/menu", label: "Menu" },
  { to: "/menu/upwas", label: "Upwas" },
  { to: "/pure-veg", label: "Pure veg" },
  { to: "/celebrations", label: "Celebrations" },
  { to: "/the-room", label: "The room" },
  { to: "/find-us", label: "Find us" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-limewash/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-5 py-3 sm:px-8">
        <Link to="/" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span
            className="text-xl leading-none sm:text-2xl"
            style={{ fontFamily: "var(--font-jost)", letterSpacing: "0.18em", fontWeight: 500 }}
          >
            {site.wordmark}
          </span>
          <span className="hidden text-[13px] text-stone sm:inline">{site.subLockup}</span>
        </Link>

        <VegMark size={16} className="ml-1 shrink-0" />

        <nav className="ml-auto hidden items-center gap-4 lg:flex" aria-label="Main">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="eyebrow whitespace-nowrap text-[12px] text-ink hover:text-pistachio-600"
              activeProps={{ className: "eyebrow whitespace-nowrap text-[12px] text-pistachio-600" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <a
          href={site.phoneHref}
          className="ml-4 hidden whitespace-nowrap font-mono text-[13px] text-pistachio-800 underline underline-offset-4 xl:block"
        >
          ⌛ Timings — call
        </a>

        <Link
          to="/reserve"
          className="btn-primary ml-4 hidden whitespace-nowrap text-[13px] lg:inline-flex"
        >
          Reserve
        </Link>


        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="btn-secondary ml-auto px-4 text-[14px] lg:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <div className="border-t border-rule bg-limewash-2 px-5 py-4 lg:hidden">
          <nav className="flex flex-col" aria-label="Main">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="border-b border-rule py-3 text-[17px]"
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <Link to="/reserve" onClick={() => setOpen(false)} className="btn-primary">
              Reserve a table
            </Link>
            <a href={site.phoneHref} className="btn-secondary">
              Call {site.phoneDisplay}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
