<script setup>
import MarkdownIt from 'markdown-it';
import { ref, onMounted } from 'vue';

const props = defineProps({
  url: {
    type: String,
    default: '',
  },
});

const isLoading = ref(true);

const markdownHtml = ref('');

onMounted(async () => {
  try {
    const response = await fetch(props.url);
    const data = await response.text();
    isLoading.value = false;
    const md = new MarkdownIt();
    const html = md.render(data);
    markdownHtml.value = html;
  } catch (error) {
    const md = new MarkdownIt();
    markdownHtml.value = md.render(`## [链接](${props.url})`);
  }
});
</script>

<template>
  <div>
    <div v-if="isLoading">正在加载...{{ url }}</div>
    <div v-else v-html="markdownHtml"></div>
  </div>
</template>
