<script setup>
    const titulo = 'Entrevistas por ciudad'
    const titulos = ['Buenaventura', 'Cali', 'Quibdó']
    const datos = [149, 65, 48]
    const ancho = 800
    const alto = 600
    const nombreDatos = 'Entrevistas'
</script>

<template>
    <Histograma :titulo=titulo :titulos=titulos :datos=datos :ancho=ancho :alto=alto :nombreDatos=nombreDatos />
</template>

