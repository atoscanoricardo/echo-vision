<script setup>
    const titulo = 'Entrevistas por ciudad X sexo'
    const titulos = ['Buenaventura', 'Cali', 'Quibdó']
    const nombreDatos1 = 'Hombres'
    const datos1 = [58, 27, 16]
    const nombreDatos2 = 'Mujeres'
    const datos2 = [91, 38, 32]
    const ancho = 800
    const alto = 600
</script>

<template>
    <StackedHorizontalBar :ancho=ancho :alto=alto :titulo=titulo :titulos=titulos 
                :datos1=datos1 :nombreDatos1=nombreDatos1 
                :datos2=datos2 :nombreDatos2=nombreDatos2
    />
</template>