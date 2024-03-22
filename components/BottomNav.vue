<template>


    <div class="fixed bottom-0  right-0 me-3 mb-3">  
    <UButton @click="shareURL"  data-value="wartosc" :data-company="data[0].acf.spolka" icon="i-heroicons-share" :ui="{ rounded: 'rounded-full' }" size="xl"   class="bg-reMain"  variant="solid"  />
    </div>
</template>

<script setup>
const { data } = defineProps(['data'])
</script>



<script>

export default {

name: 'copyToClipboard',
  data() {
    return {
    };
  },
  mounted() {

  },
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