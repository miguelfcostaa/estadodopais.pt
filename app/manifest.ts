import type { MetadataRoute } from "next";
import { SITE_DESCRICAO, SITE_NOME } from "@/lib/site";

// Manifesto da aplicação: nome e ícones usados ao adicionar o site ao ecrã principal do telemóvel
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NOME,
    short_name: SITE_NOME,
    description: SITE_DESCRICAO,
    lang: "pt-PT",
    start_url: "/",
    display: "standalone",
    background_color: "#0b1520",
    theme_color: "#0b1520",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
