<script setup>
import { ref } from "vue";
import logo from "../assets/images/logo.webp"

const search = ref('')

const handleSearch = () => {
  console.log(search.value)
}

</script>

<template>
  <main class="h-[calc(100vh-4rem)] md:h-[calc(100vh-5.6rem)] bg-hero-image bg-cover">
    <div class="relative h-full w-full bg-[rgba(0,0,0,0.65)] backdrop-blur-[5px] flex flex-col items-center gap-[2rem] px-[25px] md:px-0">
      <img class="absolute top-[20px] left-[20px] md:left-[30px] h-[2.5rem] md:h-[3rem]" :src="logo" alt="logo"/>

      <h1 class="text-white text-[2.125rem] md:text-[3rem] font-semibold mt-[3rem]">Weather App</h1>

      <div class="w-full md:w-[33rem] h-[65vh] flex flex-col gap-[1.56rem] md:gap-[2.5rem] rounded-[2rem] md:rounded-[2.5rem] bg-[rgba(255,255,255,0.08)] backdrop-blur-[20px] p-[1.5rem] md:p-[2rem]">
        <div class="h-[2.19rem] md:h-[3.125rem] w-full rounded-[3.125rem] bg-[rgba(255,255,255,0.50)] flex items-center justify-between px-[0.5rem] md:px-[0.94rem] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.15)] backdrop-blur-[2.5px]">
          <input class="h-[70%] w-[80%] outline-none border-0 text-[0.75rem] md:text-[1rem] text-black bg-transparent pl-[0.7rem] md:pl-[1rem] placeholder:text-black" v-model="search" @input="handleSearch" type="text" placeholder="Enter an address or a city name"/>

          <span class="h-[1.6rem] w-[1.6rem] md:h-[2.1875rem] md:w-[2.1875rem] rounded-full bg-accentColor flex items-center justify-center">
            <i class="fa-solid fa-magnifying-glass text-white text-[0.7rem] md:text-[1rem]"></i>
          </span>
        </div>

        <div class="w-full h-[80%] flex flex-col gap-[1.5rem] md:gap-[1.8rem] overflow-y-auto">
          <div class="h-[5rem] md:h-[6.25rem] w-full rounded-[0.9375rem] transition bg-[rgba(255,255,255,0.50)] hover:bg-[rgba(255,255,255,0.65)] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.15)] backdrop-blur-[2.5px] py-[0.8rem] px-[1rem] md:px-[1.5rem] cursor-pointer">
            <div class="flex justify-between items-center">
              <h3 class="text-[1rem] md:text-[1.25rem] font-semibold">Port Harcourt</h3>
              <h1 class="font-semibold text-[1.25rem] md:text-[1.875rem] text-white">30<sup>o</sup>C</h1>
            </div>

            <div class="flex justify-between items-center mt-[2px] md:mt-0">
              <p class="text-[0.75rem] md:text-[1rem]">Rivers State</p>
              <div class="text-[0.625rem] md:text-[0.75rem] flex items-center gap-2">
                <span>High: 35<sup>o</sup>C</span>
                <span>Low: 25<sup>o</sup>C</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
