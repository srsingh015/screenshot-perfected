import { createFileRoute, Link } from "@tanstack/react-router";
import { menu } from "@/data/menu";
import { site, ratings } from "@/data/site";
import { Eyebrow, RatingSource, Section, TravelBadge } from "@/components/dolce";

export const Route = createFileRoute("/order-online")({
  head: () => ({
    meta: [
      { title: "Delivery & takeaway | Dolce Bistro & Pâtisserie, Nashik" },
      {
        name: "description",
        content:
          "What travels well from Dolce, Nashik, and what is better eaten at the table. An honest guide to ordering our vegetarian food for delivery or takeaway.",
      },
      { property: "og:title", content: "Delivery & takeaway from Dolce, Nashik" },
      {
        property: "og:description",
        content: "Some dishes travel. Some are better at the table. Here is which is which.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OrderOnline,
});

function OrderOnline() {
  const travels = menu.filter((s) => s.travels === "well");
  const table = menu.filter((s) => s.travels === "table");
  const delivery = ratings[2];

  return (
    <Section>
      <Eyebrow>Delivery & takeaway</Eyebrow>
      <h1 className="mt-2 text-[38px] sm:text-[52px]">Some dishes travel. Some don't.</h1>
      <p className="measure mt-4 text-[18px]">
        Our delivery rating is lower than our dine-in rating, and the reason is honest: risotto is
        stirred to order, sushi is rolled to order, sizzlers arrive on a hot plate, and plated
        desserts are assembled a few minutes before you eat them. None of that survives 25 minutes
        on a scooter.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:max-w-2xl">
        <RatingSource r={ratings[1]} />
        <RatingSource r={delivery} />
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-[24px]">Order these</h2>
          <p className="mt-1 text-[16px] text-stone">They hold up in a box.</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {travels.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/menu/$section"
                  params={{ section: s.slug }}
                  className="inline-block rounded-[4px] border border-rule bg-limewash-2 px-3 py-2 text-[15px]"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-[24px]">Eat these here</h2>
          <p className="mt-1 text-[16px] text-stone">
            We would rather you had them at their best.
          </p>
          <ul className="mt-4 border-b border-rule">
            {table.map((s) => (
              <li key={s.slug} className="index-row grid-cols-[1fr_auto] gap-6">
                <Link to="/menu/$section" params={{ section: s.slug }} className="text-[19px]">
                  {s.name}
                </Link>
                <TravelBadge travels="table" />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 rounded-[4px] border border-rule bg-limewash-2 p-5">
        <h2 className="text-[22px]">How to order</h2>
        <p className="mt-2 text-[16px]">
          Takeaway and delivery are available. Call us directly for takeaway — it is the quickest and
          nothing sits waiting. Our aggregator listings and any minimum order or delivery radius are{" "}
          <span className="font-mono">to be confirmed</span> with the restaurant.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href={site.phoneHref} className="btn-primary">
            Call {site.phoneDisplay}
          </a>
          <Link to="/reserve" className="btn-secondary">
            Or reserve a table
          </Link>
        </div>
      </div>
    </Section>
  );
}
