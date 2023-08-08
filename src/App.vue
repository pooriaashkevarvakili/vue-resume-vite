<script setup lang="ts">
///@ts-ignore
import ProfileCover from "./components/ProfileCover.vue"
///@ts-ignore

import Sidebar from "./components/Sidebar.vue"
///@ts-ignore

import Header from "./components/Header.vue"
///@ts-ignore

import Footer from "./components/Footer.vue"
</script>

<template>
  <main className="min-h-screen relative bg-gray-50 dark:bg-slate-800  pb-10">
    <ProfileCover />
    <div className="container px-4">
      <div className="flex flex-wrap px-4">
        <div className="w-full lg:w-1/3 ">
          <Sidebar />
        </div>
        <div className="w-full lg:w-2/3 ">
          <Header />
          <router-view />
        </div>
      </div>
    </div>
    <div class="mt-5">
      <Footer />
    </div>

  </main>
</template>

<style scoped></style>
