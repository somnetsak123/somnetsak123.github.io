<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  image: string[],
  title: string,
  content: string,
  sw: string[]
}>()

const slide = ref(0)

const gradientPairs = [
  // ☀️ ชุดสีโทนอุ่น/สว่าง (Warm/Bright Tones)
  ['from-yellow-400', 'to-orange-500'], // ส้ม-เหลือง (เดิม)
  ['from-pink-400', 'to-red-500'], // ชมพู-แดง
  ['from-amber-400', 'to-rose-500'], // อำพัน-กุหลาบ
  ['from-fuchsia-400', 'to-pink-500'], // ม่วงบานเย็น-ชมพู
  ['from-lime-300', 'to-yellow-400'], // มะนาว-เหลืองอ่อน

  // 🌊 ชุดสีโทนเย็น/เข้ม (Cool/Deep Tones)
  ['from-blue-400', 'to-purple-500'], // ฟ้า-ม่วง (เดิม)
  ['from-green-400', 'to-teal-500'], // เขียว-เขียวน้ำทะเล (เดิม)
  ['from-indigo-400', 'to-blue-600'], // คราม-น้ำเงินเข้ม (เดิม)
  ['from-cyan-400', 'to-blue-500'], // ฟ้าอ่อน-น้ำเงิน
  ['from-sky-400', 'to-indigo-500'], // ฟ้าคราม-คราม
  ['from-emerald-400', 'to-green-600'], // มรกต-เขียวเข้ม
  ['from-purple-500', 'to-violet-700'], // ม่วง-ม่วงเข้ม

  // 🦄 ชุดสีโทนตัดกัน/พิเศษ (Contrasting/Unique Tones)
  ['from-pink-300', 'to-red-500'], // ชมพูอ่อน-แดง (เดิม)
  ['from-violet-400', 'to-pink-600'], // ม่วง-ชมพูเข้ม
  ['from-teal-300', 'to-blue-400'], // เขียวน้ำทะเล-น้ำเงินอ่อน
  ['from-orange-300', 'to-red-600'], // ส้มอ่อน-แดงเข้ม
  ['from-gray-300', 'to-slate-400'], // เทาอ่อน-เทาฟ้า
  ['from-purple-300', 'to-pink-400'], // ม่วงอ่อน-ชมพู

  // 💎 เพิ่มเติมอีกเล็กน้อย
  ['from-rose-500', 'to-red-700'],
  ['from-green-500', 'to-lime-600'],
  ['from-blue-600', 'to-cyan-400'],
]

// 2. ฟังก์ชันสำหรับสุ่มเลือกคู่สี
const getRandomGradient = () => {
  const randomIndex = Math.floor(Math.random() * gradientPairs.length)
  return gradientPairs[randomIndex]
}

// 3. Computed property ที่รวมคลาส Tailwind CSS ทั้งหมด
// และสุ่มเลือกคู่สีมาใช้
const randomGradientClasses = computed(() => {
  const [fromClass, toClass] = getRandomGradient() || []

  // นำคลาสพื้นฐานมารวมกับคลาสสีที่ถูกสุ่ม
  return `tw:bg-gradient-to-br tw:${fromClass} tw:${toClass}`
})
</script>

<template>
  <div :class="`q-pa-sm  `">

    <div
      class="surface-0 project-card tw:bg-white tw:rounded-xl tw:shadow-lg tw:overflow-hidden card-hover tw:visible tw:h-full"
      data-category="web">
      <div :class="`bg-linear-violet  tw:w-full tw:flex tw:items-center tw:justify-center `">
        <q-carousel class=" tw:w-full" height="300px" animated v-model="slide" :arrows="props.image.length > 1"
          :navigation="props.image.length > 1" infinite>
          <q-carousel-slide v-for="(v, i) in props.image" :name="i" :img-src="v" />
        </q-carousel>
      </div>
      <div class="tw:p-6  tw:text-black tw:dark:text-white ">
        <h3 class="tw:text-xl tw:font-semibold  tw:mb-2  text-left">{{ props.title }}</h3>

        <p class=" tw:mb-4 text-left">
          {{ props.content }}
        </p>
        <div class="tw:flex tw:flex-wrap tw:gap-2  tw:mb-4">
          <span v-if="props.sw.includes('Vue')"
            class="tw:bg-blue-100 tw:text-blue-800 tw:px-3 tw:py-1 tw:rounded-full tw:text-xs">Vue</span>
          <span v-if="props.sw.includes('Quasar')"
            class=" tw:bg-purple-100 tw:text-purple-800 tw:px-3 tw:py-1 tw:rounded-full tw:text-xs">Quasar</span>
          <span v-if="props.sw.includes('OCR')"
            class="tw:bg-orange-100 tw:text-orange-800 tw:px-3 tw:py-1 tw:rounded-full tw:text-xs">OCR</span>
          <span v-if="props.sw.includes('Ai')"
            class="tw:bg-red-100 tw:text-red-800 tw:px-3 tw:py-1 tw:rounded-full tw:text-xs">Ai</span>
          <span v-if="props.sw.includes('POC')"
            class="tw:bg-red-100 tw:text-red-800 tw:px-3 tw:py-1 tw:rounded-full tw:text-xs">POC</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.bg-linear-violet {
  background: linear-gradient(-45deg,
      /* ทิศทางการไล่สี: จากบนลงล่าง (คุณอาจลอง 135deg สำหรับทแยงมุม) */
      #5f2c82 0%,
      /* สีม่วงเข้ม (Violet) เริ่มต้นที่ 0% */
      #5076e0ff 100%
      /* สีน้ำเงินอมเขียว (Teal/Aquamarine) สิ้นสุดที่ 100% */
    );
}

.card-hover {
  transition: all 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.project-card {
  transition: all 0.3s ease;
}

.project-card.hidden {
  opacity: 0;
  transform: translateY(20px);
}

.project-card.visible {
  opacity: 1;
  transform: translateY(0);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}
</style>
