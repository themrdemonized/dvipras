<style scoped lang="scss">
  

  .vc-loading
  {
    margin: 0;
    width: 100vw;
    height: 100%;
    left: 0;
    top: 0;
  }



</style>

<template>
  <div class="vc-loading">
    <random-loader-spinner-component/>
  </div>
</template>

<script>
  import { Options, Vue } from "vue-class-component";
  import RandomLoaderSpinnerComponent from "../components/RandomLoaderSpinnerComponent"

  const Component = Options;
  @Component({
    components: {
      RandomLoaderSpinnerComponent
    },
    props: {
    }
  })
  export default class Loading extends Vue
  {

  }
</script>
