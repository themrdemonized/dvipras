<style scoped lang="scss">

    .v-banner {
        background: url('../assets/home-banner3.png');
        background-size: cover;
        background-position: center center;
        width: 100%;
        height: 440px;
    }

    .v-banner-inner {
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.68) 0%, rgba(0, 0, 0, 0.3604) 56.25%, rgba(0, 0, 0, 0) 100%);
        padding: 72px 0 96px 0;
        color: #fff;
    }

    .v-banner-text-container {
        max-width: 763px;
        margin-bottom: 32px;
        h1 {
            margin: 0 0 20px 0;
        }
        p {
            margin: 0;
        }
    }

    @media (max-width: 1005px) {
        .v-banner {
            height: 440px;
        }
        .v-banner-inner {
            padding: 56px 0;
        }
    }

    @media (max-width: 699px) {
        .v-banner {
            height: 348px;
        }
        .v-banner-inner {
            padding: 48px 0;
        }
        .v-banner-text-container {
            margin-bottom: 20px;
            h1 {
                margin: 0 0 12px 0;
                @include kiraFont(s-h2);
            }
            p {
                @include kiraFont(s-body-2);
            }
        }
        .v-banner-button {
            span {
                @include kiraFont(s-button);
            }
        }
    }

    @media (max-width: 471px) {
        .v-banner {
            height: 284px;
        }
        .v-banner-inner {
            padding: 40px 0;
        }
        .v-banner-text-container {
            h1 {
                @include kiraFont(m-h3);
            }
        }
    }

    .v-contacts-wrapper {
        background: linear-gradient(180deg, rgba(15, 53, 128, 0) 0%, rgba(15, 53, 128, 0.08) 30.21%);
    }

    .v-contacts {
        padding-top: 64px;
        padding-bottom: 64px;
        border-bottom: 1px solid #D9D9D9;
    }

    .v-contacts-header {
        @include color(light-3);
        margin: 0 0 32px 0;
    }

    @media (max-width: 1005px) {
        .v-contacts {
            padding-top: 48px;
            padding-bottom: 48px;
        }
        .v-contacts-header {
            margin-bottom: 24px;
        }
    }

    @media (max-width: 699px) {
        .v-contacts {
            padding-top: 32px;
            padding-bottom: 32px;
        }
        .v-contacts-header {
            @include kiraFont(s-h1);
            margin-bottom: 16px;
        }
    }

    @media (max-width: 471px) {
        .v-contacts {
            padding-top: 24px;
            padding-bottom: 24px;
        }
    }
</style>

<template>
    <div>
        <div class="v-banner kr-body-margin-bottom">
            <div class="v-banner-inner">
                <div class="kr-body">
                    <div class="v-banner-text-container">
                        <h1 class="kr-font-m-h2">Оценка профессиональных рисков (ОПР) на самых выгодных и удобных для Вас условиях!</h1>
                    </div>
                    <div class="v-banner-button-container">
                        <zayavka-button-component :transparent="true"></zayavka-button-component>
                    </div>
                </div>
            </div>
        </div>

        <div class="v-study-links kr-body-margin-top kr-body-margin-bottom">
            <study-links-component />
        </div>

        <div class="v-news kr-body-margin-top kr-body-margin-bottom">
            <news-preview-block-component />
        </div>

        <div class="v-study-banner kr-body-margin-top kr-body-margin-bottom">
            <study-banner-component />
        </div>

        <div class="v-study-standards kr-body-margin-top kr-body-margin-bottom">
            <study-standards-component />
        </div>

        <div class="kr-body-margin-top">
            <div class="v-contacts-wrapper">
                <div class="kr-body">
                    <div class="v-contacts">
                        <h2 class="v-contacts-header kr-font-m-h1">Контакты</h2>
                        <contacts-component />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import { Options, Vue } from "vue-class-component";

  import LoaderBoxComponent from '../components/LoaderBoxComponent';
  import NewsPreviewBlockComponent from '../components/NewsPreviewBlockComponent';
  import ArtsPreviewBlockComponent from '../components/ArtsPreviewBlockComponent';
  import StudyLinksComponent from '../components/StudyLinksComponent';
  import StudyBannerComponent from '../components/StudyBannerComponent';
  import StudyStandardsComponent from '../components/StudyStandardsComponent';
  import ContactsComponent from '../components/ContactsComponent';

  import FlexButtonComponent from "../components/FlexButtonComponent";
  import ZayavkaButtonComponent from "../components/ZayavkaButtonComponent";

  const Component = Options;
  @Component({
    components: {
        LoaderBoxComponent,
        NewsPreviewBlockComponent,
        ArtsPreviewBlockComponent,
        FlexButtonComponent,
        StudyLinksComponent,
        StudyStandardsComponent,
        StudyBannerComponent,
        ContactsComponent,
        ZayavkaButtonComponent,
    },
    props: {

    }
  })
  export default class Home extends Vue {
      isMouseUser = true;

      mounted()
      {
          document.title = "ДВИПРАЗ";
      }

      clicked()
      {
          this.isMouseUser = true;
      }

      pressedKeyboard(event)
      {
          this.isMouseUser = false;
      }

  }
</script>
