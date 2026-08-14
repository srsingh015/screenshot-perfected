import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getSection, menu } from "@/data/menu";
import { allergenLine } from "@/data/site";
import {
  PriceDash,
  PricesNotice,
  Section,
  SectionLabel,
  TravelBadge,
  VegMark,
} from "@/components/dolce";

export const Route = createFileRoute("/menu/$section")({
  loader: ({ params }) => {
    const section = getSection(params.section);
    if (!section) throw notFound();
    return { section };
  },
  head: ({ loaderData }) => {
    const name = loaderData?.section.name ?? "Menu";
    const count = loaderData?.section.count ?? 0;
    return {
      meta: [
        { title: `${name} | Dolce Bistro & Pâtisserie, Nashik — 100% vegetarian` },
        {
          name: "description",
          content: `${count} vegetarian ${name.toLowerCase()} dishes at Dolce, Sharanpur Road, Nashik. Every dish is cooked in a 100% vegetarian kitchen.`,
        },
        { property: "og:title", content: `${name} — Dolce, Nashik` },
        {
          property: "og:description",
          content: `${count} vegetarian dishes in our ${name.toLowerCase()} section.`,
        },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: SectionPage,
});

function SectionPage() {
  const { section } = Route.useLoaderData();
  const others = menu.filter((s) => s.slug !== section.slug && s.group === section.group);

  return (
    <Section>
      <SectionLabel>
        <Link to="/menu">Menu</Link> · {section.group}
      </SectionLabel>
      <h1 className="display mt-8">{section.name}</h1>
      <div className="mt-8 flex flex-wrap items-center gap-6">
        <span className="num text-[16px] text-stone">{section.count} dishes</span>
        <VegMark size={16} withWords />
        <TravelBadge travels={section.travels} />
      </div>
      {section.note ? <p className="measure mt-8 text-[19px]">{section.note}</p> : null}

      <div className="mt-[var(--space-block)] border-b border-rule lg:columns-2 lg:gap-[calc(var(--gutter)*3)]">
        {section.items.map((i) => (
          <div
            key={i.id}
            className="index-row grid-cols-[1fr_auto] gap-6 break-inside-avoid hover:bg-pistachio-100"
          >
            <div>
              <p className="text-[20px]" style={{ fontFamily: "var(--font-display)" }}>
                {i.signature ? <span className="text-amarena">∗ </span> : null}
                {i.name}
              </p>
              {i.desc ? <p className="mt-1 text-[16px] text-stone">{i.desc}</p> : null}
            </div>
            <PriceDash />
          </div>
        ))}
      </div>

      <div className="mt-10 space-y-3">
        <PricesNotice />
        <p className="text-[16px] text-stone">{allergenLine}</p>
      </div>

      <div className="mt-[var(--space-block)] flex flex-wrap items-center gap-8">
        <Link to="/reserve" className="btn-primary">
          Reserve a table
        </Link>
        <Link to="/menu" className="link-rule text-ink">
          Back to the full menu
        </Link>
      </div>

      <nav className="mt-[var(--space-block)]" aria-label="Other sections">
        <SectionLabel>More in {section.group}</SectionLabel>
        <ul className="mt-6 border-b border-rule">
          {others.map((s) => (
            <li key={s.slug} className="index-row grid-cols-[1fr_auto] gap-6">
              <Link to="/menu/$section" params={{ section: s.slug }} className="text-[19px]">
                {s.name}
              </Link>
              <span className="num text-[15px] text-stone">{s.count}</span>
            </li>
          ))}
        </ul>
      </nav>
    </Section>
  );
}
