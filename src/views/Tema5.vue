<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Presupuesto de ventas

    figure.mb-5
      img(src='@/assets/curso/banner-tema5.svg', alt='Presupuesto de ventas') 

    .row.justify-content-center
      .col-lg-10
        .bloque-texto-x.mb-5
          .bloque-texto-x__img
          .bloque-texto-x__contenido
            .bloque-texto-x__texto.p-4
              p Díaz (2016) determina que el presupuesto de ventas es el punto de partida del proceso presupuestal. Una vez definidos los niveles de ventas, la empresa tiene que empezar a planear la producción necesaria para alcanzar a cubrir la demanda proyectada con sus niveles de inventarios.  

    .row
      .col-lg-7
        p También se desprende toda la operación de la organización: los gastos operacionales de administración y ventas, las necesidades de financiación o de inversión, los flujos de tesorería, las inversiones en activos fijos, entre otros. Al elaborar este presupuesto hay que analizar los factores internos y externos que lo afectan, así como el mercado que reviste especial importancia para los pronósticos, no se puede olvidar el estudio de las tendencias de los datos históricos relacionados con las ventas de períodos anteriores, ya que estos proporcionan información clave para predecir el comportamiento futuro de las ventas.
        p A partir del nivel de ventas se establecen necesidades del presupuesto de materiales directos e indirectos de producción, mano de obra, costos indirectos de fabricación, inversión en activos fijos, necesidades de financiación o de inversión, niveles de inventarios, racionalización de gastos, programación de pagos. Esta determinación de las ventas implica el análisis de factores externos que influyen en el presupuesto como las preferencias del consumidor, las motivaciones de consumo, productos sustitutos con ventajas significativas, los precios de los bienes complementarios, la competencia y las políticas económicas (Diaz, 2016).
      .col-lg-5
        figure.mb-4
          img(src='@/assets/curso/intro-tema5.svg', alt='Persona sacando cuentas')  

    p Los presupuestos establecen los límites de gasto, por lo que son un medio de control. La compañía planea sus ganancias con base en las ventas anticipadas, menos el costo de lograr esas ventas que se representa en el presupuesto total de la organización (Jobber, 2012).
    
    p.mb-4 Jobber (2012) divide el presupuesto del departamento de ventas en 3 elementos claves:

    .row.justify-content-center.mb-3
      .col-lg-10
        LineaTiempoD.color-acento-contenido
            p(numero="1" titulo="El presupuesto de gastos de ventas") Que incluye los costos que se atribuyen directamente al proceso de ventas, como salario y comisión del personal de ventas, gastos de ventas y capacitación.                      
            p(numero="2" titulo="El presupuesto de publicidad") Que incluye los gastos que se atribuyen de manera directa a la promoción por encima de la línea (como publicidad en televisión) y a la promoción debajo de la línea como un esquema de reembolso de cupones). Los métodos para determinar el nivel de estos presupuestos son:           
              ol.lista-ol--cuadro.m-3.lista-morada
                li 
                  .lista-ol--cuadro__vineta
                    span.text-bold a 
                  | Paridad con competidores, en la que el fabricante pequeño recibe una señal del fabricante grande y ajusta su presupuesto con el del líder del mercado.
                li 
                  .lista-ol--cuadro__vineta
                    span.text-bold b
                  | El método económico, en el cual el gasto se asigna a publicidad después de que otros centros de costo han recibido su presupuesto. En otras palabras, si hay algo que quede, se asigna a publicidad.
                li 
                  .lista-ol--cuadro__vineta
                    span.text-bold c
                  | El método de retorno sobre la inversión supone que la publicidad es un bien tangible que se extiende más allá del período de presupuesto. Considera los gastos de anuncios como una inversión a largo plazo e intenta determinar el retorno de esos gastos.
                li 
                  .lista-ol--cuadro__vineta
                    span.text-bold d
                  | El método incremental, supone que las ventas crecientes generarán una promoción creciente y viceversa, mientras que el inverso puede ser el remedio, es decir, es posible curar las ventas en caída con el aumento de los gastos en publicidad.
            p(numero="3" titulo="El presupuesto administrativo") Representa el gasto en que debe incurrirse al operar la fuerza de venta; tales gastos cubren los costos de investigación de marketing, administración de ventas y apoyo al personal.

    Separador


    // 5.1
    #t_5_1.titulo-segundo
      .h2 5.1. Pronóstico

    .row.justify-content-center
      .col-lg-10
        .bloque-texto-x.mb-5
          .bloque-texto-x__img1
          .bloque-texto-x__contenido
            .bloque-texto-x__texto.p-4
              p El pronóstico de ventas es una estimación en moneda corriente o unidades para un período futuro determinado. El pronóstico se refiere a un artículo específico de mercancía o a una línea entera, también cabe la posibilidad de que sea para todo el mercado o una parte de este. 
              p Es importante destacar que un pronóstico de ventas especifica elementos esenciales como el bien, el grupo de clientes, la zona geográfica y el período, e incluye un plan específico de marketing y su programa. Lógicamente, si el plan propuesto cambia, las ventas pronosticadas también se modifican (Johnston, 2009).

    .row
      .col-lg-7
        p Kotler (2016) explica que para comprender el entorno de marketing primero se deben identificar las oportunidades de mercado, luego, la empresa debe calcular y pronosticar el tamaño, el crecimiento y el potencial de ganancias que ofrece cada oportunidad. Los pronósticos de ventas preparados por el departamento de marketing resultan útiles para el departamento de finanzas, ya que permiten identificar las necesidades de liquidez para realizar la inversión y las operaciones; también son valiosos para el departamento de producción, que los utiliza para determinar la capacidad y los niveles de producción.
        p Asimismo, el departamento de compras emplea esta información para adquirir las materias primas necesarias y, el departamento de recursos humanos para contratar a los trabajadores requeridos. Si los pronósticos resultan erróneos, la empresa podría terminar con un inventario excesivo o insuficiente, debido a que los pronósticos de ventas parten de cálculos de la demanda, en tal sentido, los directivos deben definir qué entienden por demanda de mercado.
      .col-lg-5
        figure.mb-4
          img(src='@/assets/curso/5-1-pronostico1.svg', alt='Persona con tablet y graficos') 

    p.mb-4 Jobber (2012) examina la aplicabilidad y utilidad de los pronósticos a corto, mediano y largo plazo en lo que se refiere a la planeación de la organización.       

    .row.justify-content-center.mb-5
      .col-lg-10
        LineaTiempoD.color-acento-contenido
            p(numero="a" titulo="Pronósticos a corto plazo") Suelen hacerse por períodos de hasta tres meses en el futuro y en realidad, se usan para fines tácticos como la planeación de la producción.
            p(numero="b" titulo="Pronósticos a mediano plazo") Son importantes para el área de presupuesto, ya que es el punto de partida del pronóstico de ventas. De esta manera, si el pronóstico de ventas es incorrecto, todo el presupuesto será incorrecto. Si el pronóstico es demasiado optimista, la compañía tendrá inventarios no vendidos, que deben financiarse con capital de trabajo. Si el pronóstico es pesimista, la empresa quizá pierda oportunidades de marketing por no estar preparada para fabricar los bienes adicionales que demanda el mercado. Los pronósticos a mediano plazo suelen considerar un período de un año.
            p(numero="c" titulo="Pronósticos a largo plazo") Suelen obtenerse para períodos de tres años o más, dependiendo del tipo de industria. En industrias como las de computadoras, tres años se considera largo plazo, mientras que para la manufactura de acero, el horizonte a largo plazo típico es de 10 años. Estos pronósticos se trabajan a partir de factores macroambientales como políticas de gobierno, tendencias económicas, etc. 
    
    h3 Métodos para realizar pronósticos
    .row.mb-5
      .col-lg-7.mb-4
        p Los pronósticos de la demanda del mercado corresponden al cálculo del nivel de ventas que alcanzaría una marca en un determinado período y en un área geográfica definida. Clasificar los pronósticos de demanda por regiones permite la implementación de los programas de marketing acorde con sus necesidades de desarrollo, así como el otorgamiento de la partida económica para lograrlo (Prettel, 2016).
      .col-lg-5
        figure
          img(src='@/assets/curso/5-1-metodos-pronostico1.svg', alt='Persona en computador y tablet con graficos') 

    .row.justify-content-center.mb-4
      .col-lg-10
        .row
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/cuantitativo.svg' alt='Métodos cuantitativos')
              .tarjeta.color-rosa
                .p-4
                  h3.text-center Los métodos cuantitativos
                  p.text-center Solo son aplicables cuando se tienen datos históricos. Esta técnica es aplicable cuando el mercado tiene un comportamiento normal, es decir, siempre que no se presente un factor que cause una subida o disminución repentina de la demanda por parte de los consumidores (Prettel, 2016).
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/investigacion-cualitativa.svg' alt='Métodos cualitativos')
              .tarjeta.color-rosa
                .p-4
                  h3.text-center Los métodos cualitativos
                  p.text-center O de opinión son utilizados en algunas organizaciones, basándose en juicios sobre el futuro de las ventas emitidos por personas con experiencia como ejecutivos o vendedores (Prettel, 2016)
      

    Separador


    // 5.2
    #t_5_2.titulo-segundo
      .h2 5.2. Proyección
    
    .row.justify-content-center
      .col-lg-10
        .bloque-texto-x.mb-5
          .bloque-texto-x__img2
          .bloque-texto-x__contenido
            .bloque-texto-x__texto.p-4
              p Todos los análisis financieros serían inútiles si las empresas carecieran de proyecciones de ventas, si una organización se equivoca en esta actividad acumulará una cantidad incorrecta de inventarios, así sus proyecciones de las cuentas por cobrar y por pagar serán incorrectas, y las utilidades y el flujo de efectivo estarán errados. Si bien es posible que el tesorero de una compañía conozca todas las variables que influyen en los estados de resultados, los balances generales, los presupuestos de efectivo y otros estados financieros, todo correrá sin suerte si las proyecciones de ventas no son correctas. 

    .row.mb-2
      .col-lg-7.mb-3
        p Aun cuando es posible emplear técnicas estadísticas como el análisis de regresión y el análisis de series de tiempo para pronosticar las ventas, el personal de marketing es el que se encuentra en mejor posición para predecir las ventas futuras, por ejemplo, los ejecutivos de Radio Shack Corporation recurren a su personal de ventas que labora en sus miles de tiendas a lo largo y ancho de Estados Unidos, a fin de proyectar las ventas de diversos productos. Estas personas son las que están más cerca del cliente todos los días y saben cuáles componentes y productos eléctricos tienen demanda en ese momento y cuáles no, de manera que los vendedores también son capaces de juzgar la capacidad económica de los clientes. 
        p El diseño innovador de un teléfono celular puede agradar mucho a quienes ven los escaparates, pero hay una pregunta que continúa: ¿el teléfono está dentro del alcance económico de los clientes? los compradores responden con sus dólares y el personal de ventas es el más capacitado para captar esa respuesta (Block, 2013).
      .col-lg-5
        figure
          img(src='@/assets/curso/5-2-proyeccion.svg', alt='Graficas impresas') 

    Separador


    // 5.3
    #t_5_3.titulo-segundo
      .h2 5.3. Potencial de ventas          

    .row.justify-content-center
      .col-lg-10
        .bloque-texto-x.mb-5
          .bloque-texto-x__img3
          .bloque-texto-x__contenido
            .bloque-texto-x__texto.p-4
              p Se refiere a la parte del potencial de mercado que una empresa tiene esperanzas razonables de alcanzar. Representa las ventas máximas posibles para todos los vendedores del bien o el servicio en condiciones ideales; mientras que el potencial de las ventas refleja las ventas máximas posibles para determinada compañía (Johnston, 2009).

    .row
      .col-lg-7.mb-3
        p El potencial de ventas suele estar encima del pronóstico de ventas de la organización por varios motivos, entre otros, es posible que la empresa no tenga suficiente capacidad productiva para realizar todo su potencial, su red de distribución tal vez no esté lo suficientemente consolidada o sus recursos financieros sean limitados. Asimismo, los pronósticos de ventas para una industria por lo general están por abajo del potencial del mercado del sector (Johnston, 2009).
        p Para las organizaciones es común aumentar o disminuir los presupuestos o cuotas individuales de ventas en un porcentaje. En el potencial de ventas en productos al consumidor se revisan los ingresos disponibles y el número de personas en el mercado meta; para los productos industriales es posible emplear el número y tamaño de los clientes potenciales. 
        p Finalmente, otro factor que debe tomarse en cuenta es la carga de trabajo, es evidente que dos territorios con igual potencial justifican diferentes cuotas, si uno es compacto, el otro está más disperso. Al evaluar las ventas potenciales de los territorios y determinar las cargas de trabajo, quizá se asigne el presupuesto de ventas global de la manera más justa posible entre el personal de ventas (Jobber, 2012).
      .col-lg-5
        figure
          img(src='@/assets/curso/5-3-potencial1.svg', alt='Graficas en computador') 




    
</template>

<script>
export default {
  name: 'Tema5',
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
    background-image: url(../assets/curso/imagen1-tema5.svg)
    background-size: cover
  &__img1
    flex: 1 0 50%
    background-image: url(../assets/curso/5-1-pronostico.svg)
    background-size: cover
  &__img2
    flex: 1 0 50%
    background-image: url(../assets/curso/proyeccion.svg)
    background-size: cover
  &__img3
    flex: 1 0 50%
    background-image: url(../assets/curso/5-3-potencial.svg)
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
