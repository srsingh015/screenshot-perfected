import { createFileRoute, Link } from "@tanstack/react-router";
import upwasImg from "@/assets/upwas.jpg";
import { getSection } from "@/data/menu";
import { site, allergenLine, imageDisclosure } from "@/data/site";
import {
  Eyebrow,
  PriceDash,
  PricesNotice,
  Section,
  TerrazzoDivider,
  VegMark,
} from "@/components/dolce";

export const Route = createFileRoute("/menu/upwas")({
  head: () => ({
    meta: [
      { title: "Upwas (fasting) menu in Nashik | Dolce Bistro & Pâtisserie" },
      {
        name: "description",
        content:
          "A full Upwas menu in Nashik: sabudana khichdi, sabudana wada, upwas fries, kattu ki puri and bhaji, sweet potato chaat and upwas ki kheer — in a 100% vegetarian kitchen.",
      },
      { property: "og:title", content: "The Upwas menu at Dolce, Nashik" },
      {
        property: "og:description",
        content: "Fasting food, cooked in a 100% vegetarian kitchen on Sharanpur Road.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: UpwasPage,
});

function UpwasPage() {
  const section = getSection("upwas")!;

  return (
    <>
      <Section>
        <Eyebrow>Fast menu</Eyebrow>
        <h1 className="mt-2 text-[38px] sm:text-[52px]">
          Upwas food, in a European bistro
        </h1>
        <p className="measure mt-4 text-[18px]">
          On Ekadashi, during Shravan, Navratri and Mahashivratri, a family in Nashik should still be
          able to go out to eat. Our Fast Menu is cooked in the same kitchen as the risotto and the
          pizza — a kitchen that has never handled meat.
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <span className="flex items-center gap-2 rounded-[4px] border border-rule bg-limewash-2 px-3 py-2">
            <VegMark size={18} withWords />
          </span>
          <a href={site.phoneHref} className="btn-secondary">
            Call to check today's fasting items
          </a>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:items-start">
          <ul className="border-b border-rule">
            {section.items.map((i) => (
              <li key={i.id} className="index-row grid-cols-[1fr_auto] gap-6">
                <div>
                  <p className="text-[20px]" style={{ fontFamily: "var(--font-display)" }}>
                    {i.name}
                  </p>
                  {i.desc ? <p className="mt-1 text-[16px] text-stone">{i.desc}</p> : null}
                </div>
                <PriceDash />
              </li>
            ))}
          </ul>
          <div>
            <img
              src={upwasImg}
              alt="Sabudana khichdi with peanuts and lemon beside buckwheat puri and a bowl of curd."
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
        <h2 className="text-[30px]">Before you order</h2>
        <ul className="measure mt-4 space-y-3 text-[17px]">
          <li>
            For no-onion-no-garlic or Jain preparations, ask your server when you order — the kitchen
            will tell you what it can do for a specific dish.
          </li>
          <li>{allergenLine}</li>
        </ul>
        <div className="mt-8">
          <PricesNotice />
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/reserve" className="btn-primary">
            Reserve a table
          </Link>
          <Link to="/menu" className="btn-secondary">
            The full menu
          </Link>
        </div>
      </Section>
    </>
  );
}
