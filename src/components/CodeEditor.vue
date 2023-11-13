<script setup lang="ts">
// const emit=defineEmits(['input'])
defineProps({
  label: String,
  code: String,
})
// const updateCode=()=>{
//   emit('input', code);
// }
</script>
<template>
  <div>
    <label>{{ label }}</label>
    <textarea v-model="code"/>
  </div>
</template>
