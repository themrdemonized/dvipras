<style scoped lang="scss">
    

    .v-box
    {
        width: 171.19px;
        height: 48px;

        /* Main/Light Divider */
        border: 1px solid #E1E1E8;
        box-sizing: border-box;
        border-radius: 8px;

        -webkit-tap-highlight-color: transparent;
    }

    .v-logo
    {
        position: absolute;

        width: 32px;
        height: 32px;

        left: 12px;
        top: 50%;

        transform: translateY(-50%);
    }

    .v-text
    {
        position: absolute;

        width: 98px;

        left: 56px;
        top: 50%;

        transform: translateY(-50%);

        text-align: left;

        color: var(--kr-color-main-help-text);
    }
</style>

<template>
    <a class="v-box" target="_blank" rel="noreferrer" href="https://4ait.ru" tabindex="0">
        <icon-logo4-a-component class="v-logo"/>
        <div class="v-text kr-font-caption">Разработано<br/>в компании 4А</div>
    </a>
</template>

<script>
    import { Options, Vue } from "vue-class-component";

    import IconLogo4AComponent from "./icons/IconLogo4AComponent";

    const Component = Options;
    @Component({
        components: {
            IconLogo4AComponent
        },
        props: {

        }
    })
    export default class DevelopedBy4AComponent extends Vue {


    }
</script>