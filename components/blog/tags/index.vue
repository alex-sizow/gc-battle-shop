<template>
  <div class="blog-tags">
    <a class="blog-tags__item" v-for="tag in tags" :key="tag">{{ tag }}</a>
  </div>
</template>

<script>
export default {
  name: "BlogTags",
  props: {
    tags: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.blog-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  font-family: "Pangolin";
  font-weight: 400;
  font-size: 12px;
  line-height: 125%;
  letter-spacing: 0.02em;
  margin-top: 12px;
  .blog-tags__item {
    padding: 4px 8px;
    background: #988c89;
    border-radius: 6px;
    max-width: 186px;
    color: #fec82f;
  }
}
</style>
