export enum ProductCategoryEnum {
  ELECTRONICS,
  PERISHABLES,
  CHEMICALS,
  BUILDING_MATERIALS,
  CLOTHING_AND_APPAREL,
  CANNED_FOOD,
  AUTOMOTIVE,
  MEDICAL_SUPPLIES,
  FURNITURE_AND_DECOR,
  TOYS_AND_GAMES,
  BOOKS_AND_PUBLICATIONS,
  BEAUTY_AND_PERSONAL_CARE,
  CLEANING_SUPPLIES,
  PET_SUPPLIES,
  ELECTRONIC_CONSUMER_GOODS,
  SPORTING_EQUIPMENT,
  JEWELRY_AND_WATCHES,
  OFFICE_SUPPLIES,
  LEISURE_PRODUCTS,
  BEVERAGES,
  COMPUTERS_AND_PERIPHERALS,
  MEDICAL_EQUIPMENT,
  CONSTRUCTION_EQUIPMENT,
  CLOTHING_ACCESSORIES,
  ELECTRICAL_APPLIANCES,
  TOOLS_AND_HARDWARE,
  VIDEO_GAMES,
  ART_AND_CRAFT_SUPPLIES,
  HOME_APPLIANCES,
  EDUCATIONAL_PRODUCTS,
  FOOD_INGREDIENTS,
  CAMERAS_AND_PHOTOGRAPHY,
  MUSIC_INSTRUMENTS,
  GARDEN_AND_PATIO,
  INDUSTRIAL_SUPPLIES,
  FITNESS_EQUIPMENT,
  BEDDING_AND_LINENS,
  SPORTS_AND_OUTDOOR_GEAR,
  KITCHEN_APPLIANCES,
  MOVIES_AND_ENTERTAINMENT,
  BABY_PRODUCTS,
  TELEVISIONS,
  PARTY_SUPPLIES,
  LUGGAGE_AND_TRAVEL,
  COSMETICS_AND_SKIN_CARE,
  COMPUTER_SOFTWARE,
  HOME_IMPROVEMENT,
  LUGGAGE_AND_BAGS,
  HEALTH_SUPPLEMENTS,
  ELECTRICAL_COMPONENTS,
  HUNTING_AND_FISHING_SUPPLIES,
  WINE_AND_SPIRITS,
  FIREARMS_AND_ACCESSORIES,
  ART_SUPPLIES,
  CYCLING_EQUIPMENT,
  FITNESS_APPAREL,
  PET_FOOD,
  HOME_AUDIO_AND_VIDEO,
  COLLECTIBLES,
  LINGERIE_AND_INTIMATES,
  MOTORCYCLE_ACCESSORIES,
  WATER_SPORTS_EQUIPMENT,
  SKI_AND_SNOWBOARD_GEAR,
  OFFICE_FURNITURE,
}

export const ProductCategoryEnumTranslations: {
  [key in ProductCategoryEnum]: string;
} = {
  [ProductCategoryEnum.ELECTRONICS]: 'Eletrônicos',
  [ProductCategoryEnum.PERISHABLES]: 'Perecíveis',
  [ProductCategoryEnum.CHEMICALS]: 'Químicos',
  [ProductCategoryEnum.BUILDING_MATERIALS]: 'Materiais de Construção',
  [ProductCategoryEnum.CLOTHING_AND_APPAREL]: 'Roupas e Vestuário',
  [ProductCategoryEnum.CANNED_FOOD]: 'Alimentos Enlatados',
  [ProductCategoryEnum.AUTOMOTIVE]: 'Automotivo',
  [ProductCategoryEnum.MEDICAL_SUPPLIES]: 'Suprimentos Médicos',
  [ProductCategoryEnum.FURNITURE_AND_DECOR]: 'Móveis e Decoração',
  [ProductCategoryEnum.TOYS_AND_GAMES]: 'Brinquedos e Jogos',
  [ProductCategoryEnum.BOOKS_AND_PUBLICATIONS]: 'Livros e Publicações',
  [ProductCategoryEnum.BEAUTY_AND_PERSONAL_CARE]: 'Beleza e Cuidados Pessoais',
  [ProductCategoryEnum.CLEANING_SUPPLIES]: 'Suprimentos de Limpeza',
  [ProductCategoryEnum.PET_SUPPLIES]: 'Suprimentos para Animais de Estimação',
  [ProductCategoryEnum.ELECTRONIC_CONSUMER_GOODS]:
    'Bens de Consumo Eletrônicos',
  [ProductCategoryEnum.SPORTING_EQUIPMENT]: 'Equipamento Esportivo',
  [ProductCategoryEnum.JEWELRY_AND_WATCHES]: 'Joias e Relógios',
  [ProductCategoryEnum.OFFICE_SUPPLIES]: 'Suprimentos de Escritório',
  [ProductCategoryEnum.LEISURE_PRODUCTS]: 'Produtos de Lazer',
  [ProductCategoryEnum.BEVERAGES]: 'Bebidas',
  [ProductCategoryEnum.COMPUTERS_AND_PERIPHERALS]: 'Computadores e Periféricos',
  [ProductCategoryEnum.MEDICAL_EQUIPMENT]: 'Equipamentos Médicos',
  [ProductCategoryEnum.CONSTRUCTION_EQUIPMENT]: 'Equipamentos de Construção',
  [ProductCategoryEnum.CLOTHING_ACCESSORIES]: 'Acessórios de Vestuário',
  [ProductCategoryEnum.ELECTRICAL_APPLIANCES]: 'Eletrodomésticos',
  [ProductCategoryEnum.TOOLS_AND_HARDWARE]: 'Ferramentas e Hardware',
  [ProductCategoryEnum.VIDEO_GAMES]: 'Videojogos',
  [ProductCategoryEnum.ART_AND_CRAFT_SUPPLIES]:
    'Materiais de Arte e Artesanato',
  [ProductCategoryEnum.HOME_APPLIANCES]: 'Aparelhos Domésticos',
  [ProductCategoryEnum.EDUCATIONAL_PRODUCTS]: 'Produtos Educacionais',
  [ProductCategoryEnum.FOOD_INGREDIENTS]: 'Ingredientes Alimentares',
  [ProductCategoryEnum.CAMERAS_AND_PHOTOGRAPHY]: 'Câmeras e Fotografia',
  [ProductCategoryEnum.MUSIC_INSTRUMENTS]: 'Instrumentos Musicais',
  [ProductCategoryEnum.GARDEN_AND_PATIO]: 'Jardim e Pátio',
  [ProductCategoryEnum.INDUSTRIAL_SUPPLIES]: 'Suprimentos Industriais',
  [ProductCategoryEnum.FITNESS_EQUIPMENT]: 'Equipamentos de Fitness',
  [ProductCategoryEnum.BEDDING_AND_LINENS]: 'Roupas de Cama e Linho',
  [ProductCategoryEnum.SPORTS_AND_OUTDOOR_GEAR]:
    'Equipamento Desportivo e de Exterior',
  [ProductCategoryEnum.KITCHEN_APPLIANCES]: 'Eletrodomésticos de Cozinha',
  [ProductCategoryEnum.MOVIES_AND_ENTERTAINMENT]: 'Filmes e Entretenimento',
  [ProductCategoryEnum.BABY_PRODUCTS]: 'Produtos para Bebês',
  [ProductCategoryEnum.TELEVISIONS]: 'Televisões',
  [ProductCategoryEnum.PARTY_SUPPLIES]: 'Artigos para Festas',
  [ProductCategoryEnum.LUGGAGE_AND_TRAVEL]: 'Bagagem e Viagem',
  [ProductCategoryEnum.COSMETICS_AND_SKIN_CARE]:
    'Cosméticos e Cuidados com a Pele',
  [ProductCategoryEnum.COMPUTER_SOFTWARE]: 'Software de Computador',
  [ProductCategoryEnum.HOME_IMPROVEMENT]: 'Melhorias para Casa',
  [ProductCategoryEnum.LUGGAGE_AND_BAGS]: 'Malas e Bolsas',
  [ProductCategoryEnum.HEALTH_SUPPLEMENTS]: 'Suplementos de Saúde',
  [ProductCategoryEnum.ELECTRICAL_COMPONENTS]: 'Componentes Elétricos',
  [ProductCategoryEnum.HUNTING_AND_FISHING_SUPPLIES]:
    'Suprimentos de Caça e Pesca',
  [ProductCategoryEnum.WINE_AND_SPIRITS]: 'Vinhos e Destilados',
  [ProductCategoryEnum.FIREARMS_AND_ACCESSORIES]: 'Armas de Fogo e Acessórios',
  [ProductCategoryEnum.ART_SUPPLIES]: 'Suprimentos de Arte',
  [ProductCategoryEnum.CYCLING_EQUIPMENT]: 'Equipamento de Ciclismo',
  [ProductCategoryEnum.FITNESS_APPAREL]: 'Vestuário de Fitness',
  [ProductCategoryEnum.PET_FOOD]: 'Ração para Animais',
  [ProductCategoryEnum.HOME_AUDIO_AND_VIDEO]: 'Áudio e Vídeo para Casa',
  [ProductCategoryEnum.COLLECTIBLES]: 'Colecionáveis',
  [ProductCategoryEnum.LINGERIE_AND_INTIMATES]: 'Lingerie e Íntimos',
  [ProductCategoryEnum.MOTORCYCLE_ACCESSORIES]: 'Acessórios de Motocicleta',
  [ProductCategoryEnum.WATER_SPORTS_EQUIPMENT]:
    'Equipamento para Desportos Aquáticos',
  [ProductCategoryEnum.SKI_AND_SNOWBOARD_GEAR]:
    'Equipamento de Esqui e Snowboard',
  [ProductCategoryEnum.OFFICE_FURNITURE]: 'Mobiliário de Escritório',
};
