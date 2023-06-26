<style scoped lang="scss">
    .vc-icon-success
    {
        display: block;

        width: 184px;
        height: 184px;
    }

    .v-rect-scale-suc {
        transform: translate(-50%, -50%);
        animation: vc-icon-success-rect-scale-anim-suc .48s cubic-bezier(0.59, 0.23, 0.38, 1.24);
    }
    @keyframes vc-icon-success-rect-scale-anim-suc {
        0% { r:0px }
        100% { r:80px }
    }
    .v-path-draw-suc {
        stroke-dasharray: 124;
        stroke-dashoffset: 124;
        animation: vc-icon-success-path-draw-anim-suc .6s cubic-bezier(0.51, 0, 0.26, 1) .3s;
        animation-fill-mode: forwards;
    }
    @keyframes vc-icon-success-path-draw-anim-suc {
        to { stroke-dashoffset: 0; }
    }
    .v-rect-scale-s-suc {
        animation: vc-icon-success-rect-scale-s-anim-suc .15s ease-out .15s;
        animation-fill-mode: forwards;
    }
    @keyframes vc-icon-success-rect-scale-s-anim-suc {
        from { r:0px }
        to { r:4px }
    }
</style>

<template>
    <svg class="vc-icon-success" viewBox="0 0 184 184" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle class="v-rect-scale-suc" cx="184" cy="184" r="80" fill="#F0FFE9"/>
        <circle class="v-rect-scale-s-suc" cx="58.82" cy="91.76" r="0" fill="#91CB82"/>
        <path class="v-path-draw-suc" d="M59 92L86 126L127 58.5" stroke="#91CB82" stroke-width="8" stroke-linecap="round"/>
    </svg>
</template>

<script>
    import { Options, Vue } from "vue-class-component";
    import IconComponent from "../IconComponent";

    @Options({
        components: {
            IconComponent
        },
        props: {

        }
    })
    export default class IconNewsComponent extends Vue {
        icon_svg = require('../../icons_svg/news.svg');
    }
</script>