<template>
  <nuxt-link :to="`/blog/${slug}`" prefetch class="blog-item" :style="style">
    <img class="blog-item__img" alt="" :src="this.image" loading="lazy" />
    <div class="blog-item__title">{{ title }}</div>
    <div class="blog-item__info">
      <div class="blog-item__info_time">{{ createDate(data) }}</div>
      <svg
        width="2"
        height="11"
        viewBox="0 0 2 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.738281 9.80899L0.580758 1.15016C0.546127 0.680093 0.79254 0.0312598 1.24678 0.157054C1.70103 0.282848 1.83184 0.680093 1.86647 1.15016L1.86647 9.80899C1.9011 10.2791 1.69248 10.9348 1.23823 10.809C0.783989 10.6832 0.761368 10.1224 0.738281 9.80899Z"
          fill="#F8DC6C"
        />
      </svg>

      <div class="blog-item__info_author">Автор: {{ author }}</div>
    </div>
    <blog-tags :tags="tags"></blog-tags>
    <div class="blog-item__button">
      <div>Читать полностью</div>
    </div>
  </nuxt-link>
</template>

<script>
import BlogTags from "~/components/blog/tags";

export default {
  name: "BlogItem",
  components: {
    BlogTags,
  },

  methods: {
    createDate(time) {
      const date = new Date(time * 1000);
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      const formatter = new Intl.DateTimeFormat("ru-RU", options);

      return formatter.format(date);
    },
  },
  props: {
    title: { type: String, default: "Рыбный заголовок статьи или новости?" },
    link: {
      type: String,
      default: `blog/1`,
    },

    tags: {
      type: Array,
      default: ["Очень интересный тег", "Скучный тег"],
    },
    author: {
      type: String,
      default: "Я",
    },
    data: {
      type: Number,
    },
    slug: {
      type: String,
    },
    image: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.blog-item {
  position: relative;
  width: 491px;
  height: 300px;
  border-radius: 14px;
  padding: 24px;
  background-size: 502px auto;
  background-position: center;
  transition: 500ms;
  color: #fffef9;
  z-index: 0;
}

.blog-item:hover {
  .blog-item__img {
    transition: 500ms;
    filter: brightness(100%);
  }
}

.blog-item__img {
  position: absolute;
  max-width: 491px;
  transition: 500ms;
  width: 100%;
  height: 300px;
  border-radius: 14px;
  left: -0px;
  top: 0;
  z-index: -1;
  filter: brightness(75%);
  object-fit: cover;
}

.blog-item__title {
  font-weight: 700;
  font-size: 36px;
  line-height: 123.6%;
  z-index: 3;
}
.blog-item__info {
  display: flex;
  font-family: "Pangolin";
  font-weight: 400;
  font-size: 12px;
  line-height: 125%;
  gap: 5px;
  height: 15px;
  align-items: center;
  letter-spacing: 0.02em;
}

.blog-item__tags {
  font-family: "Pangolin";
  font-weight: 400;
  font-size: 12px;
  line-height: 125%;
  letter-spacing: 0.02em;
  margin-top: 12px;
}

.blog-item__tags_item {
  padding: 4px 8px;
  background: #988c89;
  border-radius: 6px;
  max-width: 186px;
  color: #fec82f;
}

.blog-item__button {
  color: #fec82f;
  font-weight: 700;
  font-size: 26px;
  line-height: 33px;
  margin-top: 106px;
  @media (max-width: 439px) {
    margin-top: 75px;
  }
}
</style>
