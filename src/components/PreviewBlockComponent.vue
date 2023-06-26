<style scoped lang="scss">

    .v-single-block
    {
        display: inline-block;
        width: 328px;

        + .v-single-block {
            margin-left: 20px;
        }

        vertical-align: text-top;
    }

    .v-block-title
    {
        margin-bottom: 32px;
    }

    @media (max-width: 1005px)
    {
        .v-block-title
        {
            margin-bottom: 24px;
        }

        .v-single-block
        {
            width: 300px;
            + .v-single-block {
                margin-left: 12px;
            }
        }
    }

    @media (max-width: 699px)
    {
        .v-block-title
        {
            margin-bottom: 16px;
            @include kiraFont(s-h1);
        }
    }

    @media (max-width: 471px)
    {
        .v-single-block
        {
            width: 264px;
            + .v-single-block {
                margin-left: 16px;
            }
        }
    }
</style>

<style lang="scss">
    .v-preview-block
    {
        .splide__arrows,.splide__pagination
        {
            visibility: hidden;
        }
    }
</style>

<template>
    <div>
        <div class="v-block-title">
            <title-with-link-component :to="to">
                <slot name="link"></slot>
            </title-with-link-component>
        </div>
        <div class="v-preview-block">
            <template v-if="items">
                <template v-if="useSlider">
                    <splide :options="splideOptions">
                        <template v-for="item in items">
                            <splide-slide>
                                <div class="v-single-block">
                                    <slot name="item" :item="item"></slot>
                                </div>
                            </splide-slide>
                        </template>
                    </splide>
                </template>
                <template v-else>
                    <template v-for="item in items">
                        <div class="v-single-block">
                            <slot name="item" :item="item"></slot>
                        </div>
                    </template>
                </template>
            </template>
            <template v-else>
                <template v-if="useSlider">
                    <splide :options="splideOptions">
                        <template v-for="numBlock in 3">
                            <splide-slide>
                                <div class="v-single-block">
                                    <slot name="loading"></slot>
                                </div>
                            </splide-slide>
                        </template>
                    </splide>
                </template>
                <template v-else>
                    <template v-for="numBlock in 3">
                        <div class="v-single-block">
                            <slot name="loading"></slot>
                        </div>
                    </template>
                </template>
            </template>
        </div>
    </div>
</template>

<script>
    import { Options, Vue } from "vue-class-component";

    import LoaderBoxComponent from './LoaderBoxComponent';

    import TitleWithLinkComponent from './TitleWithLinkComponent';

    import { Splide, SplideSlide } from '@splidejs/vue-splide';
    import '@splidejs/splide/dist/css/themes/splide-default.min.css';



    const Component = Options;
    @Component({
        components: {
            LoaderBoxComponent,
            Splide,
            SplideSlide,
            TitleWithLinkComponent
        },
        props: {
            to: String,
            items: Array
        }
    })
    export default class PreviewBlockComponent extends Vue {
        useSlider = true;

        modeQueryMax600px = null;

        splideOptions = {
            rewind : true,
            padding: {
                right: '20px',
                left : '20px',
            },
            autoWidth: true,
            focus    : 'left',
            gap    : '20px',
        };

        mounted()
        {
            this.modeQueryMax600px = window.matchMedia('(max-width: 600px)');

            window.addEventListener("resize", this.resizeViewport, false);
            window.addEventListener("orientationchange", this.resizeViewport, false);
            this.resizeViewport();
        }

        beforeUnmount()
        {
            window.removeEventListener("resize", this.resizeViewport, false);
            window.removeEventListener("orientationchange", this.resizeViewport, false);
        }

        resizeViewport()
        {
            if(this.modeQueryMax600px.matches)
            {
                this.useSlider = true;
            }
            else
            {
                this.useSlider = false;
            }
        }
    }
</script>