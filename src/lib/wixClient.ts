// Server-side Wix client bound to @wix/data with app (elevated) auth.
// Used for SSR reads and form/provisioning writes. Never imported client-side.
import { createClient, AppStrategy } from "@wix/sdk";
import { items, collections } from "@wix/data";

const env = (k: string): string =>
  (process.env[k] ?? (import.meta as any).env?.[k] ?? "") as string;

export const wixAdmin = createClient({
  modules: { items, collections },
  auth: AppStrategy({
    appId: env("WIX_CLIENT_ID"),
    appSecret: env("WIX_CLIENT_SECRET"),
    instanceId: env("WIX_CLIENT_INSTANCE_ID"),
    publicKey: env("WIX_CLIENT_PUBLIC_KEY"),
  }),
});
