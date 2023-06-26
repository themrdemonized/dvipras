<style scoped lang="scss">

    $minMarginMenuItem: 8;
    $maxMarginMenuItem: 20;

    $maxWidthHeader: 1320;
    $mediumWidthHeader: 980;

    $maxWidthMenu: 777;
    $mediumWidthMenu: 437;

    $headerHeight: 172px;
    $headerMainHeight: 108px;

    .v-header
    {
        position: relative;
        height: $headerHeight;
        background: white;
        transition: height .56s cubic-bezier(0.52, 0.16, 0.24, 1), box-shadow .44s .2s cubic-bezier(0.52, 0.16, 0.24, 1);
        overflow: hidden;
    }

    .v-header-main
    {
        position: relative;
        width: 100%;
        height: $headerMainHeight;
        top: 0;


        transition: height 300ms ease-in-out;
    }

    .v-header-main-inner {
        position: relative;
        margin: 0 32px;
        height: 100%;
        border-bottom: 1px solid #D9D9D9;
    }

    .v-icon-header
    {
        width: 40px;
        height: 40px;
    }

    .v-logo-wrapper {
        display: flex;
        align-items: center;
        position: absolute;
        height: 100%;
        left: 0;
    }

    .v-logo-btn
    {
        display: inline-block;
        width: 70px;
        height: 100%;
        position: relative;
    }

    .v-logo
    {
        display: inline-block;
        width: 70px;
        height: 72px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .v-logo-title {
        max-width: 262px;
        width: 100%;
        margin: 0 0 0 21px;
    }

    $numberBoxWidth: 160px;
    $numberBoxPadding: 18px 0;

    .v-social-wrapper {
        position: absolute;
        right: $numberBoxWidth + 32px;
        height: 100%;
        padding: 20px 0;
    }

    .v-social-links {
        background-color: getColor(light-bg-3);
        border-radius: 4px;
        padding: 8px 0;
        width: fit-content;
        margin: 0 auto;
        margin-top: 8px;
        @include flex(center);
        > a {
            padding: 0 16px;
            + a {
                border-left: 1px solid getColor(light-divider);
            }
        }
    }

    .v-social-links-icon {
        height: 20px;
        width: 20px;
    }

    .v-vkicon {
        height: 12px;
        width: 20px;
        margin-right: 10px;
    }

    .v-number-box
    {
        position: absolute;
        height: 100%;
        padding: $numberBoxPadding;
        right: 0;
        width: $numberBoxWidth;
        text-align: right;
    }

    .v-number-wrapper
    {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        > * {
            display: block;
        }
    }

    .v-main-number {
        .v-main-number-logo {
            display: none;
            .v-main-number-logo-logo {
                width: 20px;
                height: 20px;
            }
        }
    }

    .v-sub-number
    {
        @include color(light);
        margin: 0 0 6px 0;
    }

    .v-sub-whatsapp-link {
        @include flex(center, flex-end);
    }
    .v-sub-whatsapp-logo {
        width: 20px;
    }
    .v-sub-whatsapp-phone {
        margin-left: 8px;
        display: inline-block;
    }

    .v-header-sub {
        margin: 0 32px;
        @include flex(center, space-between);
        height: $headerHeight - $headerMainHeight;
    }

    .v-header-sub-links {
        @include flex(center);
        height: 100%;
        .v-header-sub-button {
            @include flex(center, center);
            color: #fff;
            padding: 8px 16px;
            background-color: kiraColor(secondary);
            border-radius: 4px;
            min-width: 127px;
            min-height: 40px;
            @include kiraFont('s-button');
            transition: background-color 0.2s ease;
            &:hover, &:active {
                background-color: kiraColor(primary);
            }
        }
        > * + * {
            margin-left: 32px;
        }
        > .v-header-button-sm {
            margin-left: 12px;
        }

    }

    .v-header-sub-search {
        @include flex(center);
        > .v-header-sub-link {
            margin-right: 12px;
        }
        .v-sub-search-logo {
            width: 16px;
        }
    }

    .v-burger-menu
    {
        position: absolute;
        height: 100%;
        width: 60px;
        display: none;
        left: 0;
        top: 0;
        .v-burger-menu-inner {
            background-color: kiraColor(primary);
            color: #fff;
            border-radius: 4px;
            position: absolute;
            width: inherit;
            height: 60px;
            top: 50%;
            transform: translateY(-50%);
            @include flex(center, center);
            cursor: pointer;
            user-select: none;
            -webkit-tap-highlight-color: transparent;
            padding: 16px 20px;
            transition: background-color 0.15s ease;
            &.active {
                background-color: kiraColor(secondary);
            }
            .v-icon-burger
            {
                line-height: 0;
                width: 14px;
                color: #fff;
                transform: translateY(2px);
            }
            span {
                margin-right: 7px;
            }
        }
    }

    .v-drop-menu-desktop-link
    {
      width: calc(1/3*100% - (1 - 1/3)*10px);
    }

    .v-tsok-button {
        display: flex;
        position: absolute;
        left: 346px;
        top: 32px;
    }

    @media (max-width: 1087px) {
        .v-header-sub-search {
            .v-header-sub-link {
                display: none;
            }
        }
    }

    @media (max-width: 1005px) {
        $headerMainHeight: 124px;

        .v-header {
            height: $headerMainHeight;
        }

        .v-header-main {
            height: 92px;
        }

        .v-header-main-inner {
            margin: 0 20px;
        }

        .v-sub-number, .v-logo-title {
            display: none;
        }

        .v-logo-wrapper {
            left: 50%;
            transform: translateX(-50%);
        }

        .v-social {
            display: none;
        }

        .v-main-number {
            margin-bottom: 8px;
        }

        .v-burger-menu {
            @include flex(center);
        }

        .v-header-sub {
            position: fixed;
            width: calc(100vw + 1px);
            margin: 0;
            padding: 0 20px;
            height: calc(100vh - #{$headerMainHeight} + 1px);
            flex-direction: column;
            transition: transform 0.2s ease;
            transform: translate(calc(-100vw - 1px), -1px);
            background-color: #fff;
            border-top: 1px solid #D9D9D9;
            &.active {
                transform: translate(-1px, -1px);
            }
        }

        .v-header-sub-search {
            display: none;
        }
        .v-header-sub-links {
            display: block;
            width: 100%;
            padding: 0 32px;
            a {
                display: block;
                padding: 18px 0;
                margin: 0;
                border-top: 1px solid #D9D9D9;
                &:first-child {
                    border: 0;
                }
            }
            .v-header-sub-button {
                display: none;
            }

            .v-header-button-mobile {
                border: none;
                width: fit-content;
                padding: 6px 0;
            }
        }

        .v-drop-menu-link
        {
            padding: 18px 0;
            margin: 0;
            border-top: 1px solid #D9D9D9;
            &:nth-child(2)
            {
              border: 0;
            }
        }

        .v-tsok-button {
            display: none;
        }
    }

    @media (max-width: 471px) {
        $headerMainHeight: 104px;

        .v-header {
            height: $headerMainHeight;
        }

        .v-header-main {
            height: 72px;
        }

        .v-burger-menu {
            @include flex(center);
            width: 44px;
            .v-burger-menu-inner {
                 height: 40px;
            }
        }

        .v-logo {
            height: 56px;
            width: 54px;
        }

        .v-header-sub {
            height: calc(100vh - #{$headerMainHeight} + 1px);
        }

        .v-header-sub-links {
            padding: 0;
        }

        .v-number-wrapper {
            @include flex(center, flex-end, $flow: row-reverse);
            right: 0;
            > div {
                width: 36px;
                height: 72px;
                margin: 0;
                position: relative;
                > a {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
                > .v-main-number-link {
                    right: 0;
                    transform: translateY(-50%);
                    line-height: 0;
                }
            }
        }

        .v-main-number {
            margin: 0;
            .v-main-number-logo {
                display: inline-block;
            }
            .v-main-number-text {
                display: none;
            }
        }

        .v-sub-whatsapp-phone {
            display: none;
        }
    }

    .nowrap {
        white-space: nowrap;
    }

    .v-header-upper {
        background-color: getColor(light-bg-3);
        @include flex(center, space-between);
        height: 32px;
        overflow: hidden;
    }

    .v-header-upper-social {
        margin: 0;
        border-radius: 0;
        background-color: transparent;
    }

    .v-header-upper-price {
        border-radius: 0;
        padding: 4px 20px;
        min-height: 32px;
    }

    .v-banner-button {
        a {
            color: #fff;
        }
        
    }

</style>

<template>
    <div class="v-header" :class="{ 'v-header-opened': isOpenedMenu }">
        <teleport to="#v-header-back" v-if="isMounted">
            <div class="v-header-back" :class="{ 'v-header-back-show': isOpenedMenu }" @click="isOpenedMenu=false">

            </div>
        </teleport>

        <div class="v-header-upper" v-if="matchesMediumModeQuery">
            <header-social-links-component class="v-header-upper-social" />
            <price-button-component class="v-header-upper-price" />
        </div>

        <div class="v-header-main">
            <div class="v-header-main-inner">
                <div class="v-burger-menu">
                    <div :class="{
                        'active': isOpenedMenu,
                        'v-burger-menu-inner': true
                    }" @click="isOpenedMenu=!isOpenedMenu" tabindex="0">
                        <hamburgers-component :active="isOpenedMenu" class="v-icon-burger"/>
                    </div>
                </div>

                <div class="v-logo-wrapper">
                    <router-link @click.capture="isOpenedMenu=false" class="v-logo-btn" tabindex="0" to="/">
                        <icon-logo-component class="v-logo" />
                    </router-link>
                    <p class="v-logo-title kr-font-s-h4">Институт дополнительного профессионального образования</p>
                </div>

                <div class="v-tsok-button">
                    <a href="https://tsok.dvipraz.ru/" target="_blank" rel="noopener noreferrer">
                        <flex-button-component
                            class="v-banner-button"
                            size="s2"
                            mode="text-only"
                        >
                            <template v-slot:text>ЦОК ДВИПРАЗ</template>
                        </flex-button-component>
                    </a>
                </div>

                <div class="v-social-wrapper">
                    <div class="v-social">
                        <a class="kr-font-s-button" href="https://vk.com/dvipraz" target="_blank" rel="noopener noreferrer">Будни ДВИПРАЗ юмор</a>
                    </div>
                    <header-social-links-component v-if="!matchesMediumModeQuery"/>
                </div>

                <div class="v-number-box">
                    <div class="v-number-wrapper nowrap">
                        <div class="v-main-number">
                            <a href="tel:88005512025" class="v-main-number-link nowrap">
                                <span class="v-main-number-logo">
                                    <icon-phone-component class="v-main-number-logo-logo"/>
                                </span>
                                <span class="kr-font-m-h3 v-main-number-text nowrap">8 800 551-20-25</span>
                            </a>
                        </div>
                        <p class="v-sub-number kr-font-m-caption nowrap">бесплатно по России</p>
                        <div class="v-sub-whatsapp nowrap">
                            <a class="v-sub-whatsapp-link nowrap" href="https://wa.me/+79242069995" target="_blank" rel="noopener noreferrer">
                                <icon-whatsapp-component class="v-sub-whatsapp-logo"/>
                                <span class="v-sub-whatsapp-phone kr-font-s-h4 nowrap">+7 924 206-99-95</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div :class="{
            'v-header-sub': true,
            'active': isOpenedMenu
        }" >
            <div class="v-header-sub-links" v-if="isOpenedMenu">
                <header-drop-menu-mobile-component :options-base="{ category_id: 3 }">
                  <template #categoryName>
                    <div class="kr-font-m-button">Об институте</div>
                  </template>
                  <template #contentCategoryName>
                    <div class="kr-font-s-h1">Об институте</div>
                  </template>
                  <template v-slot:article="slotProps">
                    <router-link @click.capture="isOpenedMenu=false" :to="'/news/' + slotProps.article.id + '_' + cyrillicToTranslit().transform(slotProps.article.title, '_').toLowerCase()" class="kr-font-m-button v-drop-menu-link">{{ slotProps.article.title }}</router-link>
                  </template>
                </header-drop-menu-mobile-component>
                <header-drop-menu-mobile-component :options-base="{ category_id: 4 }">
                  <template #categoryName>
                    <div class="kr-font-m-button">Обучение</div>
                  </template>
                  <template #contentCategoryName>
                    <div class="kr-font-s-h1" >Обучение</div>
                  </template>
                  <template v-slot:article="slotProps">
                    <router-link @click.capture="isOpenedMenu=false" :to="'/news/' + slotProps.article.id + '_' + cyrillicToTranslit().transform(slotProps.article.title, '_').toLowerCase()" class="kr-font-m-button v-drop-menu-link">{{ slotProps.article.title }}</router-link>
                  </template>
                </header-drop-menu-mobile-component>
                <router-link @click.capture="isOpenedMenu=false" tabindex="0" to="/contacts" class="v-header-sub-link kr-font-m-button">Контакты</router-link>
                <a class="v-header-sub-link kr-font-m-button" href="https://lk.dvipraz.ru">Личный кабинет</a>
                <price-button-component class="v-header-sub-link" v-if="!matchesMediumModeQuery" />

                <a href="https://tsok.dvipraz.ru/" target="_blank" rel="noopener noreferrer" class="v-header-button-mobile">
                    <flex-button-component
                        class="v-banner-button"
                        size="s2"
                        mode="text-only"
                    >
                        <template v-slot:text>ЦОК ДВИПРАЗ</template>
                    </flex-button-component>
                </a>

                <a href="https://obrnadzor.gov.ru/gosudarstvennye-uslugi-i-funkczii/7701537808-gosfunction/formirovanie-i-vedenie-federalnogo-reestra-svedenij-o-dokumentah-ob-obrazovanii-i-ili-o-kvalifikaczii-dokumentah-ob-obuchenii/" target="_blank" rel="noopener noreferrer" class="v-header-button-mobile">
                    <flex-button-component
                        class="v-banner-button"
                        size="s2"
                        mode="text-only"

                    >
                        <template v-slot:text>ФИС ФРДО</template>
                    </flex-button-component>
                </a>

            </div><!-- Mobile -->

            <div class="v-header-sub-links" v-else>
              <header-drop-menu-desktop-component :disable-hover-menu="closeMenu" :options-base="{ category_id: 3 }" @mouseover="closeMenu = false">
                <template #categoryName>
                  <div class="kr-font-m-button">Об институте</div>
                </template>
                <template v-slot:article="slotProps">
                  <router-link @click.capture="closeMenu = true" :to="'/news/' + slotProps.article.id + '_' + cyrillicToTranslit().transform(slotProps.article.title, '_').toLowerCase()" class="v-drop-menu-desktop-link kr-font-s-button">{{ slotProps.article.title }}</router-link>
                </template>
              </header-drop-menu-desktop-component>
              <header-drop-menu-desktop-component :disable-hover-menu="closeMenuEducation" :options-base="{ category_id: 4 }" @mouseover="closeMenuEducation = false">
                <template #categoryName>
                  <div class="kr-font-m-button">Обучение</div>
                </template>
                <template v-slot:article="slotProps">
                  <router-link @click.capture="closeMenuEducation = true" :to="'/news/' + slotProps.article.id + '_' + cyrillicToTranslit().transform(slotProps.article.title, '_').toLowerCase()" class="v-drop-menu-desktop-link kr-font-s-button">{{ slotProps.article.title }}</router-link>
                </template>
              </header-drop-menu-desktop-component>
              <router-link @click.capture="isOpenedMenu=false" tabindex="0" to="/contacts" class="v-header-sub-link kr-font-m-button">Контакты</router-link>
              <a class="v-header-sub-link kr-font-m-button" href="https://lk.dvipraz.ru">Личный кабинет</a>
              <price-button-component class="v-header-sub-link" v-if="!matchesMediumModeQuery" />
              <a href="https://obrnadzor.gov.ru/gosudarstvennye-uslugi-i-funkczii/7701537808-gosfunction/formirovanie-i-vedenie-federalnogo-reestra-svedenij-o-dokumentah-ob-obrazovanii-i-ili-o-kvalifikaczii-dokumentah-ob-obuchenii/" target="_blank" rel="noopener noreferrer" class="v-header-button-sm">
                <flex-button-component
                    class="v-banner-button"
                    size="s2"
                    mode="text-only"
                    v-if="!matchesMediumModeQuery"
                >
                    <template v-slot:text>ФИС ФРДО</template>
                </flex-button-component>
              </a>
            </div ><!-- Desktop -->
            <div class="v-header-sub-search">
              <a class="v-header-sub-link kr-font-m-button" href="">Поиск</a>
              <icon-search-component class="v-sub-search-logo"/>
            </div>
        </div>
      </div>
</template>

<script>
    import { Options, Vue } from "vue-class-component";

    import IconComponent from "./IconComponent";
    import IconArtComponent from "./icons/IconArtComponent";
    import IconContactsComponent from "./icons/IconContactsComponent";
    import IconDocumentsComponent from "./icons/IconDocumentsComponent";
    import IconNewsComponent from "./icons/IconNewsComponent";
    import IconMeterComponent from "./icons/IconMeterComponent";
    import IconLogoComponent from "./icons/IconLogoComponent";
    import IconWhatsappComponent from "./icons/IconWhatsappComponent";
    import IconPhoneComponent from "./icons/IconPhoneComponent";
    import IconSearchComponent from "./icons/IconSearchComponent";
    import IconVkComponent from "./icons/IconVkComponent";

    import FlexButtonComponent from "./FlexButtonComponent";
    import PriceButtonComponent from "./PriceButtonComponent";
    import HeaderSocialLinksComponent from "./HeaderSocialLinksComponent";
    import HeaderMenuItemComponent from "./HeaderMenuItemComponent";
    import HamburgersComponent from "./base/HamburgersComponent";
    import MetersDataModalComponent from './modals/MetersDataModalComponent';
    import {modalTranslateData} from "@/components/ModalComponent";

    import cyrillicToTranslit from "cyrillic-to-translit-js";
    import HeaderDropMenuDesktopComponent from "@/components/HeaderDropMenuDesktopComponent.vue";
    import HeaderDropMenuMobileComponent from "@/components/HeaderDropMenuMobileComponent.vue"
    import {ref} from "vue";

    const Component = Options;
    @Component({
        components: {
            HeaderDropMenuDesktopComponent,
            HeaderDropMenuMobileComponent,
            HeaderMenuItemComponent,

            IconComponent,
            IconArtComponent,
            IconContactsComponent,
            IconDocumentsComponent,
            IconLogoComponent,
            IconMeterComponent,
            IconNewsComponent,
            IconWhatsappComponent,
            IconPhoneComponent,
            IconSearchComponent,
            IconVkComponent,

            FlexButtonComponent,
            PriceButtonComponent,
            HeaderSocialLinksComponent,

            MetersDataModalComponent,
            HamburgersComponent,

            cyrillicToTranslit,

        },
        props: {
        },
        watch: {
            isOpenedMenu: function(newVal) {
                if(newVal)
                {
                    this.$emit('opened-menu');
                }
                else
                {
                    this.$emit('closed-menu');
                }
            }
        },
        emits: ['opened-menu', 'closed-menu']
    })
    export default class HeaderComponent extends Vue {
        matchesMediumModeQuery = false
        mediumModeQuery = null;
        closeMenu = false;
        closeMenuEducation = false;
        isMiniSendRequestButton = false;
        isOpenedMenu = false
        isMounted = false
        metersDataModalIsOpened = false;

        cyrillicToTranslit = cyrillicToTranslit;

        obuchenieLink = {
            id: "33",
            title: "obuchenie",
        }

        aboutLink = {
            id: "32",
            title: "ob_institute"
        }

        resizeEvent()
        {
            this.matchesMediumModeQuery = this.mediumModeQuery.matches;
            this.isMiniSendRequestButton = !!this.matchesMediumModeQuery;
            if(!this.matchesMediumModeQuery)
            {
                this.isOpenedMenu = false;
            }
        }

        created()
        {
            this.mediumModeQuery = window.matchMedia('(max-width: 1005px)');
        }

        mounted()
        {
            this.isMounted = true;

            window.addEventListener("resize", this.resizeEvent, false);
            window.addEventListener("orientationchange", this.resizeEvent, false);
            this.resizeEvent();
        }

        onOpenMetersModalData()
        {
            //modalTranslateData.el = this.$refs.open_meters_button.$el;
            this.metersDataModalIsOpened = !this.metersDataModalIsOpened;
        }

    }
</script>
