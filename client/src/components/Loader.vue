<template>
  <div class="glass h-full w-full flex flex-col items-center justify-center top-0 left-0 z-50">
    <div class="loader inline-block relative w-[80px] h-[80px]">
      <div></div>
      <div></div>
    </div>
    <p class="text-gray-400 text-sm text-center mt-3">
      <slot />
    </p>
  </div>
</template>

<style scoped>
.loader div {
  position: absolute;
  border: 4px solid #d93d6f;
  opacity: 1;
  border-radius: 50%;
  animation: pulse 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.loader div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes pulse {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
</style>
