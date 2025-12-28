const PRODUCTS = [
  {
    id: 1,
    nome: "Honda CG 160 Titan",
    preco: "R$ 24.990 à vista",
    imagem: "https://www.honda.com.br/motos/sites/hda/files/2025-08/visao-da-lateral-direita-da-honda-cg-160-titan.webp",
    descricao: "A Honda CG 160 Titan é ideal para quem busca economia, conforto e confiabilidade no dia a dia.",
    ativo: true,
    consorcios: [
      { plano: "12x", valor: "2.399,66" },
      { plano: "18x", valor: "1.609,13" },
      { plano: "24x", valor: "1.213,88" },
      { plano: "36x", valor: "825,30" },
      { plano: "48x", valor: "626,44" },
      { plano: "60x", valor: "508,59" },
      { plano: "80x", valor: "392,67" }
    ],
    cores: ["Vermelha", "Preta", "Cinza"]
  },

  {
    id: 2,
    nome: "Honda Biz 125 ES",
    preco: "R$ 15.990 à vista",
    imagem: "https://www.honda.com.br/motos/sites/hda/files/2025-08/Imagem-Home-Honda-Biz-125-ES-Preto-Black_0.webp",
    descricao: "Prática, econômica e perfeita para uso urbano.",
    ativo: true,
    consorcios: [
      { plano: "12x", valor: "1.599,49" },
      { plano: "18x", valor: "1.072,56" },
      { plano: "24x", valor: "809,11" },
      { plano: "36x", valor: "550,10" },
      { plano: "48x", valor: "417,55" },
      { plano: "60x", valor: "339,00" },
      { plano: "80x", valor: "261,73" }
    ],
    cores: ["Azul", "Branca", "Vermelha"]
  },

  {
    id: 3,
    nome: "Honda Biz 125 EX",
    preco: "R$ 19.990 à vista",
    imagem: "https://www.honda.com.br/motos/sites/hda/files/2025-08/Imagem-Home-Biz-125-EX-Vermelho-Perolizado-Pearl-Pimenta%20Red_0.webp",
    descricao: "Mais tecnologia, conforto e economia para o dia a dia.",
    ativo: true,
    consorcios: [
      { plano: "12x", valor: "1.979,79" },
      { plano: "18x", valor: "1.327,58" },
      { plano: "24x", valor: "1.001,48" },
      { plano: "36x", valor: "680,89" },
      { plano: "48x", valor: "516,83" },
      { plano: "60x", valor: "419,60" },
      { plano: "80x", valor: "323,96" }
    ],
    cores: ["Azul", "Branca"]
  },

  {
    id: 4,
    nome: "Honda Pop 110i ES",
    preco: "R$ 13.490 à vista",
    imagem: "https://www.honda.com.br/motos/sites/hda/files/2025-08/Imagem-Home-Pop-110i-Es-Preto-Black_0.webp",
    descricao: "Econômica, resistente e ideal para o dia a dia.",
    ativo: true,
    consorcios: [
      { plano: "12x", valor: "1.268,49" },
      { plano: "18x", valor: "850,60" },
      { plano: "24x", valor: "641,67" },
      { plano: "36x", valor: "436,26" },
      { plano: "48x", valor: "331,14" },
      { plano: "60x", valor: "268,84" },
      { plano: "80x", valor: "207,57" }
    ],
    cores: ["Vermelha", "Branca"]
  },

  {
    id: 5,
    nome: "Honda Sahara 300 ABS",
    preco: "R$ 37.490 à vista",
    imagem: "https://www.honda.com.br/motos/sites/hda/files/2025-08/Imagem-Home-Sahara-300-Cinza-Met%C3%A1lico.webp",
    descricao: "Força, robustez e segurança para qualquer terreno.",
    ativo: true,
    consorcios: [
      { plano: "24x", valor: "1.832,67" },
      { plano: "36x", valor: "1.246,00" },
      { plano: "48x", valor: "945,78" },
      { plano: "60x", valor: "767,84" },
      { plano: "80x", valor: "592,83" }
    ],
    cores: ["Preta", "Cinza"]
  },

  {
    id: 6,
    nome: "Honda Sahara 300 ADV",
    preco: "R$ 39.490 à vista",
    imagem: "https://www.honda.com.br/motos/sites/hda/files/2025-08/Imagem-Home-Sahara-300-Adventure-Bege%20Met%C3%A1lico.webp",
    descricao: "Versão aventureira, completa e pronta para qualquer desafio.",
    ativo: true,
    consorcios: [
      { plano: "24x", valor: "1.893,87" },
      { plano: "36x", valor: "1.287,61" },
      { plano: "48x", valor: "977,36" },
      { plano: "60x", valor: "793,48" },
      { plano: "80x", valor: "612,63" }
    ],
    cores: ["Bege", "Preta"]
  },

  {
    id: 7,
    nome: "Honda CG 160 Fan",
    preco: "R$ 23.290 à vista",
    imagem: "https://www.honda.com.br/motos/sites/hda/files/2025-08/Imagem-Home-Honda-CG-160-Fan-Prata-Met%C3%A1lico.webp",
    descricao: "Robusta, econômica e perfeita para o uso diário.",
    ativo: true,
    consorcios: [
      { plano: "12x", valor: "2.257,31" },
      { plano: "18x", valor: "1.513,68" },
      { plano: "24x", valor: "1.141,87" },
      { plano: "36x", valor: "776,34" },
      { plano: "48x", valor: "589,28" },
      { plano: "60x", valor: "478,42" },
      { plano: "80x", valor: "369,37" }
    ],
    cores: ["Preta", "Prata"]
  },

  {
    id: 8,
    nome: "Honda CG 160 Start",
    preco: "R$ 21.390 à vista",
    imagem: "https://www.honda.com.br/motos/sites/hda/files/2025-08/Imagem-Home-Honda-CG-160-Start-Vermelho-Perolizado_0.webp",
    descricao: "Modelo acessível e econômico.",
    ativo: true,
    consorcios: [
      { plano: "12x", valor: "2.068,38" },
      { plano: "18x", valor: "1.386,98" },
      { plano: "24x", valor: "1.046,30" },
      { plano: "36x", valor: "711,36" },
      { plano: "48x", valor: "539,96" },
      { plano: "60x", valor: "438,37" },
      { plano: "80x", valor: "338,46" }
    ],
    cores: ["Vermelha", "Preta"]
  },

  {
    id: 9,
    nome: "Honda XRE 190",
    preco: "R$ 28.990 à vista",
    imagem: "https://santaremmotos.com.br/wp-content/uploads/2025/01/imagem-home-honda-xre-190-lateral-vermelho-1.webp",
    descricao: "Versátil e pronta para qualquer caminho.",
    ativo: true,
    consorcios: [
      { plano: "24x", valor: "1.399,05" },
      { plano: "36x", valor: "951,19" },
      { plano: "48x", valor: "722,00" },
      { plano: "60x", valor: "586,17" },
      { plano: "80x", valor: "452,57" }
    ],
    cores: ["Vermelha", "Preta"]
  },

  {
    id: 10,
    nome: "Honda PCX CBS",
    preco: "R$ 22.790 à vista",
    imagem: "https://www.honda.com.br/motos/sites/hda/files/2025-08/imagem-home-honda-pcx-branco_0.webp",
    descricao: "Scooter premium com conforto e tecnologia.",
    ativo: true,
    consorcios: [
      { plano: "12x", valor: "2.172,41" },
      { plano: "18x", valor: "1.456,75" },
      { plano: "24x", valor: "1.098,93" },
      { plano: "36x", valor: "747,14" },
      { plano: "48x", valor: "567,12" },
      { plano: "60x", valor: "460,42" },
      { plano: "80x", valor: "355,48" }
    ],
    cores: ["Branca", "Preta"]
  },

  {
    id: 11,
    nome: "Honda Hornet 500",
    preco: "R$ 50.990 à vista",
    imagem: "https://www.honda.com.br/motos/sites/hda/files/2025-08/Imagem-home-honda-Hornet500-Vermelha-Lateral_0.webp",
    descricao: "Performance e esportividade em alto nível.",
    ativo: true,
    consorcios: [{ plano: "72x", valor: "780,03" }],
    cores: ["Vermelha", "Preta"]
  },

  {
    id: 12,
    nome: "Honda CB 650R",
    preco: "R$ 66.490 à vista",
    imagem: "https://www.honda.com.br/motos/sites/hda/files/2025-08/Imagem-Home-da-Moto-Honda-CB-650R-Azul-Perolizado.webp",
    descricao: "Performance e esportividade em alto nível.",
    ativo: true,
    consorcios: [{ plano: "72x", valor: "1.052,60" }],
    cores: ["Vermelha", "Preta"]
  },

  {
    id: 13,
    nome: "Honda Twister ABS",
    preco: "R$ 30.590 à vista",
    imagem: "https://www.honda.com.br/motos/sites/hda/files/2025-08/Imagem-home-honda-Twister-ABS-Azul-Lateral.webp",
    descricao: "Performance e esportividade em alto nível.",
    ativo: true,
    consorcios: [
      { plano: "24x", valor: "1.518,38" },
      { plano: "36x", valor: "1.032,32" },
      { plano: "48x", valor: "783,58" },
      { plano: "60x", valor: "636,16" },
      { plano: "80x", valor: "491,16" }
    ],
    cores: ["Vermelha", "Preta"]
  },

  {
    id: 14,
    nome: "Honda Twister CBS",
    preco: "R$ 29.590 à vista",
    imagem: "https://www.honda.com.br/motos/sites/hda/files/2025-08/Imagem-home-honda-Twister-CBS-Vermelha-Lateral.webp",
    descricao: "Performance e esportividade em alto nível.",
    ativo: true,
    consorcios: [
      { plano: "24x", valor: "1.461,51" },
      { plano: "36x", valor: "993,65" },
      { plano: "48x", valor: "754,23" },
      { plano: "60x", valor: "612,33" },
      { plano: "80x", valor: "472,77" }
    ],
    cores: ["Vermelha", "Preta"]
  },

  {
    id: 15,
    nome: "Honda Tornado",
    preco: "R$ 36.990 à vista",
    imagem: "https://www.honda.com.br/motos/sites/hda/files/2025-08/Imagem-Home-XR-300L-Tornado-Vermelho-Fighting-Red.webp",
    descricao: "Performance e esportividade em alto nível.",
    ativo: true,
    consorcios: [
      { plano: "24x", valor: "1.820,24" },
      { plano: "36x", valor: "1.237,55" },
      { plano: "48x", valor: "939,36" },
      { plano: "60x", valor: "762,64" },
      { plano: "80x", valor: "588,81" }
    ],
    cores: ["Vermelha", "Preta"]
  },

  {
    id: 16,
    nome: "NXR 160 Bros ABS",
    preco: "R$ 27.490 à vista",
    imagem: "https://www.honda.com.br/motos/sites/hda/files/2025-08/Imagem-Home-Honda-NXR-160-Bros-ABS-Cinza-Tempestade-Gray.webp",
    descricao: "Performance e esportividade em alto nível.",
    ativo: true,
    consorcios: [{ plano: "Consultar o vendedor" }]
  },

  {
    id: 17,
    nome: "NXR 160 Bros CBS",
    preco: "R$ 26.490 à vista",
    imagem: "https://www.honda.com.br/motos/sites/hda/files/2025-08/Imagem-Home-Honda-NXR-160-Bros-CBS-Vermelha-Fighting-Red.webp",
    descricao: "Performance e esportividade em alto nível.",
    ativo: true,
    consorcios: [{ plano: "Consultar o vendedor" }],
    cores: ["Vermelha", "Preta"]
  }
];
