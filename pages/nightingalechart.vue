<script setup>
const porSentimiento = {
  titulo: 'Respuestas por sentimiento',
  subTitulo: 'Primer corte',
  titulos: ['Muy Positivo', 'Negativo', 'Neutro', 'Positivo'],
  nombreDatos: 'Respuestas',
  datos: [
      { value: 87, name: 'a. Muy Positivo' },
      { value: 409, name: 'b. Positivo' },
      { value: 237, name: 'c. Neutro' },
      { value: 21, name: 'd. Negativo' },
  ],
  datos1: [12, 3, 31, 54],
  ancho: 800,
  alto: 600,
  radios: [50, 250]
}
</script>

<template>
    <NightingaleChart
        :titulo=porSentimiento.titulo 
        :subTitulo=porSentimiento.subTitulo 
        :titulos=porSentimiento.titulos  
        :datos=porSentimiento.datos 
        :ancho=porSentimiento.ancho 
        :alto=porSentimiento.alto 
        :nombreDatos=porSentimiento.nombreDatos
        :radios=porSentimiento.radios 
    />
</template>