<template>
  <div class="slidev-layout w-full h-full p-8 st-canvas">
    <div class="h-full p-8 content-card rounded">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity';

const props = defineProps<{
  background?: string
}>()

const background = computed(() => props.background ? `url("${import.meta.env.BASE_URL}images/${props.background}")` : 'white')
</script>

<style scoped>
.st-canvas {
  background: v-bind(background);
  background-position: center;
}
</style>