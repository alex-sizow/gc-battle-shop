<template>
  <div class="blog">
    <div class="blog__title">Блог</div>
    <div class="blog__items">
      <blog-item
        v-for="article in posts"
        :key="article.title"
        :tags="article.tags"
        :author="article.author.firstName"
        :data="article.publishedAt"
        :slug="article.slug"
        :title="article.title"
        :image="article.image.other"
      ></blog-item>
    </div>
  </div>
</template>

<script>
import BlogItem from "~/components/blog/item";

export default {
  name: "Blog",
  loading: true,
  components: {
    BlogItem,
  },

  async asyncData({ $axios }) {
    try {
      const response = await $axios.get("api/blog");

      if (response.data.success) {
        return {
          posts: response.data.data,
        };
      }
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<style lang="scss">
.blog {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 280px 15px;
  margin: 0 auto;
  @media (max-width: 1400px) {
    padding: 180px 10px;
  }
}
.blog__title {
  font-weight: 700;
  font-size: 96px;
  line-height: 120%;
  max-width: 1510px;
  width: 100%;

  @media (max-width: 1540px) {
    max-width: 1000px;
  }
  @media (max-width: 1060px) {
    max-width: 500px;
  }
}
.blog__items {
  max-width: 1510px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  gap: 18px;
  flex-wrap: wrap;

  @media (max-width: 1540px) {
    max-width: 1000px;
    justify-content: left;
  }
  @media (max-width: 1060px) {
    max-width: 500px;
    justify-content: center;
  }
}
</style>
