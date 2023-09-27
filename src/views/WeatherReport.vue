<script setup>
import DetailsView from "../components/DetailsView.vue";
</script>

<template>
   <div>
        <Suspense>
            <DetailsView/>

            <template #fallback>
                <p>Loading...</p>
            </template>
        </Suspense>
    </div>
</template>
