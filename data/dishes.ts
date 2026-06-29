import { siteAssets } from "@/data/site";

export type Dish = {
  name: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const dishes: Dish[] = [
  {
    name: "Seco de cabrito",
    description:
      "Guiso norteno de sabor profundo, servido como en casa y listo para consultar disponibilidad.",
    image: siteAssets.dishes.secoCabrito.src,
    imageAlt: siteAssets.dishes.secoCabrito.alt
  },
  {
    name: "Arroz con pato",
    description:
      "Arroz sazonado, presa generosa y ese toque piurano que pide repeticion.",
    image: siteAssets.dishes.arrozConPato.src,
    imageAlt: siteAssets.dishes.arrozConPato.alt
  },
  {
    name: "Ceviche",
    description:
      "Fresco, jugoso y con caracter marino para abrir el almuerzo con fuerza.",
    image: siteAssets.dishes.ceviche.src,
    imageAlt: siteAssets.dishes.ceviche.alt
  },
  {
    name: "Seco de chavelo",
    description:
      "Clasico piurano de platano, carne y sazon criolla para comer sin apuro.",
    image: siteAssets.dishes.secoChavelo.src,
    imageAlt: siteAssets.dishes.secoChavelo.alt
  },
  {
    name: "Tamalitos verdes",
    description:
      "Entrada nortena suave y sabrosa, perfecta para acompanar los platos de fondo.",
    image: siteAssets.dishes.tamalitosVerdes.src,
    imageAlt: siteAssets.dishes.tamalitosVerdes.alt
  },
  {
    name: "Duo marino",
    description:
      "Combinacion marina para quienes quieren probar mas de un antojo en el mismo pedido.",
    image: siteAssets.dishes.duoMarino.src,
    imageAlt: siteAssets.dishes.duoMarino.alt
  }
];
