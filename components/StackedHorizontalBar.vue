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
        nombreDatos1: String,
        datos1: Array,
        nombreDatos2: String,
        datos2: Array,
        ancho: Number,
        alto: Number
    },
    mounted() {

        // Crear la instancia de ECharts y pasar el ID del contenedor HTML
        this.myChart = echarts.init(this.$refs.chart);

        // Pasar las opciones de configuración para el gráfico
        this.myChart.setOption({
            title: {
                text: this.titulo,
                subtext: 'Primer corte',
                left: 'center'
            },
            toolbox: {
                show: true,
                feature: {
                    dataView: { readOnly: false },
                    saveAsImage: {}
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    // Use axis to trigger tooltip
                    type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
                }
            },
            legend: {
                orient: 'vertical',
                right: 10,
                top: 'center'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value'
            },
            yAxis: {
                type: 'category',
                data: this.titulos
            },
            series: [
                {
                    name: this.nombreDatos1,
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: this.datos1
                },
                {
                    name: this.nombreDatos2,
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: this.datos2
                }
            ]
        });
    }
}
</script>