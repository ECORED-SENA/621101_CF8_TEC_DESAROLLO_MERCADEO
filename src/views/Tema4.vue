<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Precio

    figure.mb-5
      img(src='@/assets/curso/banner-tema4.svg', alt='Precio')   

    .row.justify-content-center
      .col-lg-10
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5.bloque-gris
          .row.m-0.align-items-center.justify-content-between.comillas
            .col-lg-4.mb-4.mb-lg-0
              h3.text-regular 
                i.fas.fa-quote-left
                strong En los días que corren la gente sabe el precio de todo y el valor de nada
                i.fas.fa-quote-right
              p.mb-0 Oscar Wilde (1891)
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p En el sentido más estricto un precio es la cantidad de dinero que se cobra por un producto o servicio, en términos más amplios, un precio es la suma de los valores que los consumidores dan a cambio de los beneficios de tener o usar el producto o servicio. A lo largo del tiempo, el precio ha sido el factor que más influye en las decisiones de compra; el precio es el único elemento de la mezcla de marketing que produce utilidades, todos los demás representan costos, también es uno de los elementos más flexibles, ya que los precios pueden modificarse (Kotler, 2016)

    p La variable precio se define como el costo que percibe el consumidor necesario para adquirir los productos que le ofrece el mercado y que él mismo desea. En el valor monetario del comprador no solo se incluye el precio sino también otro tipo de costes, tales como el coste de oportunidad de ir a la tienda a comprar el producto en lugar de invertir ese tiempo en otras cosas (ocio, etc.), los costes de desplazamiento (gasolina, aparcamiento, etc.) y otros costes adicionales como pueden ser las bolsas, etc. (Baena, 2010).
    p.mb-4 Forero (2017) hace el planteamiento de la definición de precio desde diferentes puntos de vista:

    .row.justify-content-center
      .col-lg-10
        TabsA.color-acento-botones.mb-5
          .tarjeta.color-amarillo.p-4(titulo="Precio al consumidor")
            h4 Precio al consumidor
            .row
              .col-xl-3.mb-4.px-lg-4.col-4
                figure
                  img(src='@/assets/curso/consumidor.svg', alt='Precio al consumidor')
              .col-xl-8
                p Es la cantidad de unidades monetarias que un consumidor final necesitará para adquirir cierta cantidad de un producto o servicio.
          
          .tarjeta.color-amarillo.p-4(titulo="Precio de fabricante")
            h4 Precio de fabricante
            .row
              .col-xl-3.mb-4.px-lg-4.col-4
                figure
                  img(src='@/assets/curso/fabrica.svg', alt='Precio de fabricante')
              .col-xl-8
                p Es la cantidad de unidades necesarias para recuperar una inversión y generar una utilidad. 
          
          .tarjeta.color-amarillo.p-4(titulo="Precio de distribuidor")
            h4 Precio de distribuidor
            .row
              .col-xl-3.mb-4.px-lg-4.col-4
                figure
                  img(src='@/assets/curso/camion-en-movimiento.svg', alt='Precio de distribuidor')
              .col-xl-8
                p Un distribuidor es un revendedor, en la mayoría de las ocasiones su negocio consiste en comprar grandes volúmenes con un descuento, para venderlo detalladamente; el descuento obtenido será a futuro su utilidad.
          
          .tarjeta.color-amarillo.p-4(titulo="Precio de mercadeo")
            h4 Precio de mercadeo
            .row
              .col-xl-3.mb-4.px-lg-4.col-4
                figure
                  img(src='@/assets/curso/demanda-copia.svg', alt='Precio de mercadeo')
              .col-xl-8
                p Cantidad de dinero necesaria para recuperar una inversión, generar una utilidad y en la cual la mayoría de los consumidores están dispuestos a pagar de acuerdo con los valores que reciben o esperan recibir. 
          
          .tarjeta.color-amarillo.p-4(titulo="Precios basados en la competencia")
            h4 Precios basados en la competencia
            .row
              .col-xl-3.mb-4.px-lg-4.col-4
                figure
                  img(src='@/assets/curso/competencia.svg', alt='Precios basados en la competencia')
              .col-xl-8
                p Algunas organizaciones asignan sus precios basados en la competencia, la pregunta es ¿por qué?, si la organización hace algo mejor que la competencia y genera más atributos económicos o psicológicos que la competencia, es decir, genera un valor de percepción más alto que justifica colocar un precio igual al de la competencia, en pocas palabras la organización ha logrado reducir la sensibilidad al precio de los consumidores (Eslava, 2012).
          
          .tarjeta.color-amarillo.p-4(titulo="Precios que le dan gusto al cliente")
            h4 Precios que le dan gusto al cliente
            .row
              .col-xl-3.mb-4.px-lg-4.col-4
                figure
                  img(src='@/assets/curso/objetivo.svg', alt='Precios que le dan gusto al cliente')
              .col-xl-8
                p Consiste en generar descuentos sobre el precio en determinadas épocas del año. El problema que surge con esta práctica es que el cliente se acostumbra a comprar únicamente en determinadas temporadas o cuando la organización haga sus descuentos promocionales.

    h3 Sensibilidad al precio
    p Baena (2010) determina los aspectos que determinan la mayor o menor sensibilidad al precio de los consumidores, es decir, la variación en la cantidad demandada en función de un incremento o reducción en el precio del producto, fijando las siguientes reglas:

    .row.justify-content-center
      .col-lg-10
        ol.lista-ol--cuadro.m-3
          li 
            .lista-ol--cuadro__vineta
              span.text-bold a 
            | La sensibilidad al precio del bien X es menor cuanto mayor sea la exclusividad, prestigio o calidad percibida del producto, por ejemplo, el automóvil Lamborghini.
          li 
            .lista-ol--cuadro__vineta
              span.text-bold b
            | La sensibilidad al precio del bien X es menor cuanto mayor sea el desconocimiento sobre la existencia de productos sustitutos. Si se piensa que un bien no tiene productos sustitutivos se es menos sensible a las subidas de precio, ya que se cree que no existe alternativa al producto cuyo precio ha variado.
          li 
            .lista-ol--cuadro__vineta
              span.text-bold c
            | La sensibilidad al precio del bien X es menor cuanto más difícil resulte comparar la calidad de los productos sustitutivos. En ocasiones resulta difícil comparar la calidad de algunos productos por lo que, aunque sabemos que son sustitutos, el cliente no tiene claro si le dará el mismo resultado, por ejemplo, la consultoría de abogados.
          li 
            .lista-ol--cuadro__vineta
              span.text-bold d
            | La sensibilidad al precio del bien X es menor si su valor de adquisición representa un pequeño porcentaje sobre la renta total del cliente. Así pues, ante una subida del 5% en el precio de un lápiz la demanda del producto apenas varía, ya que representa un porcentaje muy reducido de la renta; sin embargo, un incremento del 5% en el precio de una vivienda representa un alto porcentaje de nuestra renta anual y, por tanto, la sensibilidad al precio es mayor.
          li 
            .lista-ol--cuadro__vineta
              span.text-bold e
            | La sensibilidad al precio del bien X es menor cuando se trata de una pequeña inversión con respecto a la adquisición de un bien final. Suponga, por ejemplo, que acaba de comprar una aerolínea, su mayor preocupación reside en conseguir un buen precio en la compra de la flota de aviones, pero no se preocupará tanto por las variaciones en el precio de las almohadas que ofrecen a los pasajeros que viajan en clase preferente.
          li 
            .lista-ol--cuadro__vineta
              span.text-bold f
            | La sensibilidad al precio del bien X es menor si se trata de un producto necesario para que funcionen otros productos que ya fueron adquiridos previamente, por ejemplo, los cartuchos de tinta para impresora.
          li 
            .lista-ol--cuadro__vineta
              span.text-bold g
            | La sensibilidad al precio del bien X es menor si se trata de un producto necesario para que funcionen otros productos que ya fueron adquiridos previamente, por ejemplo, los cartuchos de tinta para impresora.
          li 
            .lista-ol--cuadro__vineta
              span.text-bold h
            | La sensibilidad al precio del bien X es menor cuanto más difícil resulte el almacenamiento de los productos. 


    Separador


    // 4.1
    #t_4_1.titulo-segundo
      .h2 4.1. Políticas de fijación

    .row.justify-content-center
      .col-lg-10
        .bloque-texto-x.mb-5
          .bloque-texto-x__img
          .bloque-texto-x__contenido
            .bloque-texto-x__texto.p-4
              p Para Prettel (2016) la fijación de precios se describe en la figura 17, en la cual se evidencian dos objetivos principales: los financieros y los de mercadeo. Los financieros son creados para maximizar las utilidades que incluyen los costos y la rentabilidad y, los de mercadeo que incluyen los productos, el segmento de mercado, la competencia y el ciclo de vida de los productos. 

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.titulo-img
          h5 Objetivos de un precio
        figure.mb-5
          img.mb-2(src='@/assets/curso/objetivos-de-un-precio.svg', alt='Objetivos de un precio') 
          figcaption Nota. Tomado de Prettel (2016).

    p.mb-4 Baena (2010) define que cuando las organizaciones tienen como objetivo fijar los precios de sus bienes, han de tener en cuenta una serie de condiciones que determinarán dicho precio, cabe destacar:      

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row.justify-content-center(titulo="El marco legal que regula el sector al que pertenece el producto")
        .col-lg-11
          .row.justify-content-center
            .col-md-8.mb-4.mb-md-0.mx-lg-3
              p Son muchos los sectores de actividad y en concreto sus productos que se ven condicionados por el ámbito legal al que pertenecen. Así pues, no son pocas las ocasiones en las que tanto el Estado como las comunidades autónomas y sus gobiernos regulan el precio de los servicios que prestan.
            .col-md-3.px-5.col-9
              figure
                img.px-3(src='@/assets/curso/ley.svg', alt='El marco legal que regula el sector al que pertenece el producto')    
      div.row.justify-content-center(titulo="La estructura del mercado")
        .col-lg-11
          .row.justify-content-center
            .col-md-8.mb-4.mb-md-0.mx-lg-3
              p En función de la estructura del mercado en el que se desenvuelva la empresa (monopolio, oligopolio, competencia perfecta o competencia monopolística), las empresas contarán con más o menos capacidad para fijar el precio de sus productos o servicios. Han sido muchas compañías acusadas por fijar precios a sus productos abusando de su poder en el mercado.
            .col-md-3.col-6.px-5.col-9
              figure
                img.px-4(src='@/assets/curso/estructura-jerarquica.svg', alt='La estructura del mercado')    
      div.row.justify-content-center(titulo="La competencia")
        .col-lg-11
          .row.justify-content-center
            .col-md-8.mb-4.mb-md-0.mx-lg-3
              p Cada vez más las empresas se ven obligadas a fijarse en los precios de sus competidores y en sus estrategias al fijar el precio de sus productos o al acometer cualquier tipo de modificación sobre los mismos. De este modo, durante el lanzamiento de un producto nuevo al mercado uno de los primeros factores a tener en cuenta es el precio, a través del cual la competencia está comercializando productos similares, por ejemplo, Movistar y Claro.
            .col-md-3.px-5.col-9
              figure
                img.px-3(src='@/assets/curso/rival.svg', alt='La competencia')    
      div.row.justify-content-center(titulo="Los consumidores")
        .col-lg-11
          .row.justify-content-center
            .col-md-8.mb-4.mb-md-0.mx-lg-3
              p Las empresas comercializan sus productos o servicios para satisfacer las necesidades de sus clientes o consumidores. Por ello, cuando las empresas determinan o modifican el precio de sus productos deben tener presente su target. Así pues, si una compañía lanza un nuevo producto al mercado deberá conocer el precio que sus clientes estarán dispuestos a asumir.
            .col-md-3.px-5.col-9
              figure
                img.px-3(src='@/assets/curso/consumidor.svg', alt='Los consumidores')    
      div.row.justify-content-center(titulo="Los distribuidores")
        .col-lg-11
          .row.justify-content-center
            .col-md-8.mb-4.mb-md-0.mx-lg-3
              p Cuando la empresa no distribuye o comercializa directamente sus productos debe recurrir a los intermediarios, esto supone un incremento en el canal de distribución, por lo que los costes también aumentan. De esta manera, los precios fijados por el fabricante determinan el precio final del producto.
            .col-md-3.px-5.col-9
              figure
                img.px-3(src='@/assets/curso/distribuidores.png', alt='Los distribuidores')  
      div.row.justify-content-center(titulo="Los proveedores")
        .col-lg-11
          .row.justify-content-center
            .col-md-8.mb-4.mb-md-0.mx-lg-3
              p La empresa se ve condicionada a la hora de fijar sus precios por los precios a los que adquiere las materias primas con sus proveedores. Así pues, ante un incremento en el precio de estas materias primas los costes de fabricación y producción se ven afectados, por lo que salvo que la empresa decida disminuir su margen de beneficio, cualquier incremento en el precio de estas se verá reflejado en el precio del producto y soportado íntegramente por el consumidor final.
            .col-md-3.px-5.col-9
              figure
                img.px-3(src='@/assets/curso/inventario.svg', alt='Los proveedores')
      div.row.justify-content-center(titulo="Los objetivos de la compañía")
        .col-lg-11
          .row.justify-content-center
            .col-md-8.mb-4.mb-md-0.mx-lg-3
              p Dependiendo de cuáles sean los objetivos de la empresa, la estrategia de precio seguida puede ser distinta, esto va a estar condicionado por el volumen de ventas que se quiera obtener o por la rapidez con la que la empresa desee expandirse, entre otros motivos.
            .col-md-3.px-5.col-9
              figure
                img.px-3(src='@/assets/curso/objetivos.png', alt='Los objetivos de la compañía')                                          

    h3.mb-4 Métodos de fijación de precios

    .row.justify-content-center
      .col-lg-10
        .bloque-texto-x.mb-5
          .bloque-texto-x__img1
          .bloque-texto-x__contenido
            .bloque-texto-x__texto.p-4
              p El precio que cobra cualquier compañía se ubica entre uno demasiado bajo para generar utilidades y otro demasiado alto para motivar la demanda; las percepciones del consumidor acerca del valor de un producto establecen el límite máximo para su precio; si los consumidores perciben que el precio es mayor que su valor, no lo comprarán. 

    p Asimismo, los costos del producto establecen el límite mínimo de su precio; si la compañía fija un precio por debajo de los costos del producto sus utilidades se verán afectadas. Para fijar un precio entre estos dos extremos deben considerarse varios factores internos y externos, incluyendo las estrategias y los precios de los competidores, la estrategia y la mezcla general de marketing, y la naturaleza del mercado y de la demanda (Kotler, 2017), como se muestra en la siguiente figura.

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.titulo-img
          h5 Fijar precio de un producto
        figure.mb-5
          img.mb-3(src='@/assets/curso/fijar-precio-producto.svg', alt='Fijar precio de un producto') 
          figcaption Kotler (2017) indica los siguientes métodos para la fijación de precios

    p.mb-4 Kotler (2017) indica los siguientes métodos para la fijación de precios:

    TabsB.color-acento-contenido.mb-5.tabs-sin-icono
      .py-4.py-md-5(titulo="Fijación de precios basada en el valor para el cliente")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h2 Fijación de precios basada en el valor para el cliente
            p Toma en consideración el valor percibido por los compradores, esto significa que el precio debe considerarse junto con todas las otras variables de la mezcla de marketing. Se evalúan las necesidades de los clientes y sus percepciones acerca del valor del producto y luego, establece un precio meta basado en dichas percepciones. Estas percepciones que tienen los clientes del valor establecen el límite máximo de los precios. 
          .col-md-4
            figure
              img(src='@/assets/curso/fijacion-precios1.svg', alt='Fijación de precios basada en el valor para el cliente')
      .py-4.py-md-5(titulo="Fijación de precios basada en el costo")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h2 Fijación de precios basada en el costo
            p Suele estar orientada al producto, los costos fijan el nivel mínimo del precio que la compañía puede cobrar. Consiste en establecer precios a partir de los costos de producción, distribución y venta del producto más una tarifa justa de utilidades por el esfuerzo que realizó la compañía y los riesgos que asumió.
            p Existen dos tipos de costos: fijos y variables. Los costos fijos o generales son aquellos que no varían con los niveles de producción o ventas, por ejemplo, una empresa debe pagar cada mes las cuentas de arriendo, luz y salarios, entre otros. Los costos variables cambian en proporción directa con el nivel de producción, por ejemplo, cada computadora personal fabricada por hp incluye el costo de microprocesadores, cables, plástico, empaque y otros insumos, que varían según la cantidad de unidades fabricadas. Los costos totales son la suma de los costos fijos y variables para un nivel de producción determinado; la dirección de la empresa desea cobrar un precio que, al menos, cubra los costos totales de producción en un nivel de producción específico.
          .col-md-5
            figure
              img(src='@/assets/curso/fijacion-precios2.svg', alt='Fijación de precios basada en el costo')
      .py-4.py-md-5(titulo="Fijación de precios basada en la competencia")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h2 Fijación de precios basada en la competencia
            p Implica establecer precios con base en estrategias, costos, precios y ofertas de mercado de los competidores. Los consumidores basarán sus juicios sobre el valor de un producto según los precios que los competidores cobren por productos similares. Se debe tener en cuenta la siguiente pregunta ¿la oferta de mercado de la empresa es comparable con la oferta de los competidores en términos del valor para los clientes? si los consumidores perciben que el producto o servicio de la empresa brinda mayor valor, entonces podría cobrar un precio más alto. Si perciben un menor valor respecto a los productos de la competencia, la compañía deberá cobrar un precio más bajo o modificar las percepciones de los clientes para justificar el precio más alto.
          .col-md-5
            figure
              img(src='@/assets/curso/fijacion-precios3.svg', alt='Fijación de precios basada en la competencia')

    p.mb-4 A continuación, Díaz (2016) presenta algunas fórmulas utilizadas para hallar el precio de venta al público:

    .row.justify-content-center.mb-5
      .col-lg-8
        .row
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img.px-lg-2.p-2(src='@/assets/curso/formula-precio-venta1.png' alt='Primera formula para hallar el precio de venta al público')
              .tarjeta.color-rosa
                .p-4
                  p.text-center Precio de venta con el que se recupera el costo
                  img.px-lg-5.px-4(src='@/assets/curso/formula-precio-venta-1.svg' alt='Formula para hallar el precio de venta al público')
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img.px-lg-2.p-2(src='@/assets/curso/formula-precio-venta2.png' alt='Segunda formula para hallar el precio de venta al público')
              .tarjeta.color-rosa
                .p-4
                  p.text-center Precio de venta costo total
                  p.text-center
                    strong PV  = costo total unitario + % de utilidad 

    h3 Márgenes.
    
    p.mb-4 López (2018) explica los diferentes tipos de márgenes y las ecuaciones para obtenerlos.

    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
      .row.justify-content-center(titulo="Margen de contribución total")
        p Indica la relación que existe entre las ventas del período y los costos variables, tanto de producción como de operación que se utilizaron para generar productos o servicios. Para determinarlo a las ventas totales se le restan los costos variables totales, este resultado muestra el remanente que se obtiene, representa el margen con el que la empresa cuenta para cubrir los costos fijos y obtener una determinada utilidad en el período.
        .col-lg-5.col-9.mb-3
          figure
            img.px-lg-5(src='@/assets/curso/margen-contribucion-total.svg', alt='Margen de contribución total')
      div.row.justify-content-center(titulo="Margen de contribución por unidad (MCU)")
        p Proporciona información sobre la relación que existe entre las ventas unitarias y el margen que se genera después de descontar los costos unitarios variables, lo cual está disponible para cubrir el costo fijo por unidad; su cálculo se realiza con los datos unitarios. Al precio de venta unitario (PVU) se le resta el costo variable unitario (CVU) o con datos generales, el margen de contribución total (MCT) se divide entre el total de unidades vendidas. 
        .col-lg-4.col-4.mb-3
          figure
            img.px-lg-5(src='@/assets/curso/margen-contribucion-unidad1.svg', alt='Margen de contribución por unidad (MCU)')
        .col-lg-4.col-4.mb-3
          figure
            img.px-lg-5(src='@/assets/curso/margen-contribucion-unidad2.svg', alt='Margen de contribución por unidad (MCU)')
        .col-lg-4.col-4.mb-3
          figure
            img.px-lg-5(src='@/assets/curso/margen-contribucion-unidad3.svg', alt='Margen de contribución por unidad (MCU)')        
      div.row.justify-content-center(titulo="Margen de contribución por porcentajes")
        p El concepto de contribución marginal por porcentaje indica la proporción de las ventas con las que cuenta la organización para cubrir los costos fijos; esto queda después de disminuir el importe de los costos variables para solventar el importe de los costos fijos y poder generar una utilidad.
        .col-lg-4.col-9.mb-3
          figure
            img.px-lg-5(src='@/assets/curso/margen-contribucion-porcentajes.svg', alt='Margen de contribución por porcentajes')    

    h3 Costos

    .row.mb-2
      .col-lg-7.mb-2
        p Desde pequeños a los niños se le inculca el concepto de gastar, esto se ve reflejado al momento de salir con los amigos, en la mayoría de las ocasiones se requiere de dinero para comprar (gastar) comida, ropa, diversión; pero no es consciente de lo que representa dicho concepto, sino hasta que es responsable de sus propios gastos. Esto se genera cuando la persona ingresa al ámbito laboral, ahí es cuando se pregunta cada que va a adquirir alguna cosa ¿cuánto cuesta? o si requiere salir de vacaciones se hará la misma pregunta ¿cuánto me costarán las vacaciones? Y, mágicamente ha incluido en su vocabulario un nuevo concepto, el de costo
        p El costo está representado por la suma de los recursos expresados en términos monetarios que se invierten para poder producir un bien o prestar un servicio que genere beneficios económicos futuros, este se recupera en el momento de la venta de los productos o servicios (López, 2018). 
      .col-lg-5
        figure
          img(src='@/assets/curso/costos.svg', alt='Persona sacando cuentas con calculadora') 

    p.mb-4 En la siguiente tabla se muestra una clasificación que realiza el autor sobre los costos según su función, identificación y comportamiento.

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.titulo-img
          h5 Clasificación de costos
        .tabla-b.color-primario.mb-5.tabla-costos
          .tabla-b__header
            h5.mb-0 Costos
          table
            caption Nota. Tomado de López (2018)
            tr
              th(rowspan="2") Función
              td 
                strong Producción. 
                | Se generan en el área productiva y se encuentran integrados por la materia prima, mano de obra y costos indirectos de producción.
            tr 
              td 
                strong Operación. 
                | Se generan en el área administrativa y de comercialización, se les conoce como gastos de administración, financieros y ventas.
            tr
              th(rowspan="2") Identificación
              td 
                strong Directos. 
                | Se identifican plenamente en el producto como la materia prima directa y la mano de obra directa.
            tr    
              td
                strong Indirectos. 
                | No se pueden identificar directamente en el producto como los pagos de servicios y herramientas.
            tr
              th(rowspan="3") Comportamiento
              td 
                strong Fijos. 
                | Se tienen que pagar se produzcan o no, se vendan o no, permanecen constantes como el pago de la renta o los salarios a los ayudantes generales.
            tr    
              td
                strong Variables. 
                | Cambian de acuerdo con la producción, por ejemplo, la materia prima, entre más unidades se producen más se gasta.    
            tr    
              td
                strong Mixtos. 
                | Es una combinación de costos fijos y variables, por ejemplo, el servicio de teléfono.


    p Los elementos de un costo de producción de un producto se clasifican en directos e indirectos como se explica en la siguiente figura.

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.titulo-img
          h5 Elementos de costo de producción
        figure.mb-5
          img.mb-3(src='@/assets/curso/elementos-costo-produccion.svg', alt='Elementos de costo de producción') 
          figcaption Nota. Tomado de López (2018).

    h3 La materia prima
    .row.mb-4
      .col-lg-7.mb-2
        p Es el costo de los materiales con los que se elabora un producto y puede ser directa e indirecta. 
          strong La materia prima directa (MPD) 
          | representa el costo de los materiales con los que se elabora el producto y que se puede identificar plenamente en el mismo, por ejemplo, si se van a elaborar zapatos, el costo de la piel y suelas. 
          strong La materia prima indirecta (MPI) 
          | representa el costo de los materiales que no se pueden identificar o cuantificar plenamente en el producto, por ejemplo, en la fabricación de zapatos la cantidad de pegamento empleado no se puede cuantificar.
      .col-lg-5
        figure
          img(src='@/assets/curso/materia-prima-madera.svg', alt='Bloques de madera') 

    p.mb-4 Generalmente, las organizaciones cuentan con tres tipos de inventario: inventario de materia prima (IMP), inventario de producción en proceso (IPP) e inventario de productos terminados (IPT). En la siguiente figura se explica esta tipología de inventario.

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.titulo-img
          h5 Tipos de inventario
        figure.mb-5
          img.mb-3(src='@/assets/curso/materia-prima.svg', alt='Tipos de inventario') 
          figcaption Nota. Tomado de López (2018).

    h3 Mano de obra
    .row.mb-5
      .col-lg-7.mb-2
        p Es la fuerza humana que se utiliza en la fabricación de un producto y está compuesta por el salario y prestaciones que se les paga por dicha actividad, puede ser directa o indirecta. La mano de obra directa es el costo de los salarios que se le pagan a las personas que participan directamente en la elaboración de un producto, por ejemplo, en la producción de café se refiere al sueldo de la persona que opera la molienda del café. La mano de obra indirecta es  el costo de los salarios que se pagan al personal que apoya en la producción, pero que no elabora directamente el producto, por ejemplo, el sueldo del supervisor de calidad del café (López, 2018).
      .col-lg-5
        figure
          img(src='@/assets/curso/mano-obra.svg', alt='Mano de obra') 

    h3 Costos indirectos de producción
    .row.mb-5
      .col-lg-7.mb-2
        p Son los costos de las herramientas y servicios necesarios para la fabricación de los productos, así como los costos de los materiales indirectos y salarios de las personas que intervienen de forma indirecta en dicha fabricación. Algunos ejemplos pueden ser los costos de mantenimiento general de la fábrica, la depreciación de la maquinaria, el sueldo del supervisor de la producción, los servicios de luz, teléfono, agua, Internet que se generen en la fábrica o área de producción (López, 2018).
      .col-lg-5
        figure
          img(src='@/assets/curso/costos-indirectos.svg', alt='Costos indirectos de producción')       

    h3 Gastos
    .row.justify-content-center
      .col-lg-10
        .bloque-texto-x.mb-4
          .bloque-texto-x__img2
          .bloque-texto-x__contenido
            .bloque-texto-x__texto.p-4
              p Los costos del período son los que se generan por la administración y comercialización del producto, es decir, cuando el área productiva termina de elaborar sus productos al 100% los envía para que estos sean vendidos y obtener las utilidades esperadas, a esto se le conoce como gastos de venta (CV), gastos de administración (CA) y gastos financieros (CF) (López, 2018).
    
    .row.justify-content-center
      .col-lg-10
        TabsA.color-acento-botones.mb-3
          .tarjeta.color-amarillo.p-4(titulo="Gastos de venta (CV)")
            h4 Gastos de venta (CV)
            .row
              .col-xl-3.mb-4.px-lg-4.col-4
                figure
                  img.px-lg-1(src='@/assets/curso/megafono.svg', alt='Gastos de venta (CV)')
              .col-xl-8
                p Costos que se generan por la comercialización del producto, por ejemplo, los gastos de publicidad, comisiones a vendedores, gastos de distribución, servicio de teléfono, Internet, mantenimiento, luz, y sueldos exclusivamente de esta área.
          
          .tarjeta.color-amarillo.p-4(titulo="Gastos de administración (GA)")
            h4 Gastos de administración (GA)
            .row
              .col-xl-3.mb-4.px-lg-4.col-4
                figure
                  img.px-lg-2(src='@/assets/curso/informe.svg', alt='Gastos de administración (GA)')
              .col-xl-8
                p Costos que se generan por la administración de la empresa, por ejemplo, los sueldos del contador general y del administrador, servicio de teléfono, Internet, mantenimiento y renta de oficinas exclusivamente de esta área.
          
          .tarjeta.color-amarillo.p-4(titulo="Gastos financieros (GF)")
            h4 Gastos financieros (GF)
            .row
              .col-xl-3.mb-4.px-lg-4.col-4
                figure
                  img.px-lg-1(src='@/assets/curso/efectivo.svg', alt='Gastos financieros (GF)')
              .col-xl-8
                p Costos que se generan por la obtención de efectivo, es decir, son los intereses que se deben pagar por los préstamos que se obtienen de instituciones financieras o de terceros, las comisiones bancarias, así como las pérdidas cambiarias.
          


    Separador


    // 4.2
    #t_4_2.titulo-segundo
      .h2 4.2. Estrategias de precios
    
    p A continuación, puede revisar las estrategias de precio y la fijación de este.

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row.justify-content-center(titulo="Estrategia de precios estables o variables")
        p Cuando una empresa decide vender un producto a idéntico precio y con las mismas condiciones de venta para todos sus consumidores se le denomina estrategia de precio estable o fijo; sin embargo, a veces resulta conveniente variar los precios o las condiciones de venta para el mismo producto, en función de las características particulares o personales de cada uno de los consumidores. Como ejemplo de precios fijos se puede citar un detergente que compra un consumidor en retail;  como precio variable se puede citar la compra de un automóvil que depende del valor en el mercado (Baena, 2010).
        
      div.row.justify-content-center(titulo="Estrategia de precios basados en descuentos por cantidad adquirida o comprada")
        p Consiste en la reducción por parte del vendedor del precio del producto cuando se adquiere un gran volumen de mercancía. Esta estrategia es muy habitual en el mercado industrial, en el que las empresas compran gran cantidad de productos para revenderlos o bien someterlos a un proceso de producción o elaboración (Baena, 2010).
        
      div.row.justify-content-center(titulo="Estrategia de aplazamiento de pago")
        p A través de esta estrategia el producto es ofrecido al cliente sin necesidad de que este abone íntegramente el valor del mismo, ya que se le concede la posibilidad de realizar el pago en varios períodos. En algunos casos, esta estrategia implica el recargo sobre el precio inicial de un tipo de interés (Baena, 2010).

      div.row.justify-content-center(titulo="Estrategia de descuento por pronto pago")
        p El precio final se reduce en un porcentaje determinado cuando el pago se realiza al recibir la mercancía o, en un corto período de tiempo, (Baena, 2010).

      div.row.justify-content-center(titulo="Estrategia de precios bajos en períodos promocionales")
        p Consiste en la reducción del precio de una selección de productos en un período determinado, sin que los consumidores tengan conocimiento con antelación de cuándo se van a producir estos descuentos (Baena, 2010).

      div.row.justify-content-center(titulo="Estrategia de precio psicológico")
        p Trata de generar confusión en la mente del consumidor, es decir, que la percepción sea diferente a la realidad, por ejemplo, cuando a un producto de consumo general y muy competido se le pone en el punto de venta un precio de $39.999, el comprador va a establecer una comparación inmediata con el precio visto para el mismo producto en otro almacén ($40.000). El precio presentado de manera fraccionada genera la percepción de ser más económico, por ejemplo, por solo $1.500 diarios lleven su televisor a color de 20 pulgadas. 
        p De lo que se trata es de motivar a la compra, generando en el posible comprador el efecto de que la cifra que debe pagar diariamente es una suma irrisoria al alcance de cualquier persona. A lo mejor, si se anunciara de otra manera, es decir, por $45.000 mensuales, no causaría el mismo efecto esperado (Pretel, 2016).

      div.row.justify-content-center(titulo="Fijación de precios de descremado del mercado")
        p Muchas compañías crean nuevos productos y fijan precios iniciales altos para obtener ingresos por descremar cada capa del mercado. Apple con frecuencia utiliza esta estrategia, llamada fijación de precios de descremado del mercado, cada nuevo modelo del iPhone inicia a un precio elevado, y después lo reduce cuando se lanzan nuevos modelos, esta estrategia solo tiene sentido en ciertas condiciones, la imagen y la calidad del producto deben sustentar el precio elevado y debe haber una cantidad suficiente de compradores dispuestos a adquirir el producto por ese precio (Kotler, 2017)
           
      div.row.justify-content-center(titulo="Fijación de precios de penetración de mercado")
        p En lugar de establecer un precio inicial elevado para aprovechar segmentos pequeños pero provechosos del mercado, fija un precio bajo inicial para penetrar en el mercado con rapidez y profundidad, es decir, para atraer a una gran cantidad de compradores rápidamente y ganar una gran participación en el mercado (Kotler, 2017)

      div.row.justify-content-center(titulo="Fijación de precios para mezclas de productos")
        p A menudo la estrategia para fijar el precio de un producto debe modificarse cuando este forma parte de una mezcla de productos; en tal caso, la compañía busca un conjunto de precios que incrementen al máximo las utilidades de toda la mezcla de productos.
        p En la fijación de precios por la línea de productos, los rangos de precios deben tomar en cuenta las diferencias de los costos entre los productos de la línea y, más importante, representar las diferencias en las percepciones que tienen los clientes del valor de distintas características. Al fijar precios de conjuntos de productos, los vendedores suelen combinar varios de sus productos y ofrecer el conjunto a un precio reducido
        p En la fijación de precios de producto cautivo algunos ejemplos son las navajas para máquinas de afeitar, los videojuegos y los cartuchos para impresoras. Los fabricantes de los productos principales (máquinas de afeitar, consolas de videojuegos e impresoras) suelen fijar un precio bajo para estos y obtener mayores beneficios en los artículos consumibles (Kotler, 2017).

    p.mb-4 Prettel (2016) define algunas estrategias de ajuste de precios teniendo en cuenta las circunstancia    

    .row.justify-content-center
      .col-lg-10
        ul.lista.lista-ul--color.p-1.mt-2
          li 
            i.fas.fa-caret-right
            p.mb-0 
              strong Según el valor agregado de la marca. 
              | La estrategia de precios para aquellos productos que después de años de penetración han logrado una gran imagen, es la de precios altos, por ejemplo el calzado Nike.
          li 
            i.fas.fa-caret-right
            p.mb-0 
              strong Según el tipo de canal. 
              | Los canales de distribución mayoristas o detallistas son determinantes a la hora de escoger la mejor estrategia de precios. Los canales mayoristas son favorecidos por los descuentos por volumen de compra o por pronto pago, trasladando parte de este al detallista, para motivarlo a vender más.
          li 
            i.fas.fa-caret-right
            p.mb-0 
              strong Según la ubicación geográfica del mercado. 
              | Las grandes distancias que tiene que recorrer un producto para llegar al consumidor final implican altos costos en fletes, así como en algunas ocasiones gastos de almacenamiento. Las compañías quedan frente a dos alternativas, absorber estos altos costos o negociar con el cliente.
          li 
            i.fas.fa-caret-right
            p.mb-0 
              strong Precio para línea de productos. 
              | La línea de productos le da opciones al mercado, por lo tanto, el precio de cada uno de los productos que forman la totalidad de la línea deben ser diferenciales.
          li 
            i.fas.fa-caret-right
            p.mb-0 
              strong Estrategia de precios para un crecimiento circunstancial de la demanda.
              | Existen circunstancias que originan una subida de los precios como consecuencia de un incremento repentino de la demanda, por ejemplo, un evento sísmico ocasiona grandes estragos, lo que genera un incremento en la demanda de mantas, de alimentos enlatados, del agua, entre otros. Como consecuencia inmediata se da una subida desmedida de precios de estos productos (a mayor demanda, mayor precio).
          li 
            i.fas.fa-caret-right
            p.mb-0 
              strong Estrategia de precios según la categoría de la empresa (good will). 
              | Las compañías deben tratar de mantener a través de los precios de sus productos y por obvias razones con la calidad de los mismos, la imagen ya ganada. En el ámbito mundial Lacoste, Polo e Yves Saint-Laurent son denominados productos de marca, posiblemente con los precios más altos del mercado.


    Separador


    // 4.3
    #t_4_3.titulo-segundo
      .h2 4.3. Punto de equilibrio operativo          

    .row.justify-content-center
      .col-lg-10
        .bloque-texto-x.mb-5
          .bloque-texto-x__img3
          .bloque-texto-x__contenido
            .bloque-texto-x__texto.p-4
              p López (2018) explica que el punto de equilibrio indica el nivel de ventas en unidades y en pesos, que proporciona un margen de ganancia con el que la empresa puede cubrir el importe de los costos fijos y partir de ese volumen para generar las utilidades deseadas. Se puede determinar en unidades, lo cual indica el volumen de ventas que la empresa debe cubrir para alcanzar el equilibrio mencionado, o en pesos, el cual indica el importe en unidades monetarias que debe vender para generar el margen de contribución requerido que permita cubrir los costos fijos. 
    
    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="El método ecuación")
        .row.justify-content-center
          .col-md-5
            figure
              img(src='@/assets/curso/metodo-ecuacion.svg', alt='El método ecuación')
          .col-md-6.mb-4.mb-md-0
            h4 El método ecuación
            p.mb-4 Para calcularlo se tiene en cuenta dividir el total de costos fijos entre el margen de contribución unitario.
            .row.justify-content-center
              .col-md-3.col-4.p-2
                figure
                  img(src='@/assets/curso/metodo-ecuacion1.svg', alt='El método ecuación')
              .col-md-3    
              .col-md-3.col-4.p-2
                figure
                  img(src='@/assets/curso/metodo-ecuacion2.svg', alt='El método ecuación')
      .py-3.py-md-4(titulo="El método gráfico")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/metodo-grafico.svg', alt='El método gráfico')
          .col-md-6
            h4 El método gráfico
            p Consiste en representar mediante una gráfica la relación de los costos fijos y variables con las ventas generadas en un período, para determinar el punto de equilibrio tanto en pesos como en unidades. A continuación, se retoma la explicación de los conceptos que se muestran en la figura 19 para identificar el punto en donde las ventas generan un margen que cubre los costos fijos y por el cual, se obtiene una utilidad determinada. 
            ul.lista.lista-ul--color.p-1.mt-2
              li 
                i.fas.fa-caret-right
                p.mb-0 En el eje Y se muestra el importe de las ventas totales en pesos.
              li 
                i.fas.fa-caret-right
                p.mb-0 En el eje X se muestra el volumen de las ventas o cantidades vendidas.
              li 
                i.fas.fa-caret-right
                p.mb-0 Se traza una línea horizontal en el importe de los costos fijos totales (CFT).
              li 
                i.fas.fa-caret-right
                p.mb-0 Se traza una línea horizontal en el importe de los costos variables totales (CVT), de tal forma que representan la suma del costo de producción. 


    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido.titulo-img
          h5 Punto de equilibrio
        figure.mb-5
          img.mb-3(src='@/assets/curso/punto-de-equilibrio.svg', alt='Punto de equilibrio') 



    
</template>

<script>
export default {
  name: 'Tema4',
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
    background-image: url(../assets/curso/4-1-politicas-fijacion.svg)
    background-size: cover
  &__img1
    flex: 1 0 50%
    background-image: url(../assets/curso/metodos-fijacion-precios.svg)
    background-size: cover
  &__img2
    flex: 1 0 50%
    background-image: url(../assets/curso/gastos.svg)
    background-size: cover
  &__img3
    flex: 1 0 50%
    background-image: url(../assets/curso/4-3-equilibrio.svg)
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
    &__img, &__img1, &__img2, &__contenido
      flex: 1 0 100%
    &__img, &__img1, &__img2
      padding-top: 62%
    &__contenido
      padding: 30px
    &__texto
      margin-left: 0
</style>
