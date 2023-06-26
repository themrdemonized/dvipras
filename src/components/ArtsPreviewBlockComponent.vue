<style scoped lang="scss">
    .v-single-block
    {
        text-decoration: none;
    }

    .v-img
    {
        display: block;

        width: 100%;
        height: 173px;
        border-radius: 8px;
        overflow: hidden;
    }

    @media (max-width: 1300px)
    {
        .v-img
        {
            height: 260px;
        }
    }

    @media (max-width: 990px)
    {
        .v-img
        {
            height: 173px;
        }
    }

    @media (max-width: 600px)
    {
        .v-img
        {
            height: calc((100vw - 60px) * (213 / 380));
        }
    }
</style>

<template>
    <div>
        <preview-block-component :items="articles" to="/arts">
            <template v-slot:link>Галерея</template>
            <template v-slot:item="slotProps">
                <router-link class="v-link-box" :to="'/news/' + slotProps.item.id + '_' + cyrillicToTranslit().transform(slotProps.item.title, '_').toLowerCase()"
                >
                    <div class="v-img">
                        <attachment-image-component
                                v-if="slotProps.item.attachments[0]"
                                :attachment="slotProps.item.attachments[0]"/>
                    </div>
                </router-link>
            </template>
            <template v-slot:loading>
                <loader-box-component class="v-img"/>
            </template>
        </preview-block-component>
    </div>
</template>

<script>
    import { Options, Vue } from "vue-class-component";
    import TradeArticlesManager from "../lib/trade/TradeArticlesManager";

    import LoaderBoxComponent from './LoaderBoxComponent';

    import DateManager from "../lib/DateManager";

    import AttachmentImageComponent from "./AttachmentImageComponent";
    import cyrillicToTranslit from "cyrillic-to-translit-js";

    import PreviewBlockComponent from "./PreviewBlockComponent";

    const Component = Options;
    @Component({
        components: {
            LoaderBoxComponent,
            AttachmentImageComponent,
            PreviewBlockComponent
        },
        props: {
        }
    })
    export default class ArtsPreviewBlockComponent extends Vue {
        articles = null;
        cyrillicToTranslit = cyrillicToTranslit;

        async created()
        {
            const articlesData = await TradeArticlesManager.getArticles({ limit: 4, category_id: 2 });
            this.articles = articlesData.items;
        }

        getStringHumanDate(dateStr)
        {
            return DateManager.getStringHumanDateTimeFromString(dateStr);
        }
    }
</script>