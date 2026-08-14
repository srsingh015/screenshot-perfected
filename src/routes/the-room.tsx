import { createFileRoute, Link } from "@tanstack/react-router";
import roomHero from "@/assets/room-hero.jpg";
import pizzaImg from "@/assets/pizza.jpg";
import dessertImg from "@/assets/dessert.jpg";
import upwasImg from "@/assets/upwas.jpg";
import { imageDisclosure, site } from "@/data/site";
import { Eyebrow, Section } from "@/components/dolce";

export const Route = createFileRoute("/the-room")({
  head: () => ({
    meta: [
      { title: "The room | Dolce Bistro & Pâtisserie, Nashik" },
      {
        name: "description",
        content:
          "Inside Dolce, Nashik: sage-green fluted walls, a terrazzo floor, houndstooth chairs, a spiral staircase to the mezzanine and a pastry case at the door.",
      },
      { property: "og:title", content: "Inside the room at Dolce, Nashik" },
      {
        property: "og:description",
        content: "Fluted sage walls, terrazzo, houndstooth and a mezzanine.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TheRoom,
});

const gallery = [
  {
    img: roomHero,
    alt: "The dining room: sage-green fluted walls, terrazzo floor, houndstooth chairs and a spiral staircase to the mezzanine.",
    caption: "The main floor, with the mezzanine above and the pastry case by the door.",
  },
  {
    img: pizzaImg,
    alt: "A mushroom and truffle pizza on a terrazzo table beside a knife.",
    caption: "Pizza at table height, on the terrazzo.",
  },
  {
    img: dessertImg,
    alt: "Tiramisu and a chocolate drip cake on marble beside an espresso cup.",
    caption: "The pâtisserie counter's daily work.",
  },
  {
    img: upwasImg,
    alt: "Sabudana khichdi and buckwheat puri on simple ceramic plates in morning light.",
    caption: "Upwas food, cooked in the same kitchen.",
  },
];

function TheRoom() {
  return (
    <Section>
      <Eyebrow>The room</Eyebrow>
      <h1 className="mt-2 text-[38px] sm:text-[52px]">A double-height room off Sharanpur Road</h1>
      <p className="measure mt-4 text-[18px]">
        Fluted sage-green panelling, a terrazzo floor, houndstooth chairs, black steel window frames
        and enough glass that the room is lit by daylight until late afternoon. A spiral staircase
        runs up to the mezzanine.
      </p>
      <p className="mt-2 text-[14px] text-stone">{imageDisclosure}</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {gallery.map((g) => (
          <figure key={g.caption}>
            <img
              src={g.img}
              alt={g.alt}
              loading="lazy"
              width={1000}
              height={1000}
              data-generated="true"
              className="w-full rounded-[4px] border border-rule object-cover"
            />
            <figcaption className="mt-2 text-[15px] text-stone">{g.caption}</figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link to="/reserve" className="btn-primary">
          Reserve a table
        </Link>
        <a href={site.phoneHref} className="btn-secondary">
          Call {site.phoneDisplay}
        </a>
      </div>
    </Section>
  );
}
