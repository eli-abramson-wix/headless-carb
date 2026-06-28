// Server-side Wix data access for SSR reads and form/provisioning writes.
// Never imported client-side.
//
// Uses the request-bound ambient client that @wix/astro installs per request,
// elevated so PRIVILEGED collections are reachable from visitor context.
//
// Why elevation (and not a hand-built AppStrategy client): the ambient context
// runs as the page visitor, who can't read/write private collections like
// ServiceRequest. auth.elevate() bypasses that check for trusted server code.
//
// The previous implementation built a client from AppStrategy + WIX_CLIENT_*
// env vars. Those vars only exist locally (.env.local, gitignored) and are
// injected by `wix dev`; in the released site they're absent, so every data
// call failed. SSR reads silently fell back to seed data (site still rendered),
// while the service-request insert had no fallback and returned 500 — surfacing
// to users as "Something jammed on my end."
import { items } from "@wix/data";
import { auth } from "@wix/essentials";

// Elevated query/insert. Elevation carries through the deferred .find() call.
export const queryElevated = auth.elevate(items.query);
export const insertElevated = auth.elevate(items.insert);
