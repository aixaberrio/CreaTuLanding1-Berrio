const productos = [
  //autos
  {
    id: 1,
    title: "Peugeot 308",
    description:
      "La estética distintiva del Peugeot 308 Allure Pack se combina con funcionalidades interiores pensadas para mejorar tu experiencia de conducción. Rodados y Llantas:Neumáticos 205/55 R16 91V y llantas de aleación ligera Santiaguito 2. Iluminación Avanzada: Ópticas delanteras fumé, faros traseros LED y luces diurnas LED. Tapizados de Calidad: Opciones desde tela hasta cuero microperforado para un interior elegante. Sistemas de Frenado: Discos ventilados en las ruedas delanteras para una frenada efectiva. Asistencia a la Conducción: Incluye ABS, REF, AFU, ESP, Hill Assist y una completa red de airbags. Anclaje ISOFIX: Asegura la protección de los ocupantes más pequeños durante el viaje.",
    stock: 3,
    type: "autos",
    imageProduct: "../../img/auto.jpg",
    price: 12000,
  },
  {
    id: 2,
    title: "Peugeot 308",
    description:
      "La estética distintiva del Peugeot 308 Allure Pack se combina con funcionalidades interiores pensadas para mejorar tu experiencia de conducción. Rodados y Llantas:Neumáticos 205/55 R16 91V y llantas de aleación ligera Santiaguito 2. Iluminación Avanzada: Ópticas delanteras fumé, faros traseros LED y luces diurnas LED. Tapizados de Calidad: Opciones desde tela hasta cuero microperforado para un interior elegante. Sistemas de Frenado: Discos ventilados en las ruedas delanteras para una frenada efectiva. Asistencia a la Conducción: Incluye ABS, REF, AFU, ESP, Hill Assist y una completa red de airbags. Anclaje ISOFIX: Asegura la protección de los ocupantes más pequeños durante el viaje.",
    stock: 3,
    type: "autos",
    imageProduct: "../../img/auto.jpg",
    price: 12000,
  },
  {
    id: 3,
    title: "Peugeot 308",
    description:
      "La estética distintiva del Peugeot 308 Allure Pack se combina con funcionalidades interiores pensadas para mejorar tu experiencia de conducción. Rodados y Llantas:Neumáticos 205/55 R16 91V y llantas de aleación ligera Santiaguito 2. Iluminación Avanzada: Ópticas delanteras fumé, faros traseros LED y luces diurnas LED. Tapizados de Calidad: Opciones desde tela hasta cuero microperforado para un interior elegante. Sistemas de Frenado: Discos ventilados en las ruedas delanteras para una frenada efectiva. Asistencia a la Conducción: Incluye ABS, REF, AFU, ESP, Hill Assist y una completa red de airbags. Anclaje ISOFIX: Asegura la protección de los ocupantes más pequeños durante el viaje.",
    stock: 3,
    type: "autos",
    imageProduct: "../../img/auto.jpg",
    price: 12000,
  },
  {
    id: 4,
    title: "Peugeot 308",
    description:
      "La estética distintiva del Peugeot 308 Allure Pack se combina con funcionalidades interiores pensadas para mejorar tu experiencia de conducción. Rodados y Llantas:Neumáticos 205/55 R16 91V y llantas de aleación ligera Santiaguito 2. Iluminación Avanzada: Ópticas delanteras fumé, faros traseros LED y luces diurnas LED. Tapizados de Calidad: Opciones desde tela hasta cuero microperforado para un interior elegante. Sistemas de Frenado: Discos ventilados en las ruedas delanteras para una frenada efectiva. Asistencia a la Conducción: Incluye ABS, REF, AFU, ESP, Hill Assist y una completa red de airbags. Anclaje ISOFIX: Asegura la protección de los ocupantes más pequeños durante el viaje.",
    stock: 3,
    type: "autos",
    imageProduct: "../../img/auto.jpg",
    price: 12000,
  },
  //camioneta
  {
    id: 5,
    title: "RAM 2500",
    description:
      "RAM 2500 ofrece performance, capacidad y estilo inigualable para enfrentar cualquier terreno poniendo énfasis en el confort de marcha. El interior ha sido totalmente rediseñado con nuevos y auténticos materiales Premium, colores y texturas, incluyendo un panel de instrumentos revestido en cuero ofreciendo una comodidad inigualable. Mejor capacidad de remolque hasta 7.861 kg y máxima capacidad de carga hasta 1.088 kg. Incorpora un renovado y avanzado sistema de monitoreo de presión de neumáticos (TPMS).",
    stock: 2,
    type: "camionetas",
    imageProduct: "../../img/camioneta.jpg",
    price: 20000,
  },
  {
    id: 6,
    title: "RAM 2500",
    description:
      "RAM 2500 ofrece performance, capacidad y estilo inigualable para enfrentar cualquier terreno poniendo énfasis en el confort de marcha. El interior ha sido totalmente rediseñado con nuevos y auténticos materiales Premium, colores y texturas, incluyendo un panel de instrumentos revestido en cuero ofreciendo una comodidad inigualable. Mejor capacidad de remolque hasta 7.861 kg y máxima capacidad de carga hasta 1.088 kg. Incorpora un renovado y avanzado sistema de monitoreo de presión de neumáticos (TPMS).",
    stock: 2,
    type: "camionetas",
    imageProduct: "../../img/camioneta.jpg",
    price: 20000,
  },
  {
    id: 7,
    title: "RAM 2500",
    description:
      "RAM 2500 ofrece performance, capacidad y estilo inigualable para enfrentar cualquier terreno poniendo énfasis en el confort de marcha. El interior ha sido totalmente rediseñado con nuevos y auténticos materiales Premium, colores y texturas, incluyendo un panel de instrumentos revestido en cuero ofreciendo una comodidad inigualable. Mejor capacidad de remolque hasta 7.861 kg y máxima capacidad de carga hasta 1.088 kg. Incorpora un renovado y avanzado sistema de monitoreo de presión de neumáticos (TPMS).",
    stock: 2,
    type: "camionetas",
    imageProduct: "../../img/camioneta.jpg",
    price: 20000,
  },
  {
    id: 8,
    title: "RAM 2500",
    description:
      "RAM 2500 ofrece performance, capacidad y estilo inigualable para enfrentar cualquier terreno poniendo énfasis en el confort de marcha. El interior ha sido totalmente rediseñado con nuevos y auténticos materiales Premium, colores y texturas, incluyendo un panel de instrumentos revestido en cuero ofreciendo una comodidad inigualable. Mejor capacidad de remolque hasta 7.861 kg y máxima capacidad de carga hasta 1.088 kg. Incorpora un renovado y avanzado sistema de monitoreo de presión de neumáticos (TPMS).",
    stock: 2,
    type: "camionetas",
    imageProduct: "../../img/camioneta.jpg",
    price: 20000,
  },
  //repuesto
  {
    id: 9,
    title: "Pirelli 255/55",
    description:
      "Marca, PIRELLI, Línea, SCORPION, Modelo, VERDE ALL SEASON, Tamaño, 255/55 R19, Índice de carga, 111, Índice de velocidad, H",
    stock: 8,
    type: "repuestos",
    imageProduct: "../../img/rueda.jpg",
    price: 500,
  },
  {
    id: 10,
    title: "Pirelli 255/55",
    description:
      "Marca, PIRELLI, Línea, SCORPION, Modelo, VERDE ALL SEASON, Tamaño, 255/55 R19, Índice de carga, 111, Índice de velocidad, H",
    stock: 8,
    type: "repuestos",
    imageProduct: "../../img/rueda.jpg",
    price: 500,
  },
  {
    id: 11,
    title: "Pirelli 255/55",
    description:
      "Marca, PIRELLI, Línea, SCORPION, Modelo, VERDE ALL SEASON, Tamaño, 255/55 R19, Índice de carga, 111, Índice de velocidad, H",
    stock: 8,
    type: "repuestos",
    imageProduct: "../../img/rueda.jpg",
    price: 500,
  },
];

export default productos;
