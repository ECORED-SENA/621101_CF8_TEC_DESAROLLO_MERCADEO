<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Inteligencia de mercados

    figure.mb-5
      img(src='@/assets/curso/banner-tema3.svg', alt='Inteligencia de mercados')  

    .row.justify-content-center
      .col-lg-10
        .bloque-texto-x.mb-5
          .bloque-texto-x__img
          .bloque-texto-x__contenido
            .bloque-texto-x__texto.p-4
              p Los datos están revolucionando la manera en la que funcionan las empresas y serán cada vez más importantes para las organizaciones en los próximos años. Las compañías que ven los datos como un recurso estratégico son las que sobrevivirán y progresarán; con el crecimiento masivo del big data y el internet de las cosas o IoT, además de los métodos para analizar los datos que evolucionan rápidamente, la importancia de estos en los negocios aumentará (Marr, 2018).

    .row.justify-content-center.mb-4
      .col-lg-8.cajon.color-acento-contenido
        .row.justify-content-center.align-items-center
          .col-lg-2.col-3.p-lg-3.p-4
            figure
              img(src='@/assets/curso/icono-inteligencia.svg', alt='Icono sobre inteligencia de mercados')
          .col-lg-9.p-lg-4.px-4
            p Se puede decir que business intelligence es un término utilizado para referirse a sistemas informáticos, cuya función es explotar los datos y la información almacenados en sistemas como CMR Customer Relationship Management, ERP Enterprise Resource Planning y SCM Supply Chain Management , mientras que el MI Marketing Intelligence o inteligencia de mercados es un proceso que se centra en la obtención de información del mercado que requiere la intervención humana, en la que la estructura organizativa, la función de interpretación y el aprendizaje tienen un papel muy importante (Ortoll, 2015).

    .row.justify-content-center.mb-3
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-4
          .row.justify-content-around.align-items-center
            .col-1
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/diagrama-de-flujo.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.p-3
                  h3.mb-1 La inteligencia del marketing
                  p.text-small En la figura se puede observar en qué consiste la inteligencia de marketing.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Figura-La-Inteligencia-del-Marketing.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download


    Separador


    // 3.1
    #t_3_1.titulo-segundo
      .h2 3.1. Sistema de información de mercadeo

    .row.justify-content-center
      .col-lg-10
        .bloque-texto-x.mb-5
          .bloque-texto-x__img1
          .bloque-texto-x__contenido
            .bloque-texto-x__texto.p-4
              p Un sistema de información de marketing (SIM) está constituido por el conjunto de personas, equipos y procedimientos que recopilan, ordenan, analizan, evalúan la información necesaria, luego la distribuyen de manera puntual y, precisa al personal de marketing a cargo de la toma de decisiones. Este sistema se apoya en los registros internos de la empresa, en las actividades de inteligencia de marketing y en la investigación de mercados. El sistema de información de marketing de la empresa debe ser una mezcla de lo que los directivos creen que necesitan, lo que realmente necesitan y lo que es económicamente factible (Kotler, 2016). 

    p Toda empresa organizada debe tener un sistema de información de marketing (SIM) que reúna datos sobre producción, finanzas, contabilidad, marketing, ventas, información histórica de los clientes, recurso humano y, todo lo proveniente del entorno (Prettel, 2016).
    p.mb-4 Un sistema de información de marketing se desarrolla como se muestra en la siguiente figura: 

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.titulo-img
          h5 Sistema de información de marketing
        figure.mb-4
          img.mb-2(src='@/assets/curso/3-1-informacion-mercadeo2.svg', alt='Sistema de información de marketing') 
          figcaption Nota. Tomado de Forero (2017).

    p Prieto (2015) describe las etapas de un sistema de información de mercadeo así:

    ul.lista.lista-ul--color.p-1.mt-2
      li 
        i.fas.fa-caret-right
        p.mb-0 Diagnóstico de la situación actual de la empresa.
      li 
        i.fas.fa-caret-right
        p.mb-0 Identificación de las necesidades de información.
      li 
        i.fas.fa-caret-right
        p.mb-0 Análisis de las necesidades.
      li 
        i.fas.fa-caret-right
        p.mb-0 Diseño del sistema propuesto.
      li 
        i.fas.fa-caret-right
        p.mb-0 Desarrollo y documentación del software.
      li 
        i.fas.fa-caret-right
        p.mb-0 Prueba y mantenimiento del sistema.
      li 
        i.fas.fa-caret-right
        p.mb-0 Implementación y evaluación del sistema.

    p En la siguiente figura Forero (2017) menciona los principales beneficios al utilizar un sistema de información de mercadeo.      

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.titulo-img
          h5 Beneficios de un sistema de información de marketing
        figure.mb-4
          img.mb-2(src='@/assets/curso/3-1-informacion-mercadeo3.svg', alt='Beneficios de un sistema de información de marketing') 
          figcaption Nota. Tomado de Forero (2017).


    Separador


    // 3.2
    #t_3_2.titulo-segundo
      .h2 3.2. Minería de datos    

    .row.justify-content-center
      .col-lg-10
        .bloque-texto-x.mb-5
          .bloque-texto-x__img2
          .bloque-texto-x__contenido
            .bloque-texto-x__texto.p-4
              p Es en palabras de Prieto (2009) una poderosa tecnología estadística que permite extraer información oculta y predecible de grandes bases de datos, para concentrarse en aspectos importantes de la toma de decisiones sobre preguntas de negocios que antes requerían cantidad de tiempo y eran demasiado costosas. 

    .row
      .col-lg-7.mb-3
        p McDaniel (2016) afirma que 
          strong la minería de datos es el uso de software estadístico y otros programas avanzados para descubrir patrones no obvios y ocultos en el big data. 
          | El objetivo es identificar patrones que los mercadólogos puedan usar al crear nuevas estrategias y tácticas para incrementar la rentabilidad de una empresa. 
        p Camelot Music Holdings se sirvió de la minería de datos para identificar a un grupo de clientes de alto nivel de gastos y mayores de 65 años (miembros de su club de compradores frecuentes), quienes adquirían gran cantidad de piezas de jazz, música clásica y películas. Una minería de datos adicional reveló que un gran porcentaje de ellos también compraba piezas de rap y de música alternativa; eran abuelos que hacían compras para sus nietos. Camelot informa ahora a las personas de la tercera edad acerca de lo nuevo en rap y música alternativa, lo mismo que en música tradicional; implica buscar patrones interesantes y seguir el rastro de los datos donde quiera que lleven. El proceso de descubrimiento suele requerir la filtración de enormes cantidades de datos; transacciones electrónicas en punto de venta, registros de inventario y pedidos de clientes en línea asociados con datos demográficos pueden consumir fácilmente varios terabytes de espacio de almacenamiento de datos.
      .col-lg-5
        figure
          img(src='@/assets/curso/3-2-mineria-datos2.svg', alt='Graficas en tablet que salen en 3D') 

    h3 Big data (Macrodatos).

    .row
      .col-lg-7.mb-3
        p A partir de la presentación que se muestra a continuación, puede analizar lo correspondiente a los macrodatos (big data).
        .row.justify-content-center.align-items-center.cajon.color-acento-contenido.mb-4
          .col-lg-2.col-3.p-lg-2.p-3
            figure
              img(src='@/assets/curso/big-data.svg', alt='Icono sobre Big data')
          .col-lg-9.p-lg-4.px-4
            p El término «Big data» se refiere a la recopilación de todos los datos y a la capacidad de utilizarlos para el propio beneficio en una gama amplia de sectores, incluido el de los negocios.
        p Los datos como tal no son ningún invento nuevo. Incluso si se remonta a tiempos anteriores a los computadores y  a las bases de datos se puede ver que se utilizaban los datos para registrar acciones y simplificar procesos. Los avances en el almacenamiento y el análisis de datos permiten que se pueda captar, almacenar y trabajar con diferentes tipos de datos. Como consecuencia, los datos hoy abarcan cualquier cosa, desde hojas de cálculo hasta fotos, videos, grabaciones de sonido, texto escrito y datos de sensores (Marr, 2018).
        p Marr (2018) afirma que existen tres áreas fundamentales en las que los datos son realmente importantes para los negocios.
      .col-lg-5
        figure
          img(src='@/assets/curso/macrodatos.svg', alt='Graficas en tablet que salen en 3D') 

    TabsB.color-acento-contenido.mb-5.tabs-sin-icono
      .py-4.py-md-5(titulo="La mejora de la toma de decisiones")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h4 La mejora de la toma de decisiones
            p En primer lugar, el big data permite a las empresas recoger mejores datos sobre el mercado y los clientes. 
          .col-md-4
            figure
              img(src='@/assets/curso/mejora-toma-decisiones.svg', alt='La mejora de la toma de decisiones')
      .py-4.py-md-5(titulo="La mejora de la actividad")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h4 La mejora de la actividad
            p En segundo lugar, el big data ayuda a las empresas a ganar eficiencia y a aumentar su actividad. Desde el seguimiento del rendimiento de las máquinas hasta la optimización de las rutas de envío, pasando por la selección del mejor talento que haya.
          .col-md-4
            figure
              img(src='@/assets/curso/mejora-actividad.svg', alt='La mejora de la actividad')
      .py-4.py-md-5(titulo="La conversión de los datos en dinero")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h4 La conversión de los datos en dinero
            p En tercer lugar, los datos también ofrecen a las empresas la oportunidad de integrar el big data en su oferta de productos, por lo tanto,  rentabilizar los datos en sí mismos. John Deere es un ejemplo de una empresa que no solamente utiliza los datos para beneficiar a sus clientes, sino también como una nueva oferta de productos.
          .col-md-4
            figure
              img(src='@/assets/curso/conversion-datos-dinero.svg', alt='La conversión de los datos en dinero')

    .row.mb-4
      .col-lg-7.mb-3
        p 
          strong McDaniel (2016) afirma que el big data es la acumulación y análisis de enormes cantidades de información. 
          | Una empresa de investigación y consultoría afirma que una organización con cinco terabytes totales de datos activos de negocios es una organización del big data. Un terabyte son mil millones de bytes, así que se consideraría que una empresa trabaja con big data si tiene datos activos de negocios de cinco mil millones de bytes o más. 
      .col-lg-5
        figure
          img(src='@/assets/curso/data-analysis-composition.svg', alt='Persona analizando datos') 

    p.mb-4 El big data ofrece a una empresa:
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .row
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/dato.svg' alt='Icono sobre datos')
              .tarjeta.color-rosa
                .p-4
                  h4.text-center Discernimientos más profundos:
                  p.text-center En lugar de examinar segmentos, clasificaciones o grupos del mercado u otra información de nivel sumario, los investigadores del big data tienen discernimientos sobre todos los individuos, todos los productos, todas las partes, todos los eventos y todas las transacciones.
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/Database-Server-Storage-Network-Cloud.svg' alt='Icono sobre bases de datos')
              .tarjeta.color-rosa
                .p-4
                  h4.text-center Discernimientos más amplios:
                  p.text-center El análisis del big data toma en cuenta todos los datos, estructurados y no estructurados, para conocer las complejas, evolutivas e interrelacionadas condiciones a fin de producir discernimientos más precisos.

    h3 Bases de datos  

    p.mb-4 A partir de la presentación que se muestra a continuación, puede analizar lo correspondiente a los macrodatos (big data).

    .row.justify-content-center
      .col-lg-10
        .bloque-texto-x.mb-5
          .bloque-texto-x__img3
          .bloque-texto-x__contenido
            .bloque-texto-x__texto.p-4
              p Para muchas compañías una base de datos computarizada con información sobre clientes y prospectos se ha convertido en una herramienta esencial del marketing. Una base de datos interna es simplemente un conjunto de información, desarrollado a partir de datos de la organización (McDaniel, 2016).


    p Las actividades de ventas de una empresa pueden ser una excelente fuente de información para crear una base de datos interna. Un punto de partida tradicional han sido las ventas o el sistema de procesamiento y rastreo de pistas de una compañía, por lo general, ese sistema se erige sobre los informes de llamadas de los vendedores. 
    p Un informe de llamadas da una idea de las actividades diarias de un vendedor, detalla el número de llamadas realizadas, las características de cada empresa visitada, la actividad de ventas resultante de la llamada y toda la información obtenida del cliente respecto a los competidores, como cambio de precios, nuevos productos o servicios, modificaciones de las condiciones de crédito y rasgos de nuevos productos y servicios. Una base de datos interna de marketing erigida sobre resultados de ventas, preferencias del cliente y datos de Internet, móviles y sociales puede ser una poderosa herramienta de marketing (McDaniel, 2016).


</template>

<script>
export default {
  name: 'Tema3',
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
    background-image: url(../assets/curso/imagen1-tema3.svg)
    background-size: cover
  &__img1
    flex: 1 0 50%
    background-image: url(../assets/curso/3-1-informacion-mercadeo.svg)
    background-size: cover
  &__img2
    flex: 1 0 50%
    background-image: url(../assets/curso/3-2-mineria-datos.svg)
    background-size: cover
  &__img3
    flex: 1 0 50%
    background-image: url(../assets/curso/bases-de-datos.svg)
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
      padding-top: 50%
    &__contenido
      padding: 30px
    &__texto
      margin-left: 0
</style>
