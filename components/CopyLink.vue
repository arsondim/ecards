<template>

<button @click="shareURL">Share URL</button>

    <div class="flex gap-4 justify-between">
        <button class="text-xs text-gray-600 dark:text-gray-50 opacity-50 pt-3" @click="copyToClipboard"><UIcon name="i-heroicons-document-duplicate" /><span> Skopiuj URL</span></button>
        <NuxtLink class="text-xs text-gray-600 dark:text-gray-50 opacity-50 pt-3" :to="`https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=${data}`" target="_blank" rel="noopener"><UIcon name="i-heroicons-arrow-down-tray-16-solid" /><span> Pobierz QR</span></NuxtLink>
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
     currentUrl: '',
    };
  },
  mounted() {

  },
    methods: {
        copyToClipboard() {
            const textCopy = window.location.href;
            navigator.clipboard.writeText(textCopy)
            console.log(textCopy);
        },


        async shareURL() {
      if (navigator.share) {
        try {
          await navigator.share({
            title: 'Your title',
            text: 'Your description',
            url: window.location.href
          });
          console.log('URL shared successfully');
        } catch (error) {
          console.error('Error sharing URL:', error);
        }
      } else {
        console.log('Web Share API not supported');
        // Fallback for browsers that do not support Web Share API
        // You can implement your own sharing logic here
      }
    }



    },


};
</script>