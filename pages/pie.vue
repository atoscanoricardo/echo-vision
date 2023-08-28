<script setup>
    const titulo = 'Entrevistas por ciudad'
    const subTitulo = 'Primer corte'
    const titulos = ['Buenaventura', 'Cali', 'Quibdó']
    const nombreDatos = 'Entrevistas'
    const datos = [
                        { value: 149, name: 'Buenaventura' },
                        { value: 65, name: 'Cali' },
                        { value: 48, name: 'Quibdó' }
                    ]
    const ancho = 800
    const alto = 600 
</script>

<template>
    <Pie :titulo=titulo 
         :subTitulo=subTitulo 
         :titulos=titulos  
         :datos=datos 
         :ancho=ancho 
         :alto=alto 
         :nombreDatos=nombreDatos />
</template>