<template>
    <div class="card bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
            <div ref="chart" class="rounded-xl" :style="'width:' + ancho + 'px; height:' + alto + 'px;'"></div>
        </figure>
    </div>
</template>

<script>
import * as echarts from 'echarts';

var myChart = null;


export default {
    name: 'Histograma',
    props: {
        titulo: String,
        titulos: Array,
        nombreDatos: String,
        datos: Array,
        ancho: Number,
        alto: Number
    },
    mounted() {

        // Crear la instancia de ECharts y pasar el ID del contenedor HTML
        this.myChart = echarts.init(this.$refs.chart);

        // Pasar las opciones de configuración para el gráfico
        this.myChart.setOption({
            title: {
                text: this.titulo
            },
            toolbox: {
                show: true,
                feature: {
                    dataView: { readOnly: false },
                    saveAsImage: {}
                }
            },
            tooltip: {},
            xAxis: {
                data: this.titulos
            },
            yAxis: {},
            series: [
                {
                    name: this.nombreDatos,
                    type: 'bar',
                    data: this.datos
                }
            ]
        });
    }
}
</script>