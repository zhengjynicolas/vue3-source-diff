<script setup lang="ts">
import CodeEditor from "./CodeEditor.vue";
import {ref, Ref} from "vue";
import {Diff} from "vue-diff";
import 'vue-diff/dist/index.css';

const props = defineProps({
  diffConf: {
    default: {
      mode: 'split',
      theme: 'dark',
      language: 'plaintext',
      prev: '',
      current: '',
      folding: false,
      inputDelay: 0,
      virtualScroll: false,
    }
  },
  prevLabel: String,
  currLabel: String,
})
const prev: Ref<string> = ref(props.diffConf.prev)
const curr: Ref<string> = ref(props.diffConf.current)
const updatePrev = (newVal: string) => {
  prev.value = newVal
}
const updateCurr = (newVal: string) => {
  curr.value = newVal
}
</script>
<template>
  <section class="source-diff-container">
    <div class="editor-container">
      <CodeEditor v-model:code="prev" :label="prevLabel" @input="updatePrev"/>
      <CodeEditor v-model:code="curr" :label="currLabel" @input="updateCurr"/>
    </div>
    <Diff
        :prev="prev"
        :current="curr"
        :mode="diffConf.mode"
        :theme="diffConf.theme"
        :language="diffConf.language"
        :folding="diffConf.folding"
        :input-delay="diffConf.inputDelay"
        :virtual-scroll="diffConf.virtualScroll"
    />
  </section>
</template>
<style scoped>
.source-diff-container {
  width: 100vw;
  display: flex;
  flex-flow: column;
  gap: 2em;
}
.editor-container{
  display: flex;
  gap: 50px;
}
</style>