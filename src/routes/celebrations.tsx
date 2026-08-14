import { createFileRoute, Link } from "@tanstack/react-router";
import dessertImg from "@/assets/dessert.jpg";
import { site, imageDisclosure } from "@/data/site";
import { Eyebrow, Section, TerrazzoDivider } from "@/components/dolce";

export const Route = createFileRoute("/celebrations")({
  head: () => ({
    meta: [
      { title: "Celebration cakes & group bookings | Dolce, Nashik" },
      {
        name: "description",
        content:
          "Birthday cakes, the Pull Me Up cake, custom orders and group bookings at Dolce Bistro & Pâtisserie, Sharanpur Road, Nashik. All vegetarian.",
      },
      { property: "og:title", content: "Celebrations & cakes at Dolce, Nashik" },
      {
        property: "og:description",
        content: "Cakes made in-house, and a room built for a long table.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Celebrations,
});

function Celebrations() {
  return (
    <>
      <Section>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Celebrations</Eyebrow>
            <h1 className="mt-2 text-[38px] sm:text-[52px]">Cakes, and a table for everyone</h1>
            <p className="measure mt-4 text-[18px]">
              The pâtisserie bakes every day, so a celebration cake is made here rather than bought
              in. The Pull Me Up cake is finished in front of you at the table — the wrap is lifted
              and the ganache falls over the sponge.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={site.phoneHref} className="btn-warm">
                Call to order a cake
              </a>
              <Link
                to="/menu/$section"
                params={{ section: "plated-desserts" }}
                className="btn-secondary"
              >
                See plated desserts
              </Link>
            </div>
          </div>
          <div>
            <img
              src={dessertImg}
              alt="A slice of tiramisu and a chocolate drip cake on marble beside an espresso."
              loading="lazy"
              width={1000}
              height={1000}
              data-generated="true"
              className="w-full rounded-[4px] border border-rule object-cover"
            />
            <p className="mt-2 text-[14px] text-stone">{imageDisclosure}</p>
          </div>
        </div>
      </Section>

      <TerrazzoDivider />

      <Section tinted>
        <h2 className="text-[30px]">Custom cake orders</h2>
        <p className="measure mt-3">
          Everything below has to come from the restaurant rather than from us, so we have left it
          blank rather than guessed. One phone call settles all of it.
        </p>
        <ul className="mt-10 border-b border-rule">
          {[
            "Lead time for a custom cake",
            "Cake sizes and servings",
            "Eggless availability",
            "Flavour list for custom orders",
            "Advance payment and cancellation",
          ].map((label, idx) => (
            <li key={label} className="index-row grid-cols-[auto_1fr] gap-6">
              <span className="label text-pistachio-600">{String(idx + 1).padStart(2, "0")}</span>
              <span className="text-[17px]">{label}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-[16px] text-stone">
          All five are settled in one phone call — the pâtisserie answers these daily.
        </p>

        <h2 className="mt-12 text-[30px]">Group bookings & private dining</h2>
        <p className="measure mt-3">
          The room is double-height with a mezzanine above the floor. Seating capacity, mezzanine
          capacity and private bookings depend on the evening. Call us with your date and the
          number of guests and the team will tell you what is possible.
        </p>
        <a href={site.phoneHref} className="btn-primary mt-6">
          Call {site.phoneDisplay}
        </a>
      </Section>
    </>
  );
}
