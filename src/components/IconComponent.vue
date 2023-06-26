<style scoped lang="scss">
    .v-icon
    {
        display: block;
    }
</style>

<style lang="scss">
    .v-icon
    {
        svg {
            display: block;
        }
    }
</style>

<template>
    <div class="v-icon" v-html="icon_svg"></div>
</template>

<script>
    import { Options, Vue } from "vue-class-component";

    @Options({
        components: {
        },
        props: {
            icon_svg: String
        }
    })
    export default class IconComponent extends Vue {
    }
</script>