<style scoped lang="scss">
    .vc-random-loader-spinner
    {
        width: 216px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }

    .v-icon-loader
    {
        margin-left: auto;
        margin-right: auto;

        color: #888;
        margin-bottom: 12px;
    }

    .fade-text-enter-active,
    .fade-text-leave-active {
        transition: opacity .25s cubic-bezier(0.36, 0.83, 0.48, 0.99), transform 0.5s cubic-bezier(0.36, 0.83, 0.48, 0.99);
    }

    .fade-text-enter-from
    {
        transform: translateX(-20px);
    }

    .fade-text-leave-to
    {
        transform: translateX(20px);
    }

    .fade-text-enter-from,
    .fade-text-leave-to {
        opacity: 0;
    }
</style>

<template>
    <div class="vc-random-loader-spinner">
        <icon-spinner-component class="v-icon-loader"/>
        <transition name="fade-text" mode="out-in">
            <div v-if="reactiveTextChange"
                 :key="availableTexts[currentIndexItem][currentIndexText]"
                 class="v-text kr-font-h4">{{availableTexts[currentIndexItem][currentIndexText]}}</div>
        </transition>
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
    export default class RandomLoaderSpinnerComponent extends Vue {
        availableTexts = [
            // ['Еще чуть-чуть...'],
            // ['Налаживаем связь с космосом...'],
            // ['Пристегнитесь, загружаем сайт...'],
            // ['Проводим интернет...'],
            // ['Рисуем сайт...'],
            // ['Секундочку...'],
            // ['Две минуты, Турецкий!', 'Пять минут, Турецкий!'],
            // ['Инструктируем экипаж...'],
            // ['Тестируем системы...'],
            ['Загрузка...'],
        ];

        reactiveTextChange = 1;

        currentIndexItem = null;
        currentIndexText = null;

        timeoutHandler = null;

        selectRandomText()
        {
            this.currentIndexItem = Math.floor(Math.random() * Math.floor(this.availableTexts.length));
            this.currentIndexText = 0;
        }

        updateRandomText()
        {
            if(this.currentIndexItem)
            {
                this.currentIndexText++;

                if(this.currentIndexText === this.availableTexts[this.currentIndexItem].length)
                {
                    this.availableTexts.splice(this.currentIndexItem, 1);
                    this.selectRandomText();
                }
            }
            else
            {
                this.selectRandomText();
            }

            this.reactiveTextChange++;

            this.timeoutHandler = setTimeout(this.updateRandomText, 3250);
        }

        beforeMount()
        {
            this.updateRandomText();
        }

        beforeUnmount()
        {
            clearTimeout(this.timeoutHandler);
        }
    }
</script>