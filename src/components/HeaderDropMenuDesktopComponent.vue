<style scoped lang="scss">
  .v-drop-menu
  {
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
  }

  .v-header-color
  {
    color: var(--kr-color-primary);
    transition: color 0.2s ease;

    &:hover
    {
      color: var(--kr-color-secondary);
    }
  }

  .v-drop-menu-links
  {
    width: 1024px;
    min-height: 216px;
    max-height: 400px;
    left: 30px;
    top: 180px;

    padding: 32px;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 8px;

    position: fixed;

    border-radius: 4px;

    background-color: var(--kr-color-main-white);
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08), 0 12px 64px rgba(0, 0, 0, 0.08);
  }

  .v-enter-from
  {
    opacity: 0;
  }

  .v-enter-active
  {
    transition: all .25s .1s ease-out;
  }

  .v-enter-to
  {
    opacity: 1;
  }

  .v-leave-active
  {
    transition: all .1s .1s;
  }
  @media (max-width: 1054px) {
    .v-drop-menu-links
    {
      left: 10px;
    }
  }
  @media (max-width: 1040px) {
    .v-drop-menu-links
    {
      padding: 32px 24px;
      width: 1000px;
      left: 20px;
    }
  }
  @media (max-width: 1030px) {
    .v-drop-menu-links
    {
      left: 10px;
    }
  }
  @media (max-width: 1020px) {
    .v-drop-menu-links
    {
      padding: 32px 16px;
      width: 984px;
      left: 20px;
    }
  }
  @media (max-width: 1010px) {
    .v-drop-menu-links
    {
      left: 10px;
    }
  }
</style>

<template>
    <div class="v-drop-menu" @mouseover="openMenu = true" @mouseleave="openMenu = false" >
      <div class="v-header-color">
        <slot name="categoryName"></slot>
      </div>
      <transition>
        <div class="v-drop-menu-links"
             v-show="openMenu && !disableHoverMenu">
          <template v-for="article in articles"
                    :key="article.id">
              <slot name="article" :article="article"></slot>
          </template>
        </div>
      </transition>
    </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";

import TradeArticlesManager from "../lib/trade/TradeArticlesManager";

const Component = Options;
@Component({
  components: {
  },
  props: {
    disableHoverMenu: Boolean,
    optionsBase: Object
  },
  watch: {},
  emits: []
})
export default class HeaderDropMenuDesktopComponent extends Vue {
  openMenu = false;
  articles = [];
  async beforeMount () {
    const options = Object.assign({}, this.optionsBase);
    const articlesData = await TradeArticlesManager.getArticles(options);

    this.articles = articlesData.items;
  }
}
</script>
