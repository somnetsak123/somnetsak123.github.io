<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div :class="`tw:h-screen tw:flex tw:flex-col ${$q.dark.isActive ? 'dark' : ''}`">
    <header>
      <q-toolbar class="q-pa-md tw:flex tw:gap-2 surface-0 tw:text-black tw:dark:text-white">
        <div class="tw:text-2xl">Portfolio</div>
        <q-space />

        <q-btn
          class="tw:transition tw:delay-75 tw:duration-75 tw:hover:scale-110"
          flat
          dense
          size="14px"
          label="หน้าแรก"
        />
        <q-btn
          class="tw:transition tw:delay-75 tw:duration-75 tw:hover:scale-110"
          flat
          dense
          size="14px"
          label="เกี่ยวกับ"
        />
        <q-btn
          class="tw:transition tw:delay-75 tw:duration-75 tw:hover:scale-110"
          flat
          dense
          size="14px"
          label="ผลงาน"
        />
        <q-btn
          class="tw:transition tw:delay-75 tw:duration-75 tw:hover:scale-110"
          flat
          dense
          size="14px"
          label="ทักษะ"
        />
        <q-btn
          class="tw:transition tw:delay-75 tw:duration-75 tw:hover:scale-110"
          flat
          dense
          size="14px"
          label="ติดต่อ"
        />
        <q-btn
          class="tw:transition tw:delay-75 tw:duration-75 tw:hover:scale-110"
          flat
          dense
          round
          size="14px"
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

<style >
.q-btn {
  &:hover {
    color: #c93cd6ff !important;
  }
}
</style>
