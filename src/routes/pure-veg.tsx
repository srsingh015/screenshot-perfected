import { createFileRoute, Link } from "@tanstack/react-router";
import { site } from "@/data/site";
import { menu } from "@/data/menu";
import { Eyebrow, Section, TerrazzoDivider, VegMark } from "@/components/dolce";

export const Route = createFileRoute("/pure-veg")({
  head: () => ({
    meta: [
      { title: "Pure veg restaurant in Nashik | Dolce Bistro & Pâtisserie" },
      {
        name: "description",
        content:
          "Dolce is a 100% vegetarian kitchen in Nashik — vegetarian sushi, risotto, tandoor, pâtisserie and an Upwas menu. No meat has ever been cooked here.",
      },
      { property: "og:title", content: "A 100% vegetarian kitchen in Nashik" },
      {
        property: "og:description",
        content: "There is no meat in this kitchen. There never has been.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PureVeg,
});

function PureVeg() {
  const counts = Object.fromEntries(menu.map((s) => [s.slug, s.count]));

  return (
    <>
      <Section>
        <Eyebrow>Pure veg</Eyebrow>
        <h1 className="mt-2 text-[38px] sm:text-[52px]">
          There is no meat in this kitchen. There never has been.
        </h1>
        <div className="mt-5 flex items-center gap-2 rounded-[4px] border border-rule bg-limewash-2 px-3 py-2">
          <VegMark size={22} withWords />
        </div>
        <div className="measure mt-6 space-y-4 text-[18px]">
          <p>
            Nashik is a temple city. For a great many families here, and for many more during
            Shravan, Navratri, Ekadashi and Mahashivratri, a restaurant that cooks meat in the same
            kitchen is simply not an option — no matter how good the food is.
          </p>
          <p>
            Dolce was built entirely vegetarian. Not a vegetarian section of a menu, and not a
            separate pan on a shared grill. One kitchen, one set of equipment, and nothing that ever
            came from an animal's flesh passes through it.
          </p>
          <p>
            What that does not mean is a smaller menu. There are {counts["sushi"]} vegetarian sushi
            rolls, {counts["risotto"]} risottos, {counts["pizza"]} pizzas, {counts["tandoor"]}{" "}
            tandoor dishes, {counts["indian-sabji"]} sabjis, {counts["mocktails"]} zero-alcohol
            mocktails and a pâtisserie counter that is refilled every morning.
          </p>
        </div>
      </Section>

      <TerrazzoDivider />

      <Section tinted>
        <h2 className="text-[30px]">What guests ask us most</h2>
        <dl className="measure mt-6 space-y-6 text-[17px]">
          <div>
            <dt className="font-medium">Is the sushi really vegetarian?</dt>
            <dd className="mt-1 text-stone">
              Yes. Every roll is vegetarian — no fish, no seafood, no fish sauce, no bonito.
            </dd>
          </div>
          <div>
            <dt className="font-medium">Is the kitchen shared with a non-veg kitchen?</dt>
            <dd className="mt-1 text-stone">No. There is only one kitchen and it is vegetarian.</dd>
          </div>
          <div>
            <dt className="font-medium">Do you cook for fasting days?</dt>
            <dd className="mt-1 text-stone">
              Yes — see the <Link to="/menu/upwas" className="underline underline-offset-4">Upwas menu</Link>.
            </dd>
          </div>
          <div>
            <dt className="font-medium">Is there egg in the desserts?</dt>
            <dd className="mt-1 text-stone">
              Please ask your server before ordering — they will confirm with the pâtisserie for the
              specific item, and we would rather they check than we guess here.
            </dd>
          </div>
        </dl>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/menu" className="btn-primary">
            See the menu
          </Link>
          <a href={site.phoneHref} className="btn-secondary">
            Call {site.phoneDisplay}
          </a>
        </div>
      </Section>
    </>
  );
}
