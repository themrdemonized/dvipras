<style scoped lang="scss">
    .v-img-wrapper
    {
        position: relative;

        width: 100%;
        height: 100%;

        img
        {
            position: absolute;

            width: 100%;
            height: 100%;
            object-fit: cover;
        }

    }

    .v-icon-loader
    {
        position: absolute;

        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>

<template>
    <div ref="box" class="v-img-wrapper" :style="{ 'background-color': '#4B2572' }">
        <img v-show="loaded"
             :src="src"
             @load="loaded=true"
             alt=""
        />
        <icon-spinner-component v-if="!loaded" :style="{ color: 'white' }" class="v-icon-loader"/>
    </div>
</template>

<script>
    import { Options, Vue } from "vue-class-component";
    import IconSpinnerComponent from "./icons/IconSpinnerComponent";

    const Component = Options;
    @Component({
        components: {
            IconSpinnerComponent
        },
        props: {
        }
    })
    export default class NoImageComponent extends Vue {
        src = require('../assets/no-image-placeholder.svg');
        loaded = false;
    }
</script>