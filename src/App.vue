<style scoped lang="scss">

  $maxWidthMainPx: 1088px;
  $maxWidthMain2Px: 1088px;

  #v-app-page
  {
    background: var(--kr-color-main-white);
  }

  #v-header-wrapper
  {
    position: absolute;
    max-width: $maxWidthMainPx;
    min-width: 320px;
    width: 100%;
    display: inline-block;

    top: 0;
    left: 50%;

    transform: translateX(-50%);
  }

  $bodyOffset: 172px;
  #v-body
  {
    width: 100%;
    display: inline-block;
    margin-top: $bodyOffset;
    transition: margin-top 300ms ease-in-out, opacity 0.5s ease, transform 0.5s ease;

    min-height: calc(100vh - #{$bodyOffset});
  }

  @media (max-width: 1005px) {
    $bodyOffset: 124px;
    #v-body
    {
      margin-top: $bodyOffset;
      min-height: calc(100vh - #{$bodyOffset});
    }
  }

  @media (max-width: 471px) {
    $bodyOffset: 104px;
    #v-body
    {
      margin-top: $bodyOffset;
      min-height: calc(100vh - #{$bodyOffset});
    }
  }

  #v-app-scrollbar
  {
    position: fixed;
    height: 100vh;
    z-index: 99999;
  }

  .fade-enter-active,
  .fade-leave-active
  {
    transition: opacity .3s cubic-bezier(0.36, 0.83, 0.48, 0.99);

  }

  .fade-enter-from,
  .fade-leave-to
  {
    opacity: 0;
  }

  @media (max-width: 1280px)
  {
    #v-header-wrapper
    {
      max-width: $maxWidthMain2Px;
    }
  }
</style>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700;800;900&family=Roboto:wght@400;500;700;900&display=swap');
  
  * {
    box-sizing: border-box;
  }

  @mixin focus-style{
    box-shadow: 0 0 0 3px rgba(0, 128, 255, 0.16);
  }

  html, body
  {
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }
  }

  body {
    margin: 0;

    -webkit-tap-highlight-color: transparent;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    position: relative;
  }

  // Defaults
  p {
    @include kiraFont(m-body-2);
    margin-top: 16px;
    margin-bottom: 16px;
  }
  
  h2 {
    margin-top: 32px;
    margin-bottom: 24px;
    @include kiraFont(m-h2);
  }

  h3 {
    margin-top: 16px;
    margin-bottom: 8px;
    @include kiraFont(m-h3);
  }

  span {
    @include kiraFont(m-body-2);
  }

  a, router-link, .a {
    @include kiraFont(m-body-2);
    @include color(primary);
    text-decoration: none;
    transition: color 0.2s ease;
    &:hover {
      @include color(secondary);
    }
  }

  input[type=text]
  {
      width: 100%;
      height: 56px;
      border: 1px solid var(--kr-color-main-field-border);
      border-radius: 8px;
      outline: none;
      padding: 16px;
      transition: all ease 0.2s;
      color: var(--kr-color-main-plain-text);
      @include kiraFont(m-body-2);

      &:hover
      {
          border: 1px solid var(--kr-color-main-help-text);
      }

      &:focus
      {
          border: 1px solid var(--kr-color-feedback-active-2);
          box-shadow: 0 0 0 3px var(--kr-color-indicator-active);
      }

      &:disabled
      {
          background: var(--kr-color-main-light-fill);
          border: 1px solid var(--kr-color-main-divider);
          color: var(--kr-color-main-help-text);
      }
  }

  input[type=text]::-webkit-outer-spin-button,
  input[type=text]::-webkit-inner-spin-button {
      /* display: none; <- Crashes Chrome on hover */
      -webkit-appearance: none;
      margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }

  input[type=number] {
      -moz-appearance:textfield; /* Firefox */
  }

  input[type=submit], button {
      display: inline-block;
      color: #fff;

      background: kiraColor(primary);
      border-radius: 4px;

      user-select: none;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
      padding: 14px 20px;
      line-height: 0;
      text-align: center;
      color: #fff;

      @include kiraFont(m-button);

      &:hover
      {
          background: kiraColor(secondary);
      }

      &:active
      {
          background: kiraColor(secondary);
      }

      &:disabled
      {
          cursor: unset;
          background: var(--kr-color-feedback-inactive);
      }
  }

  // social crap
  #zcwMiniButton {
    bottom: 105px!important;
    right: 32px!important;
  }

  .zcwPopup button {
    color: #fff!important;
    margin-left: 8px!important;
    margin-top: 0!important;
    transform: translateY(1px);
  }

  .always-display-focus
  {
    &:focus
    {
      @include focus-style;
    }
  }

  :focus
  {
    outline: none;
  }

  .as-keyboarduser
  {
    :focus
    {
      @include focus-style;
    }
  }

  $maxWidthMainPx: 1088px;
  $padding-left: 32px;
  $padding-right: 32px;
  .kr-body
  {
    max-width: $maxWidthMainPx;
    min-width: 320px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: $padding-left;
    padding-right: $padding-right;
  }

  .kr-body-no-padding {
    padding-left: 0!important;
    padding-right: 0!important;
  }

  .kr-body-margin-top
  {
    margin-top: 64px;
  }

  .kr-body-margin-bottom
  {
    margin-bottom: 64px;
  }

  @media (max-width: 1005px)
  {
    $padding-left: 20px;
    $padding-right: 20px;
    .kr-body {
      padding-left: $padding-left;
      padding-right: $padding-right;
    }
    .kr-body-margin-top {
      margin-top: 40px;
    }
    .kr-body-margin-bottom {
      margin-bottom: 40px;
    }
  }

  @media (max-width: 699px)
  {
    p, a, span, router-link {
      @include kiraFont(s-body-2);
    }

    p {
      margin-top: 16px;
      margin-bottom: 16px;
    }
    
    h2 {
      margin-top: 24px;
      margin-bottom: 12px;
      @include kiraFont(s-h2);
    }

    h3 {
      margin-top: 16px;
      margin-bottom: 8px;
      @include kiraFont(s-h3);
    }

    .kr-body-margin-top {
      margin-top: 32px;
    }
    .kr-body-margin-bottom {
      margin-bottom: 32px;
    }
  }

  @media (max-width: 471px)
  {
    p, a, span, router-link {
      @include kiraFont(s-body-2);
    }
    .kr-body-margin-top {
      margin-top: 20px;
    }
    .kr-body-margin-bottom {
      margin-bottom: 20px;
    }
  }
</style>

<template>
  <!--<scrollbar-component
          id="v-app-page"
          @click="clicked"
          @keydown="pressedKeyboard"
          :class="{ 'as-keyboarduser': !isMouseUser }"


          :lock="openedMenu"
          scroll-name="body"
          :screen-mode="true"
  >-->
  <screen-component id="v-app-page"
                    @click="clicked"
                    @keydown="pressedKeyboard"
                    :class="{ 'as-keyboarduser': !isMouseUser }"

                    :lock="openedMenu"
  >
    <div id="v-body">
      <router-view v-slot="{ Component }">
        <transition :name=" disableTransition ? 'fadedis' : 'fade'"
                    mode="out-in"

                    @before-enter="beforeEnterPageTransition"
                    @enter="enterPageTransition"
                    @after-enter="afterEnterPageTransition"
                    @enter-cancelled="enterCancelledPageTransition"

                    @before-leave="beforeLeavePageTransition"
                    @leave="leavePageTransition"
                    @after-leave="afterLeavePageTransition"
        >
          <component v-if="isDisplayedPage" :is="Component" />
          <loading v-else />
        </transition>
      </router-view>
    </div>
    <div id="v-footer" ref="footer">
      <footer-component />
    </div>
    <div id="v-header-back"></div>
    <div id="v-header-wrapper" ref="header">
      <header-component @opened-menu="onOpenMenu" @closed-menu="onCloseMenu" />
    </div>
  </screen-component>
  <scrollbar-component id="v-app-scrollbar" :scroll-element="bodyElement" />
</template>

<script>
  import { Options, Vue } from "vue-class-component";

  import HeaderComponent from './components/HeaderComponent';
  import FooterComponent from "./components/FooterComponent";
  import Loading from "./views/Loading";

  import ScrollbarComponent from "./components/base/ScrollbarComponent";
  import ScreenComponent from "@/components/base/ScreenComponent";

  let popStateDetected = false;
  window.addEventListener('popstate', () => {
    popStateDetected = true;
  });

  let pageFirstLoaded = true;

  const Component = Options;
  @Component({
    components: {
      ScreenComponent,
      HeaderComponent,
      FooterComponent,
      Loading,
      ScrollbarComponent
    },
    props: {

    }
  })
  export default class App extends Vue {
    isMouseUser = true;

    isDisplayedPage = false;

    disableTransition = false;

    prevPageDissapear = false;
    smoothDisplayHeader = false;

    openedMenu = false;

    bodyElement = document.documentElement;

    onOpenMenu()
    {
      window.scrollTo({
        top: 0
      });
      this.openedMenu = true;
    }

    onCloseMenu()
    {
      this.openedMenu = false;
    }

    beforeEnterPageTransition()
    {
      this.$refs.footer.classList.add('fade-enter-from');
    }

    enterPageTransition()
    {
      const _this = this;
      setTimeout(() => {
        _this.$refs.footer.classList.add('fade-enter-active');
        _this.$refs.footer.classList.remove('fade-enter-from');
      }, 1);

      if(this.smoothDisplayHeader)
      {
        setTimeout(() => {
          _this.$refs.header.classList.add('fade-enter-active');
          _this.$refs.header.classList.remove('fade-enter-from');
        }, 1);
      }
    }

    afterEnterPageTransition()
    {
      this.$refs.footer.classList.remove('fade-enter-active');

      if(this.smoothDisplayHeader)
      {
        this.$refs.header.classList.remove('fade-enter-active');
        this.smoothDisplayHeader = false;
      }
    }

    enterCancelledPageTransition()
    {
      this.afterEnterPageTransition();
    }

    beforeLeavePageTransition()
    {

    }

    leavePageTransition()
    {
      const _this = this;
      setTimeout(() => {
        _this.$refs.footer.classList.add('fade-leave-active', 'fade-leave-to');
      }, 1);
    }

    afterLeavePageTransition()
    {
      this.$refs.footer.classList.remove('fade-leave-active', 'fade-leave-to');

      if(this.prevPageDissapear)
      {
        const rectHeader = this.$refs.header.getBoundingClientRect();
        if(rectHeader.top + rectHeader.height < 0)
        {
          window.scrollTo({
            top: 0
          });
          this.$refs.header.classList.add('fade-enter-from');
          this.smoothDisplayHeader = true;
        }

        this.prevPageDissapear = false;
      }
    }

    created()
    {
      const _this = this;
      routerGlobal.beforeEach((to, from, next) => {
        if(pageFirstLoaded)
        {
          pageFirstLoaded = false;
        }
        else
        {
          if(!popStateDetected)
          {
            _this.prevPageDissapear = true;
            _this.isDisplayedPage = false;
            _this.disableTransition = false;
          }
          else
          {
            _this.disableTransition = true;
            popStateDetected = false;
          }
        }

        next();
      });

      routerGlobal.afterEach((to, from) => {
        this.isDisplayedPage = true;
      });

      if(navigator.platform.indexOf("iPhone") > -1 || navigator.platform.indexOf("iPad") > -1 ||
              navigator.platform.indexOf("iPod") > -1)
      {
        document.body.classList.add("kr-ios");
        document.body.classList.add("kr-mobile");
      }

      if(navigator.platform.indexOf("Android") > -1)
      {
        document.body.classList.add("kr-android");
        document.body.classList.add("kr-mobile");
      }
    }

    clicked()
    {
      this.isMouseUser = true;
    }

    pressedKeyboard(event)
    {
      this.isMouseUser = false;
    }
  }
</script>