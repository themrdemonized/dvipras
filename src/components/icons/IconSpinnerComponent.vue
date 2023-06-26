<style scoped lang="scss">
    .vc-icon-spinner
    {
        display: block;

        width: 28px;
        height: 28px;

        rect
        {
            animation-duration: 0.8333333333333334s;
            animation-name: v-svg-loader-img;
            animation-iteration-count: infinite;

            opacity: 0;

            &.rect1
            {
                animation-delay: -0.7291666666666667s;
            }

            &.rect2
            {
                animation-delay: -0.625s;
            }

            &.rect3
            {
                animation-delay: -0.5208333333333334s;
            }

            &.rect4
            {
                animation-delay: -0.4166666666666667s;
            }

            &.rect5
            {
                animation-delay: -0.3125s;
            }

            &.rect6
            {
                animation-delay: -0.20833333333333334s;
            }

            &.rect7
            {
                animation-delay: -0.10416666666666667s;
            }

            &.rect8
            {
                animation-delay: 0s;
            }
        }
    }

    @keyframes v-svg-loader-img {
        from {
            opacity: 1;
        }

        to {
            opacity: 0;
        }
    }
</style>

<template>
    <svg class="vc-icon-spinner" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19">
        <g transform="rotate(0 9.5 9.5)">
            <rect class="rect1" x="8" y="1" rx="1.2" ry="1.2" width="2.5" height="5" fill="currentColor"></rect>
        </g>
        <g transform="rotate(45 9.5 9.5)">
            <rect class="rect2" x="8" y="1" rx="1.2" ry="1.2" width="2.5" height="5" fill="currentColor"></rect>
        </g>
        <g transform="rotate(90 9.5 9.5)">
            <rect class="rect3" x="8" y="1" rx="1.2" ry="1.2" width="2.5" height="5" fill="currentColor"></rect>
        </g>
        <g transform="rotate(135 9.5 9.5)">
            <rect class="rect4" x="8" y="1" rx="1.2" ry="1.2" width="2.5" height="5" fill="currentColor"></rect>
        </g>
        <g transform="rotate(180 9.5 9.5)">
            <rect class="rect5" x="8" y="1" rx="1.2" ry="1.2" width="2.5" height="5" fill="currentColor"></rect>
        </g>
        <g transform="rotate(225 9.5 9.5)">
            <rect class="rect6" x="8" y="1" rx="1.2" ry="1.2" width="2.5" height="5" fill="currentColor"></rect>
        </g>
        <g transform="rotate(270 9.5 9.5)">
            <rect class="rect7" x="8" y="1" rx="1.2" ry="1.2" width="2.5" height="5" fill="currentColor"></rect>
        </g>
        <g transform="rotate(315 9.5 9.5)">
            <rect class="rect8" x="8" y="1" rx="1.2" ry="1.2" width="2.5" height="5" fill="currentColor"></rect>
        </g>
    </svg>
</template>

<script>
    import { Options, Vue } from "vue-class-component";

    @Options({
        components: {

        },
        props: {

        }
    })
    export default class IconSpinnerComponent extends Vue {
    }
</script>