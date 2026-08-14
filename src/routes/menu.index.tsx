import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { menu, allItems, totalItems, groupLabels } from "@/data/menu";
import { allergenLine } from "@/data/site";
import {
  ConfirmPending,
  Eyebrow,
  Section,
  TerrazzoDivider,
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
      <Section>
        <Eyebrow>The menu</Eyebrow>
        <h1 className="mt-2 text-[38px] sm:text-[52px]">
          {totalItems} dishes. {menu.length} sections. All vegetarian.
        </h1>
        <p className="measure mt-3">
          Search it, filter it, or link straight to a section. Prices are being confirmed with the
          kitchen — we would rather show nothing than a number we invented.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3 rounded-[4px] border border-rule bg-limewash-2 p-4">
          <label className="w-full">
            <span className="eyebrow text-stone">Search dishes</span>
            <div className="mt-1 flex items-center gap-2">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="risotto, paneer, cold brew…"
                className="h-[52px] w-full rounded-[4px] border border-rule bg-limewash px-4 text-[17px]"
              />
              {q ? (
                <button type="button" aria-label="Clear search" onClick={() => setQ("")} className="btn-secondary px-4">
                  ✕
                </button>
              ) : null}
            </div>
          </label>

          <div className="flex flex-wrap gap-2">
            {(["all", "food", "desserts", "drinks"] as const).map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => setGroup(g)}
                aria-pressed={group === g}
                className={`rounded-[4px] border px-3 py-2 text-[15px] ${
                  group === g
                    ? "border-pistachio-600 bg-pistachio-100 text-pistachio-800"
                    : "border-rule bg-limewash text-ink"
                }`}
              >
                {g === "all" ? "Everything" : groupLabels[g]}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setSignatureOnly((v) => !v)}
              aria-pressed={signatureOnly}
              className={`rounded-[4px] border px-3 py-2 text-[15px] ${
                signatureOnly ? "border-amarena bg-caramel-100" : "border-rule bg-limewash"
              }`}
            >
              Signature dishes
            </button>
            <button
              type="button"
              onClick={() => setTableOnly((v) => !v)}
              aria-pressed={tableOnly}
              className={`rounded-[4px] border px-3 py-2 text-[15px] ${
                tableOnly ? "border-pistachio-600 bg-pistachio-100" : "border-rule bg-limewash"
              }`}
            >
              Best at the table
            </button>
          </div>
        </div>

        <p className="mt-4 text-[15px] text-stone">{allergenLine}</p>
      </Section>

      <TerrazzoDivider />

      <Section>
        {results ? (
          <>
            <h2 className="text-[24px]">
              {results.length} {results.length === 1 ? "dish" : "dishes"} matching “{q}”
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {results.map((i) => (
                <li key={i.id} className="card-dolce p-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <VegMark size={14} />
                    <p className="text-[17px] font-medium">{i.name}</p>
                    {i.signature ? (
                      <span className="font-mono text-[13px] text-amarena">Signature</span>
                    ) : null}
                  </div>
                  {i.desc ? <p className="mt-1 text-[16px]">{i.desc}</p> : null}
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <Link
                      to="/menu/$section"
                      params={{ section: i.sectionSlug }}
                      className="text-[14px] text-pistachio-600 underline underline-offset-4"
                    >
                      {i.section}
                    </Link>
                    <TravelBadge travels={i.travels} />
                    <ConfirmPending label="price" />
                  </div>
                </li>
              ))}
            </ul>
            {results.length === 0 ? (
              <p className="mt-4">
                Nothing matched. Try “paneer”, “risotto”, “upwas” or “cold brew”.
              </p>
            ) : null}
          </>
        ) : (
          <div className="space-y-12">
            {(["food", "desserts", "drinks"] as const)
              .filter((g) => sections.some((s) => s.group === g))
              .map((g) => (
                <div key={g}>
                  <h2 className="text-[30px]">{groupLabels[g]}</h2>
                  <div className="mt-5 space-y-8">
                    {sections
                      .filter((s) => s.group === g)
                      .map((s) => (
                        <div key={s.slug} id={s.slug}>
                          <div className="flex flex-wrap items-center gap-3 border-b border-rule pb-2">
                            <VegMark size={16} />
                            <h3 className="text-[24px]">
                              <Link to="/menu/$section" params={{ section: s.slug }}>
                                {s.name}
                              </Link>
                            </h3>
                            <span className="font-mono text-[14px] text-stone">{s.count}</span>
                            <TravelBadge travels={s.travels} />
                          </div>
                          {s.note ? <p className="mt-2 text-[16px] text-stone">{s.note}</p> : null}
                          <ul className="mt-3 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                            {s.items
                              .filter((i) => !signatureOnly || i.signature)
                              .map((i) => (
                                <li key={i.id} className="border-b border-rule/60 pb-3">
                                  <div className="flex flex-wrap items-baseline gap-2">
                                    <span className="text-[17px] font-medium">{i.name}</span>
                                    {i.signature ? (
                                      <span className="font-mono text-[13px] text-amarena">★</span>
                                    ) : null}
                                  </div>
                                  {i.desc ? (
                                    <p className="mt-1 text-[16px] text-stone">{i.desc}</p>
                                  ) : null}
                                </li>
                              ))}
                          </ul>
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
