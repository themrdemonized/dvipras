<style scoped lang="scss">
  $articleWidth: 760px;
  $articleWidthFull: 1024px;
  .v-text-padding {
    padding-left: 40px;
    padding-right: 40px;
  }
  .v-article-wrapper {
    margin-bottom: 32px;
    margin-left: auto;
    margin-right: auto;
    max-width: $articleWidthFull;
  }
  .v-article {
    h1 {
      margin-bottom: 32px;
      margin-top: 12px;
    }
    .v-date {
      @include flex(initial, space-between, $wrap: wrap);
      margin-bottom: 32px;
      @include color(light-2);
    }
  }
  .v-img {
    margin: 32px 0;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid rgba(49, 50, 74, 0.15);
  }

  @media (max-width: 1087px) {
    .v-article-wrapper {
      max-width: $articleWidth;
    }
  }

  @media (max-width: $articleWidth) {
    .v-img {
      border-radius: 0;
    }
    .v-text-padding {
      padding-left: 20px;
      padding-right: 20px;
    }
  }

  @media (max-width: 699px) {
    .v-article {
      h1 {
        @include kiraFont(s-h1);
      }
    }
  }

  @media (max-width: 471px) {
    .v-article-wrapper {
      margin-bottom: 32px;
    }
    .v-article {
      h1 {
        margin-top: 16px;
      }
    }
    .v-img {
      margin: 24px 0;
    }
  }
</style>

<style scoped lang="scss">
  .v-article-wrapper {
    .v-article-text {
      @include kiraFont(m-body-1);
      a {
        @include kiraFont(m-h3);
        border-bottom: 1px solid rgba(15, 53, 128, 0.32);
        transition: all 0.2s ease;
        &:hover, &:active {
          border-bottom: 1px solid rgba(241, 109, 76, 0.32);
        }
      }
    }
  }

  @media (max-width: 699px) {
    .v-article-wrapper {
      .v-article-text {
        @include kiraFont(s-body-1);
        a {
          @include kiraFont(s-body-1);
        }
      }
    }
  }

  @media (max-width: 471px) {
    .v-article-wrapper {
      .v-article-text {
        @include kiraFont(s-body-2);
        a {
          @include kiraFont(s-body-2);
        }
      }
    }
  }

  .v-button-links {
    @include flex(center);
  }

  .v-study-links-button {
    .v-button-arrow {
      transform: none;
      transition: transform 0.3s ease-in-out;
    }
    &.active {
      .v-button-arrow {
        transform: rotate(-180deg);
      }
    }
  }

  .v-button-arrow {
    width: 20px;
    height: 20px;
  }

  .v-study-links {
    margin: 32px 0;
    display: none;
    &.active {
      display: block;
    }
  }

  @media (max-width: 471px) {
    .v-study-links {
      margin: 24px 0;
    }
    .v-date > span {
      margin-bottom: 16px;
    }
  }
</style>

<template>
  <div>
    <div class="kr-body kr-body-no-padding kr-body-margin-top kr-body-margin-bottom">
      <div v-if="article" class="v-article">
        <div class="v-article-wrapper v-text-padding">
          <div class="v-date kr-font-m-body-2">
            <span>{{getStringHumanDate(article.date)}}</span>
            <study-links-toggle-button-component @active="studyLinksToggle"/>
          </div>
        </div>
        <div :class="{
          'v-study-links': true,
          'active': studyLinksActive,
          }">
          <study-links-component :toggleable="true" :toggleCondition="studyLinksActive"/>
        </div>
        <div class="v-article-wrapper v-text-padding">
           <h1 class="kr-font-m-h1">{{article.title}}</h1>
        </div>
        <div class="v-article-wrapper">
          <template v-if="article.content">
            <template v-for="(block, i) in article.content.blocks" :key="i">
              <attachment-image-component
                      v-if="block.type === 'attachment_image'"
                      class="v-img"
                      :attachment="article.attachments.find((attachment) => attachment.id === block.data.attachment_id)" />
              <p
                      class="v-text-padding v-article-text"
                      v-else-if="block.type === 'paragraph'"
                      v-html="block.data.text"></p>
              <h2
                      class="v-text-padding v-paragraph-header"
                      v-else-if="block.type === 'header'"
                      v-html="block.data.text"></h2>
            </template>
          </template>
        </div>
      </div>
    </div>
    <div class="v-study-banner kr-body-margin-top kr-body-margin-bottom">
        <study-banner-component />
    </div>
    <div class="v-news kr-body-margin-top kr-body-margin-bottom">
        <news-preview-block-component />
    </div>
  </div>
</template>

<script>
  import {Options, Vue} from "vue-class-component";
  import TradeArticlesManager from "../lib/trade/TradeArticlesManager";
  import AttachmentImageComponent from "../components/AttachmentImageComponent";
  import DateManager from "../lib/DateManager";

  import StudyBannerComponent from '../components/StudyBannerComponent';
  import FlexButtonComponent from '../components/FlexButtonComponent';
  import StudyLinksComponent from '../components/StudyLinksComponent';
  import IconArrowDownComponent from '../components/icons/IconArrowDownComponent';
  import NewsPreviewBlockComponent from '../components/NewsPreviewBlockComponent';

  import StudyLinksToggleButtonComponent from "../components/StudyLinksToggleButtonComponent";

  const Component = Options;
  @Component({
    components: {
      AttachmentImageComponent,
      IconArrowDownComponent,
      StudyLinksComponent,
      FlexButtonComponent,
      StudyBannerComponent,
      NewsPreviewBlockComponent,
      StudyLinksToggleButtonComponent,
    },
    props: {
      id: [Number, String]
    }
  })
  export default class NewArticle extends Vue
  {
    article = null;
    studyLinksActive = false;

    async beforeMount()
    {
      this.article = await TradeArticlesManager.getArticleById(this.id);
      document.title = `ДВИПРАЗ – ${this.article.title}`;
    }

    studyLinksToggle(active) {
      this.studyLinksActive = active;
    }

    getStringHumanDate(dateStr)
    {
      return DateManager.getStringHumanDateTimeFromString(dateStr);
    }
  }
</script>
