<template>
    <div class="kr-body kr-body-margin-top kr-body-margin-bottom">
        <h1>Страница не найдена :(</h1>
    </div>
</template>

<script>
  import { Options, Vue } from "vue-class-component";

  const Component = Options;
  @Component({})
  export default class PageNotFound extends Vue {
      mounted()
      {
          document.title = "ДВИПРАЗ – Страница не найдена";
      }
  }
</script>