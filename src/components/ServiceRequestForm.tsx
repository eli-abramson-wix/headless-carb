import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "done" | "error";

const FIELDS = [
  {
    name: "name",
    label: "Contact name",
    type: "text",
    placeholder: "Full name",
    required: true,
    half: true,
  },
  {
    name: "email",
    label: "Email address",
    type: "email",
    placeholder: "name@example.com",
    required: true,
    half: true,
  },
  {
    name: "vehicleOrEngine",
    label: "Vehicle / engine",
    type: "text",
    placeholder: "e.g. 1974 Honda CB750",
    required: true,
    half: true,
  },
  {
    name: "carbMakeAndModel",
    label: "Carb make & model",
    type: "text",
    placeholder: "e.g. Keihin PD46A — or 'not sure'",
    required: false,
    half: true,
  },
] as const;

export default function ServiceRequestForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/service-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("done");
      form.reset();
    } catch (err) {
      console.error("[service-request] submit failed:", err);
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="bin p-8 border-t-4 border-t-accent" role="status">
        <p className="font-display text-2xl text-primary">Got it.</p>
        <p className="mt-3 text-text leading-relaxed">
          I'll email you the shipping address and how to pack it within a day
          or so. <strong>Don't ship it until you hear from me.</strong>
        </p>
        <button
          type="button"
          className="btn btn-ghost mt-6"
          onClick={() => setStatus("idle")}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bin p-6 sm:p-8" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        {FIELDS.map((f) => (
          <div key={f.name} className={f.half ? "" : "sm:col-span-2"}>
            <label htmlFor={f.name} className="label-caps block mb-1.5">
              {f.label}
              {f.required && <span className="text-accent"> *</span>}
            </label>
            <input
              id={f.name}
              name={f.name}
              type={f.type}
              placeholder={f.placeholder}
              required={f.required}
              className="field"
            />
          </div>
        ))}

        <div className="sm:col-span-2">
          <label htmlFor="symptomsDescription" className="label-caps block mb-1.5">
            Symptoms & requirements <span className="text-accent">*</span>
          </label>
          <textarea
            id="symptomsDescription"
            name="symptomsDescription"
            required
            rows={5}
            placeholder="Describe the behavior: idles rough, floods, leaks, flat spot — or specific goals for the rebuild."
            className="field resize-y"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="photosNote" className="label-caps block mb-1.5">
            Photos note
          </label>
          <input
            id="photosNote"
            name="photosNote"
            type="text"
            placeholder="A link to photos (Drive, Imgur), or note that you'll send them after I reply."
            className="field"
          />
          <p className="mt-1.5 text-sm text-text-muted">
            Clear photos of the carb and any obvious damage help me give you a
            straight answer faster.
          </p>
        </div>
      </div>

      {status === "error" && (
        <p className="mt-5 text-accent" role="alert">
          Something jammed on my end. Email me directly and I'll sort it out.
        </p>
      )}

      <button
        type="submit"
        className="btn btn-primary mt-7 w-full sm:w-auto"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Send the request"}
      </button>

      <p className="mt-4 text-sm text-text-muted leading-relaxed max-w-prose">
        <strong className="text-text">No payment now.</strong> I look at what
        you've got, confirm I can do it, and send shipping instructions before
        anything leaves your hands.
      </p>
    </form>
  );
}
