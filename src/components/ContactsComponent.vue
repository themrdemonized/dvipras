<style scoped lang="scss">
    .v-contacts-info {
        @include flex(initial, space-between);
        margin-top: 40px;
    }

    .v-contacts-info-text {
        flex: 1;
    }

    .v-contacts-info-text-header {
        @include kiraFont(m-h3);
        margin: 0 0 20px 0;
    }

    .v-contacts-info-address {
        @include flex();
        margin: 0 0 20px 0;
    }

    .v-contacts-info-icon {
        margin-right: 8px;
        width: 16px;
        height: 20px;
    }

    .v-contacts-link {
        margin: 0 0 4px 0;
        line-height: 20px;
        a {
           font-family: 'Raleway';
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 20px;
            /* identical to box height, or 143% */

            font-feature-settings: 'pnum' on, 'lnum' on;

            /* primary */

            // color: #0F3580;
        }
    }

    .v-contacts-link-sub {
        margin: 0;
        @include kiraFont(s-body-2);
        @include kiraColor(light-2);
    }  

    .v-contacts-social {
        @include flex();
        > * + * {
            margin-left: 8px;
        }
    }

    .v-contacts-social-icon {
        width: 44px;
    }

    .v-contacts-map {
        margin-left: 20px;
        width: 100%;
        min-width: 415px;
        border-radius: 4px;
        overflow: hidden;
    }

    @media (max-width: 699px) {
        .v-contacts-info {
            display: block;
        }

        .v-contacts-map {
            margin-left: 0;
            width: 100%;
            min-width: 100%;
        }
    }

    @media (max-width: 471px) {
        .v-contacts-info-text {
            + .v-contacts-info-text {
                margin-top: 20px;
            }
        }

        .v-contacts-info-text-block {
            + .v-contacts-info-text-block {
                margin-top: 24px;
            }
        }
    }
</style>

<template>
    <div>
        <div class="v-contacts">
            <div class="v-contacts-body">
                <div class="v-contacts-info">
                    <div class="v-contacts-info-text">
                        <h3 class="v-contacts-info-text-header">Главный офис в Хабаровске</h3>

                        <div class="v-contacts-info-address">
                            <div class="v-contacts-info-icon">
                                <icon-contacts-map-component />
                            </div>
                            <div class="v-contacts-info-address-text">
                                <p class="v-contacts-link"><a href="https://go.2gis.com/dsd4bq" target="_blank" rel="noopener noreferrer">г. Хабаровск, ул. Дзержинского 65, офис 502</a></p>
                                <p class="v-contacts-link-sub">Бизнес центр «Феликс-Сити», 5 этаж, работаем ежедневно с 9:00 до 21:00</p>
                            </div>
                        </div>

                        <div class="v-contacts-info-address">
                            <div class="v-contacts-info-icon">
                                <icon-contacts-phone-component />
                            </div>
                            <div class="v-contacts-info-address-text">
                                <p class="v-contacts-link"><a href="tel: 88005512025">8 (800) 551-20-25</a></p>
                                <p class="v-contacts-link-sub">бесплатный номер для звонков из любого города России</p>
                            </div>
                        </div>

                        <div class="v-contacts-info-address">
                            <div class="v-contacts-info-icon">
                                <icon-contacts-phone-component />
                            </div>
                            <div class="v-contacts-info-address-text">
                                <p class="v-contacts-link"><a href="tel: +79242069995">+7 924 206-99-95</a></p>
                                <p class="v-contacts-link-sub">руководство, пишите в WhatsApp по любым вопросам</p>
                            </div>
                        </div>

                        <div class="v-contacts-info-address">
                            <div class="v-contacts-info-icon">
                                <icon-contacts-mail-component />
                            </div>
                            <div class="v-contacts-info-address-text">
                                <p class="v-contacts-link"><a href="mailto: dpo@dvipraz.ru">dpo@dvipraz.ru</a></p>
                            </div>
                        </div>

                        <div class="v-contacts-info-address">
                            <div class="v-contacts-social">
                                <a href="https://vk.com/dvipraz" target="_blank" rel="noopener noreferrer">
                                    <icon-vk-component class="v-contacts-social-icon"/>
                                </a>
                                <a href="https://instagram.com/dvipraz.life" target="_blank" rel="noopener noreferrer">
                                    <flex-button-component mode="icon-only" size="s">
                                        <template v-slot:icon>
                                            <icon-instagram-component />
                                        </template>
                                    </flex-button-component>
                                </a>
                                <a href="https://t.me/dvipraz" target="_blank" rel="noopener noreferrer">
                                    <flex-button-component mode="icon-only" size="s">
                                        <template v-slot:icon>
                                            <icon-telegram-component />
                                        </template>
                                    </flex-button-component>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div v-if="map" class="v-contacts-info-map">
                        <div  class="v-contacts-map">
                            <contacts-map-component 
                                src="https://widgets.2gis.com/widget?type=firmsonmap&amp;options=%7B%22pos%22%3A%7B%22lat%22%3A48.47927984123268%2C%22lon%22%3A135.0640940666199%2C%22zoom%22%3A16%7D%2C%22opt%22%3A%7B%22city%22%3A%22khabarovsk%22%7D%2C%22org%22%3A%2270000001006949946%22%7D"
                                :coords="[48.478753, 135.064094]"
                            />
                        </div>
                    </div>
                </div>

                <div class="v-contacts-info">
                    <div class="v-contacts-info-text">
                        <h3 class="v-contacts-info-text-header">Филиал в Калининграде</h3>

                        <div class="v-contacts-info-address">
                            <div class="v-contacts-info-icon">
                                <icon-contacts-map-component />
                            </div>
                            <div class="v-contacts-info-address-text">
                                <p class="v-contacts-link"><a href="https://go.2gis.com/0wtxh" target="_blank" rel="noopener noreferrer">г. Калининград, площадь Маршала Василевского, дом №2, 5 этаж, офис 21</a></p>
                                <p class="v-contacts-link-sub">Работаем ежедневно с 9:00 до 21:00</p>
                            </div>
                        </div>

                        <div class="v-contacts-info-address">
                            <div class="v-contacts-info-icon">
                                <icon-contacts-phone-component />
                            </div>
                            <div class="v-contacts-info-address-text">
                                <p class="v-contacts-link"><a href="tel: 88005512025">8 (800) 551-20-25</a></p>
                                <p class="v-contacts-link-sub">бесплатный номер для звонков из любого города России</p>
                            </div>
                        </div>

                        <div class="v-contacts-info-address">
                            <div class="v-contacts-info-icon">
                                <icon-contacts-mail-component />
                            </div>
                            <div class="v-contacts-info-address-text">
                                <p class="v-contacts-link"><a href="tel: +79243039995">+7 924 303-99-95</a></p>
                                <p class="v-contacts-link-sub">филиал в г. Калининград</p>
                            </div>
                        </div>

                        <div class="v-contacts-info-address">
                            <div class="v-contacts-info-icon">
                                <icon-contacts-mail-component />
                            </div>
                            <div class="v-contacts-info-address-text">
                                <p class="v-contacts-link"><a href="mailto: dpo@dvipraz.ru">dpo@dvipraz.ru</a></p>
                            </div>
                        </div>
                    </div>
                    <div v-if="map" class="v-contacts-info-map">
                        <div  class="v-contacts-map">
                            <contacts-map-component 
                                src="https://widgets.2gis.com/widget?type=firmsonmap&options=%7B%22pos%22%3A%7B%22lat%22%3A54.72030756580943%2C%22lon%22%3A20.52327632904053%2C%22zoom%22%3A16%7D%2C%22opt%22%3A%7B%22city%22%3A%22kaliningrad%22%7D%2C%22org%22%3A%2270000001059770604%22%7D"
                                :coords="[54.719986, 20.523378]"
                            />
                        </div>
                    </div>
                </div>

                <div class="v-contacts-info">
                    <div class="v-contacts-info-text">
                        <h3 class="v-contacts-info-text-header">Филиал во Владивостоке</h3>

                        <div class="v-contacts-info-address">
                            <div class="v-contacts-info-icon">
                                <icon-contacts-map-component />
                            </div>
                            <div class="v-contacts-info-address-text">
                                <p class="v-contacts-link"><a href="https://go.2gis.com/87bkj" target="_blank" rel="noopener noreferrer">г .Владивосток, ул. Жигура 26А, офис 22-2</a></p>
                                <p class="v-contacts-link-sub">Работаем ежедневно с 9:00 до 21:00</p>
                            </div>
                        </div>

                        <div class="v-contacts-info-address">
                            <div class="v-contacts-info-icon">
                                <icon-contacts-phone-component />
                            </div>
                            <div class="v-contacts-info-address-text">
                                <p class="v-contacts-link"><a href="tel: 88005512025">8 (800) 551-20-25</a></p>
                                <p class="v-contacts-link-sub">бесплатный номер для звонков из любого города России</p>
                            </div>
                        </div>

                        <div class="v-contacts-info-address">
                            <div class="v-contacts-info-icon">
                                <icon-contacts-mail-component />
                            </div>
                            <div class="v-contacts-info-address-text">
                                <p class="v-contacts-link"><a href="tel: +79294139995">+7 929 413-99-95</a></p>
                                <p class="v-contacts-link-sub">филиал в г. Владивосток</p>
                            </div>
                        </div>

                        <div class="v-contacts-info-address">
                            <div class="v-contacts-info-icon">
                                <icon-contacts-mail-component />
                            </div>
                            <div class="v-contacts-info-address-text">
                                <p class="v-contacts-link"><a href="mailto: dpo@dvipraz.ru">dpo@dvipraz.ru</a></p>
                            </div>
                        </div>
                    </div>
                    <div v-if="map" class="v-contacts-info-map">
                        <div  class="v-contacts-map">
                            <contacts-map-component 
                                src="https://widgets.2gis.com/widget?type=firmsonmap&options=%7B%22pos%22%3A%7B%22lat%22%3A43.13010151710161%2C%22lon%22%3A131.92711114883426%2C%22zoom%22%3A16%7D%2C%22opt%22%3A%7B%22city%22%3A%22vladivostok%22%7D%2C%22org%22%3A%2270000001068604014%22%7D"
                                :coords="[43.12992, 131.927124]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Options, Vue } from "vue-class-component";

    import IconVkComponent from "./icons/IconVkComponent";
    import IconInstagramComponent from "./icons/IconInstagramComponent";
    import IconTelegramComponent from "./icons/IconTelegramComponent";
    import IconContactsMapComponent from "./icons/IconContactsMapComponent";
    import IconContactsMailComponent from "./icons/IconContactsMailComponent";
    import IconContactsPhoneComponent from "./icons/IconContactsPhoneComponent";
    import FlexButtonComponent from "./FlexButtonComponent";
    import ContactsMapComponent from "./ContactsMapComponent";

    const Component = Options;
    @Component({
        components: {
            IconInstagramComponent,
            IconContactsPhoneComponent,
            IconContactsMailComponent,
            IconContactsMapComponent,
            IconTelegramComponent,
            IconVkComponent,
            ContactsMapComponent,
            FlexButtonComponent,
        },
        props: {
            map: {
                type: Boolean,
                default: true,
            }
        },
        watch: {
           
        },
        emits: []
    })
    export default class ContactsComponent extends Vue {
        
    }
</script>