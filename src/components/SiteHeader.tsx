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
    <header className="sticky top-0 z-40 border-b border-rule bg-limewash">
      <div className="shell flex h-[64px] items-center gap-4 lg:h-[72px]">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span
            className="text-[20px] leading-none sm:text-[22px]"
            style={{ fontFamily: "var(--font-jost)", letterSpacing: "0.22em", fontWeight: 500 }}
          >
            {site.wordmark}
          </span>
          <VegMark size={14} className="shrink-0" />
        </Link>

        <nav className="ml-auto hidden items-center gap-7 lg:flex" aria-label="Main">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="label border-b border-transparent pb-1 text-ink hover:border-ink"
              activeProps={{ className: "label border-b border-pistachio-600 pb-1 text-pistachio-600" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <a
          href={site.phoneHref}
          className="ml-7 hidden whitespace-nowrap text-[15px] text-ink underline underline-offset-4 xl:block"
        >
          {site.phoneDisplay}
        </a>

        <Link to="/reserve" className="btn-primary ml-7 hidden h-[44px] min-h-0 lg:inline-flex">
          Reserve
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="label ml-auto border-b border-ink pb-1 lg:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <div className="border-t border-rule bg-limewash lg:hidden">
          <nav className="shell flex flex-col" aria-label="Main">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="border-b border-rule py-4 text-[22px]"
                style={{ fontFamily: "var(--font-jost)", letterSpacing: "0.06em" }}
              >
                {n.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 py-6">
              <Link to="/reserve" onClick={() => setOpen(false)} className="btn-primary">
                Reserve a table
              </Link>
              <a href={site.phoneHref} className="btn-secondary">
                Call {site.phoneDisplay}
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
