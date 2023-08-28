<template>
    <div class="drawer-side">
        <label for="my-drawer" class="drawer-overlay"></label>
        <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <li>
                <a class="btn btn-ghost normal-case text-xl">
                    <NuxtLink to="/">
                        <img src="@/static/Echo.ODS.svg" alt="logo echo" class="max-w-xs mb-8" height="36" width="100" />
                    </NuxtLink>
                </a>
            </li>
            <li>
                <NuxtLink to=""></NuxtLink>
            </li>
            <li>
                <NuxtLink to="histograma">Histograma</NuxtLink>
            </li>
            <li>
                <NuxtLink to="pie">Pie</NuxtLink>
            </li> 
            <li>
                <NuxtLink to="stackedhorizontalbar">Stacked Horizontal Bar</NuxtLink>
            </li>             
            <li>
                <NuxtLink to="nestedpies">Nested Pies</NuxtLink>
            </li>            
            <li>
                <NuxtLink to="nightingalechart">Nightingale Chart</NuxtLink>
            </li>     
            <li>
                <NuxtLink to="stackedbarcharonpolar">Stacked Bar Char On Polar</NuxtLink>
            </li>  
            <li>
                <NuxtLink to="sentimiento">Sentimiento</NuxtLink>
            </li>           
            <li>
                <NuxtLink to="ods">ODS</NuxtLink>
            </li>               
            <li>
                <NuxtLink to="dashboard">Dashboard</NuxtLink>
            </li>
        </ul>
    </div>
</template>