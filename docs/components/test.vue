<script setup>
import MarkdownIt from 'markdown-it';
import { ref, onMounted } from 'vue';

const isLoading = ref(true);
const markdownContent = ref('');
const markdownHtml = ref('');

onMounted(async () => {
  try {
    const url = 'https://raw.githubusercontent.com/alibaba/f2e-spec/main/README.md';
    const response = await fetch(url);
    // const posts = await createContentLoader(url).load;

    const data = await response.text();
    markdownContent.value = data;
    isLoading.value = false;
    const md = new MarkdownIt();
    const html = md.render(data);
    markdownHtml.value = html;
  } catch (error) {
    console.error('Error:', error);
    isLoading.value = false;
    markdownContent.value = '加载失败';
  }
});
</script>

<template>
  <div>
    <div v-if="isLoading">正在加载...</div>
    <div v-else v-html="markdownHtml"></div>
  </div>
</template>
