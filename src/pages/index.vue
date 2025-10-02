<script setup lang="ts"></script>

<template>
  <q-card-section
    class="tw:h-10/10 tw:text-black bg-linear-violet tw:grid tw:grid-col-3 tw:gap-3 tw:justify-items-center tw:items-center"
  >
    <q-btn  round class="q-pa-sm surface-0 ">
      <q-avatar size="100px"> 👨‍💻 </q-avatar>
    </q-btn>

    <div class="tw:flex tw:flex-col tw:items-center">
      <h class="tw:text-white tw:text-5xl tw:md:text-6xl tw:font-bold tw:mb-4">สวัสดี ฉันคือ</h>
      <h class="tw:text-3xl tw:md:text-4xl tw:font-light tw:mb-6 tw:text-purple-200">
        นักพัฒนาเว็บไซต์
      </h>
      <p class="tw:text-white tw:text-xl tw:mb-8 tw:max-w-2xl tw:mx-auto text-center">
        ยินดีต้อนรับสู่เว็บไซต์ผลงานของฉัน ที่นี่คุณจะได้เห็นโปรเจกต์และทักษะต่างๆ ที่ฉันได้พัฒนามา
      </p>
    </div>

    <div class="tw:text-black tw:dark:text-white">
      <q-btn
        class="tw:transition tw:delay-75 tw:duration-75 tw:hover:scale-110 surface-0"
        size="xl"
        unelevated
        rounded
        label="ดูผลงาน"
      >
      </q-btn>
    </div>
  </q-card-section>

  <q-card-section
    class="tw:h-10/10 tw:text-black tw:dark:text-white tw:text-black surface-0 tw:grid tw:gap-3 tw:justify-items-center tw:items-center"
  >
    <h3 class="tw:font-bold q-mt-auto">เกี่ยวกับฉัน</h3>
    <div :class="`tw:flex tw:flex-col tw:gap-4 `">
      <div class="tw:grid tw:justify-items-center">
        <q-btn round class="bg-linear-violet">
          <q-avatar size="100px">🎨 </q-avatar>
        </q-btn>
      </div>
      <div>
        <h4 class="tw:text-2xl tw:font-semibold q-mb-md">นักสร้างสรรค์ดิจิทัล</h4>
        <p class="tw:leading-relaxed tw:indent-8">
          ฉันเป็นนักพัฒนาเว็บไซต์ที่มีความหลงใหลในการสร้างประสบการณ์ดิจิทัลที่น่าประทับใจ
          ด้วยประสบการณ์ในการทำงานกับเทคโนโลยีสมัยใหม่ฉันมุ่งมั่นที่จะสร้างผลงานที่มีคุณภาพและตอบสนองความต้องการของผู้ใช้งาน
        </p>
        <p class="tw:leading-relaxed tw:indent-8">
          ฉันเชื่อว่าการออกแบบที่ดีต้องมาพร้อมกับฟังก์ชันการทำงานที่เยี่ยม
          และฉันพร้อมที่จะนำความคิดสร้างสรรค์มาผสมผสานกับเทคโนโลยีเพื่อสร้างผลงานที่โดดเด่น
        </p>

        <div class="tw:gap-3">
          <span
            class="tw:bg-green-100 tw:text-green-800 q-px-sm tw:rounded-full tw:text-sm tw:font-medium"
            >Front-End</span
          >

          <span
            class="tw:bg-purple-100 tw:text-purple-800 q-px-sm tw:rounded-full tw:text-sm tw:font-medium"
            >Back-End</span
          >
        </div>
      </div>
    </div>
  </q-card-section>
</template>

<style scoped>
.bg-linear-violet {
  background: linear-gradient(
    -45deg,
    /* ทิศทางการไล่สี: จากบนลงล่าง (คุณอาจลอง 135deg สำหรับทแยงมุม) */ #5f2c82 0%,
    /* สีม่วงเข้ม (Violet) เริ่มต้นที่ 0% */ #5076e0ff 100%
      /* สีน้ำเงินอมเขียว (Teal/Aquamarine) สิ้นสุดที่ 100% */
  );
}
</style>
