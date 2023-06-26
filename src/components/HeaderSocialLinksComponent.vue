<style scoped lang="scss">   
    .v-social-links {
        background-color: getColor(light-bg-3);
        border-radius: 4px;
        padding: 8px 0;
        width: fit-content;
        margin: 0 auto;
        margin-top: 8px;
        @include flex(center);
        > a {
            padding: 0 16px;
            + a {
                border-left: 1px solid getColor(light-divider);
            }
        }
    }

    .v-social-links-icon {
        height: 20px;
        width: 20px;
    }
</style>

<template>
    <div class="v-social-links">
        <a href="https://t.me/dvipraz" target="_blank" rel="noopener noreferrer">
            <icon-component class="v-social-links-icon" :icon_svg="require('@/icons_svg/TelegramBlue.svg')" />
        </a>
        <a href="https://vk.com/dvipraz" target="_blank" rel="noopener noreferrer">
            <icon-component class="v-social-links-icon" :icon_svg="require('@/icons_svg/VKBlue.svg')" />
        </a>
        <a href="https://instagram.com/dvipraz.life" target="_blank" rel="noopener noreferrer">
            <icon-component class="v-social-links-icon" :icon_svg="require('@/icons_svg/instagramBlue.svg')" />
        </a>
    </div>
</template>

<script>
    import { Options, Vue } from "vue-class-component";

    import IconComponent from "./IconComponent";

    const Component = Options;
    @Component({
        components: {
            IconComponent,
        },
        props: {
        },
        watch: {
        },
        emits: []
    })
    export default class HeaderSocialLinksComponent extends Vue {
    }
</script>