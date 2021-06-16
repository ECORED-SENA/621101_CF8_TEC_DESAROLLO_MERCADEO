<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Competencia

    figure.mb-5
      img(src='@/assets/curso/banner-tema2.svg', alt='Competencia')   
      
    p La mayoría de los mercados son altamente competitivos, cada uno de los compradores sabe que hay varios vendedores entre los cuales elegir y cada uno de los vendedores es consciente de que su producto es similar al que ofrecen otros vendedores. El resultado de esto es que tanto el precio como la cantidad de producto que se vende no se determinan por un solo vendedor o por un solo comprador, sino que el precio y la cantidad son determinados por todos los compradores y vendedores que interactúan en el mercado. 
    p Se utiliza el término mercado competitivo para describir un mercado en el que hay múltiples compradores y vendedores y, por lo tanto, individualmente ninguno de ellos tiene un impacto significativo en el precio de mercado. Para llegar a esta forma de competencia, que es la más avanzada, el mercado debe tener dos características: los bienes que se venden deben ser exactamente los mismos y los compradores y vendedores son tan numerosos que ninguno puede, por sí solo, influir en el precio del bien en el mercado (Mankiw, 2017).
    p.mb-4 En la siguiente tabla puede observar los diferentes tipos de mercado, los cuales se describen a continuación.

    .titulo-sexto.color-acento-contenido.titulo-img
      h5 Tipos de mercados

    .tabla-b.color-primario.mb-5
      table
        thead.tabla-b__header
          tr
            td 
              h5.mb-0 Tipo de mercado y características
            td 
              h5.mb-0 Competencia perfecta
            td 
              h5.mb-0 Monopolio
            td 
              h5.mb-0 Oligopolio
            td 
              h5.mb-0 Competencia monopolística     
        tbody  
          tr
            td Número de oferentes
            td Alto
            td Uno
            td Bajo
            td Alto
          tr
            td Número de demandantes
            td Alto
            td Alto
            td Alto
            td Alto
          tr
            td Características del bien ofrecido
            td Homogéneo
            td Sin sustitutos próximos
            td Homogéneo y diferenciado
            td Diferenciado
          tr
            td Barreras de entrada de oferentes
            td No hay
            td Si hay
            td Alto
            td Alto
          tr
            td Poder de los oferentes al precio
            td Nulo
            td Alto
            td Alto
            td Bajo

    h3 Competencia perfecta
    p La competencia perfecta se da en un mercado en el que muchas empresas venden productos idénticos a muchos compradores, no hay restricciones para entrar al mercado, las empresas establecidas no tienen ventaja con respecto a las nuevas, y los vendedores y los compradores están bien informados acerca de los precios. Agricultura, pesca, procesamiento de madera y fabricación de papel, manufactura de vasos de cartón y de bolsas de plástico, venta al menudeo de abarrotes y flores, acabado fotográfico, servicios de jardinería, plomería, pintura, tintorería y lavandería, todos ellos son ejemplos de industrias altamente competitivas (Parkin, 2014).

    .row.mb-4
      .col-lg-7.mb-3
        p Considere el mercado de la leche, ningún consumidor de leche por si solo puede influir en el precio de esta, porque cada uno adquiere una pequeña cantidad en relación con el tamaño del mercado. De la misma manera, cada productor tiene un control limitado sobre el precio, porque muchos vendedores ofrecen leche que es esencialmente idéntica, dado que cada vendedor puede vender todo lo que quiera al precio del mercado, no tendrá razones para cobrar menos, y si cobra más, los compradores se irán a otro lugar. Otra característica es que las empresas pueden entrar y salir libremente del mercado; en el ejemplo de la leche cualquiera puede decidir iniciar una empresa de producción de lácteos y cualquier productor existente de leche puede decidir dejar el negocio (Mankiw, 2017).
        p Cabe resaltar que cuando el mercado tiene muchos compradores y vendedores que comercian con algún producto uniforme, ninguno tiene un efecto importante sobre el precio vigente en el mercado (Kotler, 2017). 
      .col-lg-5
        figure
          img(src='@/assets/curso/tasty-and-healthy-food-vegetables-and-fruits.svg', alt='frutas y verduras')     

    h3 Monopolio       

    .row.mb-4
      .col-lg-7.mb-3
        p Parkin (2014) describe el monopolio como un mercado en el que una sola empresa produce un bien o servicio, que no tiene sustitutos cercanos y que está protegido por una barrera que evita la entrada de otras empresas. Aun cuando una sola empresa produzca un bien, si dicho bien tiene un sustituto cercano, la empresa enfrenta la competencia de los productores de ese sustituto, es decir, un monopolio vende un bien o servicio que no tiene buenos sustitutos
        p El agua corriente y el agua embotellada son sustitutos cercanos de líquidos para beber; sin embargo, el agua corriente no tiene sustitutos efectivos para ducharse o para lavar un automóvil, así que la empresa de servicios públicos de una localidad que suministra agua corriente es un monopolio. Las barreras a la entrada son restricciones que protegen a una empresa de cualquier competidor potencial los, de manera que los tres tipos de barreras a la entrada son: 
      .col-lg-5
        figure
          img(src='@/assets/curso/esmeraldas.svg', alt='Esmeraldas')     

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row.justify-content-center(titulo="Barrera natural a la entrada")
        .col-lg-10
          .row
            .col-md-2.mx-4
              figure
                img.px-lg-3(src='@/assets/curso/gota-de-agua.svg', alt='Gota de agua')  
            .col-md-9.mb-4.mb-md-0
              p Crea un monopolio natural, es decir, una industria en la cual las economías de escala permiten que una empresa provea un bien o servicio a todo el mercado al costo más bajo posible; como ejemplos de monopolio natural están las empresas proveedoras de gas, agua y electricidad. 
      div.row.justify-content-center(titulo="Barrera de propiedad a la entrada")
        .col-lg-10
          .row
            .col-md-2.mx-4
              figure
                img.px-lg-3(src='@/assets/curso/esmeralda.svg', alt='Esmeralda')  
            .col-md-9.mb-4.mb-md-0
              p Ocurre cuando una empresa posee una parte significativa de un recurso importante, un ejemplo de este tipo de monopolio es la oferta de esmeraldas en Colombia. 
      div.row.justify-content-center(titulo="Barrera legal a la entrada")
        .col-lg-10
          .row
            .col-md-2.mx-4
              figure
                img(src='@/assets/curso/embajada.svg', alt='Embajada')  
            .col-md-9.mb-4.mb-md-0
              p Un mercado en el que la competencia y la entrada de nuevas empresas están restringidas por la concesión de una franquicia pública, una licencia gubernamental, una patente o por derechos de autor. Una franquicia pública es un derecho exclusivo que se concede a una empresa para que ofrezca un bien o servicio. Una licencia gubernamental controla la entrada a ocupaciones, profesiones e industrias particulares.

    h3 Competencia monopolística 

    .row.mb-3
      .col-lg-7.mb-3
        p Parkin (2014) explica que la mayoría de los mercados del mundo real son competitivos, pero en ellos no hay competencia perfecta porque las empresas en estos mercados cuentan con cierto poder para fijar sus propios precios como lo hacen los monopolios; a este tipo de mercados se le conoce como competencia monopolística, que es una estructura de mercado en la cual: 
        ul.lista.lista-ul--color.p-1.mt-2
          li 
            i.fas.fa-caret-right
            p.mb-0 Compite un gran número de empresas.
          li 
            i.fas.fa-caret-right
            p.mb-0 Cada empresa produce un producto diferenciado.
          li 
            i.fas.fa-caret-right
            p.mb-0 Las empresas compiten con base en la calidad del producto, el precio y las actividades de marketing.
          li 
            i.fas.fa-caret-right
            p.mb-0 Las empresas son libres de entrar y salir de la industria.
      .col-lg-5
        figure
          img(src='@/assets/curso/gaseosas.svg', alt='Gaseosas')

    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
      .row.justify-content-center(titulo="Compite un gran número de empresas")
        .col-lg-10
          .row
            .col-md-2.mx-4
              figure
                img(src='@/assets/curso/empresa-2.svg', alt='Icono sobre empresa')  
            .col-md-9.mb-4.mb-md-0
              p La participación de mercado es pequeña, ya que cada empresa provee una pequeña parte de la producción total de la industria. En consecuencia, cada empresa tiene un poder limitado para influir en el precio de sus productos, el precio puede desviarse del precio promedio de las demás empresas en una cantidad relativamente pequeña, es por esto que es posible ignorar a otras empresas y no tener en cuenta a ninguno de sus competidores individuales. Debido a que todas las empresas son más o menos pequeñas, ninguna puede dictar las condiciones del mercado ni afectar, por tanto, las acciones de las demás, es imposible conspirar y coordinarse para fijar un precio más alto, práctica que se conoce como colusión. 
      div.row.justify-content-center(titulo="Cada empresa produce un producto diferenciado")
        .col-lg-10
          .row
            .col-md-2.mx-4
              figure
                img(src='@/assets/curso/tenis.svg', alt='Tenis')  
            .col-md-9.mb-4.mb-md-0
              p Cuando el producto que elabora es ligeramente diferente de los de sus competidores. Un producto diferenciado es un sustituto cercano, pero no perfecto, de los productos de otras empresas. Algunas personas están dispuestas a pagar más por una variedad del producto, así que, cuando su precio sube, la cantidad demandada disminuye, pero no llega (necesariamente) a cero, por ejemplo, Adidas, Asics, Diadora, Etonic, Fila, New Balance, Nike, Puma y Reebok fabrican zapatillas deportivas diferenciadas.
      div.row.justify-content-center(titulo="Las empresas compiten con base en la calidad del producto, el precio y las actividades de marketing")
        .col-lg-10
          .row
            .col-md-2.mx-4
              figure
                img(src='@/assets/curso/media-monitor-screen.svg', alt='Monitor de computador')  
            .col-md-9.mb-4.mb-md-0
              p La calidad de un producto se refiere a los atributos físicos que lo hacen diferente de los productos de otras empresas. La calidad incluye diseño, confiabilidad, el servicio proporcionado al comprador y la facilidad de acceso del comprador al producto; la calidad se puede medir en una escala que va de alta a baja. 
              p Algunas empresas como Dell Computer Corp ofrecen productos de alta calidad, es decir, que están bien diseñados, son confiables y el cliente recibe un servicio rápido y eficiente. La empresa puede fijar tanto su precio como su nivel de producción; pero hay una correspondencia entre la calidad y el precio del producto. Una empresa que fabrica un producto de alta calidad puede cobrar un precio más alto que otra, cuyo producto sea de menor calidad. 
              p 
                strong El marketing 
                | se realiza principalmente a través de dos actividades: la publicidad y el empacado. Una empresa que fabrica un producto de alta calidad desea venderlo a un precio alto adecuado, para poder hacerlo debe anunciar y empacar su producto de tal manera que convenza a los compradores de que gracias al mayor precio que están pagando pueden obtener una calidad más alta. 
      div.row.justify-content-center(titulo="Las empresas son libres de entrar y salir de la industria")
        .col-lg-10
          .row
            .col-md-2.mx-4
              figure
                img(src='@/assets/curso/bancarrota.svg', alt='Bancarrota')  
            .col-md-9.mb-4.mb-md-0
              p No hay barreras para impedir que nuevas empresas entren a la industria en el largo plazo, en consecuencia, una empresa no puede obtener utilidades económicas en el largo plazo; cuando las empresas obtienen este tipo de utilidades otras empresas entran a la industria, lo que provoca una reducción de precios y elimina a la larga las utilidades económicas. Cuando las empresas incurren en pérdidas económicas algunas de ellas salen de la industria, con lo cual los precios se elevan y al final se erradica la pérdida económica. 

    h3 Competencia monopolística 

    .row
      .col-lg-7.mb-3
        p Un tipo de mercado de competencia imperfecta es el oligopolio, 
          strong es un mercado en el que hay pocos vendedores o proveedores, cada uno de los cuales ofrece un producto idéntico o similar a los que ofrecen otros proveedores. 
          | Ese número reducido de vendedores hace que la competencia rigurosa sea menos probable y le otorga importancia vital a las interacciones estratégicas que existen entre las empresas (Mankiw, 2017). 
        P En un oligopolio todas las empresas podrían fabricar un producto idéntico y competir solo en el precio, o bien fabricar un producto diferenciado y competir en precio, calidad de los productos y marketing. El oligopolio es una estructura de mercado en la cual las barreras naturales o legales impiden la entrada de nuevas empresas y el número de empresas que compite es pequeño. 
        P Un mercado oligopólico con solo dos empresas o duopolio natural ocurre cuando la cantidad demandada la pueden proporcionar solo dos empresas, no hay lugar para tres; sin embargo, si hubiera solo una empresa, esta obtendría utilidades económicas, por lo que entraría una segunda empresa para apropiarse de una parte del negocio y de sus utilidades económicas. Cuando un pequeño número de empresas comparte un mercado pueden aumentar sus utilidades al integrar un cártel y actuar como un monopolio. Un cártel es un conjunto de empresas que llega a un acuerdo de colusión para restringir la producción, aumentar los precios y las utilidades económicas, aunque los cárteles son ilegales, a veces operan en algunos mercados; sin embargo, por algunas razones que descubrirá en este capítulo, los cárteles tienden a desintegrarse.
      .col-lg-5
        figure
          img(src='@/assets/curso/avion.svg', alt='Avión')


    Separador


    // 2.1
    #t_2_1.titulo-segundo
      .h2 2.1. Estrategia competitiva

    .row.justify-content-center
      .col-lg-10
        .bloque-texto-x.mb-5
          .bloque-texto-x__img
          .bloque-texto-x__contenido
            .bloque-texto-x__texto.p-4
              p Según Kogut (1985) ventaja competitiva es la capacidad de transformar la materia prima en bienes o servicios, alcanzando así la máxima utilidad, incorporando el talento humano expresado en competencias gerenciales, la tecnología e incrementando la eficiencia de los insumos y generando mejores productos para los clientes.  

    p.mb-4 Best (2007) destaca que las estrategias basadas en el mercado se apoyan en una ventaja competitiva de conocimiento, tanto de clientes como de la competencia, se pueden ejecutar evitando confrontaciones de forma que se minimicen las pérdidas. A continuación, explica dos tipos de estrategias competitivas:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.align-items-center
        .tarjeta-avatar-b.tarjeta-iconos2.mb-4
              img(src='@/assets/curso/estrategia-oblicua.svg' alt='Icono sobre Estrategia oblicua')
              .tarjeta.color-principal2
                .p-4
                  .h3 Estrategia oblicua
                  p Busca conseguir una ventaja competitiva sin confrontación directa con la competencia, el objetivo es conseguir mejoras en la cuota de mercado, con el mínimo coste y con la mínima reacción de la competencia, cuando la empresa se apoya en algún punto fuerte valorado por los clientes, que la competencia no puede ver, comprender o copiar fácilmente. El objetivo es conquistar la cuota de mercado y clientes, terminar confundiendo y desconcertando a la competencia.
                  p Entre estas estrategias pueden incluirse las innovaciones sutiles, pero importantes del producto; las mejoras de la calidad en el producto y en los servicios; programas innovadores de marketing; reducción de los costes de adquisición, uso y disposición del producto; utilización de nuevos canales de distribución con una mayor eficiencia logística que aporten beneficios a los clientes, lo cual tiene el potencial de construir valor y lealtad en los clientes.
      .col-lg-10.align-items-center
        .tarjeta-avatar-b.tarjeta-iconos2
          img(src='@/assets/curso/estrategia-ataque-frontal-directo.svg' alt='Icono sobre Estrategia de ataque frontal directo')
          .tarjeta.color-principal2
            .p-4
              .h3 Estrategia de ataque frontal directo
              p Se da sobre la posición de la competencia, por ejemplo, cuando una empresa desafía a un competidor a una batalla por conseguir incrementos en la cuota de mercado. En estas batallas para conseguir mayor número de clientes, más ventas o más cuota de mercado, la estrategia de ataque frontal, con frecuencia, acarrea pérdidas y ganancias (ganar/perder); las empresas consiguen sus objetivos de marketing (ganan la batalla), pero terminan con menos beneficios (pierden la guerra).

    .row.mb-2
      .col-lg-7.mb-3
        p Prettel (2016) presenta algunos aspectos a evaluar de la competencia:
        ul.lista.lista-ul--color.p-1.mt-2
          li 
            i.fas.fa-caret-right
            p.mb-0 Sus productos. Evaluación en sus laboratorios acerca de sus características, aceptación en el mercado, entre otras.
          li 
            i.fas.fa-caret-right
            p.mb-0 Cobertura del mercado.
          li 
            i.fas.fa-caret-right
            p.mb-0 Zonas de mayor aceptación.
          li 
            i.fas.fa-caret-right
            p.mb-0 Los métodos de comercialización de sus productos. Revisar todos los aspectos de interés en este sentido para evitar ventajas competitivas que se pueden lograr a través de los canales, por tratamientos diferenciales que ofrecen algunas empresas productoras a sus distribuidores.
          li 
            i.fas.fa-caret-right
            p.mb-0 Su mezcla de mercadeo y sus estrategias de merchandising.
          li 
            i.fas.fa-caret-right
            p.mb-0 Su estrategia para el posicionamiento.
          li 
            i.fas.fa-caret-right
            p.mb-0 El programa de servicio al cliente.      
      .col-lg-5
        figure
          img(src='@/assets/curso/ajedrez.svg', alt='Ajedrez')

    .row.justify-content-center.mb-2
      .col-lg-8
        .row.justify-content-center.align-items-center.cajon.color-acento-contenido
          .col-lg-2.col-3.p-lg-3.p-3
            figure
              img(src='@/assets/curso/rival.svg', alt='Icono sobre rival')
          .col-lg-9.p-lg-3.px-3
            p Las empresas no solamente tienen competidores en productos del mismo sector, existen productos sustitutos, que le quitan mercado, y sobre lo cual hay que tener mucho cuidado (Prettel, 2016).


    Separador


    // 2.2
    #t_2_2.titulo-segundo
      .h2 2.2. Benchmarking   

    .row.justify-content-center
      .col-lg-10
        .bloque-texto-x.mb-5
          .bloque-texto-x__img1
          .bloque-texto-x__contenido
            .bloque-texto-x__texto.p-4
              p Boxwell (1994) plantea que el benchmarking es aprender de los otros, identificándolos, estudiándolos y mejorando, basándose en lo que se ha aprendido. El benchmarking es bucear en este enorme fondo de conocimientos, de forma que el conocimiento, la formación colectiva y la experiencia de otros, pueda ser utilizado por aquellos que desean mejorar sus propias organizaciones.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.align-items-center
        .tarjeta-avatar-b.tarjeta-iconos2.mb-4
              img(src='@/assets/curso/benchmark.svg' alt='Icono sobre Benchmarking interno')
              .tarjeta.color-principal2
                .p-4
                  .h3 Benchmarking interno
                  p Consiste en evaluar comparativamente todos los departamentos y actividades internas con otras compañías destacadas del sector. Se debe aceptar que los aspectos internos también son en la actualidad factores competitivos o en su defecto, factores críticos de riesgo. Los almacenes de cadena; sin embargo, a través del método de observación directa logran conocer las estrategias de merchandising o del servicio al cliente, las cuales aplican en sus organizaciones, en ocasiones, superando a sus competidores (Prettel, 2016).
      .col-lg-10.align-items-center
        .tarjeta-avatar-b.tarjeta-iconos2
          img(src='@/assets/curso/performance.svg' alt='Icono sobre Benchmarking externo')
          .tarjeta.color-principal2
            .p-4
              .h3 Benchmarking externo
              p Consiste en lograr información de los competidores más destacados en aspectos como: proveedores, canales de distribución, procesos logísticos de empalme entre productor, comerciante, servicio al cliente, estrategias de marketing, entre otros. Uno de los beneficios importantes de este proceso es lograr mejorar las condiciones del producto o servicio en el mercado -posicionamiento con resultado en ventas- (Prettel, 2016).

    h3 Etapas en el proceso de benchmarking
    p.mb-4 En el siguiente gráfico puede analizar en qué consisten las etapas del proceso de benchmarking.

    .row.justify-content-center
      .col-lg-9
        #carouselExampleIndicators.carousel.slide.mb-4(data-bs-ride='carousel')
          .carousel-indicators
            button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='3' aria-label='Slide 4')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='4' aria-label='Slide 5')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='5' aria-label='Slide 6')
          .carousel-inner
            .carousel-item.active
              figure
                img(src='@/assets/curso/proceso-benchmarking.svg', alt='Proceso Benchmarking')
            .carousel-item
              figure
                img(src='@/assets/curso/proceso-benchmarking1.svg', alt='Determinar a qué se le realiza')
            .carousel-item
              figure
                img(src='@/assets/curso/proceso-benchmarking2.svg', alt='Formar el equipo')
            .carousel-item
              figure
                img(src='@/assets/curso/proceso-benchmarking3.svg', alt='Identificar los socios')
            .carousel-item
              figure
                img(src='@/assets/curso/proceso-benchmarking4.svg', alt='Recopilar y analizar información')
            .carousel-item
              figure
                img(src='@/assets/curso/proceso-benchmarking5.svg', alt='Actuar')
          button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
            span.carousel-control-prev-icon(aria-hidden='true')
            span.visually-hidden Previous
          button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
            span.carousel-control-next-icon(aria-hidden='true')
            span.visually-hidden Next







    
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.bloque-texto-x
  display: flex
  &__img
    flex: 1 0 50%
    background-image: url(../assets/curso/globo.svg)
    background-size: cover
  &__img1
    flex: 1 0 50%
    background-image: url(../assets/curso/subida-escaleras.svg)
    background-size: cover
  &__contenido
    background-color: $color-primario
    padding: 40px
    flex: 1 0 50%
  &__texto
    margin-left: -30%
    background-color: $white

  @media (max-width: $bp-max-md)
    flex-wrap: wrap
    &__img, &__img1, &__contenido
      flex: 1 0 100%
    &__img, &__img1
      padding-top: 50%
    &__contenido
      padding: 30px
    &__texto
      margin-left: 0
</style>
