<script setup lang="ts">
import Card from '@/components/card.vue'
import Contact from '@/components/contact.vue'

import { ref } from 'vue'

const btnToggle = ref<string>('1')

const listCard = ref<
  {
    link?: string
    image: string[]
    title: string
    content: string
    sw: string[]
    type: Number
  }[]
>([
  {
    link: 'https://edm.frappet.synology.me/',
    image: ['/image/jws/jws.jpg', '/image/jws/page.jpg'],
    title: 'Enterprise Document Management (EDM)',
    content:
      'เป็นโปรแกรมสำหรับจัดการเอกสารในองค์กร ความสามารถหลักเก็บเอกสารจัดการได้เหมือนโครงสร้างไฟล์โฟลเดอร์อย่างปลอดภัยประสิทธิ์ภาพสูง',
    sw: ['Vue', 'Quasar'],
    type: 2,
  },
  {
    link: 'https://job-tracking.case-collection.com/',
    image: [],
    title: 'Job Worker Service (JWS)',
    content:
      'เป็นระบบการจัดการข้อมูลเพื่อไว้ใช้สำหรับการทำรายการ ในการติดตามกระบวนการต่างๆ ในการนำเข้าแรงงาน',
    sw: ['Vue', 'Quasar', 'OCR'],
    type: 2,
  },
  {
    image: [],
    title: 'POC',
    content: 'POC ต้นแบบ จัดการฐานข้อมูลคลังคำศัพท์ของพจนสนุกรม',
    sw: ['Vue', 'Quasar', 'Ai'],
    type: 2,
  },
  {
    link: 'https://test-hrms-renew.case-collection.com/',
    image: ['/image/hrms/image.jpeg'],
    title: 'HRMS',
    content:
      'เป็นระบบจัดการบุคคลภายใน เช่นการลา วินัย ออกคำสั่ง  โครงสร้างหน่วยงาน มีการทำ STT แล้วเอา Ai มาทำเป็นมาแปลงเป็น schema ในการส่ง api ',
    sw: ['Vue', 'Quasar', 'Ai'],
    type: 2,
  },
  {
    image: ['/image/certificate/visual-storytelling-with-ai.jpg'],
    title: 'Visual Storytelling with Ai',
    content:
      'Visual Storytelling with Ai จะเป็นการนำเสนอเกี่ยวกับกระบวนการเรียนรู้ AI เพื่อให้ผู้เรียนรู้จักการสังเกต วิเคราะห์ ทำความเข้าใจ เรียนรู้ และประเมิน ได้อย่างเป็นขั้นตอน รวมถึงได้เรียนรู้เกี่ยวกับระบบการทำงานของคนและ AI ว่ามีความแตกต่างกันอย่างไร',
    sw: [],
    type: 3,
  },
  {
    image: ['/image/certificate/chat-gpt.jpg'],
    title: 'ประเด็นจริยธรรมของ ChatGPT ที่ควรใส่ใจ',
    content: '',
    sw: [],
    type: 3,
  },
  {
    image: ['/image/certificate/ai-money.jpg'],
    title: 'การเงินกับ Ai สองเรื่องใกล้ตัวในชีวิตประจำวัน',
    content: '',
    sw: [],
    type: 3,
  },
  {
    image: ['/image/certificate/cer-1.jpg'],
    title: 'เกียรติบัตรผ่านการฝึกงาน  CAT',
    content: '',
    sw: [],
    type: 3,
  },
  {
    image: ['/image/certificate/cer-2.jpg'],
    title: 'เกียรติบัตรคนดีศรีเชียงใหม่',
    content: '',
    sw: [],
    type: 3,
  },
])
</script>

<template>
  <q-card-section
    id="หน้าแรก"
    class="tw:h-10/10 tw:text-black bg-linear-violet tw:grid tw:grid-row-3 tw:gap-3 tw:justify-items-center tw:items-center"
  >
    <q-btn round class="q-pa-sm surface-0">
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
        href="#ผลงาน"
        label="ดูผลงาน"
      >
      </q-btn>
    </div>
  </q-card-section>

  <q-card-section
    id="เกี่ยวกับฉัน"
    class="tw:text-black tw:dark:text-white tw:text-black surface-0 tw:grid tw:gap-3 tw:justify-items-center tw:items-center"
  >
    <h3 class="tw:font-bold q-mt-auto">เกี่ยวกับฉัน</h3>
    <div :class="`tw:flex tw:flex-col tw:gap-4 `">
      <div class="tw:grid tw:justify-items-center">
        <q-btn round class="bg-linear-violet" href="pdf/Portfolio-1.pdf" target="_blank">
          <q-avatar size="100px">🎨 </q-avatar>
        </q-btn>
      </div>
      <div>
        <h4 class="tw:text-2xl tw:font-semibold q-mb-md">นักสร้างสรรค์ดิจิทัล</h4>
        <p class="tw:leading-relaxed tw:indent-8">
          สวัสดีครับ! ผม เน็ต (ธนพนธ์ แสงจันทร์) ตอนนี้อายุ 24 ปีครับ ผมจบปริญญาตรีด้าน
          วิศวกรรมคอมพิวเตอร์ จาก มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา ด้วยเกรด 3.62
        </p>
        <p class="tw:leading-relaxed tw:indent-8">
          และตอนนี้ก็ทำงานที่ บริษัท คาโม มายล์ จำกัด ซึ่งผมได้ทำทั้งส่วน Front-end และงาน Back-end
          ควบคู่กันไปครับ
        </p>

        <h4 class="tw:text-2xl tw:font-semibold q-mb-md">สไตล์การทำงานและตัวตน</h4>
        <p class="tw:leading-relaxed tw:indent-8">
          ในชีวิตจริง ผมอาจจะเป็นคนเงียบ ๆ ขี้อาย และ พูดไม่ค่อยเก่ง เท่าไหร่ (หัวเราะ)
          แต่เวลาทำงานผมจะ ตั้งใจและทุ่มเท ให้กับโปรเจกต์อย่างเต็มที่ครับ
          ผมเชื่อว่าการออกแบบที่ดีต้องมาพร้อมกับฟังก์ชันที่ใช้งานได้จริงเสมอ
        </p>

        <p class="tw:leading-relaxed tw:indent-8">
          แน่นอนว่าผมก็มีข้อบกพร่องอยู่บ้าง... เช่น เป็นคน ขี้ลืม ง่ายครับ 😅
          แต่ผมก็พยายามใช้เครื่องมือและระบบมาช่วยให้งานไม่พลาดอยู่เสมอ
        </p>

        <p class="tw:leading-relaxed tw:indent-8">
          เวลาว่าง ๆ ผมชอบ เล่นเกม เพื่อพักผ่อน อ่านหนังสือ เพื่อเติมความรู้ใหม่ ๆ และการ เดินป่า
          เพื่อออกไปผ่อนคลายและสร้างแรงบันดาลใจให้ตัวเองครับ
        </p>

        <div class="tw:flex tw:flex-row tw:gap-2">
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

  <q-card-section
    id="ผลงาน"
    class="tw:text-black tw:dark:text-white tw:text-black surface-1 tw:grid tw:gap-3 tw:justify-items-center tw:items-center"
  >
    <div class="text-center">
      <h3 class="tw:font-bold">ผลงานของฉัน</h3>
      <div class="q-pa-md">
        <q-btn-toggle
          class="surface-0"
          v-model="btnToggle"
          rounded
          toggle-color="accent"
          size="1rem"
          :options="[
            { label: 'ทั้งหมด', value: '1' },
            { label: 'อบรม', value: '3' },
            { label: 'เว็บไซต์', value: '2' },
          ]"
        />
      </div>
    </div>

    <div class="tw:grid tw:md:grid-cols-2 tw:gap-3 text-center">
      <Card
        v-for="v in listCard.filter((v) => {
          if (btnToggle === '1') return true

          if (btnToggle === '2' && v.type === 2) return true

          if (btnToggle === '3' && v.type === 3) return true

          return false
        })"
        :link="v.link"
        :image="v.image"
        :title="v.title"
        :content="v.content"
        :sw="v.sw"
      />
    </div>
  </q-card-section>

  <Contact id="ติดต่อ" />
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
