<script setup lang="ts">
import CodeEditor from "./CodeEditor.vue";
const prev:string = ref("")
const curr:string = ref("")
</script>
<template>
  <div>
    <h1>Source Code Comparison</h1>
    <div>
      <CodeEditor v-model="prev" label="Old Code"/>
      <CodeEditor v-model="curr" label="New Code"/>
    </div>
    <VueDiff :prev="prev" :current="curr" />
  </div>
</template>