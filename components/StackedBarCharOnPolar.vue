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
    name: 'StackedBarCharOnPolar',
    props: {
        titulo: String,
        titulos: Array,
        series: Array,
        categorias: Array,
        ancho: Number,
        alto: Number
    },
    mounted() {
        // Crear la instancia de ECharts y pasar el ID del contenedor HTML
        this.myChart = echarts.init(this.$refs.chart);

        // Pasar las opciones de configuración para el gráfico
        this.myChart.setOption({
            color: ['#EE6666', '#27AE60', '#5DADE2', '#91CC75'],
            angleAxis: {},
            radiusAxis: {
                type: 'category',
                data: this.titulos,
                z: 10
            },
            polar: {},
            series: [
                {
                    type: 'bar',
                    data: this.series[0].datos,
                    coordinateSystem: 'polar',
                    name: this.series[0].nombre,
                    stack: 'a',
                    emphasis: {
                        focus: 'series'
                    }
                },
                {
                    type: 'bar',
                    data: this.series[1].datos,
                    coordinateSystem: 'polar',
                    name: this.series[1].nombre,
                    stack: 'a',
                    emphasis: {
                        focus: 'series'
                    }
                },
                {
                    type: 'bar',
                    data: this.series[2].datos,
                    coordinateSystem: 'polar',
                    name: this.series[2].nombre,
                    stack: 'a',
                    emphasis: {
                        focus: 'series'
                    }
                },
                {
                    type: 'bar',
                    data: this.series[3].datos,
                    coordinateSystem: 'polar',
                    name: this.series[3].nombre,
                    stack: 'a',
                    emphasis: {
                        focus: 'series'
                    }
                }
            ],
            legend: {
                show: true,
                data: this.categorias
            }
        });
    }
}
</script>