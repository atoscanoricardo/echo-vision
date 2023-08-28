<template>
    <div>
        <div tabindex="0" ref="verFiltros" class="collapse collapse-arrow border border-primary bg-secundary rounded-box">
            <input type="checkbox" v-model="showFilters" />
            <div class="collapse-title text-xl font-medium">
                Ver filtros
            </div>
            <div class="collapse-content">
                <div class="form-control">
                    <div class="filters flex flex-col w-full lg:flex-row">
                        <div class="filter grid flex-grow card bg-base-300 rounded-box">
                            <label>Sentimiento:</label>
                            <div class="options">
                                <label class="label cursor-pointer">
                                    Negativo
                                    <input type="checkbox" checked="false" class="checkbox checkbox-secondary" value="Negativo" v-model="filters.sentimiento"></label>
                                <label class="label cursor-pointer">
                                    Neutro
                                    <input type="checkbox" checked="false" class="checkbox checkbox-secondary" value="Neutro" v-model="filters.sentimiento"></label>
                                <label class="label cursor-pointer">
                                    Positivo
                                    <input type="checkbox" checked="false" class="checkbox checkbox-secondary" value="Positivo" v-model="filters.sentimiento"></label>
                            </div>
                        </div>
                        <div class="divider lg:divider-horizontal">y</div>
                        <div class="filter grid flex-grow card bg-base-300 rounded-box">
                            <label>Sexo:</label>
                            <div class="options">
                                <label class="label cursor-pointer">
                                    Mujer
                                    <input type="checkbox" checked="false" class="checkbox checkbox-secondary" value="Mujer" v-model="filters.sexo"></label>
                                <label class="label cursor-pointer">
                                    Hombre
                                    <input type="checkbox" checked="false" class="checkbox checkbox-secondary" value="Hombre" v-model="filters.sexo"></label>
                                <label class="label cursor-pointer">
                                    Otro
                                    <input type="checkbox" checked="false" class="checkbox checkbox-secondary" value="Otro" v-model="filters.sexo"></label>
                            </div>
                        </div>
                        <div class="divider lg:divider-horizontal">y</div>
                        <div class="filter grid flex-grow card bg-base-300 rounded-box">
                            <label>Ciudad:</label>
                            <div class="options">
                                <label class="label cursor-pointer">
                                    Cali
                                    <input type="checkbox" checked="false" class="checkbox checkbox-secondary" value="Cali" v-model="filters.ciudad"></label>
                                <label class="label cursor-pointer">
                                    Buenaventura
                                    <input type="checkbox" checked="false" class="checkbox checkbox-secondary" value="Buenaventura" v-model="filters.ciudad"></label>
                                <label class="label cursor-pointer">
                                    Quibdó
                                    <input type="checkbox" checked="false" class="checkbox checkbox-secondary" value="Quibdó" v-model="filters.ciudad"></label>
                            </div>
                        </div>
                        <div class="divider lg:divider-horizontal">y</div>
                        <div class="filter grid flex-grow card bg-base-300 rounded-box">
                            <label>Edad:</label>
                            <div class="options">
                                <label class="label cursor-pointer">
                                    14-18
                                    <input type="checkbox" checked="false" class="checkbox checkbox-secondary" value="14-18" v-model="filters.edad"></label>
                                <label class="label cursor-pointer">
                                    18-25
                                    <input type="checkbox" checked="false" class="checkbox checkbox-secondary" value="18-25" v-model="filters.edad"></label>
                                <label class="label cursor-pointer">
                                    26-35
                                    <input type="checkbox" checked="false" class="checkbox checkbox-secondary" value="26-35" v-model="filters.edad"></label>
                                <label class="label cursor-pointer">
                                    36-45
                                    <input type="checkbox" checked="false" class="checkbox checkbox-secondary" value="36-45" v-model="filters.edad"></label>
                                <label class="label cursor-pointer">
                                    56-65
                                    <input type="checkbox" checked="false" class="checkbox checkbox-secondary" value="56-65" v-model="filters.edad"></label>
                                <label class="label cursor-pointer">
                                    66-75
                                    <input type="checkbox" checked="false" class="checkbox checkbox-secondary" value="66-75" v-model="filters.edad"></label>
                            </div>
                        </div>
                        <div class="divider lg:divider-horizontal">y</div>
                        <div class="filter grid flex-grow card bg-base-300 rounded-box">
                            <label>Rasgo:</label>
                            <div class="options">
                                <label class="label cursor-pointer">
                                    Indígena
                                    <input type="checkbox" checked="false" class="checkbox checkbox-secondary" value="Indígena" v-model="filters.rasgo"></label>
                                <label class="label cursor-pointer">
                                    Gitano
                                    <input type="checkbox" checked="false" class="checkbox checkbox-secondary" value="Gitano" v-model="filters.rasgo"></label>
                                <label class="label cursor-pointer">
                                    Negro
                                    <input type="checkbox" checked="false" class="checkbox checkbox-secondary" value="Negro" v-model="filters.rasgo"></label>
                                <label class="label cursor-pointer">
                                    Afrocolombiano
                                    <input type="checkbox" checked="false" class="checkbox checkbox-secondary" value="Afrocolombiano" v-model="filters.rasgo"></label>
                                <label class="label cursor-pointer">
                                    Raizal
                                    <input type="checkbox" checked="false" class="checkbox checkbox-secondary" value="Raizal" v-model="filters.rasgo"></label>
                                <label class="label cursor-pointer">
                                    Palenquero
                                    <input type="checkbox" checked="false" class="checkbox checkbox-secondary" value="Palenquero" v-model="filters.rasgo"></label>
                                <label class="label cursor-pointer">
                                    Mestizo
                                    <input type="checkbox" checked="false" class="checkbox checkbox-secondary" value="Mestizo" v-model="filters.rasgo"></label>
                                <label class="label cursor-pointer">
                                    Ningún grupo étnico
                                    <input type="checkbox" checked="false" class="checkbox checkbox-secondary" value="Ningún grupo étnico" v-model="filters.rasgo"></label>
                            </div>
                        </div>
                        <div class="divider lg:divider-horizontal">y</div>
                        <div class="filter grid flex-grow card bg-base-300 rounded-box">
                            <label>Rol:</label>
                            <div class="options">
                                <label class="label cursor-pointer">
                                    Jovenes
                                    <input type="checkbox" checked="false" class="checkbox checkbox-secondary" value="Soy un Joven / líder juvenil" v-model="filters.rol"></label>
                                <label class="label cursor-pointer ">
                                    Sociedad civil
                                    <input type="checkbox" checked="false" class="checkbox checkbox-secondary" value="Hago parte de una organización de la sociedad civil" v-model="filters.rol"></label>
                                <label class="label cursor-pointer">
                                    Empresaria(o)
                                    <input type="checkbox" checked="false" class="checkbox checkbox-secondary" value="Soy Empresaria / Empresario" v-model="filters.rol"></label>
                                <label class="label cursor-pointer">
                                    Trabajadores
                                    <input type="checkbox" checked="false" class="checkbox checkbox-secondary" value="Hago parte de una organización de trabajadores" v-model="filters.rol"></label>
                                <label class="label cursor-pointer">
                                    Empleadores
                                    <input type="checkbox" checked="false" class="checkbox checkbox-secondary" value="Hago parte de una organización de empleadores" v-model="filters.rol"></label>
                                <label class="label cursor-pointer">
                                    Academia
                                    <input type="checkbox" checked="false" class="checkbox checkbox-secondary" value="Hago parte de la academia" v-model="filters.rol"></label>
                                <label class="label cursor-pointer">
                                    Comunicación
                                    <input type="checkbox" checked="false" class="checkbox checkbox-secondary" value="Hago parte de un medio de comunicación" v-model="filters.rol"></label>
                                <label class="label cursor-pointer">
                                    Instituciones
                                    <input type="checkbox" checked="false" class="checkbox checkbox-secondary" value="Hago parte de una institución municipal / departamental / nacional" v-model="filters.rol"></label>
                            </div>
                        </div>
                    </div>
                    <button @click="applyFilters" class="btn btn-success mt-4">Aplicar filtros</button>
                </div>
            </div>
        </div>
    </div>
    

</template>
<script>
export default {
    data() {
        return {
            filters: {
                sentimiento: [],
                sexo: [],
                ciudad: [],
                edad: [],
                rasgo: [],
                rol: []
            },
            showFilters: false
        }
    },
    methods: {
        applyFilters() {
            // Aquí se enviarían los filtros componente contenedor en formato JSON
            this.$emit('filter-update', this.filters);
            
            
            // se debe colapsar el div verFiltros
            this.showFilters = false;

            console.log(this.filters);
        }
    }
};
</script>