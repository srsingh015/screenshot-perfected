import { createFileRoute, Link } from "@tanstack/react-router";
import roomHero from "@/assets/room-hero.jpg";
import pizzaImg from "@/assets/pizza.jpg";
import dessertImg from "@/assets/dessert.jpg";
import upwasImg from "@/assets/upwas.jpg";
import { site, ratings, mapsUrl } from "@/data/site";
import { menu, totalItems, signatureItems } from "@/data/menu";
import {
  PriceDash,
  RatingSource,
  Section,
  SectionLabel,
  TerrazzoDivider,
  TimingsNotice,
  TravelBadge,
  VegMark,
  houndstoothStyle,
} from "@/components/dolce";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dolce Bistro & Pâtisserie | 100% vegetarian, Sharanpur Road, Nashik" },
      {
        name: "description",
        content:
          "A 100% vegetarian bistro, pâtisserie and coffee bar in Nashik. Pizza, seven risottos, vegetarian sushi, tandoor, an Upwas menu and in-house desserts. Reserve a table.",
      },
      { property: "og:title", content: "Dolce Bistro & Pâtisserie, Nashik — 100% vegetarian" },
      {
        property: "og:description",
        content: "Every dish here is vegetarian. None of them taste like a compromise.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const counter = [
  { name: "Pull Me Up Cake", note: "Finished at the table", to: "/menu/plated-desserts" },
  { name: "Tiramisu", note: "Made fresh daily", to: "/menu/classical-desserts" },
  { name: "New York Cheesecake", note: "Four flavours", to: "/menu/classical-desserts" },
  { name: "Cœur De Caramel", note: "Assembled to order", to: "/menu/plated-desserts" },
  { name: "The White Swan", note: "Order ahead", to: "/menu/plated-desserts" },
  { name: "Cake Slices", note: "From the counter", to: "/menu/cake-slices" },
];

const kitchens = [
  {
    n: "01",
    name: "Italian & European",
    counts: "13 pizzas · 10 pastas · 7 risottos",
    to: "/menu/pizza",
  },
  {
    n: "02",
    name: "The Pâtisserie",
    counts: "11 classical · 7 plated · cake slices",
    to: "/menu/classical-desserts",
  },
  {
    n: "03",
    name: "Indian & Tandoor",
    counts: "17 sabjis · 10 tandoor · rice and breads",
    to: "/menu/sabji",
  },
  {
    n: "04",
    name: "Coffee & Mocktails",
    counts: "hot coffee · cold brew · 17 mocktails",
    to: "/menu/mocktails",
  },
];

function Home() {
  return (
    <>
      {/* 02 · Hero — composition D, type-led, no photograph behind the h1 */}
      <Section scale={1.4}>
        <SectionLabel>Sharanpur Road · Nashik</SectionLabel>
        <h1 className="display mt-8 max-w-[16ch]">
          Every dish here is vegetarian. None of them taste like a compromise.
        </h1>
        <p className="measure-tight mt-10 text-ink">
          A palazzo of world cuisines, and a slice of Italy — in Nashik. Pizza, risotto, vegetarian
          sushi, a full tandoor, a pâtisserie counter and a speciality coffee bar, in one
          double-height room.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-8">
          <Link to="/reserve" className="btn-primary">
            Reserve a table
          </Link>
          <Link to="/menu" className="link-rule text-ink">
            See the menu
          </Link>
        </div>

        <dl className="mt-16 border-b border-rule">
          {[
            ["4.8 Food", "Zomato dining, August 2026"],
            [site.priceBand, "Per person, reported on Google"],
            ["100% vegetarian kitchen", "No meat, no fish, no exceptions"],
          ].map(([term, detail]) => (
            <div key={term} className="index-row grid-cols-1 sm:grid-cols-[1fr_1fr] sm:gap-8">
              <dt className="num text-[17px]">{term}</dt>
              <dd className="label text-stone">{detail}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* Interior photo, full-bleed, below the fold */}
      <figure>
        <img
          src={roomHero}
          alt="The dining room at Dolce: sage-green fluted walls, terrazzo floor, houndstooth chairs, a spiral staircase to the mezzanine and a lit pastry case."
          width={1600}
          height={1008}
          data-generated="true"
          className="h-[62vw] max-h-[720px] w-full object-cover sm:h-[42vw]"
        />
        <figcaption className="shell label mt-3 text-stone">
          The room — Sumangal Business Court, Sharanpur Road
        </figcaption>
      </figure>

      {/* 03 · The pastry counter — ruled rail, no cards */}
      <Section scale={0.7}>
        <SectionLabel n="01">The pastry counter</SectionLabel>
        <h2 className="mt-8 text-h2">What is in the case today</h2>
        <p className="measure mt-6 text-stone">
          The refrigerated case sits at the entrance, so you walk past it before you sit down.
        </p>
        <div
          role="region"
          aria-label="The pastry counter"
          className="bleed-x mt-10 flex snap-x snap-mandatory gap-px overflow-x-auto pl-[var(--page-margin)]"
        >
          {counter.map((c) => (
            <Link key={c.name} to={c.to} className="w-[260px] shrink-0 snap-start pr-8">
              <img
                src={dessertImg}
                alt={`${c.name} in the pâtisserie case at Dolce.`}
                loading="lazy"
                width={1000}
                height={1000}
                className="h-[220px] w-full object-cover"
                data-generated="true"
              />
              <div className="mt-4 grid grid-cols-[1fr_auto] items-baseline gap-3 border-t border-rule pt-3">
                <p className="text-[19px]" style={{ fontFamily: "var(--font-display)" }}>
                  {c.name}
                </p>
                <PriceDash />
              </div>
              <p className="mt-1 text-[15px] text-stone">{c.note}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* 04 · Pure-veg statement — composition D, dark. One of two dark sections. */}
      <section
        className="bg-pistachio-800 text-limewash"
        style={{
          paddingTop: "calc(var(--space-section) * 1.4)",
          paddingBottom: "calc(var(--space-section) * 1.4)",
        }}
      >
        <div className="shell">
          <div className="flex justify-center">
            <VegMark size={56} />
          </div>
          <h2 className="mt-12 text-center text-h1">
            There is no meat in this kitchen. There never has been.
          </h2>
          <p className="measure mx-auto mt-12 text-pistachio-100">
            Sushi, risotto, tiramisu and a tandoor — cooked in one entirely vegetarian kitchen. No
            separate section, no shared grill, no exceptions. During Shravan, Navratri, Ekadashi and
            Mahashivratri, the Upwas menu is cooked here too.
          </p>
          <div className="mt-12">
            <Link to="/pure-veg" className="link-rule text-limewash">
              Why 100% vegetarian
            </Link>
          </div>
        </div>
      </section>

      {/* 05 · Four kitchens — composition E, index list */}
      <Section>
        <SectionLabel n="02">Four kitchens, one room</SectionLabel>
        <h2 className="mt-8 text-h2">
          {totalItems} dishes across {menu.length} sections
        </h2>
        <div className="mt-12 border-b border-rule">
          {kitchens.map((k) => (
            <Link
              key={k.n}
              to={k.to}
              className="index-row group grid-cols-[auto_1fr_auto] items-center gap-6 hover:bg-pistachio-100 sm:grid-cols-[auto_1fr_1fr_auto]"
              style={{ minHeight: 96, paddingInline: "var(--space-tight)" }}
            >
              <span className="label text-pistachio-600">{k.n}</span>
              <span className="text-h3" style={{ fontFamily: "var(--font-display)" }}>
                {k.name}
              </span>
              <span className="hidden text-[16px] text-stone sm:block">{k.counts}</span>
              <span
                aria-hidden="true"
                className="text-[20px] transition-transform duration-150 group-hover:translate-x-2"
              >
                →
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-12">
          <Link to="/menu" className="link-rule text-ink">
            Search the full menu
          </Link>
        </div>
      </Section>

      {/* 06 · Terrazzo divider — the one permitted band */}
      <TerrazzoDivider height={96} />

      {/* 07 · What to order first — composition A: text 1-5, image 7-12 bleeding right */}
      <section style={{ paddingTop: "var(--space-section)", paddingBottom: "var(--space-section)" }}>
        <div className="mx-auto grid w-full max-w-[1440px] gap-[var(--space-block)] lg:grid-cols-12 lg:gap-[var(--gutter)]">
          <div className="px-[var(--page-margin)] lg:col-span-5 lg:pr-0">
            <SectionLabel n="03">First visit</SectionLabel>
            <h2 className="mt-8 text-h2">What to order</h2>
            <div className="mt-10 border-b border-rule">
              {signatureItems.map((i) => (
                <div key={i.id} className="index-row grid-cols-[1fr_auto] gap-6">
                  <div>
                    <p className="text-[19px]" style={{ fontFamily: "var(--font-display)" }}>
                      <span className="text-amarena">∗ </span>
                      {i.name}
                    </p>
                    {i.desc ? <p className="mt-1 text-[16px] text-stone">{i.desc}</p> : null}
                    <p className="mt-1">
                      <TravelBadge travels={i.travels} />
                    </p>
                  </div>
                  <PriceDash />
                </div>
              ))}
            </div>
          </div>
          <figure className="lg:col-span-6 lg:col-start-7">
            <img
              src={pizzaImg}
              alt="A mushroom and truffle pizza on a terrazzo table, blistered at the crust."
              loading="lazy"
              width={1000}
              height={1000}
              className="h-[70vw] max-h-[640px] w-full object-cover lg:h-full"
              data-generated="true"
            />
            <figcaption className="label mt-3 px-[var(--page-margin)] text-stone lg:px-0">
              Fantastic Fungi — mushrooms, thyme, truffle
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 08 · Upwas — composition B: image 1-6 bleeding left, text 8-12 */}
      <section
        className="bg-limewash-2"
        style={{ paddingTop: "var(--space-section)", paddingBottom: "var(--space-section)" }}
      >
        <div className="mx-auto grid w-full max-w-[1440px] gap-[var(--space-block)] lg:grid-cols-12 lg:items-center lg:gap-[var(--gutter)]">
          <figure className="lg:col-span-6">
            <img
              src={upwasImg}
              alt="Sabudana khichdi with peanuts and lemon, and buckwheat puri, on simple ceramic plates."
              loading="lazy"
              width={1000}
              height={1000}
              className="h-[80vw] max-h-[700px] w-full object-cover"
              data-generated="true"
            />
            <figcaption className="label mt-3 px-[var(--page-margin)] text-stone lg:px-0 lg:pl-[var(--page-margin)]">
              Sabudana khichdi, from the Upwas menu
            </figcaption>
          </figure>
          <div className="px-[var(--page-margin)] lg:col-span-5 lg:col-start-8 lg:pl-0">
            <SectionLabel n="04">Seasonal</SectionLabel>
            <h2 className="mt-8 text-h2">A full Upwas menu, inside a bistro</h2>
            <p className="measure mt-6">
              Sabudana khichdi, sabudana wada, kattu ki puri and bhaji, upwas fries, sweet potato
              chaat and upwas ki kheer — cooked in the same 100% vegetarian kitchen as the risotto.
            </p>
            <Link to="/menu/upwas" className="link-rule mt-10 inline-block text-caramel-600">
              See the Upwas menu
            </Link>
          </div>
        </div>
      </section>

      {/* 09 · The Room — composition C, full bleed then a 5/7 split */}
      <Section scale={0.7} bleed>
        <div className="shell">
          <SectionLabel n="05">The room</SectionLabel>
          <h2 className="mt-8 text-h2">Double height, fluted sage, terrazzo underfoot</h2>
        </div>
        <figure className="mt-12">
          <img
            src={roomHero}
            alt="The double-height dining room seen from the entrance, looking towards the mezzanine."
            loading="lazy"
            width={1600}
            height={686}
            className="h-[52vw] max-h-[560px] w-full object-cover"
            data-generated="true"
          />
          <figcaption className="shell label mt-3 text-stone">
            The ground floor, looking towards the mezzanine
          </figcaption>
        </figure>
        <div className="shell mt-12">
          <Link to="/the-room" className="link-rule text-ink">
            More of the room
          </Link>
        </div>
      </Section>

      {/* 10 · Reserve — composition D, houndstooth at 3% */}
      <section
        className="bg-limewash-2"
        style={{
          ...houndstoothStyle(),
          paddingTop: "calc(var(--space-section) * 1.2)",
          paddingBottom: "calc(var(--space-section) * 1.2)",
        }}
      >
        <div className="shell">
          <div className="mx-auto max-w-[860px]">
            <SectionLabel n="06">Reservations</SectionLabel>
            <h2 className="mt-8 text-h1">Ask for a table.</h2>
            <p className="measure mt-8">
              Weekends and festival evenings fill up. Tell us the date, the time and how many of you
              there are, and we will confirm by phone.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-8">
              <Link to="/reserve" className="btn-primary">
                Reserve a table
              </Link>
              <a href={site.phoneHref} className="link-rule text-ink">
                Call {site.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 11 · Ratings + Find us — composition A */}
      <Section>
        <SectionLabel n="07">What people rate us</SectionLabel>
        <h2 className="mt-8 text-h2">Three numbers, all of them real</h2>
        <div className="mt-10 border-b border-rule">
          {ratings.map((r) => (
            <RatingSource key={r.platform} r={r} />
          ))}
        </div>
        <p className="measure mt-8 text-[16px] text-stone">
          Our delivery rating is lower than our dine-in rating, and we are not going to hide it.
          Risotto, sushi, sizzlers and plated desserts are not built for a scooter ride. If you can,
          eat them here.
        </p>
        <div className="mt-8">
          <Link to="/order-online" className="link-rule text-ink">
            Delivery & takeaway
          </Link>
        </div>
      </Section>

      <Section tinted scale={0.7} bleed>
        <div className="mx-auto grid w-full max-w-[1440px] gap-[var(--space-block)] lg:grid-cols-12 lg:gap-[var(--gutter)]">
          <div className="px-[var(--page-margin)] lg:col-span-5">
            <SectionLabel n="08">Find us</SectionLabel>
            <h2 className="mt-8 text-h2">Sumangal Business Court</h2>
            <address className="num mt-8 text-[16px] not-italic leading-[1.9]">
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.landmark}
              <br />
              {site.address.locality}, {site.address.city} {site.address.pin}
            </address>
            <div className="mt-8 flex flex-wrap items-center gap-8">
              <a href={mapsUrl} target="_blank" rel="noreferrer" className="link-rule text-ink">
                Get directions
              </a>
              <Link to="/find-us" className="link-rule text-ink">
                Arrival notes
              </Link>
            </div>
            <div className="mt-10">
              <TimingsNotice />
            </div>
          </div>
          <div className="px-[var(--page-margin)] lg:col-span-6 lg:col-start-7 lg:px-0">
            <div className="border-t border-rule">
              {site.facilities.map((f, idx) => (
                <p key={f} className="index-row grid-cols-[auto_1fr] gap-6">
                  <span className="label text-pistachio-600">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[17px]">{f}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
