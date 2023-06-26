<style scoped lang="scss">
    

    .v-body
    {
        box-sizing: border-box;
        padding: 32px 48px;

        width: 560px;
    }

    .v-title-box
    {
        position: relative;

        text-align: left;

        margin-bottom: 32px;
    }

    .v-title
    {
        display: inline-block;
        vertical-align: middle;

        padding-right: 32px;

        color: var(--kr-color-layout-black-metallic);
        @include kiraFont(h3);
    }

    .v-close-button
    {
        display: inline-block;
        vertical-align: middle;

        position: absolute;

        right: 0;
        top: 8px;
    }

    @media (max-width: 680px)
    {
        .v-body
        {
            width: 100%;
            padding: 48px 20px;
        }

        .v-title-box
        {
            margin-bottom: 24px;
        }
    }

    @media (max-width: 400px)
    {
        .v-body
        {
            padding-top: 32px;
            padding-bottom: 32px;
        }

        .v-title-box
        {
            height: 48px;
        }

        .v-title
        {
            position: absolute;

            top: 50%;

            transform: translateY(-50%);

            @include kiraFont(h4);
        }
    }
</style>

<template>
    <modal-component :is-enabled="isOpened" :mode="modalMode" >
        <div class="v-body">
            <div class="v-title-box">
                <div class="v-title">
                    <slot name="title"></slot>
                </div>
                <close-button-component @click="close" class="v-close-button" />
            </div>

            <slot name="body"></slot>
        </div>
    </modal-component>
</template>

<script>
    import { Options, Vue } from "vue-class-component";
    import ModalComponent from './ModalComponent';
    import CloseButtonComponent from "./CloseButtonComponent";

    const Component = Options;
    @Component({
        components: {
            ModalComponent,
            CloseButtonComponent
        },
        props: {
            isOpened: Boolean
        },
        emits: ['close']
    })
    export default class ModalClosableTitledComponent extends Vue {
        modalMode = 'modal';

        beforeMount()
        {
            this.mediumModeQuery = window.matchMedia('(max-width: 680px)');

            window.addEventListener("resize", this.resizeEvent, false);
            window.addEventListener("orientationchange", this.resizeEvent, false);
            this.resizeEvent();
        }

        beforeUnmount()
        {
            window.removeEventListener("resize", this.resizeEvent, false);
            window.removeEventListener("orientationchange", this.resizeEvent, false);
        }

        resizeEvent()
        {
            if(this.mediumModeQuery.matches)
            {
                this.modalMode = 'fullscreen';
            }
            else
            {
                this.modalMode = 'modal';
            }
        }

        close()
        {
            this.$emit('close');
        }

    }
</script>