import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { site } from "@/data/site";
import { ConfirmPending, Eyebrow, Section, VegMark, houndstoothStyle } from "@/components/dolce";

export const Route = createFileRoute("/reserve")({
  head: () => ({
    meta: [
      { title: "Reserve a table | Dolce Bistro & Pâtisserie, Nashik" },
      {
        name: "description",
        content:
          "Book a table at Dolce Bistro & Pâtisserie, Sharanpur Road, Nashik. Call +91 78757 52100 or send us your booking details in one tap.",
      },
      { property: "og:title", content: "Reserve a table at Dolce, Nashik" },
      {
        property: "og:description",
        content: "Name, phone, date, time, party size. That is all we need.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Reserve,
});

const consentText = "I agree that Dolce may contact me about this reservation.";

function Reserve() {
  const [form, setForm] = useState({ name: "", phone: "", date: "", time: "", party: "2" });
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "We need a name for the booking";
    if (!/^[0-9+\s-]{10,}$/.test(form.phone.trim()))
      next.phone = "We need a phone number so we can confirm your table";
    if (!form.date) next.date = "Which day would you like to come?";
    if (!form.time) next.time = "What time suits you?";
    if (!consent) next.consent = "Please tick this so we may contact you about the booking";
    setErrors(next);
    if (Object.keys(next).length) return;

    const message = `Table request for Dolce\nName: ${form.name}\nPhone: ${form.phone}\nDate: ${form.date}\nTime: ${form.time}\nGuests: ${form.party}\nConsent: yes — "${consentText}" (${new Date().toISOString()})`;
    window.location.href = `sms:+917875752100?body=${encodeURIComponent(message)}`;
  }

  const field = "mt-1 h-[52px] w-full rounded-[4px] border border-rule bg-limewash-2 px-4 text-[17px]";

  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <Eyebrow>Reserve</Eyebrow>
          <h1 className="mt-2 text-[38px] sm:text-[52px]">Book a table</h1>
          <p className="measure mt-3 text-[17px]">
            Online booking is not live yet. The fastest way to a table is a phone call — the team
            answers during service hours. You can also send us the details and we will call back to
            confirm.
          </p>
          <a href={site.phoneHref} className="btn-primary mt-6">
            Call {site.phoneDisplay}
          </a>
          <p className="mt-4">
            <ConfirmPending label="Opening hours" />
          </p>
          <div className="mt-6 flex items-center gap-2 rounded-[4px] border border-rule bg-limewash-2 px-3 py-2">
            <VegMark size={18} withWords />
          </div>
        </div>

        <form
          onSubmit={submit}
          noValidate
          className="rounded-[4px] border border-rule p-5"
          style={houndstoothStyle()}
        >
          <h2 className="text-[24px]">Send us your details</h2>

          <label className="mt-4 block">
            <span className="text-[16px] font-medium">Your name</span>
            <input value={form.name} onChange={set("name")} className={field} autoComplete="name" />
            {errors.name ? <Err msg={errors.name} /> : null}
          </label>

          <label className="mt-4 block">
            <span className="text-[16px] font-medium">Phone number</span>
            <input
              value={form.phone}
              onChange={set("phone")}
              className={field}
              inputMode="tel"
              autoComplete="tel"
            />
            {errors.phone ? <Err msg={errors.phone} /> : null}
          </label>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-[16px] font-medium">Date</span>
              <input type="date" value={form.date} onChange={set("date")} className={field} />
              {errors.date ? <Err msg={errors.date} /> : null}
            </label>
            <label className="block">
              <span className="text-[16px] font-medium">Time</span>
              <input type="time" value={form.time} onChange={set("time")} className={field} />
              {errors.time ? <Err msg={errors.time} /> : null}
            </label>
          </div>

          <label className="mt-4 block">
            <span className="text-[16px] font-medium">Guests</span>
            <select value={form.party} onChange={set("party")} className={field}>
              {Array.from({ length: 12 }, (_, i) => String(i + 1)).map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
              <option value="13+">13 or more</option>
            </select>
          </label>

          <label className="mt-5 flex items-start gap-3 text-[16px]">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-1 h-5 w-5"
            />
            <span>{consentText}</span>
          </label>
          {errors.consent ? <Err msg={errors.consent} /> : null}

          <button type="submit" className="btn-primary mt-5 w-full">
            Send booking request
          </button>
          <p className="mt-3 text-[14px] text-stone">
            We ask only for a name, phone number, date, time and party size — nothing else. Your
            details are used to confirm this booking and nothing more.
          </p>
        </form>
      </div>
    </Section>
  );
}

function Err({ msg }: { msg: string }) {
  return (
    <p
      role="alert"
      className="mt-2 border-l-2 border-amarena pl-2 text-[15px] text-amarena"
    >
      ⚠ {msg}
    </p>
  );
}
