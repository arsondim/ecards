<template>



<img v-if="data[0].acf.spolka_code === 'REF'" class="logo  h-10 ms-auto text-end" src="~/assets/re_fuel_logo.svg" />
<img v-else-if="data[0].acf.spolka_code === 'REP'" class="logo max-w-32 ms-auto text-end" src="~/assets/re_poweric_logo.png" />
<img v-else-if="data[0].acf.spolka_code === 'RESW'" class="logo max-w-40 h-auto ms-auto text-end" src="~/assets/re_sw_logo.svg" />
<img v-else-if="data[0].acf.spolka_code === 'RES'" class="logo max-w-40 h-auto ms-auto text-end" src="~/assets/re_storage_logo.svg" />



<img v-else="" class="logo h-9 ms-auto text-end" src="~/assets/logo.svg" />



</template>

<script setup>
const { data } = defineProps(['data'])
</script>