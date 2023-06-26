<style scoped lang="scss">
    $hamburger-padding-x           : 0px !default;
    $hamburger-padding-y           : 0px !default;
    $hamburger-layer-width         : 14px !default;
    $hamburger-layer-height        : 2px !default;
    $hamburger-layer-spacing       : 2px !default;
    $hamburger-layer-color         : #fff !default;
    $hamburger-layer-border-radius : 0px !default;
    $hamburger-hover-opacity       : 1.0 !default;
    $hamburger-active-layer-color  : $hamburger-layer-color !default;
    $hamburger-active-hover-opacity: $hamburger-hover-opacity !default;

    // To use CSS filters as the hover effect instead of opacity,
    // set $hamburger-hover-use-filter as true and
    // change the value of $hamburger-hover-filter accordingly.
    $hamburger-hover-use-filter   : false !default;
    $hamburger-hover-filter       : opacity(50%) !default;
    $hamburger-active-hover-filter: $hamburger-hover-filter !default;

    // Types (Remove or comment out what you don’t need)
    $hamburger-types: (
            /*3dx,*/
            /*3dx-r,*/
            /*3dy,*/
            /*3dy-r,*/
            /*3dxy,*/
            /*3dxy-r,*/
            /*arrow,*/
            /*arrow-r,*/
            /*arrowalt,*/
            /*arrowalt-r,*/
            /*arrowturn,*/
            /*arrowturn-r,*/
            /*boring,*/
            /*collapse,*/
            /*collapse-r,*/
            /*elastic,*/
            /*elastic-r,*/
            /*emphatic,*/
            /*emphatic-r,*/
            /*minus,*/
            slider,
            /*slider-r,*/
            /*spring,*/
            /*spring-r,*/
            /*stand,*/
            /*stand-r,*/
            /*spin,*/
            /*spin-r,*/
            /*squeeze,*/
            /*vortex,*/
            /*vortex-r*/
    ) !default;

    @import "../../../node_modules/hamburgers/_sass/hamburgers/hamburgers";

    .hamburger--slider {
        .hamburger-inner {
            &::before {
                content: none;
            }
            &::after {
                top: 5px;
            }
        }
        &.is-active {
            .hamburger-inner {
                &::after {
                    transform: translate3d(0, -5px, 0) rotate(-90deg)
                }
            }
        }
    }
</style>

<template>
    <div class="hamburger hamburger--slider" :class="{ 'is-active': active }">
        <div class="hamburger-box">
            <div class="hamburger-inner"></div>
        </div>
    </div>
</template>

<script>
    import { Options, Vue } from "vue-class-component";

    const Component = Options;
    @Component({
        components: {
        },
        props: {
            active: {
                type: Boolean,
                default: false
            }
        }
    })
    export default class HamburgersComponent extends Vue
    {
    }
</script>