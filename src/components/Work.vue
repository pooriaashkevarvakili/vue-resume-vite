<template>
    <div class="flex flex-wrap md:px-4 gap-6    2xl:ml-12 xl:ml-12 lg:ml-0">

        <div
            class="w-full md:-ml-0 2xl:-ml-12 lg:ml-2 xl:-ml-12 2xl:w-1/2 xl:w-1/2   sm:ml-10 5xl:-ml-0 xs:-ml-0   4xl:-ml-0 ">
            <div class="my-4 md:mx-4 sm:-ml-12 shadow p-6 rounded-md dark:bg-slate-800 bg-white group hover:shadow-md">
                <div class="relative mb-6 w-full h-48 bg-purple-200 rounded-md overflow-hidden">
                    <img src="../../public/maleksho-dashboard.png" alt="coverImage"
                        class="w-full h-full object-cover object-center" />
                    <div
                        class="absolute opacity-0 transition duration-200 bg-purple-100 bg-opacity-80 w-full flex items-center justify-center h-full left-0 top-0 group-hover:opacity-100 group-hover:visible">
                        <ul class="flex flex-wrap">
                            <li class="m-2">
                                <a href="https://maaleksho.ir/" target="_blank" rel="noreferrer"
                                    class="w-12 h-10 text-xl text-purple-600 flex items-center justify-center border-2 border-purple-600 rounded hover:text-white hover:bg-purple-600">
                                    <eye />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <h3 dir="auto" class="text-lg dark:text-white font-medium text-gray-800 mb-2">{{ $t('Maleksho', {
                    name:
                        'Maleksho'
                })
                }}
                </h3>
                <p dir="auto" class="text-gray-400 dark:text-white">{{ $t('twoMonth', { name: 'twoMonth' }) }}</p>

                <achieveMentsModalMaleksho />
            </div>
        </div>
        <div
            class="w-full md:-ml-0 2xl:-ml-8 lg:ml-2 xl:-ml-8 2xl:w-1/2 xl:w-1/2   sm:ml-10 5xl:-ml-0 xs:-ml-0   4xl:-ml-0 ">
            <div class="my-4 md:mx-4 sm:-ml-12 shadow p-6 rounded-md dark:bg-slate-800 bg-white group hover:shadow-md">
                <div class="relative mb-6 w-full h-48 bg-purple-200 rounded-md overflow-hidden">
                    <img src="../../public/radar.png" alt="coverImage" class="w-full h-full object-cover object-center" />
                    <div
                        class="absolute opacity-0 transition duration-200 bg-purple-100 bg-opacity-80 w-full flex items-center justify-center h-full left-0 top-0 group-hover:opacity-100 group-hover:visible">
                        <ul class="flex flex-wrap">
                            <li class="m-2">
                                <a href="https://radar361.com/" target="_blank" rel="noreferrer"
                                    class="w-12 h-10 text-xl text-purple-600 flex items-center justify-center border-2 border-purple-600 rounded hover:text-white hover:bg-purple-600">
                                    <eye />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <h3 dir="auto" class="text-lg dark:text-white font-medium text-gray-800 mb-2">{{ $t('radar361', {
                    name:
                        'radar361'
                })
                }}
                </h3>
                <p dir="auto" class="text-gray-400 dark:text-white">{{ $t('sixMonth', { name: 'sixMonth' }) }}</p>
                <ahievementsModalRadar361 />
            </div>
        </div>
        <div
            class="w-full md:-ml-0 2xl:-ml-12 lg:ml-2 xl:-ml-12 2xl:w-1/2 xl:w-1/2   sm:ml-10 5xl:-ml-0 xs:-ml-0   4xl:-ml-0 ">
            <div class="my-4 md:mx-4 sm:-ml-12 shadow p-6 rounded-md dark:bg-slate-800 bg-white group hover:shadow-md">
                <div class="relative mb-6 w-full h-48 bg-purple-200 rounded-md overflow-hidden">
                    <img src="../../public/freelancer.png" alt="coverImage"
                        class="w-full h-full object-cover object-center" />

                    <div
                        class="absolute opacity-0 transition duration-200 bg-purple-100 bg-opacity-80 w-full flex items-center justify-center h-full left-0 top-0 group-hover:opacity-100 group-hover:visible">
                        <ul class="flex flex-wrap">
                            <li class="m-2">
                                <a href="https://tehrantc.com/" target="_blank" rel="noreferrer"
                                    class="w-12 h-10 text-xl text-purple-600 flex items-center justify-center border-2 border-purple-600 rounded hover:text-white hover:bg-purple-600">
                                    <eye />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <h3 dir="auto" class="text-lg dark:text-white font-medium text-gray-800 mb-2">{{ $t('freelancer', {
                    name: 'freelancer'
                }) }}
                </h3>
                <p dir="auto" class="text-gray-400 dark:text-white">{{ $t('oneYear', { name: 'oneYear' }) }}</p>
                <achievementsModalTehranTandis />
            </div>
        </div>
        <div
            class="w-full md:-ml-0 2xl:-ml-8 lg:ml-2 xl:-ml-8 2xl:w-1/2 xl:w-1/2   sm:ml-10 5xl:-ml-0 xs:-ml-0   4xl:-ml-0 ">
            <div class="my-4 md:mx-4 sm:-ml-12 shadow p-6 rounded-md dark:bg-slate-800 bg-white group hover:shadow-md">
                <div class="relative mb-6 w-full h-48 bg-purple-200 rounded-md overflow-hidden">
                    <img src="../../public/avajang.jpg" alt="coverImage" class="w-full h-full object-cover object-center" />

                    <div
                        class="absolute opacity-0 transition duration-200 bg-purple-100 bg-opacity-80 w-full flex items-center justify-center h-full left-0 top-0 group-hover:opacity-100 group-hover:visible">
                        <ul class="flex flex-wrap">
                            <li class="m-2">
                                <a href="https://avajang.com/" target="_blank" rel="noreferrer"
                                    class="w-12 h-10 text-xl text-purple-600 flex items-center justify-center border-2 border-purple-600 rounded hover:text-white hover:bg-purple-600">
                                    <eye />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <h3 dir="auto" class="text-lg font-medium dark:text-white text-gray-800 mb-2">{{ $t('avajang', {
                    name:
                        'avajang'
                }) }}
                </h3>
                <p dir="auto" class="text-gray-400 dark:text-white">{{ $t('sevenmonth', { name: 'sevenmonth' }) }}</p>
                <achievementsModalAvajang />
            </div>
        </div>
        <div
            class="w-full md:-ml-0 2xl:-ml-12 lg:ml-2 xl:-ml-12 2xl:w-1/2 xl:w-1/2   sm:ml-10 5xl:-ml-0 xs:-ml-0   4xl:-ml-0 ">
            <div class="my-4 md:mx-4 sm:-ml-12 shadow p-6 rounded-md dark:bg-slate-800 bg-white group hover:shadow-md">
                <div class="relative mb-6 w-full h-48 bg-purple-200 rounded-md overflow-hidden">
                    <img src="../../public/hakupian.png" alt="coverImage"
                        class="w-full h-full object-cover object-center" />

                    <div
                        class="absolute opacity-0 transition duration-200 bg-purple-100 bg-opacity-80 w-full flex items-center justify-center h-full left-0 top-0 group-hover:opacity-100 group-hover:visible">
                        <ul class="flex flex-wrap">
                            <li class="m-2">
                                <a href="http://hakupian.com/" target="_blank" rel="noreferrer"
                                    class="w-12 h-10 text-xl text-purple-600 flex items-center justify-center border-2 border-purple-600 rounded hover:text-white hover:bg-purple-600">
                                    <eye />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <h3 dir="auto" class="text-lg font-medium dark:text-white text-gray-800 mb-2">{{ $t('hakupianPushak', {
                    name:
                        'hakupianPushak'
                }) }}
                </h3>
                <p dir="auto" class="text-gray-400 dark:text-white">{{ $t('fourteenMonth', { name: 'fourteenMonth' }) }}</p>
                <achievementsModalHakupian />
            </div>
        </div>
    </div>
</template>

<script setup>
import eye from "./eye.vue"
import achieveMentsModalMaleksho from "./achieveMentsModalMaleksho.vue";
// import achievementsModalvo2 from "./achievementsModalvo2.vue";
import ahievementsModalRadar361 from "./achievementsModalRadar361.vue"
import achievementsModalAvajang from './achievementsModalAvajang.vue';
import achievementsModalHakupian from './achievementsModalHakupian.vue';
import achievementsModalTehranTandis from "./achievementsModalTehranTandis.vue"
</script>

<style></style>