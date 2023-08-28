<script setup>

const porSexo = {
  titulo: 'Entrevistas por sexo',
  titulos: ['Mujer', 'Hombre'],
  nombreDatos: 'Entrevistas',
  datos: [
    { value: 161, name: 'Mujer' },
    { value: 101, name: 'Hombre' }
  ],
  ancho: 400,
  alto: 300,
}
const porCiudad = {
  titulo: 'Entrevistas por ciudad',
  titulos: ['Buenaventura', 'Cali', 'Quibdó'],
  nombreDatos: 'Entrevistas',
  datos: [
    { value: 149, name: 'Buenaventura' },
    { value: 65, name: 'Cali' },
    { value: 48, name: 'Quibdó' }
  ],
  ancho: 400,
  alto: 300,
}
const porEdad = {
  titulo: 'Entrevistas por edad',
  titulos: ['Jóvenes', 'Adultos'],
  nombreDatos: 'Entrevistas',
  datos: [
    { value: 204, name: 'Jóvenes' },
    { value: 58, name: 'Adultos' }
  ],
  ancho: 400,
  alto: 300,
}
const porRol = {
  titulo: 'Entrevistas por rol',
  titulos: ['Juventudes', 'Sociedad C.', 'Institucional', 'Sector privado', 'Academia', 'Org. Trabajadores'],
  nombreDatos: 'Entrevistas',
  datos: [
    { value: 204, name: 'Juventudes' },
    { value: 32, name: 'Sociedad C.' },
    { value: 16, name: 'Institucional' },
    { value: 6, name: 'Sector privado' },
    { value: 3, name: 'Academia' },
    { value: 1, name: 'Org. Trabajadores' }
  ],
  ancho: 400,
  alto: 300,
}
const porEtnia = {
  titulo: 'Entrevistas por etnia',
  titulos: ['Indigena', 'Mestizo', 'Mulato', 'NARP', 'Ninguno'],
  nombreDatos: 'Entrevistas',
  datos: [
    { value: 221, name: 'NARP' },
    { value: 16, name: 'Mestizo' },
    { value: 15, name: 'Ninguno' },
    { value: 5, name: 'Mulato' },
    { value: 2, name: 'Indigena' },
  ],
  ancho: 400,
  alto: 300,
}
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
  ancho: 400,
  alto: 300,
  radios: [15, 100],
  centros: ['50%', '75%'],
}
const porCiudadSexo = {
  titulo: 'Entrevistas por Ciudad X Sexo',
  titulos: ['Buenaventura', 'Cali', 'Quibdó'],
  nombreDatos1: 'Hombres',
  datos1: [58, 27, 16],
  nombreDatos2: 'Mujeres',
  datos2: [91, 38, 32],
  ancho: 400,
  alto: 300,
}
</script>

<template>
  <div class="">
    <div class="rounded-box p-5 inline-flex">
      <Pie 
      :titulo=porSexo.titulo 
      :titulos=porSexo.titulos 
      :datos=porSexo.datos 
      :ancho=porSexo.ancho 
      :alto=porSexo.alto 
      :nombreDatos=porSexo.nombreDatos />
    </div>
    <div class="rounded-box p-5 inline-flex">
      <Pie 
      :titulo=porCiudad.titulo 
      :titulos=porCiudad.titulos 
      :datos=porCiudad.datos 
      :ancho=porCiudad.ancho 
      :alto=porCiudad.alto 
      :nombreDatos=porCiudad.nombreDatos />
    </div>
    <div class="rounded-box p-5 inline-flex">
      <Pie 
      :titulo=porEdad.titulo 
      :titulos=porEdad.titulos 
      :datos=porEdad.datos 
      :ancho=porEdad.ancho 
      :alto=porEdad.alto 
      :nombreDatos=porEdad.nombreDatos />
    </div>
    <div class="rounded-box p-5 inline-flex">
      <Pie 
      :titulo=porRol.titulo 
      :titulos=porRol.titulos 
      :datos=porRol.datos 
      :ancho=porRol.ancho 
      :alto=porRol.alto 
      :nombreDatos=porRol.nombreDatos />
    </div>  
    <div class="rounded-box p-5 inline-flex">
      <Pie 
      :titulo=porEtnia.titulo 
      :titulos=porEtnia.titulos 
      :datos=porEtnia.datos 
      :ancho=porEtnia.ancho 
      :alto=porEtnia.alto 
      :nombreDatos=porEtnia.nombreDatos />
    </div>
    <div class="rounded-box p-5 inline-flex">
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
    </div>
    <div class="rounded-box p-5 inline-flex">
      <Sentimiento
          :titulo=porSentimiento.titulo 
          :subTitulo=porSentimiento.subTitulo 
          :titulos=porSentimiento.titulos  
          :datos=porSentimiento.datos 
          :ancho=porSentimiento.ancho 
          :alto=porSentimiento.alto 
          :nombreDatos=porSentimiento.nombreDatos
          :centros=porSentimiento.centros 
      />
    </div>
    <div class="rounded-box p-5 inline-flex">
      <StackedHorizontalBar 
        :ancho=porCiudadSexo.ancho 
        :alto=porCiudadSexo.alto 
        :titulo=porCiudadSexo.titulo 
        :titulos=porCiudadSexo.titulos 
        :datos1=porCiudadSexo.datos1 
        :nombreDatos1=porCiudadSexo.nombreDatos1           
        :datos2=porCiudadSexo.datos2 
        :nombreDatos2=porCiudadSexo.nombreDatos2
      />
    </div>
  </div>
</template>