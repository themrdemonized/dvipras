<style scoped lang="scss">
    .v-study-standards {
        @include flex(initial, space-between);
    }
    
    .v-study-standard {
        flex: 1;
        + .v-study-standard {
            margin-left: 32px;
        }
    }

    .v-study-icon {
        margin-bottom: 20px;
        width: 72px;
        height: 72px;
    }

    .v-study-icon-component {
        width: 72px;
    }

    .v-study-text {
        h3 {
            margin: 0 0 12px 0;
        }
        p {
            margin: 0;
        }
    }

    @media (max-width: 1005px) {
        .v-study-standards {
            display: block;
        }
        
        .v-study-standard {
            + .v-study-standard {
                margin-top: 24px;
                margin-left: 0;
            }
        }

        .v-study-icon {
            margin-bottom: 12px;
        }
    }

    @media (max-width: 699px) {
        .v-study-standard {
            + .v-study-standard {
                margin-top: 16px;
            }
        }

        .v-study-text {
            p {
                @include kiraFont(s-body-2);
            }
        }
    }

    @media (max-width: 471px) {
        .v-study-standard {
            + .v-study-standard {
                margin-top: 12px;
            }
        }

        .v-study-icon {
            margin-bottom: 20px;
        }
    }
</style>

<template>
    <div class="kr-body v-study-standards">
        <div class="v-study-standard">
            <div class="v-study-icon">
                <icon-standard-first-component class="v-study-icon-component" />
            </div>
            <div class="v-study-text">
                <h3 class="kr-font-m-h3">Обучим и переподготовим по любым направлениям, в любом регионе России</h3>
                <p class="kr-font-m-body-2">Профпереподготовка и обучение строителей, проектировщиков, изыскателей, специалистов в сфере ЖКХ, по рабочим специальностям, первой помощи, пожарной безопасности, ГО и ЧС, электробезопасности, безопасности дорожного движения, промышленной безопасности, техносферной безопасности, экологии, опасным отходам, работе по высоте, лифтовому хозяйству, обучение спасателей и многим другим направлениям.</p> 
            </div>
        </div>
        <div class="v-study-standard">
            <div class="v-study-icon">
                <icon-standard-iso-component class="v-study-icon-component" />
            </div>
            <div class="v-study-text">
                <h3 class="kr-font-m-h3">Подтвердим сертификацию ИСО, ОДР и РПО</h3>
                <p class="kr-font-m-body-2">Сертификация – подтверждение уровня качества товаров, услуг и систем управления. Наличие сертификата является одним из важнейших преимуществ любой компании и дает возможность выделить себя среди конкурентов. Для укрепления партнерских отношений и лидирующих позиций на рынке, мы предлагаем Вам пройти сертификацию по различным стандартам, а также получить сертификаты ОДР и РПО.</p> 
            </div>
        </div>
        <div class="v-study-standard">
            <div class="v-study-icon">
                <icon-standard-cpo-component class="v-study-icon-component" />
            </div>
            <div class="v-study-text">
                <h3 class="kr-font-m-h3">Вступление в СРО. Помощь при проведении проверок СРО</h3>
                <p class="kr-font-m-body-2">У нас внушительный опыт консультирования по вопросам деятельности саморегулируемых организаций: пакет документов для вступления в СРО, условия страхования компаний, обучение и повышение квалификации сотрудников. Это позволяет клиентам доверять нам и быть уверенными в качественном результате. Благодаря сотрудничеству с ДВИПРАЗ наши клиенты становятся членами авторитетных саморегулируемых организаций.</p> 
            </div>
        </div>
    </div>
</template>

<script>
    import { Options, Vue } from "vue-class-component";

    import IconStandardFirstComponent from "./icons/IconStandardFirstComponent";
    import IconStandardIsoComponent from "./icons/IconStandardIsoComponent";
    import IconStandardCpoComponent from "./icons/IconStandardCpoComponent";

    const Component = Options;
    @Component({
        components: {
            IconStandardCpoComponent,
            IconStandardIsoComponent,
            IconStandardFirstComponent,
        },
        props: {

        },
        watch: {
           
        },
        emits: []
    })
    export default class StudyStandardsComponent extends Vue {
        
    }
</script>