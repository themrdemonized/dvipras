<style scoped lang="scss">
.v-drop-menu-category
{
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: var(--kr-color-primary);
}

.icon
{
  width: 20px;
  height: 20px;
}

.v-drop-menu-links-mobile
{
  position: fixed;

  width: 100%;
  height: 100%;

  left: 0;
  top: 0;

  margin: 0;
  padding: 0 52px 40px 52px;
  overflow: auto;

  display: flex;
  flex-direction: column;

  background-color: var(--kr-color-main-white);
}

.v-drop-menu-content
{
  border: 0;
}

.v-drop-menu-header-content
{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 7px;
  margin: 24px 0;
}

.icon-content
{
  width: 28px;
  height: 28px;
  transform: rotate(180deg);
}

.v-enter-from
{
  transform: translateX(100%);
}

.v-enter-active,
.v-leave-active
{
  transition: all .3s ease;
}

.v-enter-to
{
  transform: translateX(0);
}

.v-leave-from
{
  transform: translateX(0);
}

.v-leave-to
{
  transform: translateX(100%);
}
@media (max-width: 1005px)
{
  .v-drop-menu-mobile
  {
    padding: 18px 0;
    margin: 0;
    border-top: 1px solid #D9D9D9;
    &:first-child
    {
      border: 0;
    }
  }
}
@media (max-width: 351px)
{
  .v-drop-menu-links-mobile
  {
    padding: 0 32px 60px 32px;
  }
}
</style>

<template>
    <template v-if="true">
      <div class="v-drop-menu-mobile">
        <div class="v-drop-menu-category" @click="open = true">
          <slot name="categoryName"></slot>
          <icon-arrow-component class="icon"/>
        </div>
      </div>
    </template>

  <Transition>
    <template v-if="open">
        <div class="v-drop-menu-links-mobile" >
          <div class="v-drop-menu-header-content" @click="open = false">
            <icon-arrow-component class="icon-content"/>
            <slot name="contentCategoryName"></slot>
          </div>
          <template v-for="article in articles"
                    :key="article.id">
            <slot name="article" :article="article"></slot>
          </template>
        </div>
    </template>
  </Transition>
</template>

<script>
import { Options, Vue } from "vue-class-component";

import TradeArticlesManager from "../lib/trade/TradeArticlesManager";

import IconArrowComponent from "@/components/icons/IconArrowComponent.vue";

const Component = Options;
@Component({
  components: {
    IconArrowComponent
  },
  props: {
    optionsBase: Object
  },
  computed: {

  },
  watch: {

  },
  emits: []
})
export default class HeaderDropMenuMobileComponent extends Vue {
  open = false
  articles = [];
  async beforeMount () {
    const options = Object.assign({}, this.optionsBase);
    const articlesData = await TradeArticlesManager.getArticles(options);

    this.articles = articlesData.items;
  }
}
</script>
