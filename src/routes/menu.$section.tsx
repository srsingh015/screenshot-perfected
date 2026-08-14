import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getSection, menu } from "@/data/menu";
import { allergenLine } from "@/data/site";
import {
  ConfirmPending,
  Eyebrow,
  Section,
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
      <Eyebrow>
        <Link to="/menu">Menu</Link> · {section.group}
      </Eyebrow>
      <div className="mt-2 flex flex-wrap items-center gap-3">
        <VegMark size={20} withWords />
        <TravelBadge travels={section.travels} />
      </div>
      <h1 className="mt-3 text-[38px] sm:text-[52px]">{section.name}</h1>
      <p className="font-mono text-[15px] text-stone">{section.count} dishes · all vegetarian</p>
      {section.note ? <p className="measure mt-3 text-[17px]">{section.note}</p> : null}

      <ul className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
        {section.items.map((i) => (
          <li key={i.id} className="card-dolce p-4">
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="text-[18px] font-medium">{i.name}</span>
              {i.signature ? (
                <span className="font-mono text-[13px] text-amarena">Signature</span>
              ) : null}
            </div>
            {i.desc ? <p className="mt-1 text-[16px] text-stone">{i.desc}</p> : null}
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <ConfirmPending label="price" />
              <ConfirmPending label="portion" />
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-[15px] text-stone">{allergenLine}</p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link to="/reserve" className="btn-primary">
          Reserve a table
        </Link>
        <Link to="/menu" className="btn-secondary">
          Back to the full menu
        </Link>
      </div>

      <nav className="mt-10" aria-label="Other sections">
        <p className="eyebrow text-stone">More in {section.group}</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {others.map((s) => (
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
      </nav>
    </Section>
  );
}
