<style scoped lang="scss">
  .v-study-links-button {
    .v-button-arrow {
      transform: none;
      transition: transform 0.3s ease-in-out;
      width: 20px;
      height: 20px;
    }
    &.active {
      .v-button-arrow {
        transform: rotate(-180deg);
      }
    }
  }
</style>

<template>
  <div>
    <flex-button-component
        mode="full"
        @action="studyLinksToggle"
        size="s"
        :class="{
        'v-study-links-button': true,
        'active': studyLinksActive,
        }"
    >
        <template v-slot:text>
        Все направления обучения
        </template>
        <template v-slot:icon>
        <icon-arrow-down-component class="v-button-arrow"/>
        </template>
    </flex-button-component>
  </div>
</template>

<script>
  import {Options, Vue} from "vue-class-component";
  import FlexButtonComponent from '../components/FlexButtonComponent';
  import IconArrowDownComponent from '../components/icons/IconArrowDownComponent';

  const Component = Options;
  @Component({
    components: {
      IconArrowDownComponent,
      FlexButtonComponent,
    },
    props: {

    },
    emits: ['active']
  })
  export default class StudyLinksToggleButtonComponent extends Vue
  {
    
    studyLinksActive = !window.matchMedia('(max-width: 1005px)').matches;

    emitActive() {
        this.$emit('active', this.studyLinksActive);
    }

    studyLinksToggle() {
      this.studyLinksActive = !this.studyLinksActive;
      this.emitActive();
    }

    async created() {
        this.emitActive();
    }
  }
</script>
