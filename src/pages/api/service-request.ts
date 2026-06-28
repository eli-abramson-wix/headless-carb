import type { APIRoute } from "astro";
import { insertElevated } from "../../lib/wixClient";

export const prerender = false;

const FIELDS = [
  "name",
  "email",
  "vehicleOrEngine",
  "carbMakeAndModel",
  "symptomsDescription",
  "photosNote",
];

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const data: Record<string, string> = {};
    for (const k of FIELDS) {
      if (body[k] != null && String(body[k]).trim()) {
        data[k] = String(body[k]).slice(0, 5000);
      }
    }
    if (!data.name || !data.email || !data.symptomsDescription) {
      return json({ ok: false, error: "missing required fields" }, 400);
    }
    await insertElevated("ServiceRequest", data);
    return json({ ok: true }, 200);
  } catch (err) {
    console.error("[api/service-request]", err);
    return json({ ok: false }, 500);
  }
};

function json(obj: unknown, status: number) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
