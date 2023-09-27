<template>
    <div class="relative min-h-screen flex justify-center text-[0.875rem] md:text-[1rem]">
        <RouterLink :to="{name: 'home'}">
            <i class="fa-solid fa-arrow-left fa-lg absolute top-[3%] md:top-[5%] left-[5%] md:left-[20%] cursor-pointer"></i>
        </RouterLink>

        <div class="w-[90%] md:w-[37.5rem] pt-[1.5rem] pb-[3rem] flex flex-col items-center">
            <h1 class="text-[1.875rem] md:text-[2.25rem] font-semibold">Weather Report</h1>

            <div class="text-center mt-[1.5rem] md:mt-[3rem]">
                <p>Date</p>
                <p class="font-medium">Port Harcourt, Rivers</p>
            </div>

            <h1 class="font-semibold text-[4.375rem] md:text-[5rem] mt-[1.25rem]">30<sup>o</sup>C</h1>

            <div class="text-center">
                <p class="font-semibold text-accentColor mb-1">Sunny</p>
                <div class="h-[2.8125rem] w-[2.8125rem] md:h-[3.4375rem] md:w-[3.4375rem] rounded-full bg-accentColor drop-shadow-[2px_2px_10px_rgba(0,0,0,0.2)]"></div>
            </div>

            <div class="flex items-center gap-[1.25rem] mt-[1.5rem] md:mt-[1.8rem]">
                <span>Today’s High: 34<sup>o</sup>C</span>
                <span>Today’s Low: 26<sup>o</sup>C</span>
            </div>

            <button @click="showDetails=!showDetails" class="text-white bg-black rounded-[0.5rem] h-[2.5rem] w-[7.5rem] mt-[0.94rem] text-[0.785rem] md:text-[0.875rem]">{{showDetails ? "Hide" : "View more"}}</button>

            <Transition name="details">
                <ul v-if="showDetails" class="flex justify-between flex-wrap px-[1.5rem] h-[10rem] md:h-[4rem] w-full rounded-[0.5rem] bg-[rgba(201,201,201,0.45)] shadow-[0px_2px_15px_0px_rgba(0,0,0,0.10)] mt-[2.1rem]">
                    <li v-for="(item, index) in details" :key="index" class="flex flex-col items-center justify-center">
                        <p class="text-[1rem]">{{ item.title }}</p>
                        <h3 class="text-[1.125rem] font-semibold">{{ item.value }} <sup>o</sup>C</h3>
                    </li>
                </ul>
            </Transition>

            <div class="flex flex-col md:flex-row justify-between w-full mt-[2.1rem]">
                <div class="flex flex-col gap-[0.8rem] md:gap-[1rem] w-full md:w-[48%] mb-[1.5rem] md:mb-0 rounded-[0.5rem] bg-[rgba(201,201,201,0.45)] shadow-[0px_2px_15px_0px_rgba(0,0,0,0.10)] p-[1rem]">
                    <h4 class="self-center text-[1rem] md:text-[1.25rem] font-medium">Forcast</h4>

                    <div class="flex flex-col gap-[0.37rem]">
                        <div class="flex justify-between">
                            <p>Monday</p>
                            <span>H: 34<sup>o</sup>C L:28<sup>o</sup>C</span>
                        </div>
                        <div class="flex justify-between">
                            <p>Tuesday</p>
                            <span>H: 34<sup>o</sup>C L:28<sup>o</sup>C</span>
                        </div>
                        <div class="flex justify-between">
                            <p>Wednesday</p>
                            <span>H: 34<sup>o</sup>C L:28<sup>o</sup>C</span>
                        </div>
                        <div class="flex justify-between">
                            <p>Wednesday</p>
                            <span>H: 34<sup>o</sup>C L:28<sup>o</sup>C</span>
                        </div>
                        <div class="flex justify-between">
                            <p>Wednesday</p>
                            <span>H: 34<sup>o</sup>C L:28<sup>o</sup>C</span>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col w-full md:w-[48%] rounded-[0.5rem] bg-[rgba(201,201,201,0.45)] shadow-[0px_2px_15px_0px_rgba(0,0,0,0.10)] p-[1rem]">
                    <h4 class="self-center text-[1rem] md:text-[1.25rem] font-medium">Past 5 Days</h4>

                    <div class="flex flex-col gap-[0.37rem]">
                        <div class="flex justify-between">
                            <p>Monday</p>
                            <span>H: 34<sup>o</sup>C L:28<sup>o</sup>C</span>
                        </div>
                        <div class="flex justify-between">
                            <p>Tuesday</p>
                            <span>H: 34<sup>o</sup>C L:28<sup>o</sup>C</span>
                        </div>
                        <div class="flex justify-between">
                            <p>Wednesday</p>
                            <span>H: 34<sup>o</sup>C L:28<sup>o</sup>C</span>
                        </div>
                        <div class="flex justify-between">
                            <p>Wednesday</p>
                            <span>H: 34<sup>o</sup>C L:28<sup>o</sup>C</span>
                        </div>
                        <div class="flex justify-between">
                            <p>Wednesday</p>
                            <span>H: 34<sup>o</sup>C L:28<sup>o</sup>C</span>
                        </div>
                        <div class="flex justify-between">
                            <p>Wednesday</p>
                            <span>H: 34<sup>o</sup>C L:28<sup>o</sup>C</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const route = useRoute();
import { ref } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { getWeatherReport } from "../api/apiRequests";
import dayjs from "dayjs"
const showDetails = ref(false)

const details = [
    {
        title: "Wind Speed",
        value: "45",
    },
    {
        title: "Humidity",
        value: "45",
    },
    {
        title: "Pressure",
        value: "45",
    },
    {
        title: "Sunrise/Sunset Time",
        value: "45",
    }
]

</script>

<style scoped>
.details-enter-active {
  transition: all 0.3s ease-out;
}

.details-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.details-enter-from,
.details-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
