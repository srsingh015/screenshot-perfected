import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { menu, allItems, totalItems, groupLabels } from "@/data/menu";
import { allergenLine } from "@/data/site";
import {
  PriceDash,
  PricesNotice,
  Section,
  SectionLabel,
  TravelBadge,
  VegMark,
} from "@/components/dolce";

export const Route = createFileRoute("/menu/")({
  head: () => ({
    meta: [
      { title: "Menu | Dolce Bistro & Pâtisserie, Nashik — 100% vegetarian" },
      {
        name: "description",
        content:
          "The full vegetarian menu at Dolce, Nashik: 13 pizzas, 7 risottos, vegetarian sushi, tandoor, 17 sabjis, an Upwas menu, in-house desserts and 17 zero-alcohol mocktails.",
      },
      { property: "og:title", content: "The full vegetarian menu — Dolce, Nashik" },
      {
        property: "og:description",
        content: "246 dishes across 28 sections. Searchable, and every one of them vegetarian.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MenuPage,
});

const filterClass = (on: boolean) =>
  `label border-b px-1 pb-2 pt-1 transition-colors ${
    on ? "border-pistachio-600 text-pistachio-600" : "border-rule text-stone hover:text-ink"
  }`;

function MenuPage() {
  const [q, setQ] = useState("");
  const [group, setGroup] = useState<"all" | "food" | "desserts" | "drinks">("all");
  const [signatureOnly, setSignatureOnly] = useState(false);
  const [tableOnly, setTableOnly] = useState(false);

  const query = q.trim().toLowerCase();

  const results = useMemo(() => {
    if (!query) return null;
    return allItems.filter(
      (i) =>
        i.name.toLowerCase().includes(query) ||
        i.section.toLowerCase().includes(query) ||
        (i.desc ?? "").toLowerCase().includes(query),
    );
  }, [query]);

  const sections = menu.filter((s) => {
    if (group !== "all" && s.group !== group) return false;
    if (signatureOnly && !s.items.some((i) => i.signature)) return false;
    if (tableOnly && s.travels !== "table") return false;
    return true;
  });

  return (
    <>
      <Section scale={0.7}>
        <SectionLabel>The menu</SectionLabel>
        <h1 className="display mt-8 max-w-[18ch]">
          {totalItems} dishes. {menu.length} sections. All vegetarian.
        </h1>

        <div className="mt-[var(--space-block)] grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <label className="block">
              <span className="label text-stone">Search dishes</span>
              <div className="mt-2 flex items-baseline gap-4">
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="risotto, paneer, cold brew…"
                  className="field-line text-[24px]"
                  style={{ fontFamily: "var(--font-display)" }}
                />
                {q ? (
                  <button type="button" onClick={() => setQ("")} className="label shrink-0 text-stone">
                    Clear
                  </button>
                ) : null}
              </div>
            </label>
          </div>

          <div className="flex flex-wrap items-end gap-x-6 gap-y-4 lg:col-span-5">
            {(["all", "food", "desserts", "drinks"] as const).map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => setGroup(g)}
                aria-pressed={group === g}
                className={filterClass(group === g)}
              >
                {g === "all" ? "Everything" : groupLabels[g]}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setSignatureOnly((v) => !v)}
              aria-pressed={signatureOnly}
              className={filterClass(signatureOnly)}
            >
              ∗ Signature
            </button>
            <button
              type="button"
              onClick={() => setTableOnly((v) => !v)}
              aria-pressed={tableOnly}
              className={filterClass(tableOnly)}
            >
              Best at the table
            </button>
          </div>
        </div>

        <div className="mt-10 space-y-3">
          <PricesNotice />
          <p className="text-[16px] text-stone">{allergenLine}</p>
        </div>
      </Section>

      <Section scale={0.7}>
        {results ? (
          <>
            <SectionLabel>
              {results.length} {results.length === 1 ? "dish" : "dishes"} matching “{q}”
            </SectionLabel>
            <div className="mt-8 border-b border-rule lg:columns-2 lg:gap-[calc(var(--gutter)*3)]">
              {results.map((i) => (
                <div
                  key={i.id}
                  className="index-row grid-cols-[1fr_auto] gap-6 break-inside-avoid"
                >
                  <div>
                    <p className="text-[20px]" style={{ fontFamily: "var(--font-display)" }}>
                      {i.signature ? <span className="text-amarena">∗ </span> : null}
                      {i.name}
                    </p>
                    {i.desc ? <p className="mt-1 text-[16px] text-stone">{i.desc}</p> : null}
                    <p className="mt-1 flex flex-wrap items-baseline gap-4">
                      <Link
                        to="/menu/$section"
                        params={{ section: i.sectionSlug }}
                        className="label text-pistachio-600"
                      >
                        {i.section}
                      </Link>
                      <TravelBadge travels={i.travels} />
                    </p>
                  </div>
                  <PriceDash />
                </div>
              ))}
            </div>
            {results.length === 0 ? (
              <p className="mt-8 text-[19px]">
                Nothing matched. Try “paneer”, “risotto”, “upwas” or “cold brew”.
              </p>
            ) : null}
          </>
        ) : (
          <div className="space-y-[var(--space-section)]">
            {(["food", "desserts", "drinks"] as const)
              .filter((g) => sections.some((s) => s.group === g))
              .map((g) => (
                <div key={g}>
                  <SectionLabel>{groupLabels[g]}</SectionLabel>
                  <div className="mt-[var(--space-block)] space-y-[var(--space-block)]">
                    {sections
                      .filter((s) => s.group === g)
                      .map((s) => (
                        <div key={s.slug} id={s.slug}>
                          <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2 border-b border-ink pb-3">
                            <h2 className="text-h3">
                              <Link to="/menu/$section" params={{ section: s.slug }}>
                                {s.name}
                              </Link>
                            </h2>
                            <span className="num text-[15px] text-stone">{s.count}</span>
                            <TravelBadge travels={s.travels} />
                            <VegMark size={13} className="ml-auto" />
                          </div>
                          {s.note ? (
                            <p className="measure mt-4 text-[17px] text-stone">{s.note}</p>
                          ) : null}
                          <div className="mt-4 border-b border-rule lg:columns-2 lg:gap-[calc(var(--gutter)*3)]">
                            {s.items
                              .filter((i) => !signatureOnly || i.signature)
                              .map((i) => (
                                <div
                                  key={i.id}
                                  className="index-row grid-cols-[1fr_auto] gap-6 break-inside-avoid"
                                >
                                  <div>
                                    <p
                                      className="text-[20px]"
                                      style={{ fontFamily: "var(--font-display)" }}
                                    >
                                      {i.signature ? <span className="text-amarena">∗ </span> : null}
                                      {i.name}
                                    </p>
                                    {i.desc ? (
                                      <p className="mt-1 text-[16px] text-stone">{i.desc}</p>
                                    ) : null}
                                  </div>
                                  <PriceDash />
                                </div>
                              ))}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
          </div>
        )}
      </Section>
    </>
  );
}
