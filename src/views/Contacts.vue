<style scoped lang="scss">
  .v-wrapper {
    margin-top: 32px;
  }

  .v-heading {
    @include flex(center, space-between);
    h1 {
      @include kiraFont(m-h1);
      margin: 0;
    }
  }
  
  .v-study-heading {
    justify-content: flex-end;
    margin-bottom: 12px;
  }

  .v-study-links {
    display: none;
    margin: 32px 0;
    &.active {
      display: block;
    }
  }

  .v-contacts-wrapper {
    margin-top: 32px;
    margin-bottom: 32px;
  }

  .v-study-banner {
    margin-bottom: 32px;
  }

  .v-contacts-map {
    height: 600px;
  }

  @media (max-width: 1005px) {
    .v-contacts-map {
      height: 480px;
    }
  }

  @media (max-width: 699px) {
    .v-heading {
      display: block;
      h1 {
        @include kiraFont(s-h1);
        margin-bottom: 12px;
      }
    }
    .v-contacts-map {
      height: 400px;
    }
  }

  @media (max-width: 471px) {
    .v-study-links {
      margin: 24px 0;
    }
    .v-contacts-map {
      height: 400px;
    }
  }
</style>

<template>
  <div ref="main_body" class="v-wrapper">
    <div class="v-heading-wrapper">
      <div class="v-heading v-study-heading kr-body">
        <study-links-toggle-button-component @active="studyLinksToggle"/>
      </div>
      <div :class="{
        'v-study-links': true,
        'active': studyLinksActive,
        }">
        <study-links-component :toggleable="true" :toggleCondition="studyLinksActive"/>
      </div>
      <div class="v-heading kr-body">
        <h1>Контакты</h1>
      </div>
    </div>

    <div class="v-contacts-wrapper kr-body">
      <contacts-component />
    </div>

    <div class="v-study-banner">
      <study-banner-component />
    </div>

    <div class="v-news kr-body-margin-bottom">
      <news-preview-block-component />
    </div>
  </div>
</template>

<script>
  import { Options, Vue } from "vue-class-component";

  import StudyLinksComponent from "../components/StudyLinksComponent";
  import StudyLinksToggleButtonComponent from "../components/StudyLinksToggleButtonComponent";

  import ContactsComponent from "../components/ContactsComponent";
  import StudyBannerComponent from "../components/StudyBannerComponent";
  import NewsPreviewBlockComponent from "../components/NewsPreviewBlockComponent";
  import ContactsMapComponent from "../components/ContactsMapComponent";

  const Component = Options;
  @Component({
    components: {
      StudyLinksComponent,
      StudyLinksToggleButtonComponent,
      ContactsComponent,
      StudyBannerComponent,
      NewsPreviewBlockComponent,
      ContactsMapComponent,
    },
    props: {
    }
  })
  export default class Contacts extends Vue
  {
    studyLinksActive = false;
    studyLinksToggle(active) {
      this.studyLinksActive = active;
    }

    async mounted()
    {
      document.title = "ДВИПРАЗ – Контакты";
    }
  }
</script>
