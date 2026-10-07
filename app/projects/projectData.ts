export interface ProjectDetail {
  slug: string;
  number: string;
  totalCount: string;
  title: string;
  shortDescription: string;
  summary: string;
  primaryImagePlaceholder: string;
  primaryImageAsset?: string;
  whatWeBuilt: string;
  secondaryImagePlaceholder: string;
  secondaryImageAsset?: string;
  videoPlaceholder: string;
  videoAsset?: string;
  videoPoster?: string;
  videoOrientation?: "landscape" | "portrait";
  videos?: {
    title?: string;
    videoAsset: string;
    videoPoster?: string;
    orientation: "landscape" | "portrait";
  }[];
  capabilities: string[];
}

export const projectDetails: Record<string, ProjectDetail> = {
  "banking-platform": {
    slug: "banking-platform",
    number: "01",
    totalCount: "04",
    title: "Banking Platform",
    shortDescription:
      "A complete banking experience covering customer accounts, transfers and financial operations.",
    summary:
      "A resilient digital banking engine engineered for retail and business accounts. Chukolab architected the end-to-end platform, designing secure account hierarchies, real-time balance tracking, and institutional-grade transfer pipelines.",
    primaryImagePlaceholder: "PROJECT IMAGE 01",
    primaryImageAsset: "/finacorm-heroshot.png",
    whatWeBuilt:
      "Chukolab designed and engineered the end-to-end banking infrastructure, including client-facing interfaces, ledger synchronization, and administrative risk consoles. We delivered a complete production platform structured to withstand rigorous compliance audits and high transaction volumes.",
    secondaryImagePlaceholder: "PROJECT IMAGE 02",
    secondaryImageAsset: "/finacorm-heroshot2.png",
    videoPlaceholder: "PROJECT VIDEO",
    videoAsset: "/banking-product-showcase.mp4",
    videoPoster: "/banking-product-showcase-poster.jpg",
    capabilities: [
      "Customer accounts",
      "Transfers",
      "Transaction management",
      "Financial operations",
      "Administrative controls",
    ],
  },

  "payment-platform": {
    slug: "payment-platform",
    number: "02",
    totalCount: "04",
    title: "Payment Platform",
    shortDescription:
      "A complete payment platform for managing transactions, payment methods and financial operations.",
    summary:
      "An enterprise payments ecosystem built for high-throughput transaction processing. Chukolab engineered the core payment orchestration layer, unified gateway integrations, and multi-currency payout reconciliation flows.",
    primaryImagePlaceholder: "PROJECT IMAGE 01",
    primaryImageAsset: "/meridian-page-image1.png",
    whatWeBuilt:
      "We engineered the full payment lifecycle interface and operational engine. This included multi-rail checkout flows, settlement tracking dashboards, and treasury management tools designed for seamless operator control and transaction reliability.",
    secondaryImagePlaceholder: "PROJECT IMAGE 02",
    secondaryImageAsset: "/meridian-heroshot.png",
    videoPlaceholder: "PROJECT VIDEO",
    videoAsset: "/meridian-page-video1.mp4",
    videoPoster: "/meridian-page-video1-poster.jpg",
    videoOrientation: "portrait",
    capabilities: [
      "Payment orchestration",
      "Multi-rail checkout",
      "Settlement tracking",
      "Dispute & refund management",
      "Treasury operations",
    ],
  },

  "shipping-logistics-platform": {
    slug: "shipping-logistics-platform",
    number: "03",
    totalCount: "04",
    title: "Shipping / Logistics Platform",
    shortDescription:
      "A complete logistics platform for managing shipments, tracking deliveries and coordinating operations.",
    summary:
      "A comprehensive supply-chain and freight management platform connecting senders, carriers, and dispatch controllers. Chukolab built the central dispatch hub, real-time shipment monitoring, and automated milestone tracking.",
    primaryImagePlaceholder: "PROJECT IMAGE 01",
    primaryImageAsset: "/aglogistic-pageimg1.png",
    whatWeBuilt:
      "Chukolab structured and implemented the logistics operations platform from ground up. We developed end-to-end shipment routing, warehouse receipt verification, manifest generation, and customer tracking portals with unified status synchronizations.",
    secondaryImagePlaceholder: "PROJECT IMAGE 02",
    secondaryImageAsset: "/aglogistic-heroshot.png",
    videoPlaceholder: "PROJECT VIDEO",
    videoAsset: "/aglogistic-pagevid1.mp4",
    videoPoster: "/aglogistic-pagevid1-poster.jpg",
    videoOrientation: "landscape",
    capabilities: [
      "Shipment creation & routing",
      "Real-time delivery tracking",
      "Carrier & fleet coordination",
      "Manifest & customs documentation",
      "Dispatch management",
    ],
  },

  "crypto-exchange": {
    slug: "crypto-exchange",
    number: "04",
    totalCount: "04",
    title: "Crypto Exchange",
    shortDescription:
      "A complete crypto exchange platform for managing digital assets, transactions and customer operations.",
    summary:
      "A high-performance digital asset exchange supporting multi-asset order routing, secure custody interfaces, and real-time ledger settlement. Chukolab built the full client trading surface and back-office administrative consoles.",
    primaryImagePlaceholder: "PROJECT IMAGE 01",
    primaryImageAsset: "/veejayxchange-heroshot.png",
    whatWeBuilt:
      "We engineered the trading platform frontend, portfolio accounting views, and customer onboarding flows. Chukolab delivered responsive asset management tools, multi-signature deposit verification views, and compliance monitoring consoles for high-velocity operations.",
    secondaryImagePlaceholder: "PROJECT IMAGE 02",
    videoPlaceholder: "PROJECT VIDEO",
    videos: [
      {
        title: "Administrative Operations Console",
        videoAsset: "/veejay-admin.mp4",
        videoPoster: "/veejay-admin-poster.jpg",
        orientation: "landscape",
      },
      {
        title: "Client Trading & Wallet Application",
        videoAsset: "/veejay-user.mp4",
        videoPoster: "/veejay-user-poster.jpg",
        orientation: "portrait",
      },
    ],
    capabilities: [
      "Digital asset trading",
      "Instant convert & swap",
      "Multi-currency wallets",
      "Deposit & withdrawal workflows",
      "Compliance & user verification",
    ],
  },
};

export const projectSlugs = Object.keys(projectDetails);
