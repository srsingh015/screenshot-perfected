import { Link } from "@tanstack/react-router";
import { site, mapsUrl, imageDisclosure } from "@/data/site";
import { VegMark, houndstoothStyle } from "@/components/dolce";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-pistachio-800 text-limewash">
      <div aria-hidden="true" className="h-10 w-full" style={houndstoothStyle()} />
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        <div>
          <p
            className="text-2xl"
            style={{ fontFamily: "var(--font-jost)", letterSpacing: "0.18em" }}
          >
            {site.wordmark}
          </p>
          <p className="mt-1 text-[14px] text-pistachio-100">{site.subLockup}</p>
          <p className="mt-1 text-[13px] text-pistachio-400">
            By {site.parentBrand} · {site.devanagari}
          </p>
          <span className="mt-4 flex items-center gap-2 rounded-[4px] bg-limewash px-3 py-2 text-ink">
            <VegMark size={18} withWords />
          </span>
        </div>

        <div>
          <p className="eyebrow text-pistachio-400">Find us</p>
          <address className="mt-3 text-[15px] not-italic text-pistachio-100">
            {site.address.line1}
            <br />
            {site.address.line2}
            <br />
            {site.address.landmark}
            <br />
            {site.address.locality}, {site.address.city}
            <br />
            {site.address.state} {site.address.pin}
          </address>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block text-[15px] underline underline-offset-4"
          >
            Open in Google Maps
          </a>
        </div>

        <div>
          <p className="eyebrow text-pistachio-400">Talk to us</p>
          <a href={site.phoneHref} className="mt-3 block font-mono text-[17px]">
            {site.phoneDisplay}
          </a>
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="mt-2 block text-[15px] underline underline-offset-4"
          >
            Instagram @dolceby21st
          </a>
          <p className="mt-4 text-[14px] text-pistachio-100">
            Hours vary by day and season — one call gets you today's timings.
          </p>
          <a href={site.phoneHref} className="btn-secondary mt-3 border-limewash text-limewash">
            Call to confirm today's timings
          </a>
        </div>

        <div>
          <p className="eyebrow text-pistachio-400">More</p>
          <ul className="mt-3 space-y-2 text-[15px]">
            {[
              ["/menu", "Full menu"],
              ["/menu/upwas", "Upwas menu"],
              ["/reserve", "Reserve a table"],
              ["/celebrations", "Celebrations & cakes"],
              ["/about", "About Dolce"],
              ["/faq", "Questions"],
              ["/order-online", "Delivery & takeaway"],
              ["/privacy", "Privacy"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to!} className="underline underline-offset-4">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-pistachio-400/40 px-5 py-6 sm:px-8">
        <div className="mx-auto w-full max-w-6xl space-y-2 text-[14px] text-pistachio-100">
          <p className="font-mono">FSSAI Lic. No. {site.fssai}</p>
          <p>
            Prices are in ₹. Please ask for the current menu at the table.
          </p>
          <p>{imageDisclosure}</p>
          <p className="text-pistachio-400">
            © {new Date().getFullYear()} {site.listedName}. {site.address.city}, {site.address.state}.
          </p>
        </div>
      </div>
    </footer>
  );
}
