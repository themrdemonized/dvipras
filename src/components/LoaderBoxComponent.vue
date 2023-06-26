<style scoped lang="scss">
    .v-loader-box
    {
        $backgroundColor: #E1E1E8;

        display: inline-block;
        border-radius: 8px;

        animation: v-loader-box-slide 3s ease infinite;

        background: linear-gradient(325deg, $backgroundColor,$backgroundColor,$backgroundColor,$backgroundColor,
                $backgroundColor,$backgroundColor,$backgroundColor,$backgroundColor,$backgroundColor,$backgroundColor,
                $backgroundColor,$backgroundColor,
                #F1F1F5,
                $backgroundColor,$backgroundColor,$backgroundColor,$backgroundColor,
                $backgroundColor,$backgroundColor,$backgroundColor,$backgroundColor,$backgroundColor,$backgroundColor,
                $backgroundColor,$backgroundColor);
        background-size: 6000% 6000%;
    }

    @keyframes v-loader-box-slide {
        0% {
            background-position: 55% 55%;
        }
        100% {
               background-position: 45% 45%;
           }
    }
</style>

<template>
    <div class="v-loader-box"></div>
</template>

<script>
    import { Options, Vue } from "vue-class-component";

    const Component = Options;
    @Component({
        components: {
        },
        props: {

        }
    })
    export default class LoaderBoxComponent extends Vue {
    }
</script>