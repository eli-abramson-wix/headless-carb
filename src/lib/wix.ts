// ── Wix Headless data layer ─────────────────────────────────────────
// SSR reads via the server-side bound admin client (wixClient.ts).
// Falls back to the local seed (content.ts) if a collection is empty or
// unavailable, so the site always renders.

import { wixAdmin } from "./wixClient";
import {
  CARB_TYPES,
  REVIEWS,
  STORY,
  BENCH_QUEUE,
  type CarbType,
  type Review,
  type StoryBlock,
  type BenchJob,
} from "./content";

async function query<T>(collectionId: string, fallback: T[]): Promise<T[]> {
  try {
    const res = await wixAdmin.items.query(collectionId).find();
    const rows = res.items.map((it: any) => (it?.data ?? it) as T);
    return rows.length ? rows : fallback;
  } catch (err) {
    console.warn(`[wix] falling back to seed for "${collectionId}":`, err);
    return fallback;
  }
}

export async function getCarbTypes(): Promise<CarbType[]> {
  const rows = await query<CarbType>("CarbType", CARB_TYPES);
  return [...rows].sort((a, b) => a.priceFlat - b.priceFlat);
}

export async function getReviews(): Promise<Review[]> {
  return query<Review>("Review", REVIEWS);
}

export async function getStory(): Promise<StoryBlock> {
  const rows = await query<StoryBlock>("StoryBlock", [STORY]);
  return rows[0] ?? STORY;
}

export async function getBenchQueue(): Promise<BenchJob[]> {
  const rows = await query<BenchJob>("BenchJob", BENCH_QUEUE);
  return [...rows].sort((a, b) => a.position - b.position);
}
