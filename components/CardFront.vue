<template>



  <div :class="{ '!border-reFuel': data[0].acf.spolka_code === 'REF'},{ '!border-rePower': data[0].acf.spolka_code === 'REP'}" class="card min-h-[230px] flex flex-col justify-center row bg-white mx-3 mt-3 mb-4 border-b-4 border-reMain  px-8 py-6 shadow-md rounded-lg">

    <div class="header flex justify-between ">
      <img v-if="data[0].acf.zdjecie.length" class="inline-block w-12 h-12  rounded-full ring-2 ring-white" :src="`${data[0].acf.zdjecie}`" alt="" />

      <BrandLogo :data="data"/>

    </div>

    <h3 class="text-lg/[22px] pt-4 font-bold">{{ data[0].acf.imie }} {{ data[0].acf.nazwisko }} </h3>
    <h4 :class="{ '!text-reFuel': data[0].acf.spolka_code === 'REF', '!text-rePower': data[0].acf.spolka_code === 'REP'}" class="text-sm/[15px] text-reMain">{{ data[0].acf.stanowisko }}</h4>
    <div class="data text-sm pt-3">
      <div v-if="data[0].acf.email.length" class="mail flex items-center">
        <MailIcon class=" opacity-50 " size="1x"></MailIcon> <a :href="'mailto:' + data[0].acf.email" class="ps-2"> {{
        data[0].acf.email }} </a>
      </div>
      <div v-if="data[0].acf.telefon.length" class="phone flex items-center">
        <PhoneIcon class=" opacity-50 " size="1x"></PhoneIcon>
        <a :href="'tel:' + data[0].acf.telefon" class="ps-2">{{ data[0].acf.telefon }} </a>
      </div>
      <div v-if="data[0].acf.email.length" class="website flex items-center">
        <GlobeIcon class=" opacity-50 " size="1x"></GlobeIcon> <a target="_blank" href="http://respect.energy"><span class="ps-2">
            respect.energy </span> </a>
      </div>

    </div>

  </div>

</template>


<script setup>
import BrandLogo from "./BrandLogo.vue";

const { data } = defineProps(['data'])
</script>
