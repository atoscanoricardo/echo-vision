<script setup>
  const filtros = useState(
    'filtros', 
    () => {
      return {
        ciudad: ['Buenaventura', 'Cali', 'Quibdó'],
        sentimiento: ['Negativo', 'Positivo', 'Neutro'],
        sexo: ['Femenino', 'Masculino'],
        edad: ['Adulto', 'Jóven'],
        rasgo: ['Indigena', 'Mestizo', 'Mulato', 'NARP', 'Ninguno'],
        rol: ['Academia',	'Institucional', 'Juventudes', 'Org. Trabajadores', 
               'Sector privado', 'Sociedad C.']
      }
    }
  )
  const histograma = useState('histograma', () => {
    return {
      titulo: 'ECharts Histograma',
      titulos: ['shirt', 'cardigan', 'chiffon', 'pants', 'heels', 'socks'],
      datos: [5, 20, 36, 10, 10, 20]
    }
  })
</script>
<template>
  <div class="drawer lg:drawer-open" data-theme="garden">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <label for="my-drawer" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
      <div class="flex flex-col min-h-screen">
        <Encabezado></Encabezado>
        <main class="flex-grow flex items-center justify-center">
          <NuxtPage />
        </main>
        <PieDePagina></PieDePagina>
      </div>
    </div>
    <MenuLateral />
  </div>
</template>

