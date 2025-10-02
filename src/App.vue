<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'

const showMenu = ref<boolean>(false)
</script>

<template>
  <div :class="`tw:h-screen tw:flex tw:flex-col ${$q.dark.isActive ? 'dark' : ''}`">
    <header class="shadow-lg tw:z-10">
      <q-toolbar
        class="q-pa-md tw:flex tw:gap-2 surface-0 tw:text-black tw:dark:text-white tw:z-10"
      >
        <div class="tw:text-3xl text-weight-bold">Portfolio</div>
        <q-space />

        <q-btn
          v-if="$q.screen.lt.sm"
          class="tw:transition tw:delay-75 tw:duration-75 tw:hover:scale-110"
          flat
          dense
          icon="mdi-menu"
          @click="() => (showMenu = true)"
        >
          <q-menu>
            <q-list class="tw:min-w-50 tw:text-black tw:dark:text-white">
              <q-item clickable v-close-popup>
                <q-item-section>หน้าแรก</q-item-section>
              </q-item>

              <q-item clickable v-close-popup>
                <q-item-section>เกี่ยวกับ</q-item-section>
              </q-item>

              <q-item clickable v-close-popup>
                <q-item-section>ผลงาน</q-item-section>
              </q-item>

              <q-item clickable v-close-popup>
                <q-item-section>ทักษะ</q-item-section>
              </q-item>

              <q-item clickable v-close-popup>
                <q-item-section>ติดต่อ</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>

        <div v-else>
          <q-btn
            class="tw:transition tw:delay-75 tw:duration-75 tw:hover:scale-110"
            flat
            dense
            label="หน้าแรก"
          />
          <q-btn
            class="tw:transition tw:delay-75 tw:duration-75 tw:hover:scale-110"
            flat
            dense
            label="เกี่ยวกับ"
          />
          <q-btn
            class="tw:transition tw:delay-75 tw:duration-75 tw:hover:scale-110"
            flat
            dense
            label="ผลงาน"
          />
          <q-btn
            class="tw:transition tw:delay-75 tw:duration-75 tw:hover:scale-110"
            flat
            dense
            label="ทักษะ"
          />
          <q-btn
            class="tw:transition tw:delay-75 tw:duration-75 tw:hover:scale-110"
            flat
            dense
            label="ติดต่อ"
          />
        </div>
        <q-btn
          class="tw:transition tw:delay-75 tw:duration-75 tw:hover:scale-110"
          flat
          dense
          round
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

<style>
.q-btn {
  &:hover {
    color: #c93cd6ff !important;
  }
}

.shadow-lg {
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.3),
    0 4px 6px -2px rgba(0, 0, 0, 0.1) !important;
}
</style>
