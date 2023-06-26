<style scoped lang="scss">
    

    .vc-modal
    {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        min-height: 100vh;

        //background: rgba(0, 0, 0, 0.2);
    }

    .v-modal-box
    {
        overflow: hidden;
        min-height: 100vh;

        pointer-events: none;
    }

    .v-back
    {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        background: rgba(0, 0, 0, 0.2);

        pointer-events: auto;
    }

    .v-modal-wrapper
    {
        position: relative;

        padding-top: 128px;
        padding-bottom: 128px;

        text-align: center;

        pointer-events: none;

        &.v-mode-fullscreen
        {
            padding-top: 0;
            padding-bottom: 0;

            min-height: 100vh;
            background: var(--kr-color-main-white);

            .v-modal
            {
                width: 100%;
                border-radius: unset;
                box-shadow: none;
                text-align: center;
            }
        }
    }

    .v-fake-element
    {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        pointer-events: none;
    }

    /*.kr-ios
    {
        .v-modal-wrapper
        {
            &.v-mode-fullscreen
            {
                min-height: -webkit-fill-available;
            }
        }
    }*/

    .v-modal
    {
        position: relative;

        display: inline-block;

        background: var(--kr-color-main-white);
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08), 0 4px 32px rgba(0, 0, 0, 0.16);
        border-radius: 16px;

        overflow: hidden;

        pointer-events: auto;


        transform: none;
    }

    .v-shake
    {
        animation: v-modal-shake 0.56s cubic-bezier(0.27, 0.71, 0.75, 0.32) both;
    }

    @keyframes v-modal-shake {
        10%, 90% {
            transform: translate3d(-1px, 0, 0);
        }

        20%, 80% {
            transform: translate3d(2px, 0, 0);
        }

        30%, 50%, 70% {
            transform: translate3d(-4px, 0, 0);
        }

        40%, 60% {
            transform: translate3d(4px, 0, 0);
        }
    }

    .modal-leave-active
    {
        position: fixed;
        left: 0;
        top: 0;
    }

    .modal-enter-active
    {
        pointer-events: none;

        .v-modal-wrapper,.v-modal
        {
            transition: transform .5s cubic-bezier(0.3, 0.9, 0.5, 1);
        }

        .v-modal
        {
            &.v-elastic-transition
            {
                transition: width 0.38s cubic-bezier(0.56, 0.74, 0.65, 1.05),
                        height 0.44s cubic-bezier(0.68, 0.6, 0.51, 1.13),
                        background 0.1s ease 0.1s, box-shadow 0.44s cubic-bezier(0.68, 0.6, 0.51, 1.13),
                        border-radius 0.35s ease 0.1s, transform 0.4s cubic-bezier(0.5, -0.1, 0.5, 1.1);
                transform: none;

                .v-body
                {
                    transition: opacity 0.2s cubic-bezier(0.61, 0.3, 0.57, 1.1) 0.2s;
                }

                .v-fake-element
                {
                    transition: opacity 0.2s ease 0.1s;
                }
            }
        }

        .v-back
        {
            pointer-events: none;
        }
    }

    .modal-leave-active
    {
        pointer-events: none;

        .v-modal-wrapper,.v-modal
        {
            transition: transform .5s  cubic-bezier(0.54, 0.73, 0.16, 0.95);
        }

        .v-back
        {
            pointer-events: none;
        }

        .v-modal
        {
            pointer-events: none;

            &.v-elastic-transition
            {
                transition: transform .5s cubic-bezier(0.7, -0.2, 0.2, 1);
                transform: none;
            }
        }
    }

    .modal-enter-active,
    .modal-leave-active
    {
        .v-back
        {
            transition: opacity .5s cubic-bezier(0.36, 0.83, 0.48, 0.99);
        }
    }

    .modal-enter-from,
    .modal-leave-to
    {
        .v-back
        {
            opacity: 0;
        }
    }
</style>

<template>
    <teleport to="body">
        <transition name="modal"

                    :duration="440"

                    @before-enter="beforeEnter"
                    @enter="enter"

                    @leave="leave"
                    @before-leave="beforeLeave"
                    @after-leave="afterLeave"
        >
            <screen-component
                    v-if="isDisplay === true"
                    class="vc-modal"
                    body-background="rgba(0, 0, 0, 0.2)"
            >
                <div class="v-back" @click="onClickBack"></div>
                <div class="v-modal-box">
                    <div class="v-modal-wrapper" :class="{ 'v-mode-fullscreen': mode === 'fullscreen' }">
                        <div class="v-modal" ref="modal">
                            <div class="v-body">
                                <slot></slot>
                            </div>
                            <div class="v-fake-element"></div>
                        </div>
                    </div>
                </div>
            </screen-component>
        </transition>
    </teleport>
</template>

<script>
    import { Options, Vue } from "vue-class-component";

    import ScreenComponent from "@/components/base/ScreenComponent";

    const modalTranslateData = {
        el: null
    };

    const Component = Options;
    @Component({
        components: {
            ScreenComponent
        },
        props: {
            isEnabled: {
                type: Boolean,
                default: false
            },
            mode: {
                type: String,
                default: 'modal'
            },
        },
        emits: ['click-outside'],
        watch: {
            isEnabled(newVal) {
                this.lastScrollY = window.scrollY;
                this.isDisplay = !!newVal;
                if(this.$refs.modal)
                {
                    this.$refs.modal.classList.remove("v-shake");
                }
            }
        }
    })
    export default class ModalComponent extends Vue
    {
        isDisplay = false;

        onClickBack()
        {
            if(this.$refs.modal)
            {
                this.$emit('click-outside');
                this.$refs.modal.classList.add("v-shake");
                this.$refs.modal.style.animation = 'none';
                this.$refs.modal.offsetHeight; /* trigger reflow */
                this.$nextTick(() => {
                    this.$refs.modal.style.animation = null;
                });
            }
        }

        beforeEnter(el)
        {

        }

        enter(el)
        {
            if(modalTranslateData.el)
            {
                const modalElement = el.getElementsByClassName("v-modal")[0];

                const fromRect = modalTranslateData.el.getBoundingClientRect();
                const modalRect = modalElement.getBoundingClientRect();

                const fromStyleProp = window.getComputedStyle(modalTranslateData.el,null);

                const newElement = modalTranslateData.el.cloneNode(true);
                newElement.style.pointerEvents = "none";
                newElement.style.position = "absolute";
                newElement.style.transform = "translate(-50%, -50%)";
                newElement.style.top = "50%";
                newElement.style.left = "50%";
                newElement.style.right = "unset";
                newElement.style.bottom = "unset";
                newElement.style.width = fromRect.width + 'px';
                newElement.style.height = fromRect.height + 'px';
                newElement.style.background = fromStyleProp.background;

                const fakeElement = modalElement.getElementsByClassName("v-fake-element")[0];

                fakeElement.style.width = modalElement.width + 'px';
                fakeElement.style.height = modalElement.height + 'px';
                fakeElement.style.background = fromStyleProp.background;
                fakeElement.offsetHeight;

                fakeElement.appendChild(newElement);

                modalElement.style.transformOrigin = `0 0`;

                modalElement.style.width = fromRect.width + 'px';
                modalElement.style.height = fromRect.height + 'px';

                modalElement.style.borderRadius = fromStyleProp.borderRadius;
                modalElement.style.boxShadow = fromStyleProp.boxShadow;

                const deltaX = (fromRect.width - modalRect.width) / 2;

                console.log("----------------------------");
                console.log(`fromRect.y: ${fromRect.y}`);
                console.log(`modalRect.y: ${modalRect.y}`);
                console.log(`lastScrollY: ${this.lastScrollY}`);

                modalElement.style.transform = `translate(${fromRect.x - (modalRect.x - deltaX)}px, ${fromRect.y - modalRect.y}px)`;
                modalElement.style.transition = "none";
                modalElement.offsetHeight; // trigger reflow for safari

                modalElement.classList.add("v-elastic-transition");

                const bodyElement = modalElement.getElementsByClassName("v-body")[0];
                bodyElement.style.opacity = "0";
                bodyElement.style.transition = "none";
                bodyElement.style.position = "absolute";
                bodyElement.style.transform = "translateX(-50%)";
                bodyElement.style.top = "0";
                bodyElement.style.left = "50%";
                bodyElement.offsetHeight;

                modalTranslateData.el.style.opacity = "0.05";

                this.$nextTick(() => {
                    modalElement.style.transition = "";
                    modalElement.style.transform = "";

                    modalElement.style.width = modalRect.width + 'px';
                    modalElement.style.height = modalRect.height + 'px';

                    modalElement.style.borderRadius = "";
                    modalElement.style.boxShadow = "";

                    fakeElement.style.opacity = "0";

                    bodyElement.style.opacity = "";
                    bodyElement.style.transition = "";
                });
            }
            else
            {
                if(this.mode === 'fullscreen')
                {
                    const modalWrapperElement = el.getElementsByClassName("v-modal-wrapper")[0];
                    const rect = modalWrapperElement.getBoundingClientRect();

                    const offsetY = 680 * 0.06;
                    const scale = offsetY / rect.height;
                    const scaleX = 1 - scale;
                    const scaleY = 1 + scale;

                    modalWrapperElement.style.transform = `translateY(${window.innerHeight + offsetY / 2}px) scale(${scaleX}, ${scaleY})`;
                    modalWrapperElement.style.transition = "none";
                    modalWrapperElement.offsetHeight; // trigger reflow for safari

                    this.$nextTick(() => {
                        modalWrapperElement.style.transition = "";
                        modalWrapperElement.style.transform = "";
                    });
                }
                else
                {
                    const modalElement = el.getElementsByClassName("v-modal")[0];
                    const rect = modalElement.getBoundingClientRect();

                    const offsetY = 680 * 0.06;
                    const scale = offsetY / rect.height;
                    const scaleX = 1 - scale;
                    const scaleY = 1 + scale;

                    const borderShadow = 32;

                    modalElement.style.transform = `translateY(${window.innerHeight - 128 + borderShadow + offsetY / 2}px) scale(${scaleX}, ${scaleY})`;
                    modalElement.style.transition = "none";
                    modalElement.offsetHeight; // trigger reflow for safari

                    this.$nextTick(() => {
                        modalElement.style.transition = "";
                        modalElement.style.transform = "";
                    });
                }
            }

        }

        beforeLeave(el)
        {
            el.style.top = `-${this.lastScrollY}px`;
            el.offsetHeight;
        }

        leave(el)
        {
            if(modalTranslateData.el)
            {
                const modalElement = el.getElementsByClassName("v-modal")[0];

                const fromRect = modalTranslateData.el.getBoundingClientRect();
                const modalRect = modalElement.getBoundingClientRect();

                const fromStyleProp = window.getComputedStyle(modalTranslateData.el,null);

                const fakeElement = modalElement.getElementsByClassName("v-fake-element")[0];

                fakeElement.style.width = modalElement.width + 'px';
                fakeElement.style.height = modalElement.height + 'px';
                fakeElement.style.opacity = "1";

                modalElement.style.transformOrigin = `0 0`;

                modalElement.style.width = fromRect.width + 'px';
                modalElement.style.height = fromRect.height + 'px';

                modalElement.style.borderRadius = fromStyleProp.borderRadius;
                modalElement.style.boxShadow = fromStyleProp.boxShadow;

                const deltaX = (fromRect.width - modalRect.width) / 2;

                modalElement.style.transform = `translate(${fromRect.x - (modalRect.x - deltaX)}px, ${fromRect.y - modalRect.y + this.lastScrollY}px)`;

                modalElement.classList.add("v-elastic-transition");

                const bodyElement = modalElement.getElementsByClassName("v-body")[0];
                bodyElement.style.opacity = "0";
                bodyElement.style.position = "absolute";
                bodyElement.style.transform = "translateX(-50%)";
                bodyElement.style.top = "0";
                bodyElement.style.left = "50%";


            }
            else
            {
                if(this.mode === 'fullscreen')
                {
                    const modalWrapperElement = el.getElementsByClassName("v-modal-wrapper")[0];
                    const rect = modalWrapperElement.getBoundingClientRect();

                    const offsetY = 680 * 0.06;
                    const scale = offsetY / rect.height;
                    const scaleX = 1 - scale;
                    const scaleY = 1 + scale;

                    modalWrapperElement.style.transform = `translateY(${window.innerHeight + this.lastScrollY + offsetY / 2}px) scale(${scaleX}, ${scaleY})`;
                }
                else
                {
                    const modalElement = el.getElementsByClassName("v-modal")[0];
                    const rect = modalElement.getBoundingClientRect();

                    const offsetY = 680 * 0.06;
                    const scale = offsetY / rect.height;
                    const scaleX = 1 - scale;
                    const scaleY = 1 + scale;

                    const borderShadow = 32;

                    modalElement.style.transform = `translateY(${window.innerHeight - 128 + this.lastScrollY + borderShadow + offsetY / 2}px) scale(${scaleX}, ${scaleY})`;
                }
            }
        }

        afterLeave(el)
        {
            if(modalTranslateData.el)
            {
                modalTranslateData.el.style.opacity = "1";
                modalTranslateData.el = null;
            }
        }
    }

    export { modalTranslateData }
</script>

