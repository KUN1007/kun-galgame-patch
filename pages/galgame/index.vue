<script setup lang="ts"></script>

<template>
  <div class="root">
    <GalgameCardNav />

    <GalgameCardContainer />
  </div>
</template>

<style lang="scss" scoped>
.root {
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 64rem;
  margin: 0 auto;
  color: var(--kungalgame-font-color-3);
}
</style>
