<script setup lang="ts"></script>

<template>

    
  <q-card-section class="tw:h-10/10  tw:text-black bg-linear-violet tw:grid tw:grid-rows-3 tw:gap-3 tw:justify-items-center tw:items-center ">

<div>


      <q-btn   round class="q-pa-sm surface-0">
      <q-avatar size="100px">
        👨‍💻
      </q-avatar>
    </q-btn>
</div>
<div class="tw:grid tw:justify-items-center">
<h1 class="tw:text-white tw:text-5xl tw:md:text-6xl tw:font-bold tw:mb-4">สวัสดี ฉันคือ</h1>
<h2 class="tw:text-3xl tw:md:text-4xl tw:font-light tw:mb-6 tw:text-purple-200">นักพัฒนาเว็บไซต์</h2>
<p class="tw:text-white tw:text-xl tw:mb-8 tw:max-w-2xl tw:mx-auto text-center">ยินดีต้อนรับสู่เว็บไซต์ผลงานของฉัน ที่นี่คุณจะได้เห็นโปรเจกต์และทักษะต่างๆ ที่ฉันได้พัฒนามา</p>
</div>
<div class="tw:text-black tw:dark:text-white">
<q-btn
          class="tw:transition tw:delay-75 tw:duration-75 tw:hover:scale-110 surface-0 "
          size="xl"
         unelevated 
         rounded
label="ดูผลงาน"
        >
        </q-btn>
</div>
      
  </q-card-section>


    <q-card-section class="tw:h-10/10 tw:text-black tw:dark:text-white tw:text-black ">
  </q-card-section>
</template>

<style scoped>
.bg-linear-violet{
    background: linear-gradient(
        -45deg, /* ทิศทางการไล่สี: จากบนลงล่าง (คุณอาจลอง 135deg สำหรับทแยงมุม) */
        #5f2c82 0%, /* สีม่วงเข้ม (Violet) เริ่มต้นที่ 0% */
        #5076e0ff 100% /* สีน้ำเงินอมเขียว (Teal/Aquamarine) สิ้นสุดที่ 100% */
    );
}

</style>
