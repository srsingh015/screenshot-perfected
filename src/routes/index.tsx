import { createFileRoute, Link } from "@tanstack/react-router";
import roomHero from "@/assets/room-hero.jpg";
import pizzaImg from "@/assets/pizza.jpg";
import dessertImg from "@/assets/dessert.jpg";
import upwasImg from "@/assets/upwas.jpg";
import { site, ratings, imageDisclosure, mapsUrl } from "@/data/site";
import { menu, totalItems, signatureItems } from "@/data/menu";
import {
  ConfirmPending,
  Eyebrow,
  RatingSource,
  Section,
  TerrazzoDivider,
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
  { name: "Pull Me Up Cake", note: "Finished at the table", img: dessertImg, to: "/menu/plated-desserts" },
  { name: "Tiramisu", note: "Made fresh daily", img: dessertImg, to: "/menu/classical-desserts" },
  { name: "New York Cheesecake", note: "Four flavours", img: dessertImg, to: "/menu/classical-desserts" },
  { name: "Cœur De Caramel", note: "Assembled to order", img: dessertImg, to: "/menu/plated-desserts" },
  { name: "The White Swan", note: "Order ahead", img: dessertImg, to: "/menu/plated-desserts" },
  { name: "Cake Slices", note: "From the counter", img: dessertImg, to: "/menu/cake-slices" },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 lg:block"
          style={houndstoothStyle()}
        />
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-10 sm:px-8 lg:grid-cols-2 lg:items-center lg:py-16">
          <div>
            <Eyebrow>Sharanpur Road · Nashik</Eyebrow>
            <h1 className="mt-3 text-[38px] sm:text-[52px] lg:text-[64px]">
              Every dish here is vegetarian. None of them taste like a compromise.
            </h1>
            <p className="measure mt-4 text-[17px] text-ink sm:text-[18px]">
              A palazzo of world cuisines, and a slice of Italy — in Nashik. Pizza, risotto,
              vegetarian sushi, a full tandoor, a pâtisserie counter and a speciality coffee bar,
              in one double-height room.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/reserve" className="btn-primary">
                Reserve a table
              </Link>
              <Link to="/menu" className="btn-secondary">
                See the full menu
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="flex items-center gap-2 rounded-[4px] border border-rule bg-limewash-2 px-3 py-2">
                <VegMark size={18} withWords />
              </span>
              <a href={site.phoneHref} className="font-mono text-[15px] text-pistachio-800 underline underline-offset-4">
                ⌛ Timings to confirm — tap to call
              </a>
            </div>

            <dl className="mt-6 grid gap-x-6 gap-y-2 font-mono text-[15px] sm:grid-cols-2">
              <div>
                <dt className="text-stone">Price</dt>
                <dd>{site.priceBand}</dd>
              </div>
              <div>
                <dt className="text-stone">Dine-in rating</dt>
                <dd>4.8 ★ — Zomato dining, Aug 2026</dd>
              </div>
            </dl>
          </div>

          <div>
            <img
              src={roomHero}
              alt="The dining room at Dolce: sage-green fluted walls, terrazzo floor, houndstooth chairs, a spiral staircase to the mezzanine and a lit pastry case."
              width={1600}
              height={1008}
              data-generated="true"
              className="w-full rounded-[4px] border border-rule object-cover"
            />
            <p className="mt-2 text-[14px] text-stone">{imageDisclosure}</p>
          </div>
        </div>
      </section>

      <TerrazzoDivider />

      {/* The pastry counter */}
      <Section>
        <Eyebrow>The pastry counter</Eyebrow>
        <h2 className="mt-2 text-[30px] sm:text-[44px]">What is in the case today</h2>
        <p className="measure mt-3 text-stone">
          The refrigerated case sits at the entrance, so you walk past it before you sit down.
          Prices are being confirmed with the kitchen.
        </p>
        <div
          role="region"
          aria-label="The pastry counter"
          className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4"
        >
          {counter.map((c) => (
            <Link
              key={c.name}
              to={c.to}
              className="card-dolce w-[260px] shrink-0 snap-start overflow-hidden"
              style={{ borderLeftColor: "transparent" }}
            >
              <img
                src={c.img}
                alt={`${c.name} on a marble plate in the pâtisserie.`}
                loading="lazy"
                width={1000}
                height={1000}
                data-generated="true"
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <p className="text-[17px] font-medium">{c.name}</p>
                <p className="mt-1 text-[14px] text-stone">{c.note}</p>
                <p className="mt-3">
                  <ConfirmPending label="price" />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Pure-veg statement band */}
      <section className="bg-pistachio-800 px-5 py-16 text-limewash sm:px-8">
        <div className="mx-auto max-w-6xl">
          <VegMark size={28} />
          <h2 className="mt-4 text-[30px] sm:text-[44px]">
            There is no meat in this kitchen. There never has been.
          </h2>
          <p className="measure mt-4 text-pistachio-100">
            Sushi, risotto, tiramisu and a tandoor — cooked in one entirely vegetarian kitchen. No
            separate section, no shared grill, no exceptions. During Shravan, Navratri, Ekadashi and
            Mahashivratri, the Upwas menu is cooked here too.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/pure-veg" className="btn-secondary border-limewash text-limewash">
              Why 100% vegetarian
            </Link>
            <Link to="/menu/upwas" className="btn-warm">
              The Upwas menu
            </Link>
          </div>
        </div>
      </section>

      {/* Menu at a glance */}
      <Section tinted>
        <Eyebrow>The menu is the website</Eyebrow>
        <h2 className="mt-2 text-[30px] sm:text-[44px]">
          {totalItems} dishes across {menu.length} sections. All vegetarian.
        </h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {menu.map((s) => (
            <Link key={s.slug} to="/menu/$section" params={{ section: s.slug }} className="card-dolce p-4">
              <p className="text-[17px] font-medium">{s.name}</p>
              <p className="font-mono text-[14px] text-stone">{s.count} items</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/menu" className="btn-primary">
            Search the full menu
          </Link>
        </div>
      </Section>

      <TerrazzoDivider />

      {/* Order first */}
      <Section>
        <Eyebrow>First visit</Eyebrow>
        <h2 className="mt-2 text-[30px] sm:text-[44px]">What to order</h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <img
            src={pizzaImg}
            alt="A mushroom and truffle pizza on a terrazzo table, blistered at the crust."
            loading="lazy"
            width={1000}
            height={1000}
            data-generated="true"
            className="w-full rounded-[4px] border border-rule object-cover lg:h-full"
          />
          <ul className="space-y-3">
            {signatureItems.map((i) => (
              <li key={i.id} className="card-dolce p-4">
                <div className="flex flex-wrap items-center gap-2">
                  <VegMark size={14} />
                  <p className="text-[18px] font-medium">{i.name}</p>
                  <span className="font-mono text-[13px] text-amarena">Signature</span>
                </div>
                {i.desc ? <p className="mt-1 text-[16px] text-ink">{i.desc}</p> : null}
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <TravelBadge travels={i.travels} />
                  <ConfirmPending label="price" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Upwas */}
      <Section tinted>
        <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Fasting days</Eyebrow>
            <h2 className="mt-2 text-[30px] sm:text-[44px]">A full Upwas menu, inside a bistro</h2>
            <p className="measure mt-3">
              Sabudana khichdi, sabudana wada, kattu ki puri and bhaji, upwas fries, sweet potato
              chaat and upwas ki kheer — cooked in the same 100% vegetarian kitchen as the risotto.
            </p>
            <Link to="/menu/upwas" className="btn-warm mt-6">
              See the Upwas menu
            </Link>
          </div>
          <img
            src={upwasImg}
            alt="Sabudana khichdi with peanuts and lemon, and buckwheat puri, on simple ceramic plates."
            loading="lazy"
            width={1000}
            height={1000}
            data-generated="true"
            className="w-full rounded-[4px] border border-rule object-cover"
          />
        </div>
      </Section>

      {/* Ratings */}
      <Section>
        <Eyebrow>What people rate us</Eyebrow>
        <h2 className="mt-2 text-[30px] sm:text-[44px]">Three numbers, all of them real</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {ratings.map((r) => (
            <RatingSource key={r.platform} r={r} />
          ))}
        </div>
        <p className="measure mt-4 text-[16px] text-stone">
          Our delivery rating is lower than our dine-in rating, and we are not going to hide it.
          Risotto, sushi, sizzlers and plated desserts are not built for a scooter ride. If you can,
          eat them here.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/reserve" className="btn-primary">
            Reserve a table
          </Link>
          <Link to="/order-online" className="btn-secondary">
            Delivery & takeaway
          </Link>
        </div>
      </Section>

      {/* Find us */}
      <Section tinted>
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <Eyebrow>Find us</Eyebrow>
            <h2 className="mt-2 text-[30px] sm:text-[44px]">
              Sumangal Business Court, Sharanpur
            </h2>
            <address className="mt-3 text-[17px] not-italic">
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.landmark}
              <br />
              {site.address.locality}, {site.address.city} {site.address.pin}
            </address>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={mapsUrl} target="_blank" rel="noreferrer" className="btn-primary">
                Get directions
              </a>
              <a href={site.phoneHref} className="btn-secondary">
                Call {site.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="card-dolce p-5">
            <p className="eyebrow text-stone">Today</p>
            <p className="mt-2">
              <ConfirmPending label="Opening hours" />
            </p>
            <p className="mt-3 text-[16px] text-stone">
              Our listed hours differ across platforms, so we would rather you called than arrived
              at a closed door.
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-[15px]">
              {site.facilities.map((f) => (
                <li key={f} className="text-stone">
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
