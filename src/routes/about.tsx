import { createFileRoute, Link } from "@tanstack/react-router";
import roomHero from "@/assets/room-hero.jpg";
import { site, imageDisclosure } from "@/data/site";
import { menu, totalItems } from "@/data/menu";
import { ConfirmPending, Eyebrow, Section, TerrazzoDivider, VegMark } from "@/components/dolce";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dolce | Bistro, pâtisserie & coffee bar in Nashik" },
      {
        name: "description",
        content:
          "Dolce Bistro & Pâtisserie By 21st Century is a 100% vegetarian bistro, pâtisserie, coffee bar and Indian kitchen on Sharanpur Road, Nashik.",
      },
      { property: "og:title", content: "About Dolce Bistro & Pâtisserie, Nashik" },
      {
        property: "og:description",
        content: "Four kitchens in one room, and all of them vegetarian.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <Section>
        <Eyebrow>About</Eyebrow>
        <h1 className="mt-2 text-[38px] sm:text-[52px]">
          A palazzo of world cuisines, and a slice of Italy
        </h1>
        <div className="measure mt-4 space-y-4 text-[18px]">
          <p>
            Dolce Bistro & Pâtisserie By 21st Century sits in a business court off Sharanpur Road,
            behind glass, under a double-height ceiling. It is really four businesses sharing one
            room and one entirely vegetarian kitchen.
          </p>
          <p>
            A pâtisserie, whose case is refilled every morning with tiramisu, cheesecakes and the
            Pull Me Up cake. A bistro cooking pizza, pasta, {menu.find((s) => s.slug === "risotto")?.count}{" "}
            risottos and vegetarian sushi. A speciality coffee bar with an espresso programme and six
            cold brews. And an Indian kitchen with a full tandoor,{" "}
            {menu.find((s) => s.slug === "indian-sabji")?.count} sabjis, matka biryani, Khow Suey and{" "}
            {menu.find((s) => s.slug === "mocktails")?.count} zero-alcohol mocktails.
          </p>
          <p>
            {totalItems} dishes in total, and not one of them contains meat. Alongside the truffle
            risotto you will find Dhudh Shevbhaji and Hare Nariyal Ki Sabji — Khandesh and Nashik
            cooking, on the same menu as the sushi.
          </p>
        </div>

        <img
          src={roomHero}
          alt="The dining room at Dolce, with fluted sage-green walls and a terrazzo floor."
          loading="lazy"
          width={1600}
          height={1008}
          data-generated="true"
          className="mt-8 w-full rounded-[4px] border border-rule object-cover"
        />
        <p className="mt-2 text-[14px] text-stone">{imageDisclosure}</p>
      </Section>

      <TerrazzoDivider />

      <Section tinted>
        <div className="flex items-center gap-2 rounded-[4px] border border-rule bg-limewash px-3 py-2">
          <VegMark size={20} withWords />
        </div>
        <h2 className="mt-6 text-[30px]">The details we have not filled in yet</h2>
        <p className="measure mt-3">
          A restaurant's story is easy to embellish, so here is what we will not do: we are not
          going to invent a founding year, a chef, or an award. These come from the restaurant or
          they do not appear.
        </p>
        <ul className="mt-5 flex flex-wrap gap-3">
          {["Year opened", "Founders", "Head chef", "Group and sister venues", "Signature classes schedule"].map(
            (l) => (
              <li key={l}>
                <ConfirmPending label={l} />
              </li>
            ),
          )}
        </ul>
        <p className="mt-6 text-[16px] text-stone">
          Legal name: {site.listedName} · FSSAI Lic. No. {site.fssai}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/pure-veg" className="btn-primary">
            Why 100% vegetarian
          </Link>
          <Link to="/menu" className="btn-secondary">
            The menu
          </Link>
        </div>
      </Section>
    </>
  );
}
