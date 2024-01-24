<template>
    <nav class="md:mx-8 mb-3 px-6 py-2 z-10 sticky top-0 bg-white  dark:bg-slate-800 shadow rounded">
        <ul class="flex flex-wrap">
            <li class="m-3 lg:mx-5">
                <router-link dir="auto" :to="{ name: 'resume' }"
                    class="text-gray-800 dark:text-white text-medium hover:text-purple-600">
                    {{ $t('resume', { name: 'resume' }) }}
                </router-link>
            </li>
            <li class="m-3 lg:mx-5">

                <router-link dir="auto" :to="{ name: 'skills' }"
                    class="text-gray-800 dark:text-white text-medium hover:text-purple-600">
                    {{ $t('Skills', { name: 'Skills' }) }}
                </router-link>
            </li>
            <li class="m-3 lg:mx-5">
                <router-link dir="auto" :to="{ name: 'portfolio' }"
                    class="text-gray-800 dark:text-white text-medium hover:text-purple-600">
                    {{ $t('portfolio', { name: 'portfolio' }) }}
                </router-link>
            </li>
            <li class="m-3 lg:mx-5">
                <router-link dir="auto" :to="{ name: 'works' }"
                    class="text-gray-800 dark:text-white text-medium hover:text-purple-600">
                    {{ $t('work', { name: 'work' }) }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script setup>
</script>

<style></style>