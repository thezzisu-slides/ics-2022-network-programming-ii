<template>
  <div class="w-full h-full flex items-stretch st-canvas">
    <div>
      <img :src="`./images/${image}`" class="h-full">
    </div>
    <div class="flex-1">
      <div class="h-full slidev-layout p-8 pl-0 flex flex-col justify-center">
        <div class="p-8 content-card rounded">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity';

const props = defineProps<{
  image?: string
  background?: string
}>()

const image = computed(() => props.image ?? 'ST02A_A010.png')
const background = computed(() => props.background ? `url("./images/${props.background}")` : 'white')
</script>

<style scoped>
.st-canvas {
  background: v-bind(background);
  background-position: center;
}
</style>