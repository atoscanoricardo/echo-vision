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
    name: 'Sentimiento',
    props: {
        titulo: String,
        titulos: Array,
        nombreDatos: String,
        datos: Array,
        ancho: Number,
        alto: Number,
        radios: Array,
        centros: Array
    },
    mounted() {
        // Crear la instancia de ECharts y pasar el ID del contenedor HTML
        this.myChart = echarts.init(this.$refs.chart);

        // Pasar las opciones de configuración para el gráfico
        this.myChart.setOption({
            title: {
                text: this.titulo,
                left: 'center'
            },
            series: [
                {
                    type: 'gauge',
                    startAngle: 180,
                    endAngle: 0,
                    center: this.centros,
                    radius: '90%',
                    min: 0,
                    max: 1,
                    splitNumber: 8,
                    axisLine: {
                        lineStyle: {
                            width: 6,
                            color: [
                                [0.25, '#B03A2E'],
                                [0.5, '#5DADE2'],
                                [0.75, '#91CC75'],
                                [1, '#1E8449']
                            ]
                        }
                    },
                    pointer: {
                        icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
                        length: '12%',
                        width: 20,
                        offsetCenter: [0, '-60%'],
                        itemStyle: {
                            color: 'auto'
                        }
                    },
                    axisTick: {
                        length: 12,
                        lineStyle: {
                            color: 'auto',
                            width: 2
                        }
                    },
                    splitLine: {
                        length: 20,
                        lineStyle: {
                            color: 'auto',
                            width: 5
                        }
                    },
                    axisLabel: {
                        color: '#464646',
                        fontSize: 20,
                        distance: -60,
                        rotate: 'tangential',
                        formatter: function (value) {
                            if (value === 0.875) {
                                return 'Muy Positivo';
                            } else if (value === 0.625) {
                                return 'Positivo';
                            } else if (value === 0.375) {
                                return 'Neutro';
                            } else if (value === 0.125) {
                                return 'Negativo';
                            }
                            return '';
                        }
                    },
                    title: {
                        offsetCenter: [0, '-10%'],
                        fontSize: 20
                    },
                    detail: {
                        fontSize: 30,
                        offsetCenter: [0, '-35%'],
                        valueAnimation: true,
                        formatter: function (value) {
                            return Math.round(value * 100) + '';
                        },
                        color: 'inherit'
                    },
                    data: [
                        {
                            value: 0.68,
                            name: 'Sentimiento'
                        }
                    ]
                }
            ]
        });
    }
}
</script>