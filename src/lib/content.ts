// ── Seed content ────────────────────────────────────────────────────
// Mirrors the CMS collections described in spec-0244. Used directly for
// local dev / static builds, and as the fallback when no Wix Headless
// project is linked (see lib/wix.ts).

export interface CarbType {
  _id: string;
  typeName: string;
  vehicleKind: string;
  priceFlat: number;
  turnaroundDays: string;
  whatsIncluded: string;
  commonModels: string;
  image: string;
}

export interface Review {
  _id: string;
  name: string;
  quote: string;
  detail: string;
}

export interface StoryBlock {
  heading: string;
  body: string;
}

export interface BenchJob {
  _id: string;
  position: number;
  carb: string;
  owner: string;
  state: "On the bench" | "In line" | "Flow testing" | "Boxing up";
  note: string;
}

export const CARB_TYPES: CarbType[] = [
  {
    _id: "ct-1",
    typeName: "Single-Barrel Downdraft",
    vehicleKind: "Classic Car",
    priceFlat: 145,
    turnaroundDays: "10-14 days",
    whatsIncluded:
      "Full teardown, ultrasonic clean, new gaskets and needle-and-seat, jets verified against spec, bench-flow test",
    commonModels: "Rochester Monojet, Holley 1920, Carter YF",
    image: "/images/monojet.jpg",
  },
  {
    _id: "ct-2",
    typeName: "Two-Barrel Progressive",
    vehicleKind: "Classic Car",
    priceFlat: 185,
    turnaroundDays: "12-16 days",
    whatsIncluded:
      "Complete rebuild, accelerator pump rebuild, choke pull-off check, throttle shaft bushing inspection, flow-tested both barrels",
    commonModels: "Weber 32/36 DGV, Holley 2300, Rochester 2GC",
    image: "/images/gallery-1.jpg",
  },
  {
    _id: "ct-3",
    typeName: "Four-Barrel Performance",
    vehicleKind: "Muscle Car",
    priceFlat: 265,
    turnaroundDays: "14-18 days",
    whatsIncluded:
      "Full teardown of all four bores, secondary diaphragm rebuild, accelerator pump, power valve, jets checked, dual-circuit flow test",
    commonModels: "Holley 4150, Edelbrock 1406, Rochester Quadrajet",
    image: "/images/gallery-1.jpg",
  },
  {
    _id: "ct-4",
    typeName: "Motorcycle Slide (CV)",
    vehicleKind: "Motorcycle",
    priceFlat: 120,
    turnaroundDays: "8-12 days",
    whatsIncluded:
      "Ultrasonic clean, diaphragm and slide inspection, new o-rings and jets, float height set, bench-synced where paired",
    commonModels: "Mikuni BS34, Keihin CV, Bing 64",
    image: "/images/gallery-6.jpg",
  },
  {
    _id: "ct-5",
    typeName: "Motorcycle Rack (2-4 carbs)",
    vehicleKind: "Motorcycle",
    priceFlat: 320,
    turnaroundDays: "14-20 days",
    whatsIncluded:
      "Full rack split and rebuild, every bowl cleaned, all jets and o-rings replaced, bench vacuum-synced as a set",
    commonModels: "Keihin CVK rack, Mikuni VM rack, Honda CB four-pot",
    image: "/images/gallery-6.jpg",
  },
  {
    _id: "ct-6",
    typeName: "Tractor / Industrial Updraft",
    vehicleKind: "Tractor",
    priceFlat: 155,
    turnaroundDays: "10-14 days",
    whatsIncluded:
      "Teardown, ultrasonic clean, new gaskets and float valve, throttle and choke shaft check, bench-flow verified",
    commonModels: "Marvel-Schebler TSX, Zenith updraft, Carter UT",
    image: "/images/gallery-4.jpg",
  },
  {
    _id: "ct-7",
    typeName: "Outboard / Marine",
    vehicleKind: "Marine",
    priceFlat: 165,
    turnaroundDays: "12-16 days",
    whatsIncluded:
      "Salt and corrosion clean, new gaskets and welch plugs, float and inlet needle replaced, link-and-sync check, flow test",
    commonModels: "Mercury WMC, Johnson/Evinrude, Tillotson",
    image: "/images/gallery-4.jpg",
  },
  {
    _id: "ct-8",
    typeName: "Small Engine / Generator",
    vehicleKind: "Small Engine",
    priceFlat: 85,
    turnaroundDays: "7-10 days",
    whatsIncluded:
      "Ultrasonic clean, carb kit with diaphragm and gaskets, main jet cleared and verified, idle set on the bench",
    commonModels: "Walbro, Tillotson, Nikki, Briggs & Stratton",
    image: "/images/monojet.jpg",
  },
];

export const STORY: StoryBlock = {
  heading: "One bench, one guy, twenty-some years",
  body: "The shop started the way most stubborn things do: I couldn't get a carburetor to run right and nobody nearby would touch it. So I learned. Then a neighbor brought theirs, then a guy two counties over, then a package showed up from Oregon with a note that said the dealer told him it was unfixable. It wasn't. Twenty-some years later I work out of the same garage in rural Ohio, alone, with a wall of jets alphabetized so I can put my hand on the right one without looking. I post the teardowns on YouTube, partly to show people what's actually wrong with their carb and partly because the ad money pays the heating bill through an Ohio winter. I don't take everything. I take what I can do right. And I tell you the truth about what a carburetor can and can't be brought back from before you ship it.",
};

export const REVIEWS: Review[] = [
  {
    _id: "rv-1",
    name: "Dale Vornholt",
    quote:
      "Shipped him a seized Holley off a '68 truck. Came back cleaner than the day it left the factory and it fired on the second crank.",
    detail: "Mailed from Texas, classic truck restoration.",
  },
  {
    _id: "rv-2",
    name: "Priya Anand",
    quote:
      "He called before doing extra work, told me one casting was cracked, and sent it back with the bad part flagged instead of just charging me.",
    detail: "Motorcycle carb, honest-diagnosis story.",
  },
  {
    _id: "rv-3",
    name: "Owen Brask",
    quote:
      "Watched his videos for a year before I trusted anybody with my Weber. Worth the wait. The bench-flow numbers came in the box.",
    detail: "Vintage import, long-time channel viewer.",
  },
];

export const BENCH_QUEUE: BenchJob[] = [
  {
    _id: "bj-1",
    position: 1,
    carb: "Rochester Quadrajet",
    owner: "'72 Chevelle, Michigan",
    state: "On the bench",
    note: "Secondary air valve sticking. Bushings going in today.",
  },
  {
    _id: "bj-2",
    position: 2,
    carb: "Mikuni VM rack (×4)",
    owner: "CB750, Oregon",
    state: "Flow testing",
    note: "Rebuilt and racked. Bench-syncing the set before it boxes up.",
  },
  {
    _id: "bj-3",
    position: 3,
    carb: "Weber 32/36 DGV",
    owner: "Alfa Spider, New Jersey",
    state: "In line",
    note: "Next on the bench. Waiting on a choke pull-off in the mail.",
  },
  {
    _id: "bj-4",
    position: 4,
    carb: "Marvel-Schebler TSX",
    owner: "Ford 8N tractor, Iowa",
    state: "In line",
    note: "Updraft, light corrosion. Straightforward once it's up.",
  },
  {
    _id: "bj-5",
    position: 5,
    carb: "Holley 4150",
    owner: "'69 Mustang, Georgia",
    state: "In line",
    note: "Owner wants it flow-matched to a fresh build. Notes in hand.",
  },
];

export interface Faq {
  q: string;
  a: string;
}

export const FAQS: Faq[] = [
  {
    q: "How do I ship a carburetor safely?",
    a: "Drain the fuel, let it dry, wrap it in a couple of rags or bubble wrap, and box it snug so it can't rattle. I'll email you the address and any specifics once you send the request. Don't mail it before you hear back from me.",
  },
  {
    q: "How long is the turnaround?",
    a: "Most rebuilds run ten to sixteen days from the day your box lands on the bench, depending on type and how many are ahead of you. The On the Bench page shows the current line.",
  },
  {
    q: "What if it can't be saved?",
    a: "I'll tell you straight. If a casting's cracked or a throttle bore is worn past spec, I'll call before doing more work and send it back with the bad part flagged. I won't charge you for a rebuild that won't hold.",
  },
  {
    q: "Do you work on every carburetor?",
    a: "Just about. Cars, motorcycles, tractors, outboards, small engines. If it's truly oddball, send the request with photos and I'll tell you honestly whether it's one I can do right.",
  },
  {
    q: "Do I pay before I ship?",
    a: "No. You send the request, I confirm I can do the job and quote the flat price for your type, then you ship. Payment comes after the rebuild, before it goes back in the mail.",
  },
  {
    q: "Can't I just use a rebuild kit myself?",
    a: "Plenty of people do, and the videos walk you through it. But a kit doesn't true a warped flange, check shaft bushings, or flow-test the result. That's the part I get paid for.",
  },
];

// Static business facts used across pages + JSON-LD
export const BUSINESS = {
  name: "The Carburetor Whisperer",
  tagline: "One man, every carburetor ever made",
  region: "Rural Ohio",
  hours: "Bench hours Mon-Fri, by mail year-round",
  priceRange: "$$",
  established: "2003",
  social: {
    handle: "@carburetorwhisperer",
    youtube: "https://youtube.com/@thecarburetorwhisperer",
  },
};
