<template>
    <div class="card bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
            <div ref="chart" class="rounded-xl" :style="'width:' + ancho + 'px; height:' + alto + 'px;'"></div>
        </figure>
    </div>
</template>

<script>
import * as echarts from 'echarts';

let myChart = null;

export default {
    name: 'NightingaleChart',
    props: {
        titulo: String,
        titulos: Array,
        nombreDatos: String,
        datos: Array,
        ancho: Number,
        alto: Number,
        radios: Array
    },    
    mounted() {
        // Crear la instancia de ECharts y pasar el ID del contenedor HTML
        this.myChart = echarts.init(this.$refs.chart);

        // Pasar las opciones de configuración para el gráfico
        //color: ['#EE6666', '##5DADE2', '#91CC75', '##27AE60'],
        this.myChart.setOption({
            title: {
                text: this.titulo,
                left: 'center'
            },
            legend: {
                top: 'bottom'
            },
            tooltip: {
                trigger: 'item'
            },
            toolbox: {
                show: true,
                feature: {
                    dataView: { show: true, readOnly: false },
                    saveAsImage: { show: true }
                }
            },
            series: [
                {
                    name: this.nombreDatos,
                    type: 'pie',
                    radius: this.radios,
                    center: ['50%', '50%'],
                    roseType: 'area',
                    itemStyle: {
                        borderRadius: 8
                    },
                    data: this.datos
                }
            ]
        });
    }
}
</script>