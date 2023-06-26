<style scoped lang="scss">
    

    .v-kira-logo
    {
        width: 124px;
        height: 48px;

        color: black;
    }
</style>

<template>
    <a target="_blank" rel="noreferrer" href="https://4ait.ru" tabindex="0">
        <icon-kira-logo-component class="v-kira-logo"/>
    </a>
</template>

<script>
    import { Options, Vue } from "vue-class-component";

    import IconKiraLogoComponent from "./icons/IconKiraLogoComponent";

    const Component = Options;
    @Component({
        components: {
            IconKiraLogoComponent
        },
        props: {

        }
    })
    export default class KiraLogoComponent extends Vue {
    }
</script>