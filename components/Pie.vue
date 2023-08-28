<template>
    <div class="card bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
            <div ref="chart" :style="'width:' + ancho + 'px; height:' + alto + 'px;'" class="rounded-xl"></div>
        </figure>
    </div>
</template>

<script>
import * as echarts from 'echarts';

let myChart = null;

export default {
    name: 'Pie',
    props: {
        titulo: String,
        subTitulo: String,
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
                text: this.titulo,
                subtext: this.subTitulo,
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
                trigger: 'item'
            },
            legend: {
                orient: 'horizontal',
                bottom: 10
            },
            series: [
                {
                    name: this.nombreDatos,
                    type: 'pie',
                    radius: '50%',
                    data: this.datos,
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        });
    }
}
</script>