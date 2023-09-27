<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getAddress, getWeatherReport, getCityWeather } from "../api/apiRequests"
import debounce from 'lodash/debounce';
import logo from "../assets/images/logo.webp"

const router = useRouter()
const search = ref('')
const locations = ref(null)
const prevSearch = ref(null)

const getCities = async () => {
  if (localStorage.getItem("locations")) {
      const savedLocations = JSON.parse(
            localStorage.getItem("locations")
        );

      const requests = [];
      savedLocations.forEach((city) => {
            requests.push(getCityWeather(city.geometry.coordinates[1], city.geometry.coordinates[0]));
        });
      
      await new Promise((res) => setTimeout(res, 1000))

      const weatherData = await Promise.all(requests);
      prevSearch.value = weatherData
  } else {
    prevSearch.value = null
  }
};

getCities();

const debouncedSearch = debounce(async () => {
  if (search.value.length >= 2) {
    try {
      const data = await getAddress(search.value);

      locations.value = data.features;
    } catch (e) {
      console.error(e);
    }
  } else {
    locations.value = null;
  }
}, 500);

const viewDetails = async (item) => {
  const savedLocations = localStorage.getItem('locations') ? JSON.parse(localStorage.getItem('locations')) : null;
  const alreadySaved = savedLocations.length ? savedLocations.find((loc) => loc.id === item.id) : null;

  if(!alreadySaved) {
    const newReports = [item, ...savedLocations];
    localStorage.setItem('locations', JSON.stringify(newReports))
  }

  router.push({
    name: 'report',
    params: {
      lat: item.geometry.coordinates[1], 
      lon: item.geometry.coordinates[0],
    },
  })
}
</script>

<template>
  <main class="h-[calc(100vh-4rem)] md:h-[calc(100vh-5.6rem)] bg-hero-image bg-cover">
    <div class="relative h-full w-full bg-[rgba(0,0,0,0.65)] backdrop-blur-[5px] flex flex-col items-center gap-[2rem] px-[25px] md:px-0">
      <img class="absolute top-[20px] left-[20px] md:left-[30px] h-[2.5rem] md:h-[3rem]" :src="logo" alt="logo"/>

      <h1 class="text-white text-[2.125rem] md:text-[3rem] font-semibold mt-[3rem]">Weather App</h1>

      <div class="relative w-full md:w-[33rem] h-[65vh] flex flex-col gap-[1.56rem] md:gap-[2.5rem] rounded-[2rem] md:rounded-[2.5rem] bg-[rgba(255,255,255,0.08)] backdrop-blur-[20px] p-[1.5rem] md:p-[2rem]">
        <div class="h-[2.19rem] md:h-[3.125rem] w-full rounded-[3.125rem] bg-[rgba(255,255,255,0.50)] flex items-center justify-between px-[0.5rem] md:px-[0.94rem] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.15)] backdrop-blur-[2.5px]">
          <input class="h-[70%] w-[80%] outline-none border-0 text-[0.75rem] md:text-[1rem] text-black bg-transparent pl-[0.7rem] md:pl-[1rem] placeholder:text-black" v-model="search" type="text" @input="debouncedSearch" placeholder="Enter city name"/>
          <span class="h-[1.6rem] w-[1.6rem] md:h-[2.1875rem] md:w-[2.1875rem] rounded-full bg-accentColor flex items-center justify-center">
            <i class="fa-solid fa-magnifying-glass text-white text-[0.7rem] md:text-[1rem]"></i>
          </span>
        </div>

      <ul v-if="locations" class="z-[10] w-[88%] px-4 py-2 absolute top-[17%] left-[6%] rounded-[10px] bg-white">
        <li 
          v-for="item in locations" :key="item.id"
          @click="viewDetails(item)"
          class="py-2 cursor-pointer hover:text-accentColor text-[1rem]" 
          >
          {{  item.place_name }}
        </li>
      </ul>

      <Suspense>
          <div v-for="city in prevSearch" :key="city.id"  class="w-full h-[80%] flex flex-col gap-[1.5rem] md:gap-[1.8rem] overflow-y-auto">
            <div class="h-[5rem] md:h-[6.25rem] w-full rounded-[0.9375rem] transition bg-[rgba(255,255,255,0.50)] hover:bg-[rgba(255,255,255,0.65)] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.15)] backdrop-blur-[2.5px] py-[0.8rem] px-[1rem] md:px-[1.5rem] cursor-pointer">
              <div class="flex justify-between items-center">
                <h3 class="text-[1rem] md:text-[1.25rem] font-semibold">{{ city.name }}</h3>
                <h1 class="font-semibold text-[1.25rem] md:text-[1.875rem] text-white">30<sup>o</sup>C</h1>
              </div>

              <div class="flex justify-between items-center mt-[2px] md:mt-0">
                <p class="text-[0.75rem] md:text-[1rem]">{{ city.sys.country }}</p>
                <div class="text-[0.625rem] md:text-[0.75rem] flex items-center gap-2">
                  <span>High: {{ city.main.temp_max }}<sup>o</sup>C</span>
                  <span>Low: {{ city.main.temp_min }}<sup>o</sup>C</span>
                </div>
              </div>
            </div>
          </div>


          <template #fallback>
            <p>Loading...</p>
          </template>
        </Suspense>

      </div>
    </div>
  </main>
</template>
