<template>
    <div class="w-full md:-ml-10 sm:ml-6 xs:-ml-8 4xl:-ml-10 ">
        <div class="my-4 md:mx-4 sm:-ml-12 shadow p-6 rounded-md dark:bg-slate-800 bg-white group hover:shadow-md">
            <div class="relative mb-6 w-full h-48 bg-purple-200 rounded-md overflow-hidden">
                <img src="../../public/golinoosh.png" alt="coverImage" class="w-full h-full object-cover object-center" />
                <div
                    class="absolute opacity-0 transition duration-200 bg-purple-100 bg-opacity-80 w-full flex items-center justify-center h-full left-0 top-0 group-hover:opacity-100 group-hover:visible">
                    <ul class="flex flex-wrap">
                        <li class="m-2">
                            <a href="http://golinush.surge.sh//" target="_blank" rel="noreferrer"
                                class="w-12 h-10 text-xl text-purple-600 flex items-center justify-center border-2 border-purple-600 rounded hover:text-white hover:bg-purple-600">
                                <eye />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <h3 dir="auto" class="text-lg font-medium dark:text-white text-gray-800 mb-2">{{ $t('golinoosh', {
                name:
                    'golinoosh'
            })
            }}
            </h3>
            <div class="mt-2" dir="auto">
                <a href="https://github.com/pooriaashkevarvakili/golinoosh" target="_blank" rel="noreferrer"
                    class=" text-xl  dark:text-white    ">

                    {{ $t('sourcecode', {
                        name:
                            'sourcecode'
                    }) }}
                </a>
            </div>
        </div>
    </div>
    <div class="w-full md:-ml-10 sm:ml-6  4xl:-ml-10 ">
        <div class="my-4 md:mx-4 sm:-ml-12 shadow p-6 rounded-md dark:bg-slate-800 bg-white group hover:shadow-md">
            <div class="relative mb-6 w-full h-48 bg-purple-200 rounded-md overflow-hidden">
                <img src="../../public/ghanad.png" alt="coverImage" class="w-full h-full object-cover object-center" />
                <div
                    class="absolute opacity-0 transition duration-200 bg-purple-100 bg-opacity-80 w-full flex items-center justify-center h-full left-0 top-0 group-hover:opacity-100 group-hover:visible">
                    <ul class="flex flex-wrap">
                        <li class="m-2">
                            <a href="http://ghanadbashi.surge.sh/" target="_blank" rel="noreferrer"
                                class="w-12 h-10 text-xl text-purple-600 flex items-center justify-center border-2 border-purple-600 rounded hover:text-white hover:bg-purple-600">
                                <eye />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <h3 dir="auto" class="text-lg font-medium dark:text-white text-gray-800 mb-2">{{ $t('ghanadbashi', {
                name:
                    'ghanadbashi'
            }) }}
            </h3>
            <div class="mt-2" dir="auto">
                <a href="https://github.com/pooriaashkevarvakili/ghanad" target="_blank" rel="noreferrer"
                    class=" text-xl  dark:text-white    ">

                    {{ $t('sourcecode', {
                        name:
                            'sourcecode'
                    }) }}
                </a>
            </div>
        </div>
    </div>
    <div class="w-full md:-ml-10 sm:ml-6  4xl:-ml-10 ">
        <div class="my-4 md:mx-4 sm:-ml-12 shadow p-6 rounded-md dark:bg-slate-800 bg-white group hover:shadow-md">
            <div class="relative mb-6 w-full h-48 bg-purple-200 rounded-md overflow-hidden">
                <img src="../../public/pooriavakili.png" alt="coverImage"
                    class="w-full h-full object-cover object-center" />
                <div
                    class="absolute opacity-0 transition duration-200 bg-purple-100 bg-opacity-80 w-full flex items-center justify-center h-full left-0 top-0 group-hover:opacity-100 group-hover:visible">
                    <ul class="flex flex-wrap">
                        <li class="m-2">
                            <a href="https://pooriavakili.ir/" target="_blank" rel="noreferrer"
                                class="w-12 h-10 text-xl text-purple-600 flex items-center justify-center border-2 border-purple-600 rounded hover:text-white hover:bg-purple-600">
                                <eye />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <h3 dir="auto" class="text-lg font-medium dark:text-white text-gray-800 mb-2">{{ $t('pooriavakili', {
                name:
                    'pooriavakili'
            }) }}
            </h3>
            <div class="mt-2" dir="auto">
                <a href="https://github.com/pooriaashkevarvakili/resumeportfolionuxt" target="_blank" rel="noreferrer"
                    class=" text-xl  dark:text-white    ">

                    {{ $t('sourcecode', {
                        name:
                            'sourcecode'
                    }) }}
                </a>
            </div>
        </div>
    </div>
</template>
<script setup>
import eye from "./eye.vue"

</script>

<style></style>