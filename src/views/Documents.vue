<style scoped lang="scss">
  

  .kr-body
  {
    width: 680px;
    text-align: left;
  }

  .v-title
  {
    color: var(--kr-color-main-header);

    @include kiraFont(h1);
  }

  .v-sub-title
  {
    color: var(--kr-color-main-plain-text);

    margin-top: 32px;
    //margin-bottom: 24px;
  }

  .v-first-padding
  {
    margin-bottom: 24px;
  }

  @media (max-width: 750px)
  {
    .kr-body
    {
      width: 560px;
    }
  }

  @media (max-width: 620px)
  {
    .kr-body
    {
      min-width: unset;
      width: calc(100% - 40px);
      padding-left: 20px;
      padding-right: 20px;
    }

    .v-title
    {
      @include kiraFont(h3);
    }
  }
</style>

<template>
  <div class="kr-body kr-body-margin-top kr-body-margin-bottom">
    <div class="v-title kr-font-h1 v-first-padding">Документы</div>
    <!--<div class="v-sub-title kr-font-h4">Документы по собранию собственников</div>-->
    <documents-list-component :documents="[
            {
              name: 'Правила  проживания в ТСЖ Фортуна',
              type: 'PDF (3,54 МБ)',
              url_name: 'Правила  проживания в ТСЖ Фортуна.pdf'
            },
            {
              name: 'Свидетельство ИНН',
              type: 'JPEG (1,75 МБ)',
              url_name: 'Свидетельство ИНН.jpeg'
            },
            {
              name: 'Свидетельство ОГРН (измен. учр док-ов)',
              type: 'JPEG (1,69 МБ)',
              url_name: 'Свидетельство ОГРН (измен. учр док-ов).jpeg'
            },
            {
              name: 'Свидетельство ОГРН',
              type: 'JPEG (1,74 МБ)',
              url_name: 'Свидетельство ОГРН.jpeg'
            },
            {
              name: 'Свидетельство ОРГН (не связ.с измен.)',
              type: 'JPEG (1,69 МБ)',
              url_name: 'Свидетельство ОРГН (не связ.с измен.).jpeg'
            },
            {
              name: 'Устав ТСЖ Фортуна от 29.04.2019 (новая редакция)',
              type: 'RAR (9,88 МБ)',
              url_name: 'Устав ТСЖ Фортуна от 29.04.2019 (новая редакция).rar'
            }
    ]" />
  </div>
</template>

<script>
  import { Options, Vue } from "vue-class-component";
  import DocumentsListComponent from "../components/DocumentsListComponent";

  const Component = Options;
  @Component({
    components: {
      DocumentsListComponent
    },
    props: {
    }
  })
  export default class Documents extends Vue
  {
    mounted()
    {
      document.title = "Документы – ТСЖ «Фортуна» – Протоколы и бухгалтерская отчетность";
    }
  }
</script>
