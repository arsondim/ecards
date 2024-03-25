<template>
    <button :title="data[0].acf.spolka" @click="shareURL" :data-company="data[0].acf.spolka" class="fixed bottom-0  right-0 me-3 mb-3 shadow-md  bg-reMain rounded-full p-4 flex" > <UIcon class="h-9 w-9 text-white" name="i-heroicons-share"/> </button>
</template>

<script setup>
const { data } = defineProps(['data']);
</script>

<script>
export default {
    methods: {
     async shareURL(event) { 
      if (navigator.share) {
        try {
          await navigator.share({
            url: window.location.href
          });
          console.log('URL shared successfully');
        } catch (error) {
          console.error('Error sharing URL:', error);
        }
      } else {
        console.log('Web Share API not supported');
      }
    }


    },


};
</script>