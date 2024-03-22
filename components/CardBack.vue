<template>


<div class="card min-h-[250px] flex flex-col justify-center row bg-white mx-3 mt-3 mb-4 border-b-4 border-reMain px-8 py-6 shadow-md rounded-lg">




    <h3 class="text-reMain text-md pt-0 font-bold">{{ data[0].acf.spolka }}</h3>
    <div class="data text-sm/[16px] text-sm pt-3">

      <div v-if="data[0].acf.adres_siedziby.length">
        <span class="block flex text-xs items-center text-gray-400"><UIcon name="i-heroicons-building-office-2"/> Adres siedziby:</span> {{ data[0].acf.adres_siedziby }}
      </div>

      <div class="pt-3" v-if="data[0].acf.adres_biura.length">
        <span class="block flex  text-xs items-center text-gray-400"><UIcon name="i-heroicons-map-pin"/> Adres biura:</span> {{ data[0].acf.adres_biura }}
      </div>

    </div>

    <div class="flex text-xs/[12px] pt-4 justify-between">
       <div v-if="data[0].acf.nip"><span class="block text-gray-400 ">NIP:</span> {{ data[0].acf.nip }}</div>
       <div  v-if="data[0].acf.regon"><span class="block text-gray-400">REGON:</span> {{ data[0].acf.regon }}</div>
       <div  v-if="data[0].acf.krs"><span class="block text-gray-400">KRS:</span> {{ data[0].acf.krs }}</div>
    </div>


  </div>

</template>


<script setup>
const { data } = defineProps(['data'])
</script>
