import { createFileRoute, Link } from "@tanstack/react-router";
import { site, allergenLine, SERVES_ALCOHOL } from "@/data/site";
import { ConfirmPending, Eyebrow, Section } from "@/components/dolce";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Questions | Dolce Bistro & Pâtisserie, Nashik" },
      {
        name: "description",
        content:
          "Is Dolce pure vegetarian? Is the sushi vegetarian? Parking, hours, cakes, group bookings and delivery — the questions our team is asked most.",
      },
      { property: "og:title", content: "Questions about Dolce, Nashik" },
      {
        property: "og:description",
        content: "Pure veg, sushi, parking, cakes, hours and bookings — answered plainly.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Faq,
});

function Faq() {
  const faqs: { q: string; a: React.ReactNode }[] = [
    {
      q: "Is Dolce 100% vegetarian?",
      a: "Yes. There is one kitchen and it is entirely vegetarian. No meat, no fish, no shared grill.",
    },
    {
      q: "Is the sushi really vegetarian?",
      a: "Yes — every roll. No fish, no seafood, no fish sauce.",
    },
    {
      q: "Do you have food for fasting days?",
      a: (
        <>
          Yes. See the{" "}
          <Link to="/menu/upwas" className="underline underline-offset-4">
            Upwas menu
          </Link>
          . Whether individual items are made without onion and garlic is{" "}
          <ConfirmPending label="no-onion-no-garlic per dish" /> — please ask your server.
        </>
      ),
    },
    {
      q: "What are your opening hours?",
      a: (
        <>
          Listings disagree, so rather than publish a guess: <ConfirmPending label="Opening hours" />
          . Call {site.phoneDisplay} and the team will tell you today's timings.
        </>
      ),
    },
    {
      q: "How much does a meal cost?",
      a: `Around ${site.priceBand} (${site.priceBandSource}), or ${site.priceForTwo}. Individual menu prices are being confirmed with the kitchen.`,
    },
    {
      q: "Do you take reservations?",
      a: (
        <>
          Call {site.phoneDisplay}, or send your details from the{" "}
          <Link to="/reserve" className="underline underline-offset-4">
            reserve page
          </Link>{" "}
          and we will ring back to confirm.
        </>
      ),
    },
    {
      q: "Is there parking?",
      a: (
        <>
          Free parking is listed for the building. Exact capacity and valet are{" "}
          <ConfirmPending label="parking detail" />.
        </>
      ),
    },
    {
      q: "Can I order a custom cake?",
      a: (
        <>
          Yes — the pâtisserie bakes daily. Lead time, sizes, price bands and eggless availability are{" "}
          <ConfirmPending label="cake ordering detail" />, so please call.
        </>
      ),
    },
    {
      q: "Can you host a group or a private party?",
      a: (
        <>
          Capacity and private-dining availability are{" "}
          <ConfirmPending label="private dining availability" />. Call with your date and party size.
        </>
      ),
    },
    {
      q: "Do you serve alcohol?",
      a: SERVES_ALCOHOL ? (
        <>Please ask the team.</>
      ) : (
        <>
          We are not publishing anything about this until the restaurant confirms it in writing. Our{" "}
          <Link to="/menu/$section" params={{ section: "mocktails" }} className="underline underline-offset-4">
            17 mocktails
          </Link>{" "}
          contain zero alcohol.
        </>
      ),
    },
    {
      q: "Do you deliver?",
      a: (
        <>
          Yes, though some dishes are much better at the table — see{" "}
          <Link to="/order-online" className="underline underline-offset-4">
            delivery & takeaway
          </Link>
          .
        </>
      ),
    },
    { q: "Do you have allergen information?", a: allergenLine },
    {
      q: "Are dishes available Jain, or without onion and garlic?",
      a: (
        <>
          Per-dish Jain availability is <ConfirmPending label="Jain availability" />. The kitchen can
          answer for a specific dish when you order.
        </>
      ),
    },
  ];

  return (
    <Section>
      <Eyebrow>Questions</Eyebrow>
      <h1 className="mt-2 text-[38px] sm:text-[52px]">Everything callers ask</h1>
      <dl className="measure mt-8 space-y-7">
        {faqs.map((f) => (
          <div key={f.q}>
            <dt className="text-[19px] font-medium">{f.q}</dt>
            <dd className="mt-1 text-[17px] text-stone">{f.a}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-10 flex flex-wrap gap-3">
        <a href={site.phoneHref} className="btn-primary">
          Call {site.phoneDisplay}
        </a>
        <Link to="/reserve" className="btn-secondary">
          Reserve a table
        </Link>
      </div>
    </Section>
  );
}
