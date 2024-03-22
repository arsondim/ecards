<template>

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
    },


};
</script>