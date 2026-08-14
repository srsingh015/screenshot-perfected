import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/data/site";
import { Eyebrow, Section } from "@/components/dolce";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy | Dolce Bistro & Pâtisserie, Nashik" },
      {
        name: "description",
        content:
          "What Dolce Bistro & Pâtisserie collects when you send a booking request, why, how long it is kept, and how to ask us to delete it.",
      },
      { property: "og:title", content: "Privacy at Dolce, Nashik" },
      {
        property: "og:description",
        content: "Plain-language privacy: what we collect, why, and how to have it deleted.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <Section>
      <Eyebrow>Privacy</Eyebrow>
      <h1 className="mt-2 text-[38px] sm:text-[52px]">What we collect, and why</h1>
      <div className="measure mt-6 space-y-6 text-[17px]">
        <div>
          <h2 className="text-[22px]">What we collect</h2>
          <p className="mt-2">
            Only what a booking needs: your name, your phone number, the date, the time and the
            number of guests. Nothing else is asked for and nothing else is required.
          </p>
        </div>
        <div>
          <h2 className="text-[22px]">Why we collect it</h2>
          <p className="mt-2">
            To confirm your table and to call you if something changes. We ask for your consent
            before you send anything, and we record the words you consented to along with the time.
          </p>
        </div>
        <div>
          <h2 className="text-[22px]">How long we keep it</h2>
          <p className="mt-2">
            Booking details are kept only as long as needed to serve the booking and to keep our
            own records of it. We do not sell them and we do not use them for marketing unless you
            ask us to.
          </p>
        </div>
        <div>
          <h2 className="text-[22px]">Tracking</h2>
          <p className="mt-2">
            This site sets no advertising or marketing cookies and carries no social media tracking
            pixels.
          </p>
        </div>
        <div>
          <h2 className="text-[22px]">Deletion and questions</h2>
          <p className="mt-2">
            Call {site.phoneDisplay} and ask us to delete your details, or ask what we hold. Address
            for correspondence: {site.address.line1}, {site.address.line2}, {site.address.locality},{" "}
            {site.address.city} {site.address.pin}.
          </p>
        </div>
      </div>
    </Section>
  );
}
