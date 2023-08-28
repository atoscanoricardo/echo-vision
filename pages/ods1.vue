<template>
    <div>
        <div class="card bg-base-100 shadow-xl">
            <div class="card-body items-center text-center">
                <Filtros @filter-update="actualizarFiltros"></Filtros>
                <figure class="px-10 pt-10">
                    <div ref="chart" style="width: 800px; height: 600px;" class="rounded-xl"></div>
                </figure>                             
                <div class="alert alert-info shadow-lg">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span>{{ filtros }}</span>
                    </div>
                </div>
            </div>
        </div>
        <figure class="px-10 pt-10">
            <Histograma></Histograma>
        </figure> 
    </div>
</template>

<script>
import * as echarts from 'echarts';
import jsonData from '~/static/respuestas1.json'

let myChart = null;

export default {
    name: 'Grafica',
    data() {
        return {
            filtros: [],
            jsonData : jsonData,
            // Reemplazar la importación de customColors con la nueva paleta de colores
            customColors: {
                backgroundColor: '#000',
                colorPalette: this.newColorPalette
            },
            // Colores de los ODS
            odsColors: {
                ODS_1: '#E5243B',
                ODS_2: '#DDA63A',
                ODS_3: '#4C9F38',
                ODS_4: '#C5192D',
                ODS_5: '#FF3A21',
                ODS_6: '#26BDE2',
                ODS_7: '#FCC30B',
                ODS_8: '#A21942',
                ODS_9: '#FD6925',
                ODS_10: '#DD1367',
                ODS_11: '#FD9D24',
                ODS_12: '#BF8B2E',
                ODS_13: '#3F7E44',
                ODS_14: '#0A97D9',
                ODS_15: '#56C02B',
                ODS_16: '#00689D',
                ODS_17: '#19486A'
            }
        }
    },
    methods: {
        actualizarFiltros(filtros) {
            this.filtros = filtros;
            this.$router.push('/ods')
        }
    },
    computed: {
        // Crear la nueva paleta de colores cuando cambia el valor de jsonData
        newColorPalette () {
            // Crear una lista de tuplas (nombre ODS, valor)
            const odsValues = this.jsonData.map((entry) => [entry.shortName, entry.value]);
            // Ordenar la lista en función de los valores en orden descendente
            const sortedOdsValues = odsValues.sort((a, b) => b[1] - a[1]);
            // Crear una nueva paleta de colores utilizando los ODS ordenados
            return sortedOdsValues.map(([odsName, _]) => this.odsColors[odsName]);
        },
        newOptions () {
            return {
                backgroundColor: this.customColors.backgroundColor,
                color: this.customColors.colorPalette,
                tooltip: {
                    formatter: function (info) {
                        var value = info.value;
                        var treePathInfo = info.treePathInfo;
                        var treePath = [];
                        for (var i = 1; i < treePathInfo.length; i++) {
                            treePath.push(treePathInfo[i].name);
                        }
                        return [
                            '<div class="tooltip-title">' +
                            echarts.format.encodeHTML(treePath.join('/')) +
                            '</div>',
                            'Cantidad de Opiniones: ' + echarts.format.addCommas(value) + ' '
                        ].join('');
                    }
                },
                series: [
                    {
                        name: 'Objetivos de Desarrollo Sostenible',
                        type: 'treemap',
                        visibleMin: 300,
                        label: {
                            show: true,
                            formatter: '{b}'
                        },
                        upperLabel: {
                            show: true,
                            height: 30,
                            color: '#fff'
                        },
                        itemStyle: {
                            borderColor: '#fff'
                        },
                        levels: [
                            {
                                itemStyle: {
                                    borderColor: '#000',
                                    borderWidth: 5,
                                    gapWidth: 3
                                }
                            },
                            {
                                colorSaturation: [0.35, 0.5],
                                itemStyle: {
                                    borderWidth: 3,
                                    gapWidth: 1,
                                    borderColorSaturation: 0.2
                                }
                            },
                            {
                                colorSaturation: [0.35, 0.5],
                                itemStyle: {
                                    borderWidth: 3,
                                    gapWidth: 1,
                                    borderColorSaturation: 0.6
                                }
                            }
                        ],
                        data: this.jsonData
                    }
                ]
            }
        }
    },
    mounted() {
        // Crear la instancia de ECharts y pasar el ID del contenedor HTML
        myChart = echarts.init(this.$refs.chart);

        // Pasar las opciones de configuración para el gráfico
        myChart.setOption(this.newOptions);
    }
}
</script>

<style scoped>
.chart {
    height: 100vh;
}
</style>