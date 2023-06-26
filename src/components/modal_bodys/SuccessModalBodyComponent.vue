<style scoped lang="scss">
    

    .vc-success-modal-body
    {
        height: 472px;
        width: 100%;
        text-align: center;
    }

    .v-success-icon
    {
        display: inline-block;
        margin-top: 44px;
        margin-bottom: 44px;
    }

    .v-success-title
    {
        color: var(--kr-color-main-plain-text);
        margin-bottom: 16px;
        opacity: 0;

        animation: vc-request-modal-display-block .48s cubic-bezier(0.59, 0.23, 0.38, 1.24) 0.5s;
        animation-fill-mode: forwards;
    }

    .v-success-text
    {
        color: var(--kr-color-main-help-text);
        margin-bottom: 32px;
        opacity: 0;

        animation: vc-request-modal-display-block .48s cubic-bezier(0.59, 0.23, 0.38, 1.24) 0.8s;
        animation-fill-mode: forwards;
    }

    .v-success-ok
    {
        opacity: 0;
        animation: vc-request-modal-display-block .48s cubic-bezier(0.59, 0.23, 0.38, 1.24) 0.5s;
        animation-fill-mode: forwards;
        margin: 0 auto;
    }

    .v-success-ok-text
    {
        width: 240px;
    }

    @keyframes vc-request-modal-display-block {
        0% {
            transform: translateY(-20px);
            opacity: 0;
        }
        100% {
            transform: translateY(0px);
            opacity: 1;
        }
    }

    @media (max-width: 680px)
    {
        .v-success-icon
        {
            margin-top: 36px;
            margin-bottom: 36px;
        }

        .v-success-text
        {
            margin-bottom: 24px;
        }

        .v-success-ok
        {
            width: 100%;
        }

        .v-success-ok-text
        {
            width: unset;
        }
    }
</style>

<template>
    <div class="vc-success-modal-body">
        <icon-success-component class="v-success-icon" />
        <div class="kr-font-h3 v-success-title">Спасибо!</div>

        <div class="kr-font-body-2 v-success-text">
            <slot></slot>
        </div>
        <flex-button-component class="v-success-ok" mode="text-only" @action="$emit('ok')">
            <template v-slot:text>
                <div class="v-success-ok-text">Готово</div>
            </template>
        </flex-button-component>
    </div>
</template>

<script>
    import { Options, Vue } from "vue-class-component";
    import IconSuccessComponent from "../icons/IconSuccessComponent";
    import FlexButtonComponent from "../FlexButtonComponent";

    const Component = Options;
    @Component({
        components: {
            IconSuccessComponent,
            FlexButtonComponent
        },
        props: {
        },
        emits: ['ok']
    })
    export default class SuccessModalBodyComponent extends Vue {


    }
</script>