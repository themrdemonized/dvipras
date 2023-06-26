<style scoped lang="scss">
    .v-footer {
        background-color: rgba(15, 53, 128, 0.08);
        position: relative;
        padding-top: 64px;
        padding-bottom: 128px;
    }

    .v-footer-links {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 20px;
        grid-row-gap: 0px;
    }

    .v-footer-link-block {
        h3 {
            margin: 0 0 12px 0;
        }
        .v-footer-link {
            @include kiraFont(s-button);
            margin: 0;
            + .v-footer-link {
                margin-top: 8px;
            }
        }
    }

    .v-footer-logo-block {
        @include flex(center, initial, $flow: column);
        text-align: center;
        .v-logo {
            width: 121px;
            height: 124px;
            margin-bottom: 16px;
        }
        p {
            @include color(light-2);
            margin: 0;
        }
    }

    .v-footer-buttons {
        position: fixed;
        right: 32px;
        bottom: 32px;
        @include flex(center);
    }

    .v-footer-button {
        + .v-footer-button {
            margin-left: 12px;
        }
    }

    .v-footer-phone-icon {
        width: 20px;
        height: 20px;
    }

    $cookieMaxWidth: 383px;
    .v-footer-cookie-wrapper {
        position: fixed;
        left: 32px;
        bottom: 32px;
        background: getColor(primary);
        box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.08), 0px 12px 64px rgba(0, 0, 0, 0.08);
        border-radius: 4px;
        padding: 20px;
        max-width: $cookieMaxWidth;
    }

    .v-footer-cookie {
        @include flex(flex-start);
        > p {
            @include kiraFont(s-body-2);
            color: #fff;
            margin: 0;
            margin-right: 20px;
        }
    }

    .cookie-enter-active,
    .cookie-leave-active {
        transition: left 0.5s ease;
    }

    .cookie-enter-from,
    .cookie-leave-to {
        left: -$cookieMaxWidth;
    }

    @media (max-width: 1005px) {
        .v-footer {
            padding-top: 32px;
            padding-bottom: 96px;
        }

        .v-footer-links {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
            grid-column-gap: 20px;
            grid-row-gap: 32px;
        }

        .v-footer-buttons {
            right: 24px;
            bottom: 24px;
        }
    }

    @media (max-width: 699px) {
        .v-footer {
            padding-top: 16px;
            padding-bottom: 192px;
        }

        .v-footer-links {
            display: block;
        }

        .v-footer-link-block {
            margin-bottom: 32px;
        }

        .v-footer-cookie-wrapper {
            left: 20px;
            bottom: 100px;
            max-width: calc(100% - 140px);
        }

        .cookie-enter-active,
        .cookie-leave-active {
            transition: left 0.5s ease;
        }

        .cookie-enter-from,
        .cookie-leave-to {
            left: calc(140px - 100%);
        }
    }
</style>

<template>
    <div class="v-footer">
        <div class="kr-body">
            <div class="v-footer-links">
                <div class="v-footer-link-block">
                    <h3 class="kr-font-m-h3">Институт</h3>
                    <p class="v-footer-link"><router-link @click.capture="isOpenedMenu=false" class="kr-font-s-button" tabindex="0" to="/">Услуги</router-link></p>
                    <p class="v-footer-link"><router-link @click.capture="isOpenedMenu=false" class="kr-font-s-button" tabindex="0" :to="'/news/' + obuchenieLink.id + '_' + cyrillicToTranslit().transform(obuchenieLink.title, '_').toLowerCase()">Обучение</router-link></p>
                    <p class="v-footer-link"><router-link @click.capture="isOpenedMenu=false" class="kr-font-s-button" tabindex="0" to="/">Партнеры</router-link></p>
                    <p class="v-footer-link"><router-link @click.capture="isOpenedMenu=false" class="kr-font-s-button" tabindex="0" to="/">Клиенты</router-link></p>
                    <p class="v-footer-link"><router-link @click.capture="isOpenedMenu=false" class="kr-font-s-button" tabindex="0" :to="'/news/' + aboutLink.id + '_' + cyrillicToTranslit().transform(aboutLink.title, '_').toLowerCase()">Об институте</router-link></p>
                    <p class="v-footer-link"><router-link @click.capture="isOpenedMenu=false" class="kr-font-s-button" tabindex="0" to="/contacts">Контакты</router-link></p>
                </div>
                <div class="v-footer-link-block">
                    <h3 class="kr-font-m-h3">Популярное</h3>
                    <p class="v-footer-link"><router-link @click.capture="isOpenedMenu=false" class="kr-font-s-button" tabindex="0" to="/">Обучение рабочим профессиям</router-link></p>
                    <p class="v-footer-link"><router-link @click.capture="isOpenedMenu=false" class="kr-font-s-button" tabindex="0" to="/">Стоимость обучения</router-link></p>
                    <p class="v-footer-link"><router-link @click.capture="isOpenedMenu=false" class="kr-font-s-button" tabindex="0" to="/">Охрана труда</router-link></p>
                    <p class="v-footer-link"><router-link @click.capture="isOpenedMenu=false" class="kr-font-s-button" tabindex="0" to="/">Самоходная техника (Гостехнадзор)</router-link></p>
                    <p class="v-footer-link"><router-link @click.capture="isOpenedMenu=false" class="kr-font-s-button" tabindex="0" to="/">Электробезопасность</router-link></p>
                </div>
                <div class="v-footer-link-block">
                    <h3 class="kr-font-m-h3">Новое</h3>
                    <p class="v-footer-link"  v-for="(article, i) in articles" :key="i">
                        <router-link @click.capture="isOpenedMenu=false" class="kr-font-s-button" tabindex="0" :to="'/news/' + article.id + '_' + cyrillicToTranslit().transform(article.title, '_').toLowerCase()">{{ article.title }}</router-link>
                    </p>
                </div>
                <div class="v-footer-link-block v-footer-logo-block">
                    <icon-logo-footer-component class="v-logo"/>
                    <p class="kr-font-s-body-2">© 2010 - {{ year }}<br>Институт дополнительного профессионального образования</p>
                </div>
            </div>
        </div>
        <div class="v-footer-buttons">
            <div class="v-footer-button">
                <a href="tel:88005512025">
                    <flex-button-component mode="icon-only">
                        <template v-slot:icon>
                            <icon-phone-white-component class="v-footer-phone-icon"/>
                        </template>
                    </flex-button-component>
                </a>
            </div>
            <div class="v-footer-button">
                <zayavka-button-component></zayavka-button-component>
            </div>
        </div>
        <transition name="cookie">
            <div v-if="!hasCookie" class="v-footer-cookie-wrapper">
                <div class="v-footer-cookie">
                    <p>Продолжая использовать наш сайт, вы даете согласие на обработку файлов cookie, которые обеспечивают правильную работу сайта.</p>
                    <flex-button-component
                        class="v-footer-cookie-button"
                        mode="text-only"
                        size="s"
                        :transparent="true"
                        @click="setCookie"
                    >
                        <template #text>Ок</template>
                    </flex-button-component>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import { Options, Vue } from "vue-class-component";

    import IconPhoneWhiteComponent from "./icons/IconPhoneWhiteComponent";
    import IconLogoFooterComponent from "./icons/IconLogoFooterComponent";
    import FlexButtonComponent from "./FlexButtonComponent";
    import ZayavkaButtonComponent from "./ZayavkaButtonComponent";

    import TradeArticlesManager from "../lib/trade/TradeArticlesManager";
    import cyrillicToTranslit from "cyrillic-to-translit-js";

    const Component = Options;
    @Component({
        components: {
            IconPhoneWhiteComponent,
            IconLogoFooterComponent,
            ZayavkaButtonComponent,
            FlexButtonComponent,
            TradeArticlesManager,
            cyrillicToTranslit,
        },
        props: {

        }
    })
    export default class FooterComponent extends Vue
    {
        year = new Date().getFullYear();
        articles = null;
        cyrillicToTranslit = cyrillicToTranslit;

        obuchenieLink = {
            id: "33",
            title: "obuchenie",
        }

        aboutLink = {
            id: "32",
            title: "ob_institute"
        }

        async created() {
             const articlesData = await TradeArticlesManager.getArticles({ limit: 5, category_id: 1 });
             this.articles = articlesData.items;
             this.getCookie();
        }

        hasCookie = true;

        getCookie() {
            let cookieDate = localStorage.getItem('cookieDate');

            // Если записи про кукисы нет или она просрочена на 1 год, то показываем информацию про кукисы
            if( !cookieDate || (cookieDate + 31536000000) < Date.now() ){
                this.hasCookie = false;
            }
        }

        setCookie() {
            localStorage.setItem( 'cookieDate', Date.now() );
            this.hasCookie = true;
        }
    }
</script>