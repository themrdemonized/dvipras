<style scoped lang="scss">
  

  .v-card-articles
  {
    margin-right: auto;
    margin-left: auto;
  }

  .v-single-block
  {
    display: block;
    margin-bottom: 16px;
    text-decoration: none;
  }

  .v-img
  {
    width: 308px;
    height: 173px;
    overflow: hidden;
    border-radius: 8px;
  }

  @media (max-width: 1310px)
  {
    .v-img
    {
      width: 464px;
      height: 260px;
    }
  }

  @media (max-width: 1024px)
  {
    .v-img
    {
      width: 276px;
      height: 173px;
    }
  }

  @media (max-width: 640px)
  {
    .v-img
    {
      width: 380px;
      height: 213px;
    }
  }

  @media (max-width: 440px)
  {
    .v-img
    {
      width: 260px;
      height: 146px;
    }
  }
</style>

<template>
  <div class="kr-body kr-body-margin-top kr-body-margin-bottom">
    <card-articles-component class="v-card-articles" :options-base="{ limit: 8, category_id: 2 }">
      <template v-slot:title>Галерея</template>
      <template v-slot:article="slotProps">
        <router-link class="v-single-block"
                     :to="'/news/' + slotProps.article.id + '_' + cyrillicToTranslit().transform(slotProps.article.title, '_').toLowerCase()"
        >
          <div class="v-img">
            <attachment-image-component
                    v-if="slotProps.article.attachments[0]"
                    :attachment="slotProps.article.attachments[0]"/>
            <no-image-component v-else />
          </div>
        </router-link>
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
  export default class Arts extends Vue
  {
    cyrillicToTranslit = cyrillicToTranslit;

    mounted()
    {
      document.title = "Галерея – ТСЖ «Фортуна»";
    }

    getStringHumanDate(dateStr)
    {
      return DateManager.getStringHumanDateTimeFromString(dateStr);
    }
  }
</script>
