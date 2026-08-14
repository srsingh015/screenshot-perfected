import { createFileRoute, Link } from "@tanstack/react-router";
import { site, mapsUrl } from "@/data/site";
import { Eyebrow, Section, TerrazzoDivider, VegMark } from "@/components/dolce";

export const Route = createFileRoute("/find-us")({
  head: () => ({
    meta: [
      { title: "Find us & contact | Dolce Bistro & Pâtisserie, Nashik" },
      {
        name: "description",
        content:
          "Dolce Bistro & Pâtisserie: 39, Shop 1, Sumangal Business Court, Shraddha Mall Marg, Krishi Nagar, Sharanpur, Nashik 422005. Call +91 78757 52100.",
      },
      { property: "og:title", content: "Find Dolce — Sharanpur, Nashik" },
      {
        property: "og:description",
        content: "Near Shraddha Petrol Pump, Sumangal Business Court. Free parking.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FindUs,
});

function FindUs() {
  return (
    <>
      <Section>
        <Eyebrow>Find us</Eyebrow>
        <h1 className="mt-2 text-[38px] sm:text-[52px]">Sharanpur, Nashik</h1>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-[22px]">Address</h2>
            <address className="mt-2 text-[17px] not-italic">
              {site.listedName}
              <br />
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
            <p className="mt-3 font-mono text-[15px] text-stone">
              {site.lat}, {site.lng}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={mapsUrl} target="_blank" rel="noreferrer" className="btn-primary">
                Get directions
              </a>
              <a href={site.phoneHref} className="btn-secondary">
                Call {site.phoneDisplay}
              </a>
            </div>

            <h2 className="mt-10 text-[22px]">Parking</h2>
            <p className="mt-2 text-[17px]">
              Free parking is listed for the building. Call ahead on a festival evening and we will
              tell you where to leave the car.
            </p>

            <h2 className="mt-10 text-[22px]">Facilities</h2>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-[16px] text-stone">
              {site.facilities.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[22px]">Hours</h2>
            <p className="mt-2 text-[16px] text-stone">
              Our hours are listed differently across platforms, so rather than publish a guess we
              have left them open. One call gets you today's timings.
            </p>
            <a href={site.phoneHref} className="btn-primary mt-4">
              Call to confirm today's timings
            </a>
            <p className="mt-6 border-t border-rule pt-3 text-[16px] text-stone">
              Kitchen timings shift with the season and with festival evenings, so we publish none
              rather than the wrong ones.
            </p>

            <div className="mt-6 flex items-center gap-2 rounded-[4px] border border-rule bg-limewash-2 px-3 py-2">
              <VegMark size={18} withWords />
            </div>
          </div>
        </div>
      </Section>

      <TerrazzoDivider />

      <Section tinted>
        <h2 className="text-[24px]">Before you set out</h2>
        <p className="measure mt-3">
          Price is around {site.priceBand} ({site.priceBandSource}), or {site.priceForTwo}. Menu
          prices themselves are being confirmed with the kitchen.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/reserve" className="btn-primary">
            Reserve a table
          </Link>
          <Link to="/menu" className="btn-secondary">
            See the menu
          </Link>
        </div>
      </Section>
    </>
  );
}
