<style scoped lang="scss">
    .v-links {
        display: grid;
        grid-auto-flow: column;

        $rows: 5;
        $columns: 4;
        $row-gap: 12px;
        $column-gap: 20px;
        grid-template-rows: repeat($rows, 1fr);  
        grid-template-columns: repeat($columns, 1fr);
        row-gap: $row-gap;
        column-gap: $column-gap;
        
        &.toggleable {
            overflow: hidden;
            max-height: 0;
        }

        &.active {
            max-height: initial;
        }
        a {
            @include kiraFont(s-button);
            display: inline-block;
        }
    }
    @media (max-width: 1005px) {
        .v-links {
            $rows: 10;
            $columns: 2;
            $row-gap: 12px;
            $column-gap: 20px;
            grid-template-rows: repeat($rows, 1fr);  
            grid-template-columns: repeat($columns, 1fr);
            row-gap: $row-gap;
            column-gap: $column-gap;
        }
    }
    
    @media (max-width: 471px) {
        .v-links {
            display: block;
            > div {
                + div {
                    margin-top: 12px;
                }
            }
        }
    }
</style>

<template>
    <div :class="{
        'kr-body': true,
        'v-links': true,
        'toggleable': toggleable,
        'active': toggleCondition,
        }">
        <div v-for="(article, i) in articles" :key="i">
            <router-link :to="'/news/' + article.id + '_' + cyrillicToTranslit().transform(article.title, '_').toLowerCase()">{{ article.title }}</router-link>
        </div>
    </div>
</template>

<script>
    import { Options, Vue } from "vue-class-component";

    import TradeArticlesManager from "../lib/trade/TradeArticlesManager";
    import cyrillicToTranslit from "cyrillic-to-translit-js";

    const Component = Options;
    @Component({
        components: {
            TradeArticlesManager,
            cyrillicToTranslit,
        },
        props: {
            toggleable: {
                type: Boolean,
                default: false
            },
            toggleCondition: {
                type: Boolean,
                default: false,
            }
        },
        watch: {
           
        },
        emits: []
    })
    export default class StudyLinksComponent extends Vue {
        articles = null;
        cyrillicToTranslit = cyrillicToTranslit;

        async created()
        {
            const articlesData = await TradeArticlesManager.getArticles({ limit: 20, category_id: 2 });

            // Sort according to Figma
            let articleSorting = [
                `Охрана труда`.toLowerCase(),
                `Пожарная безопасность`.toLowerCase(),
                `Промышленная безопасность`.toLowerCase(),
                `Электробезопасность`.toLowerCase(),
                `Первая помощь и СИЗ`.toLowerCase(),
                `Рабочие профессии`.toLowerCase(),
                `Работы на высоте 1, 2, 3 группа`.toLowerCase(),
                `Экологическая безопасность`.toLowerCase(),
                `СОУТ и профриски`.toLowerCase(),
                `Самоходная техника (Гостехнадзор)`.toLowerCase(),
                `Обучение ГО и ЧС`.toLowerCase(),
                `Безопасность дорожного движения и ДОПОГ`.toLowerCase(),
                `Непрерывное медицинское образование (НМО)`.toLowerCase(),
                `Обучение пожарных и спасателей`.toLowerCase(),
                `Противодействие терроризму и экстремизму`.toLowerCase(),
                `Повышение квалификации и профпереподготовка`.toLowerCase(),
                `Обучение педагогов`.toLowerCase(),
                `Обучение строителей и проектировщиков (СРО)`.toLowerCase(),
                `Противодействие коррупции`.toLowerCase(),
                `Сертификация`.toLowerCase(),
                `Сертификация ИСО`.toLowerCase(),
            ];
            this.articles = articlesData.items;
            this.articles.sort((a, b) => articleSorting.indexOf(a.title.toLowerCase()) - articleSorting.indexOf(b.title.toLowerCase()));
        }
    }
</script>