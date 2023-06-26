<style scoped lang="scss">
    .v-study-banner-wrapper {
        background-color: rgba(15, 53, 128, 0.08);
        padding: 64px 0;
    }
    
    .v-study-banner {
        @include flex(center, space-between);
    }

    .v-study-submit-text {
        margin-bottom: 32px;
        h2 {
            margin: 0 0 20px 0;
            @include color(primary);
        }
        p {
            @include color(light);
            margin: 0;
        }
    }

    .v-study-points {
        max-width: 293px;
        width: 100%;
        margin-left: 32px;
    }

    .v-study-point {
        @include flex(center);

        + .v-study-point {
            margin-top: 24px;
        }

        p {
            margin: 0;
        }

        .v-study-point-num {
            @include flex(center, center);
            @include color(primary);
            @include kiraFont(m-h3);
            width: 56px;
            height: 56px;
            border-radius: 100%;
            background-color: rgba(15, 53, 128, 0.08);
            margin-right: 16px;
        }

        .v-study-point-text {
            @include kiraFont(m-body-2);
            flex: 1;
        }
    }

    @media (max-width: 1005px) {
        .v-study-banner-wrapper {
            padding: 48px 0;
        }

        .v-study-points {
            display: none;
        }

        .v-study-submit-text {
            margin-bottom: 24px;
            h2 {
                margin: 0 0 12px 0;
            }
        }
    }

    @media (max-width: 699px) {
        .v-study-banner-wrapper {
            padding: 32px 0;
        }
        .v-study-submit-text {
            margin-bottom: 16px;
            h2 {
                @include kiraFont(s-h1);
                margin: 0 0 8px 0;
            }
            p {
                @include kiraFont(s-body-2);
            }
        }
    }

    @media (max-width: 471px) {
        .v-study-banner-wrapper {
            padding: 24px 0;
        }
        .v-study-submit-text {
            margin-bottom: 20px;
            h2 {
                margin: 0 0 12px 0;
            }
        }
    }
</style>

<template>
    <div class="v-study-banner-wrapper">
        <div class="kr-body v-study-banner">
            <div class="v-study-submit">
                <div class="v-study-submit-text">
                    <h2 class="kr-font-m-h1">Обучение в ДВИПРАЗ</h2>
                    <p class="kr-font-m-body-2">Чтобы начать обучение просто отправьте нам ваши контактные данные. Наш специалист свяжется с вами и уточнит всю необходимую информацию.</p>
                </div>
                <div class="v-study-submit-button">
                    <zayavka-button-component></zayavka-button-component>
                </div>
            </div>
            <div class="v-study-points">
                <div class="v-study-point">
                    <p class="v-study-point-num">1</p>
                    <p class="v-study-point-text">Отправьте заявку на обучение</p>
                </div>
                <div class="v-study-point">
                    <p class="v-study-point-num">2</p>
                    <p class="v-study-point-text">Пройдите дистанционное обучение и итоговое тестирование</p>
                </div>
                <div class="v-study-point">
                    <p class="v-study-point-num">3</p>
                    <p class="v-study-point-text">Получите документы о прохождении обучения</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Options, Vue } from "vue-class-component";
    import ZayavkaButtonComponent from "./ZayavkaButtonComponent";

    const Component = Options;
    @Component({
        components: {
            ZayavkaButtonComponent
        },
        props: {

        },
        watch: {
           
        },
        emits: []
    })
    export default class StudyBannerComponent extends Vue {
        
    }
</script>