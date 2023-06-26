<style scoped lang="scss">
    .vc-screen
    {
        position: relative;
        width: 100%;

        &.v-locked
        {
            position: fixed;
            overflow: visible;
            height: 100vh;
            width: 100%;
            top: 0;
            left: 0;

            .v-wrapper
            {
                position: absolute;
            }
        }
    }

    .v-wrapper
    {
        position: relative;
        width: 100%;
    }
</style>

<style>
    body.lock-position {
        height: 100%;
        overflow: hidden;
        width: 100%;
        position: fixed;
    }
</style>

<template>
    <div class="vc-screen"
         :class="{ 'v-locked': screenLocked }"
         :style="{ zIndex: zIndex }"
    >

        <div class="v-wrapper"
             :style="{ transform: elementTranslatePos }"
        >
            <slot></slot>
        </div>

    </div>
</template>

<script>
    import { Options, Vue } from "vue-class-component";

    class ScreensFactory
    {
        screens = []

        add(screen)
        {
            if(this.screens.length > 0)
            {

                this.screens[this.screens.length - 1].autoLock();
            }

            screen.zIndex = this.screens.length;
            this.screens.push(screen);

            this.initNewBackground(screen);
        }

        remove(screen)
        {
            for(let i=0;i<this.screens.length;i++)
            {
                if(this.screens[i] === screen)
                {
                    if(i === this.screens.length - 1 && i > 0)
                    {
                        const lastScreen = this.screens[i - 1];

                        lastScreen.autoUnlock();
                        this.initNewBackground(lastScreen);
                    }

                    this.screens.splice(i, 1);
                    break;
                }
            }
        }

        initNewBackground(screen)
        {
            if(screen.bodyBackground)
            {
                document.body.style.background = screen.bodyBackground;
            }
            else
            {
                document.body.style.background = '';
            }
        }

    }

    const screensFactory = new ScreensFactory();

    const Component = Options;
    @Component({
        components: {
        },
        props: {
            lock: {
                type: Boolean,
                default: false
            },
            bodyBackground: String
        },
        computed: {
            screenLocked() {
                return this.autoLocked || this.lock;
            }
        },
        watch: {
            lock() {
                this.tryUpdateLock();
            }
        }
    })
    export default class ScreenComponent extends Vue
    {
        autoLocked = false;

        lastScreenLocked = false;
        lastTranslatePos = null;
        elementTranslatePos = null;

        zIndex = 0;

        beforeMount()
        {
            screensFactory.add(this);
        }

        mounted()
        {
            window.scrollTo({
               top: 0
            });
        }

        beforeUnmount()
        {
            screensFactory.remove(this);
        }

        tryUpdateLock()
        {
            if(this.lastScreenLocked === this.screenLocked)
            {
                return;
            }

            this.lastScreenLocked = this.screenLocked;

            if(this.lastScreenLocked)
            {
                this.lastTranslatePos = window.scrollY;
                this.elementTranslatePos = `translateY(-${this.lastTranslatePos}px)`;
            }
            else
            {
                if(this.lastTranslatePos !== null && this.lastTranslatePos !== undefined)
                {
                    const scrollTop = this.lastTranslatePos;
                    this.$nextTick(() => {
                        window.scrollTo({
                            top: scrollTop
                        });
                    });
                    this.lastTranslatePos = undefined;
                }
                this.elementTranslatePos = null;
            }
        }

        autoLock()
        {
            this.autoLocked = true;
            this.tryUpdateLock();
        }

        autoUnlock()
        {
            this.autoLocked = false;
            this.tryUpdateLock();
        }
    }

    export { screensFactory, ScreenComponent }
</script>