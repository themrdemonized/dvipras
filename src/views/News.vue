<style scoped lang="scss">
  .v-single-block
  {
    display: block;
    max-width: 328px;
  }

  .v-img
  {
    height: 184px;
    margin-bottom: 16px;
    overflow: hidden;
    border-radius: 8px;
  }

  .v-title
  {
    @include kiraFont(m-h3);

    margin-bottom: 8px;
    overflow: hidden;

    color: var(--kr-color-main-plain-text);
  }

  .v-date
  {
    color: var(--kr-color-main-help-text);
  }

  .opacity-article-enter-from
  {
      opacity: 0;
  }

  .opacity-article-enter-active
  {
      transition: opacity 1s ease-in-out
  }

  .opacity-article-enter-to
  {
      opacity: 1;
  }


  @media (max-width: 1087px)
  {
    .v-single-block
    {
      max-width: 300px;
    }
  }

  @media (max-width: 471px)
  {
    .v-single-block
    {
      max-width: initial;
    }
  }
</style>

<template>
  <div class="kr-body kr-body-margin-top kr-body-margin-bottom">
    <card-articles-component class="v-card-articles" :options-base="{ limit: 6, category_id: 1 }">
      <template v-slot:title>Новости</template>
      <template v-slot:article="slotProps">
        <transition name="opacity-article" appear>
          <router-link class="v-single-block"
                      :to="'/news/' + slotProps.article.id + '_' + cyrillicToTranslit().transform(slotProps.article.title, '_').toLowerCase()"
          >
            <div class="v-img">
              <attachment-image-component
                      v-if="slotProps.article.attachments[0]"
                      :attachment="slotProps.article.attachments[0]"/>
              <no-image-component v-else />
            </div>
            <div class="v-title kr-font-h4">{{slotProps.article.title}}</div>
            <div class="v-date kr-font-caption">{{getStringHumanDate(slotProps.article.date)}}</div>
          </router-link>
        </transition>
      </template>
    </card-articles-component>
  </div>
</template>

<script>
  import { Options, Vue } from "vue-class-component";

  import AttachmentImageComponent from "../components/AttachmentImageComponent";

  import DateManager from "../lib/DateManager";
  import cyrillicToTranslit from "cyrillic-to-translit-js";
  import NoImageComponent from "../components/NoImageComponent";

  import CardArticlesComponent from "../components/CardArticlesComponent";

  const Component = Options;
  @Component({
    components: {
      NoImageComponent,
      AttachmentImageComponent,
      CardArticlesComponent
    },
    props: {
    }
  })
  export default class News extends Vue
  {
    cyrillicToTranslit = cyrillicToTranslit;

    mounted()
    {
      document.title = "ДВИПРАЗ - Новости";
    }

    getStringHumanDate(dateStr)
    {
      return DateManager.getStringHumanDateTimeFromString(dateStr);
    }
  }
</script>
