<template>
    <div class="flex flex-wrap md:px-4 gap-2   2xl:ml-12 xl:ml-12 lg:ml-0 ">
        <div class="w-full 2xl:-ml-12 xl:-ml-12 2xl:w-1/2 xl:w-1/2 4xl:ml-12 md:-ml-0 sm:ml-6  5xl:ml-12  xs:ml-0">
            <div
                class="my-4 md:mx-4 5xl:-ml-12 sm:-ml-6 shadow p-6 rounded-md dark:bg-slate-800 bg-white group hover:shadow-md">
                <div class="relative  mb-6 w-full h-48 dark:bg-black  bg-purple-200 rounded-md overflow-hidden">
                    <img src="../../public/pdf.png" download="resumefrontenddeveloper" alt="coverImage"
                        class="w-full h-full object-cover object-center" />
                    <div
                        class="absolute dark:bg-green-400  transition duration-200  bg-purple-100 bg-opacity-80 w-full flex items-center justify-center h-full left-0 top-0  ">
                        <ul class="flex flex-wrap ">
                            <li class="m-2 ">
                                <a href="resumeenglish.pdf" target="_blank" download rel="noreferrer"
                                    class=" text-xl   text-white flex items-center justify-center    ">
                                    <div class="text-justify">

                                        <h1 class="text-amber-800 dark:text-white">
                                            {{ $t('openLink', {
                                                name:
                                                    'openLink'
                                            }) }}
                                        </h1>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
        <div class="w-full 2xl:w-1/2 4xl:ml-12 xl:w-1/2 md:-ml-0 sm:ml-6  5xl:ml-12 xs:ml-0 ">
            <div
                class="my-4 md:mx-4 5xl:-ml-12 sm:-ml-6 shadow p-6 rounded-md dark:bg-slate-800 bg-white group hover:shadow-md">
                <div class="relative  mb-6 w-full h-48 dark:bg-black  bg-purple-200 rounded-md overflow-hidden">
                    <img src="../../public/pdf.png" download="resumefrontenddeveloper" alt="coverImage"
                        class="w-full h-full object-cover object-center" />
                    <div
                        class="absolute dark:bg-green-400  transition duration-200  bg-purple-100 bg-opacity-80 w-full flex items-center justify-center h-full left-0 top-0  ">
                        <ul class="flex flex-wrap ">
                            <li class="m-2 ">
                                <a href="resumeenglish.pdf" target="_blank" download rel="noreferrer"
                                    class=" text-xl   text-white flex items-center justify-center    ">
                                    <div class="text-justify">

                                        <h1 class="text-amber-800 dark:text-white">
                                            {{ $t('openLinkEnlish', {
                                                name:
                                                    'openLinkEnlish'
                                            }) }}
                                        </h1>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>



    </div>
</template>

<script setup>


</script>

<style></style>