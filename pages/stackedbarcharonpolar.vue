<script setup>
    const indicadorPorSentimiento = {
        titulo: 'Respuestas por Indicador X Sentimiento',
        titulos: ['I3', 'Paz', 'I2', 'I1'],
        categorias: ['a. Muy Positivo', 'b. Positivo', 'c. Neutro', 'd. Negativo'],
        series: [
            { datos: [2, 8, 4, 7], nombre: 'd. Negativo' },
            { datos: [5, 16, 32, 34], nombre: 'a. Muy Positivo' },
            { datos: [16, 69, 36, 116], nombre: 'c. Neutro' },
            { datos: [32, 80, 120, 177], nombre: 'b. Positivo' },
        ],
        ancho: 800,
        alto: 600,
    }
    console.log(indicadorPorSentimiento)
</script>

<template>
    <StackedBarCharOnPolar 
        :ancho=indicadorPorSentimiento.ancho 
        :alto=indicadorPorSentimiento.alto 
        :titulo=indicadorPorSentimiento.titulo 
        :titulos=indicadorPorSentimiento.titulos         
        :series=indicadorPorSentimiento.series
        :categorias=indicadorPorSentimiento.categorias
    />
</template>