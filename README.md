# vue3-source-diff
Source code diff plugin for Vue@3
This plugin dependent on [vue-diff](https://www.npmjs.com/package/vue-diff)

## Install plugin
```shell
npm install vue3-source-diff
```
And install plugin in vue application
```ts
import SourceDiff from 'vue3-source-diff';
import 'vue3-source-diff/dist/index.css';

app.use(SourceDiff);
```

### Options

```ts
app.use(SourceDiff, {
  componentName: 'SourceDiffNewName',
});
```

| name          | type     | detault      | description                |
| ------------- | -------- |--------------| -------------------------- |
| componentName | `string` | `SourceDiff` | Global diff component name |

### Settings
```vue
<script setup lang="ts">
const configs = {
  mode: 'split',
  theme: 'dark',
  language: 'plaintext',
  prev: '',
  current: '',
  folding: false,
  inputDelay: 0,
  virtualScroll: false,
}
</script>
<template>
  <SourceDiff :prevLabel="'Prev Source:'"
              :currLabel="'Current Source:'"
              :diffConf="configs"
  />
</template>
```

### Props

| name       | type     | detault            | values | description                                                                |
|------------|----------|--------------------|--------|----------------------------------------------------------------------------|
| preLabel   | `string` | `''`               | any    |
| currLabel  | `string` | `''`               | any    |                                                                            |
| diffConfig | `object` | Same with vue-diff | any    | More Details please see [vue-diff](https://www.npmjs.com/package/vue-diff) |
