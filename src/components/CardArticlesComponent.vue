<style scoped lang="scss">
    .v-main-title
    {
        @include kiraFont(h1);
        margin-bottom: 32px;
    }

    .v-single-block {
        width: fit-content;
    }

    .v-articles
    {
        display: grid;
        $columns: 3;
        $row-gap: 20px;
        $column-gap: 20px;
        grid-template-columns: repeat($columns, auto);
        row-gap: $row-gap;
        column-gap: $column-gap;
        justify-content: space-between;
        margin-bottom: 32px;
    }
    .v-date
    {
        @include kiraColor(light-2);
    }
    .v-icon-loader
    {
        margin-left: auto;
        margin-right: auto;
        @include kiraColor(light-2);
        margin-top: 8px;
    }
    
    .v-load-button
    {
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }

    .v-icon-loader-btn
    {
        margin-left: auto;
        margin-right: auto;
        @include kiraColor(light-2);
    }

    .v-btn-load
    {   
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: initial;
        flex-direction: initial;
        background-color: var(--kr-color-main-field-border);

        transition: all 1s ease-out;

        width: 156px;
        &:hover
        {
            background-color: var(--kr-color-main-field-border);
        }
    }

    @media (max-width: 1005px)
    {
        .v-articles
        {
            $columns: 2;
            $row-gap: 12px;
            $column-gap: 12px;
            grid-template-columns: repeat($columns, auto);
            row-gap: $row-gap;
            column-gap: $column-gap;
        }
    }

    @media (max-width: 699px)
    {
        .v-articles
        {
            $columns: 2;
            $row-gap: 12px;
            $column-gap: 12px;
            grid-template-columns: repeat($columns, 1fr);
            row-gap: $row-gap;
            column-gap: $column-gap;
        }
    }


    @media (max-width: 471px)
    {
        .v-main-title
        {
            @include kiraFont(s-h1);
            margin-bottom: 16px;
        }
        .v-articles
        {
            $columns: 1;
            $row-gap: 16px;
            $column-gap: 16px;
            grid-template-columns: repeat($columns, 1fr);
            row-gap: $row-gap;
            column-gap: $column-gap;
            margin-bottom: 16px;
        }
    }
</style>

<template>
    <div class="vc-card-articles">
        <div class="v-main-title">
            <slot name="title"></slot>
        </div>
        <div class="v-articles" ref="articles_block">
            <div
                    class="v-single-block"
                    v-for="article in articles"
                    :key="article.id"
            >
                <slot name="article" :article="article"></slot>
            </div>
        </div>
        <div v-if="isLoadingData && isLoadingDataPreview">
            <icon-spinner-component class="v-icon-loader" />
        </div>
        <div class="v-load-button" v-if="isLoadNewArticles">
            <flex-button-component 
                                :class="{'v-btn-load': isLoadingData}" 
                                @click="checkUpdatesBasedOnScreenPosition(), isLoadingDataPreview = false">
                <template v-slot:text>
                    <span class="kr-font-m-button" v-if="!isLoadingData">Загрузить ещё</span>
                    <div v-if="isLoadingData">
                        <icon-spinner-component class="v-icon-loader-btn" />
                    </div>
                </template>
            </flex-button-component>
        </div>
    </div>
</template>

<script>
    import { Options, Vue } from "vue-class-component";
    import TradeArticlesManager from "../lib/trade/TradeArticlesManager";
    import IconSpinnerComponent from "./icons/IconSpinnerComponent";
    import FlexButtonComponent from "@/components/FlexButtonComponent";

    const Component = Options;
    @Component({
        components: {
            FlexButtonComponent,
            IconSpinnerComponent
        },
        props: {
            optionsBase: Object
        }
    })
    export default class CardArticlesComponent extends Vue
    {
        countPages = 0;
        currentPage = 0;

        isLoadNewArticles = false;
        isLoadingDataPreview = true;
        isLoadingData = false;

        articles = [];

        async beforeMount()
        {
            const options = Object.assign({}, this.optionsBase);
            const articlesData = await TradeArticlesManager.getArticles(options);

            this.countPages = Math.ceil(articlesData.meta.count / articlesData.meta.limit);
            this.currentPage = articlesData.meta.page;
            for(let article of articlesData.items)
            {
                this.articles.push(article);
            }

            if (articlesData.meta.count > articlesData.meta.limit) {
                return this.isLoadNewArticles = true
            }

            await this.$nextTick(() => {
                if (this.currentPage < this.countPages) {
                    window.addEventListener('scroll', this.checkUpdatesBasedOnScreenPosition);
                    window.addEventListener("resize", this.checkUpdatesBasedOnScreenPosition);
                    window.addEventListener("orientationchange", this.checkUpdatesBasedOnScreenPosition);
                    this.checkUpdatesBasedOnScreenPosition();
                }
            });
        }

        beforeUnmount()
        {
            window.removeEventListener('scroll', this.checkUpdatesBasedOnScreenPosition);
            window.removeEventListener("resize", this.checkUpdatesBasedOnScreenPosition);
            window.removeEventListener("orientationchange", this.checkUpdatesBasedOnScreenPosition);
        }

        async checkUpdatesBasedOnScreenPosition()
        {
            if(this.isLoadingData)
            {
                return;
            }

            const articlesRect = this.$refs.articles_block.getBoundingClientRect();
            if(articlesRect.top + this.$refs.articles_block.offsetHeight < window.innerHeight)
            {
                this.currentPage++;

                const options = Object.assign({}, this.optionsBase);
                options.page = this.currentPage;

                this.isLoadingData = true;                

                const articlesData = await TradeArticlesManager.getArticles(options);
                for(let article of articlesData.items)
                {
                    this.articles.push(article);
                }

                setTimeout(() => {
                    this.isLoadingData = false;
                }, 1100)

                if(this.currentPage >= this.countPages)
                {
                    window.removeEventListener('scroll', this.checkUpdatesBasedOnScreenPosition);
                    window.removeEventListener("resize", this.checkUpdatesBasedOnScreenPosition);
                    window.removeEventListener("orientationchange", this.checkUpdatesBasedOnScreenPosition);
                    setTimeout(() => {
                        this.isLoadNewArticles = false
                    }, 1100)
                }
                else
                {
                    await this.$nextTick(() => {
                        this.checkUpdatesBasedOnScreenPosition();
                    });
                }
            }
        }
    }
</script>
