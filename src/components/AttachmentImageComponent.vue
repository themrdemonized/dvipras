<style scoped lang="scss">
    .vc-attachment-image
    {
        position: relative;

        width: 100%;
        height: 100%;

        @include flex(center, center);

        img
        {

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
    <div ref="box" class="vc-attachment-image" :style="{ 'background-color': backgroundLoaderColor }">
        <img v-show="loaded"
             :src="src"
             :srcset="srcset"
             :sizes="sizes"
             @load="loaded=true"
             alt=""
        />
        <icon-spinner-component v-if="!loaded" :style="{ color: loaderColor }" class="v-icon-loader"/>
    </div>
</template>

<script>
    import { Options, Vue } from "vue-class-component";
    import rgbToHsl from "../lib/ColorConversion";
    import IconSpinnerComponent from "./icons/IconSpinnerComponent";

    const Component = Options;
    @Component({
        components: {
            IconSpinnerComponent
        },
        props: {
            attachment: Object
        },
        watch: {
            attachment: function(newVal, oldVal) { // watch it

            }
        }
    })
    export default class AttachmentImageComponent extends Vue {
        src = null;
        srcset = null;
        loaded = false;
        backgroundLoaderColor = null;
        loaderColor = null;
        sizes = null;

        currentImgWidth = -1;

        getObjectFitSize(contains /* true = contain, false = cover */, containerWidth, containerHeight, width, height){
            const doRatio = width / height;
            const cRatio = containerWidth / containerHeight;
            let targetWidth;
            let targetHeight;
            const test = contains ? (doRatio > cRatio) : (doRatio < cRatio);

            if (test) {
                targetWidth = containerWidth;
                targetHeight = targetWidth / doRatio;
            } else {
                targetHeight = containerHeight;
                targetWidth = targetHeight * doRatio;
            }

            return {
                width: targetWidth,
                height: targetHeight
            };
        }

        updateImageWidth()
        {
            // Object-fit cover
            const imgWidth = this.getObjectFitSize(false,
                this.$refs.box.offsetWidth, this.$refs.box.offsetHeight,
                this.attachment.img_meta.size[0], this.attachment.img_meta.size[1]
            ).width;

            if(this.currentImgWidth < imgWidth)
            {
                this.currentImgWidth = imgWidth;
                this.sizes = imgWidth + "px";
            }
        }

        tryUpdateImgWidth()
        {
            if(this.$refs.box)
            {
                this.updateImageWidth();
            }
            else
            {
                this.$nextTick(() => {
                    if(this.$refs.box)
                    {
                        this.updateImageWidth();
                    }
                });
            }
        }

        requestUpdateImgWidth()
        {
            if(this.requestUpdateImgWidthTimeout)
            {
                clearTimeout(this.requestUpdateImgWidthTimeout);
            }

            const _this = this;
            this.requestUpdateImgWidthTimeout = setTimeout(() => {
                _this.tryUpdateImgWidth();
                _this.requestUpdateImgWidthTimeout = null;
            }, 500);
        }

        mounted()
        {
            this.src = '/api/v1/articles/attachments/img/' + this.attachment.id;

            if(this.attachment.img_meta)
            {
                const colorRgb = this.attachment.img_meta.color_RGB;

                const hsl = rgbToHsl(colorRgb[0], colorRgb[1], colorRgb[2]);

                if(hsl[2] > 0.65)
                {
                    this.loaderColor = '#888';
                }
                else
                {
                    this.loaderColor = 'white';
                }

                this.backgroundLoaderColor = 'rgb('+ colorRgb[0] +', '+colorRgb[1]+','+colorRgb[2]+')';

                this.tryUpdateImgWidth();

                window.addEventListener("resize", this.requestUpdateImgWidth);
                window.addEventListener("orientationchange", this.requestUpdateImgWidth);

                const widths = this.attachment.img_meta.widths;

                this.srcset = '';

                for(let i=0;i<widths.length;i++)
                {
                    const width = widths[i];

                    this.srcset += '/api/v1/articles/attachments/img/' + this.attachment.id +
                        '?width=' + width + ' ' + width + 'w';

                    if(i !== widths.length - 1)
                    {
                        this.srcset += ', ';
                    }
                }
            }
        }

        beforeUnmount()
        {
            window.removeEventListener("resize", this.requestUpdateImgWidth);
            window.removeEventListener("orientationchange", this.requestUpdateImgWidth);
        }

    }
</script>