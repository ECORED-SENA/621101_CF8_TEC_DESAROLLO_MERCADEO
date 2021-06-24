export default {
  global: {
    componenteFormativo: 'Plan de precios y presupuesto',
    descripcionCurso:
      'A través del componente formativo el aprendiz debe apropiar los elementos de entrada requeridos para la elaboración del plan de precios y el presupuesto para su idea de negocio o proyecto productivo.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Leyes de oferta y demanda',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Demanda',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Oferta',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Equilibrio de mercado',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Competencia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Estrategia competitiva',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Benchmarking',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Inteligencia de mercados',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Sistema de información de mercadeo',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Minería de datos',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Precio',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Políticas de fijación',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Estrategias de precios',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Punto de equilibrio operativo',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Presupuesto de ventas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Pronóstico',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Proyección',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Potencial de ventas',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Baena, V. (2010). Instrumentos de marketing. Decisiones sobre producto, precio, distribución, comunicación y marketing directo. Editorial UOC.',
    },
    {
      referencia:
        'Best, R. (2007). 4a. Ed. Marketing estratégico. Pearson Prentice Hall. ',
    },
    {
      referencia:
        'Boxwell, RJ. (1994). Benchmarking para competir con ventaja. McGraw Hill.',
    },
    {
      referencia:
        'Díaz, M. C., Parra, R. & López, L. M. (2016). Presupuestos. Enfoque para la planeación financiera. Pearson.',
    },
    {
      referencia:
        'Escrivá, J. (2005). Marketing en el punto de venta. McGraw-Hill.',
    },
    {
      referencia:
        'Forero, S. C. (Ed.). (2017). Fundamentos de mercadeo. Ecoe Ediciones.',
    },
    {
      referencia:
        'Goñi, N. (2008). El precio, variable clave en marketing. Pearson.',
    },
    {
      referencia:
        'Jobber, D., Lancaster, G. (2012) Administración de ventas. Pearson.',
    },
    {
      referencia:
        'Kotler, P., Armstrong, G. (2016). 13a. Ed. Fundamentos de marketing. Pearson.',
    },
    {
      referencia:
        'Kotler, P., Keller, K. (2016). 15a. Ed. Dirección de marketing. Pearson.',
    },
    {
      referencia:
        'López, M., Gómez, X. (2018). Gestión de costos y precios. Grupo Editorial Patria.',
    },
    {
      referencia:
        'Mankiw, N. G. (2017). 7a. Ed. Principios de economía. Cengage Learning.',
    },
    {
      referencia:
        'Marr, B. (2018). Data strategy. Cómo beneficiarse de un mundo de big data, analytics e internet de las cosas. Ecoe Ediciones.',
    },
    {
      referencia:
        'McDaniel, C. & Gates, R. (2016). 10a. Ed. Investigación de mercados. Cengage Learning.',
    },
    {
      referencia: 'Parkin, M. (2014). 11a. Ed. Economía. Pearson.',
    },
    {
      referencia:
        'Prettel, G. (2016). Marketing, una herramienta para el crecimiento. Ediciones de la U.',
    },
  ],
  glosario: [
    {
      termino: 'Benchmarking',
      significado:
        'el proceso que consiste en la medición y comparación de las operaciones o los procesos internos de la organización con los del mejor representante de su clase, proveniente del interior o exterior de la industria.',
    },
    {
      termino: 'Ceteris paribus',
      significado:
        'en economía se utiliza para significar que todas las variables terceras que podrían influir en las variables de interés se mantienen constantes.',
    },
    {
      termino: 'Competencia',
      significado:
        'la información sobre la competencia que tiene mayor interés para la empresa es el número de competidores, su cuota de mercado, su tamaño, sus precios y los productos que ofrece, etc.',
    },
    {
      termino: 'Competencia monopolística',
      significado:
        'Situación de mercado en el que existen muchas empresas, cada una de las cuales produce un bien que se diferencia de las demás. Por lo tanto, las diversas empresas tienen cierto poder para establecer los precios.',
    },
    {
      termino: 'Curva de demanda',
      significado:
        'Gráfico que muestra la relación entre el precio de un bien y la cantidad demandada.',
    },
    {
      termino: 'CRM (Customer Relationship Management)',
      significado:
        'Es una filosofía empresarial que tiene como objetivo incrementar y perfeccionar la relación con los clientes. Es un sistema integrado de información que se utiliza para planificar, programar y controlar las actividades de preventa y posventa en una organización.',
    },
    {
      termino: 'Demanda',
      significado:
        'Se define como la cantidad y calidad de bienes y servicios que pueden ser adquiridos en los diferentes precios del mercado por un consumidor.',
    },
    {
      termino: 'Dumping',
      significado:
        'Práctica a través de la cual una empresa establece un precio inferior para los bienes exportados más que para los costos de producción que tiene la empresa, desde el país que se importan esos bienes, sacando de competencia a la empresa local.',
    },
    {
      termino: 'Elasticidad',
      significado:
        'Medida de la sensibilidad de la cantidad ofrecida o de la cantidad demandada ante cambios en alguno de sus determinantes. Se expresa en términos porcentuales.',
    },
    {
      termino: 'Equilibrio',
      significado:
        'Situación en la que no existe ninguna tendencia al cambio porque se cumplen los planes de compra y venta de demandantes y oferentes, de modo que el mercado se vacía.',
    },
    {
      termino: 'Escasez',
      significado:
        'Situación en la que los recursos son insuficientes para producir bienes que satisfagan las necesidades. Esta insuficiencia no implica que exista un faltante o una cantidad reducida, sino que se parte del supuesto de que existe una cantidad finita de estos bienes, asumiendo que las necesidades humanas son siempre mayores.',
    },
    {
      termino: 'Estrategia de precio',
      significado:
        'Son todos aquellos recursos de marketing que una empresa puede desarrollar consistentes en la modificación de los precios de sus productos.',
    },
    {
      termino: 'Inteligencia de mercados',
      significado:
        'Es una herramienta que utilizan las organizaciones mediante un proceso de recolección, interpretación y análisis de los datos tomados del consumidor o del cliente, que permite una mejor toma de decisiones y atender el medio que le rodea respecto a los problemas y oportunidades que ofrece el mercado en el mundo globalizado.',
    },
    {
      termino: 'Mercado competitivo',
      significado:
        'Mercado en el que concurren muchos compradores y vendedores, de tal manera que la influencia que ejerce cada uno de ellos sobre los precios es insignificante.',
    },
    {
      termino: 'Mercado de competencia perfecta',
      significado:
        'Mercado en el que se cumplen dos características: 1) existe un gran número de compradores y de vendedores, de tal manera que la influencia que individualmente ejercen sobre los precios es insignificante; 2) los bienes o servicios que se intercambian son básicamente iguales.',
    },
    {
      termino: 'Minería de datos',
      significado:
        'Es un campo de la Estadística y de las Ciencias de la Computación referido al proceso que intenta descubrir patrones en grandes volúmenes de conjuntos de datos. ​ Utiliza los métodos de la inteligencia artificial, aprendizaje automático, estadística y sistemas de bases de datos.',
    },
    {
      termino: 'Monopolio',
      significado:
        'Industria formada por una sola empresa que ofrece un producto para el que no existen sustitutos cercanos.',
    },
    {
      termino: 'Oferta',
      significado:
        'Cantidad de bienes o servicios que los productores están dispuestos a vender a los distintos precios de mercado.',
    },
    {
      termino: 'Oligopolio',
      significado:
        'Estructura de mercado que se caracteriza por la existencia de “pocas” empresas oferentes.',
    },
    {
      termino: 'Política de precios',
      significado:
        'Es el conjunto de normas, criterios, lineamientos y acciones que se establecen para regular y fijar la cantidad de ingresos provenientes de la venta de bienes y/o servicios que produce el sector público a través de sus dependencias y entidades. Se considera también en esta política los topes máximos y mínimos de precios y tarifas que establece el sector público a los particulares, por los citados bienes y/o servicios que produce.',
    },
    {
      termino: 'Precio',
      significado:
        'En Economía el precio se conoce como la cantidad de dinero que la sociedad debe dar a cambio de un bien o servicio. Es también el monto de dinero asignado a un producto o servicio, o la suma de los valores que los compradores intercambian por los beneficios de tener, usar o disfrutar un bien o un servicio. Según las teorías económicas, de analizar la relación que se da entre el valor (que da la sociedad) y el precio (que determina la ley de la oferta y demanda o el monopolio) permite identificar la estrategia que las empresas aplicarán para fijar el precio venta al público de sus productos o servicios. El precio de venta está compuesto por los costos totales (costo variable más costo fijo) y la utilidad (PV = CT + UT).',
    },
    {
      termino: 'Precios altos',
      significado:
        'Estrategia de mercadeo que consiste en agregar a una línea de productos ya existentes uno nuevo, de mayor precio y mejor prestigio, con la finalidad de provocar un aumento en el ritmo de ventas de los productos previos. Esta es una estrategia que permite aumentar la extensión de la línea, aumentando la capacidad de producción de la planta para llegar a otros segmentos que pueden ser muy rentables. Esta estrategia en ocasiones es utilizada para estimular el mercado.',
    },
    {
      termino: 'Precios bajos',
      significado:
        'Es lo contrario de la estrategia anterior; consiste en agregar a una línea de productos ya existente y de reconocido prestigio uno nuevo, de menor precio para poder llegar a niveles socioeconómicos más bajos. Dicho de otra manera, se espera que los productos de precios más altos ayuden a vender los de precios más bajos. Además, va dirigido a aquellos consumidores que, aunque desearían comprar el producto más caro se conforman con el producto “parecido” y más barato.',
    },
    {
      termino: 'Presupuesto',
      significado:
        'Cálculo y negociación anticipada de los ingresos y gastos de una actividad económica sea personal, familiar, empresarial o pública; contiene los gastos e ingresos correspondientes a un período, por lo general anual. Es un plan de acción dirigido a cumplir un objetivo previsto, expresado en términos financieros, que debe cumplirse en determinado tiempo y en ciertas condiciones.',
    },
    {
      termino: 'Sistema de información de mercadeo (SIM)',
      significado:
        'Conjunto de relaciones estructuradas, en el que intervienen los hombres, las máquinas y los procedimientos, y que tiene por objeto generar un flujo ordenado de información pertinente, proveniente de fuentes internas y externas a la empresa. Un grupo de personas, equipos y procedimientos trabajando conjuntamente para obtener, analizar, evaluar y distribuir información exacta y en tiempo a los que toman decisiones de mercadeo en una organización.',
    },
  ],
  complementario: [
    {
      texto:
        'Jobber, D., Lancaster, G. (2012) Administración de ventas. Pearson.',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=4759&pg=1',
    },
    {
      texto:
        'López, M., Gómez, X. (2018). Gestión de costos y precios. Grupo Editorial Patria.',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/40538?page=1',
    },
    {
      texto:
        'Mankiw, N. G. (2017). 7a. Ed. Principios de economía. Cengage Learning.',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=3752&pg=1',
    },
    {
      texto:
        'Marr, B. (2018). Data strategy. Cómo beneficiarse de un mundo de big data, analytics e internet de las cosas. Ecoe Ediciones.',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=6317&pg=1',
    },
    {
      texto:
        'Forero, S. C. (Ed.). (2017). Fundamentos de mercadeo. Ecoe Ediciones.',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=5045&pg=1',
    },
    {
      texto:
        'Baena, V. y Moreno, M. (2010). Instrumentos de marketing. Decisiones sobre producto, precio, distribución, comunicación y marketing directo. Editorial UOC.',
      tipo: 'Libro',
      link:
        'https://www-digitaliapublishing-com.bdigital.sena.edu.co/visor/20218',
    },
    {
      texto:
        'Kotler, P., Armstrong, G. (2016). 13a. Ed. Fundamentos de marketing. Pearson.',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=4393&pg=1',
    },
    {
      texto:
        'Kotler, P., Keller, K. (2016). 15a. Ed. Dirección de marketing. Pearson.',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=4273&pg=1',
    },
    {
      texto:
        'McDaniel, C.  y Gates, R. (2016). Investigación de mercados. Cengage Learning.',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=2757&pg=1',
    },
    {
      texto:
        'Prettel, G. (2016). Marketing, una herramienta para el crecimiento. Ediciones de la U.',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=5684&pg=1',
    },
    {
      texto: 'Parkin, M. (2014). 11a. Ed. Economía. Pearson.',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=3671&pg=1',
    },
    {
      texto:
        'Díaz, M. C., Parra, R. & López, L. M. (2016). Presupuestos. Enfoque para la planeación financiera. Pearson.',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=4691&pg=1',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Claudia Juliana León Pinto',
        cargo: 'Experta temática',
        centro: 'Centro de Servicios Empresariales y Turísticos',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Juan Carlos Tapias Rueda',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrea Paola Botello De la Rosa',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
