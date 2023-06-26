<style scoped lang="scss">
    .v-svg {
        background-color: kiraColor(primary);
        border-radius: 4px;
        &:hover {
            background-color: kiraColor(secondary);
        }
    }
</style>

<template>
    <icon-component :class="{
        'v-svg': !transparent
        }" :icon_svg="icon_svg" />
</template>

<script>
    import { Options, Vue } from "vue-class-component";
    import IconComponent from "../IconComponent";

    @Options({
        components: {
            IconComponent
        },
        props: {
            transparent: {
                type: Boolean,
                default: false
            },
            small: {
                type: Boolean,
                default: false
            }
        }
    })
    export default class IconVkComponent extends Vue {
        icon_svg = this.small ? require('../../icons_svg/vk_small.svg') : require('../../icons_svg/vk.svg');
    }
</script>