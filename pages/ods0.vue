<template>
    <div>
        <div class="card bg-base-100 shadow-xl">
            <div class="card-body items-center text-center">
                <Filtros @filter-update="actualizarFiltros"></Filtros>
                <figure class="px-10 pt-10">
                    <div ref="chart" style="width: 800px; height: 600px;" class="rounded-xl"></div>
                </figure>                             
            </div>
        </div>
    </div>
</template>

<script>
import * as echarts from 'echarts';

// import diskTree from '~/static/disk.tree.json'
import jsonData from '~/static/respuestas.json'

function createColorPalette(jsonData, odsColors) {
    // Crear una lista de tuplas (nombre ODS, valor)
    const odsValues = jsonData.map((entry) => [entry.name, entry.value]);
    // Ordenar la lista en función de los valores en orden descendente
    const sortedOdsValues = odsValues.sort((a, b) => b[1] - a[1]);
    // Crear una nueva paleta de colores utilizando los ODS ordenados
    const newColorPalette = sortedOdsValues.map(([odsName, _]) => odsColors[odsName]);
    return newColorPalette;
}
// Colores de los ODS
const odsColors = {
    "ODS_1": "#e5243b",
    "ODS_2": "#dd9933",
    "ODS_3": "#4c9f38",
    "ODS_4": "#c5192d",
    "ODS_5": "#ff3a21",
    "ODS_6": "#26bde2",
    "ODS_7": "#fcc30b",
    "ODS_8": "#a21942",
    "ODS_9": "#fd6925",
    "ODS_10": "#dd1367",
    "ODS_11": "#fd9d24",
    "ODS_12": "#bf8b2e",
    "ODS_13": "#3f7e44",
    "ODS_14": "#0a97d9",
    "ODS_15": "#56c02b",
    "ODS_16": "#00689d",
    "ODS_17": "#19486a"
}
// valores extraidos de las respuestas 
const valoresRespuestas = [
    {
        "value": 880,
        "name": "ODS_1",
    },
    {
        "value": 200,
        "name": "ODS_2",
    },
    {
        "value": 210,
        "name": "ODS_3",
    },
    {
        "value": 220,
        "name": "ODS_4",
    },
    {
        "value": 830,
        "name": "ODS_5",
    },
    {
        "value": 240,
        "name": "ODS_6",
    },
    {
        "value": 250,
        "name": "ODS_7",
    },
    {
        "value": 560,
        "name": "ODS_8",
    },
    {
        "value": 670,
        "name": "ODS_9",
    },
    {
        "value": 280,
        "name": "ODS_10",
    },
    {
        "value": 290,
        "name": "ODS_11",
    },
    {
        "value": 330,
        "name": "ODS_12",
    },
    {
        "value": 970,
        "name": "ODS_13",
    },
    {
        "value": 400,
        "name": "ODS_14",
    },
    {
        "value": 450,
        "name": "ODS_15",
    },
    {
        "value": 500,
        "name": "ODS_16",
    },
    {
        "value": 600,
        "name": "ODS_17",
    }
]
// Crear la nueva paleta de colores
const newColorPalette = createColorPalette(valoresRespuestas, odsColors);
console.log(newColorPalette);
// Reemplazar la importación de customColors con la nueva paleta de colores
const customColors = {
    backgroundColor: '#fff',
    colorPalette: newColorPalette
}

let myChart = null;

export default {
    name: 'Grafica',
    data() {
        return {
            filtros: [],
        }
    },
    methods: {
        actualizarFiltros(filtros) {
            this.filtros = filtros;
            console.log(filtros);
            this.$router.push('/ods2')
        }
    },
    mounted() {
        // Crear la instancia de ECharts y pasar el ID del contenedor HTML
        myChart = echarts.init(this.$refs.chart);

        // Pasar las opciones de configuración para el gráfico
        myChart.setOption({
            backgroundColor: customColors.backgroundColor,
            color: customColors.colorPalette,
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
                    data: jsonData
                }
            ]
        });
    }
}
</script>

<style scoped>
.chart {
    height: 100vh;
}
</style>