<script setup lang="ts"></script>

<template>
  <div class="root">
    <KunButton @click="navigateTo('/')">Moe!</KunButton>
  </div>
</template>

<style lang="scss" scoped>
.root {
  height: 100vh;
  display: grid;
  place-items: center;
}
</style>
