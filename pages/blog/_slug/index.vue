<template>
  <div class="blog-post">
    <div class="blog-post__body">
      <div class="blog-post__body_title">{{ post.title }}</div>

      <img class="blog-post__body_title-img" :src="post.image.other" alt="" />

      <div class="blog-post__body_info">
        <div class="blog-item__info_time">{{ createDate }}</div>
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

        <div class="blog-item__info_author">
          Автор: {{ `${post.author.firstName} ${post.author.lastName}` }}
        </div>
      </div>
      <div v-for="item in post.description" :key="item.id">
        <div v-if="item.type === 'header'" class="blog-post__body_subtitle">
          {{ item.data.text }}
        </div>
        <div v-else-if="item.type === 'quote'" class="blog-post__body_note">
          {{ item.data.text }}
        </div>
        <div v-else-if="item.type === 'paragraph'" class="blog-post__body_text">
          {{ item.data.text }}
        </div>
        <img
          v-else-if="item.type === 'image'"
          class="blog-post__body_title-img"
          :src="item.data.file.url"
        />
      </div>
      <div class="blog-post__body_subtitle">Подзаголовок</div>
      <div class="blog-post__body_text">
        <!-- <nuxt-content
          class="blog-post__body_text"
          :document="article"
        ></nuxt-content> -->
      </div>
      <div class="blog-post__body_tags">
        <div>Теги:</div>
        <div class="blog-post__body_tags_items">
          <blog-tags :tags="post.tags"></blog-tags>
        </div>
      </div>
      <div class="blog-post__body_footer">
        <div>Поделиться:</div>
        <div class="blog-post__body_footer_links">
          <s-telegram
            :window-features="windowFeatures"
            :share-options="shareOptions"
            :use-native-behavior="useNativeBehavior"
          >
            <img src="~assets/icons/tg.svg" alt="" />
          </s-telegram>
          <button><img src="~assets/icons/instagram.svg" alt="" /></button>
          <s-vkontakte
            :window-features="windowFeatures"
            :use-native-behavior="useNativeBehavior"
            :share-options="shareOptions"
            ><img src="~assets/icons/vk.svg" alt=""
          /></s-vkontakte>
        </div>
      </div>
      <div class="blog-post__body_addition">
        <div class="blog-post__body_addition_description">Читайте также:</div>
        <nuxt-link :to="'/blog'" class="blog-post__body_addition_link"
          >Все статьи</nuxt-link
        >
      </div>
    </div>

    <div class="blog-post__recommendations">
      <blog-item
        v-for="(article, index) in related"
        :key="index"
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
import { STelegram, SVkontakte } from "vue-socials";
import BlogItem from "~/components/blog/item";
import BlogTags from "~/components/blog/tags";

export default {
  components: {
    BlogItem,
    BlogTags,
    STelegram,
    SVkontakte,
  },

  data() {
    return {
      windowFeatures: {},
      shareOptions: {
        url: this.$route.fullPath,
        text: "Игра битва",
      },
      useNativeBehavior: false,
    };
  },
  computed: {
    createDate() {
      const date = new Date(this.post.publishedAt);
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };

      const formatter = new Intl.DateTimeFormat("ru-RU", options);
      //hi
      return formatter.format(date);
    },
  },
  async asyncData({ $axios, params }) {
    try {
      const response = await $axios.get(`api/blog/${params.slug}`);
      if (response.data.success) {
        return {
          post: response.data.data,
          related: response.data.related,
        };
      }
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<style lang="scss" scoped>
.blog-post {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 150px 12px 100px;
  .blog-post__body {
    max-width: 840px;
    position: relative;
    width: 100%;
    background: #3e2a2b;
    border-radius: 13px;
    padding: 24px 32px;
    margin-bottom: 191px;
    .blog-post__body_title {
      font-weight: 700;
      font-size: 48px;
      line-height: 123.6%;
    }

    .blog-post__body_title-img {
      border-radius: 13px;
      margin-top: 24px;
      display: flex;
      width: 100%;
    }

    .blog-post__body_info {
      margin-top: 16px;
      display: flex;
      font-family: "Pangolin";
      font-weight: 400;
      font-size: 12px;
      line-height: 125%;
      letter-spacing: 0.02em;
      gap: 5px;
      height: 15px;
      align-items: center;
    }

    .blog-post__body_subtitle {
      margin-top: 24px;
      color: #f8dc6c;
      font-weight: 700;
      font-size: 32px;
      line-height: 40px;
    }

    .blog-post__body_text {
      margin-top: 16px;
      font-family: "Pangolin";
      font-weight: 400;
      font-size: 16px;
      line-height: 125%;
      letter-spacing: 0.02em;
    }
    .blog-post__body_note {
      background: #513e3e;
      border-radius: 13px;
      margin-top: 24px;
      padding: 24px;
      font-family: "Pangolin";
    }
    .blog-post__body_footer {
      font-family: "Pangolin";
      font-weight: 400;
      font-size: 12px;
      line-height: 125%;
      letter-spacing: 0.02em;
      color: #988c89;
      margin-top: 27px;
      .blog-post__body_footer_links {
        margin-top: 16px;
        display: flex;
        gap: 19px;
      }
    }
    .blog-post__body_tags {
      font-family: "Pangolin";
      font-weight: 400;
      font-size: 12px;
      line-height: 125%;
      letter-spacing: 0.02em;
      color: #988c89;
      margin-top: 27px;
      .blog-post__body_tags_items {
        display: flex;
        gap: 12px;
      }
    }
    .blog-post__body_addition {
      max-width: 840px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      position: absolute;
      bottom: -82px;
      left: 0;
      font-weight: 800;
      @media (max-width: 450px) {
        bottom: -122px;
        flex-direction: column;
        align-items: center;
      }

      .blog-post__body_addition_description {
        font-size: 48px;
        line-height: 123.6%;
        font-weight: 700;
      }
      .blog-post__body_addition_link {
        max-width: 170px;
        background: linear-gradient(270deg, #ffffff 0%, #f8dc6c 100%);
        box-shadow: 0px 0px 30px rgba(255, 255, 255, 0.48);
        border-radius: 16px;
        padding: 12px 42px;
        font-weight: 900;
        font-size: 28px;
        line-height: 35px;
        color: #780e17;
      }
    }
  }
  .blog-post__recommendations {
    max-width: 1550px;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0 5px;
    gap: 20px;
    flex-wrap: wrap;
  }
}
</style>
