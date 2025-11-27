import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sichao (Sean) Liu Portfolio",
    short_name: "Sean Liu",
    description: "Portfolio of Sichao (Sean) Liu, Senior Software Engineer",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
