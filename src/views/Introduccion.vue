<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-5
      img(src="@/assets/curso/banner-intro.svg", alt="Persona con calculadora sacando cuentas")
    
    p.mb-5 
      strong Para el desarrollo de un plan de mercadeo es esencial aplicar métodos para la estimación de la demanda de acuerdo con las tendencias del mercado; 
      | conocer la demanda potencial, la oferta del mercado y la competencia es de vital importancia para las organizaciones al momento de seleccionar sus estrategias de marketing. Una de las variables más susceptibles en el mercadeo es el precio; en este momento se deben utilizar estrategias de precios en el plan de mercadeo a partir del comportamiento del mercado y de las políticas de la organización, así como establecer el presupuesto de ventas de acuerdo con las políticas comerciales de la organización para pronosticar con la mayor exactitud la demanda de un producto.

    .row.justify-content-center
      .col-lg-10
        .bloque-texto-x.mb-4
          .bloque-texto-x__img
          .bloque-texto-x__contenido
            .bloque-texto-x__texto.p-4
              p Para la elaboración de este componente se abordaron varios autores conocidos en el tema de las leyes de oferta y demanda, la competencia, la inteligencia de mercados, el precio y el presupuesto de ventas, de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia en el entendido que el conocimiento es social y, por lo tanto, es para usarlo por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos, aprendices y lectores en general, que estén interesados en acercarse al plan de precios y al presupuesto para una idea de negocio o proyecto productivo.


</template>

<script>
export default {
  name: 'Introduccion',
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
    background-image: url(../assets/curso/imagen-intro1.svg)
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
    &__img, &__contenido
      flex: 1 0 100%
    &__img
      padding-top: 50%
    &__contenido
      padding: 30px
    &__texto
      margin-left: 0
</style>
