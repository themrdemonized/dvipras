<style scoped lang="scss">   
    .v-header-sub-button {
        @include flex(center, center);
        color: #fff;
        padding: 8px 16px;
        background-color: kiraColor(secondary);
        border-radius: 4px;
        min-width: 127px;
        min-height: 40px;
        @include kiraFont('s-button');
        transition: background-color 0.2s ease;
        &:hover, &:active {
            background-color: kiraColor(primary);
        }
    }
</style>

<template>
    <a class="v-header-sub-button" href="/___ Прайс АНО ДПО ДВИПРАЗ на 01.06.2023.pdf" target="_blank" rel="noopener noreferrer">Прайс 2023</a>
</template>

<script>
    import { Options, Vue } from "vue-class-component";

    const Component = Options;
    @Component({
        components: {
        },
        props: {
        },
        watch: {
        },
        emits: []
    })
    export default class PriceButtonComponent extends Vue {

    }
</script>