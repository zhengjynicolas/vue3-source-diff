<script setup lang="ts">
const emit=defineEmits(['input'])
import {ref} from "vue";

const props = defineProps({
  label: String,
  code: String,
})
const codeTxt = ref(props.code)
</script>
<template>
  <div class="editor">
    <label>{{ label }}</label>
    <textarea v-model="codeTxt"  @input="emit('input', codeTxt)"/>
  </div>
</template>
<style scoped>
.editor {
  flex:1;
  display: flex;
  gap: 1em;
  align-items: center;
}
.editor > label {
  display: flex;
}
.editor > textarea {
  width: 100%;
  height: 10em;
  align-self: self-end;
}
</style>

