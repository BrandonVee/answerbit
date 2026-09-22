import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AnswerBit GEO",
    short_name: "AnswerBit",
    description: "让品牌成为 AI 答案里的可信来源。",
    start_url: "/",
    display: "standalone",
    background_color: "#f1efe6",
    theme_color: "#121820",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
