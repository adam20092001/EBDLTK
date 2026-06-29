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
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Plato contundente de carne guisada con guarniciones"
  },
  {
    name: "Arroz con pato",
    description:
      "Arroz sazonado, presa generosa y ese toque piurano que pide repeticion.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Mesa con plato de arroz y carne servida"
  },
  {
    name: "Ceviche",
    description:
      "Fresco, jugoso y con caracter marino para abrir el almuerzo con fuerza.",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Plato fresco con vegetales y pescado estilo ceviche"
  },
  {
    name: "Seco de chavelo",
    description:
      "Clasico piurano de platano, carne y sazon criolla para comer sin apuro.",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Plato dorado y abundante servido sobre mesa"
  },
  {
    name: "Tamalitos verdes",
    description:
      "Entrada nortena suave y sabrosa, perfecta para acompanar los platos de fondo.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Comida servida con vegetales frescos y acompanamientos"
  },
  {
    name: "Duo marino",
    description:
      "Combinacion marina para quienes quieren probar mas de un antojo en el mismo pedido.",
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Plato de restaurante con preparacion marina y guarniciones"
  }
];
