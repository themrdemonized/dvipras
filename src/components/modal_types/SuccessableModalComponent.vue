<style scoped lang="scss">
    

    .v-loader-box
    {
        position: relative;
        height: 472px;
        width: 100%;
        text-align: center;
    }

    .content-shift-enter-active,
    .content-shift-leave-active
    {
        &.v-main,&.v-loader-box
        {
            transition: all .5s cubic-bezier(0.36, 0.83, 0.48, 0.99);
        }
    }

    .content-shift-enter-from,
    .content-shift-leave-to {
        &.v-main,&.v-loader-box
        {
            opacity: 0;
        }
    }

    .content-shift-leave-to {
        &.v-main,&.v-loader-box
        {
            transform: translateX(-20px);
        }
    }
</style>

<template>
    <modal-closable-titled-component :is-enabled="isOpened" @close="$emit('close')">
        <template v-slot:title>
            <slot name="title"></slot>
        </template>
        <template v-slot:body>
            <transition name="content-shift" mode="out-in">
                <div v-if="currentMode === 'enter'" class="v-main">
                    <slot name="main"></slot>
                </div>
                <success-modal-body-component v-else-if="currentMode === 'success'" @ok="$emit('close')">
                    <slot name="success_text"></slot>
                </success-modal-body-component>
                <div v-else class="v-loader-box">
                    <random-loader-spinner-component/>
                </div>
            </transition>
        </template>
    </modal-closable-titled-component>
</template>

<script>
    import { Options, Vue } from "vue-class-component";

    import RandomLoaderSpinnerComponent from '../RandomLoaderSpinnerComponent';
    import ModalClosableTitledComponent from '../ModalClosableTitledComponent';
    import SuccessModalBodyComponent from "../modal_bodys/SuccessModalBodyComponent";

    const Component = Options;
    @Component({
        components: {
            RandomLoaderSpinnerComponent,
            ModalClosableTitledComponent,
            SuccessModalBodyComponent
        },
        props: {
            isOpened: Boolean,
            mode: {
                default: 'enter',
                type: String
            }
        },
        watch: {
            mode: function(newVal) {
                this.currentMode = newVal;
            },
            isOpened: function(newVal) {
                if(newVal) {
                    this.currentMode = 'enter';
                }
            }
        },
        emits: ['close']
    })
    export default class SuccessableModalComponent extends Vue
    {
        currentMode = null;

        beforeMount()
        {
            this.currentMode = this.mode;
        }

    }
</script>
