<style scoped lang="scss">
    

    .v-block-title
    {
        color: #000;
        transition: color 0.2s ease;
        @include flex(baseline);
    }

    .v-arrow-box
    {
        margin-left: 2px;
        width: 28px;
        height: 28px;
        transition: margin-left .3s cubic-bezier(0.23, 0.74, 0.53, 1.06);
    }

    .v-icon-arrow
    {
        width: 28px;
        height: 28px;
    }

    .v-title-with-link
    {
        display: inline-block;
        &:hover, &:active
        {
            .v-arrow-box {
                margin-left: 8px;
            }
            .v-block-title {
                @include color(secondary);
            }
        }
    }
    
    @media (max-width: 699px) {
        .v-block-title {
            @include kiraFont(s-h1);
        }
    }
</style>

<template>
    <router-link class="v-title-with-link" :to="to">
        <div class="v-block-title kr-font-m-h1">
            <div class="v-text">
                <slot></slot>
            </div>
            <div class="v-arrow-box">
                <icon-arrow-component class="v-icon-arrow" />
            </div>
        </div>
    </router-link>
</template>

<script>
    import { Options, Vue } from "vue-class-component";
    import IconArrowComponent from './icons/IconArrowComponent';

    const Component = Options;
    @Component({
        components: {
            IconArrowComponent
        },
        props: {
            to: String
        }
    })
    export default class TitleWithLinkComponent extends Vue
    {

    }
</script>