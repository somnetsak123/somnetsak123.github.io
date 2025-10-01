<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="tw:h-screen tw:flex tw:flex-col">
    <header>
      <q-toolbar class="tw:flex tw:gap-2 surface-0 text-light text-dark">
        <div class="tw:font-bold tw:text-2xl">Portfolio</div>
        <q-space />

        <q-btn
          class="tw:transition tw:delay-75 tw:duration-75 tw:hover:scale-110"
          flat
          dense
          size="13px"
          label="หน้าแรก"
        />
        <q-btn
          class="tw:transition tw:delay-75 tw:duration-75 tw:hover:scale-110"
          flat
          dense
          size="13px"
          label="เกี่ยวกับ"
        />
        <q-btn
          class="tw:transition tw:delay-75 tw:duration-75 tw:hover:scale-110"
          flat
          dense
          size="13px"
          label="ผลงาน"
        />
        <q-btn
          class="tw:transition tw:delay-75 tw:duration-75 tw:hover:scale-110"
          flat
          dense
          size="13px"
          label="ทักษะ"
        />
        <q-btn
          class="tw:transition tw:delay-75 tw:duration-75 tw:hover:scale-110"
          flat
          dense
          size="13px"
          label="ติดต่อ"
        />
        <q-btn
          class="tw:transition tw:delay-75 tw:duration-75 tw:hover:scale-110"
          flat
          dense
          round
          size="13px"
          @click="() => $q.dark.toggle()"
        >
          <q-icon name="mdi-theme-light-dark" size="18px" class="tw:opacity-50" />
        </q-btn>
      </q-toolbar>
    </header>

    <section class="tw:h-full tw:w-full tw:flex-grow tw:overflow-y-auto">
      <q-card class="tw:h-full no-border-radius surface-2">
        <router-view />
      </q-card>
    </section>
  </div>
</template>

<style scoped>
.q-btn {
  &:hover {
    color: #fca5a5 !important;
  }
}
</style>
