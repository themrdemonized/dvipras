<style scoped lang="scss">
    

    .v-icon-box
    {
        display: inline-block;
        width: 72px;
        height: 100%;
        vertical-align: top;

        position: absolute;
    }

    .v-icon-document
    {
        position: absolute;

        width: 24px;
        height: 36px;

        left: 50%;
        top: 50%;

        transform: translate(-50%, -50%);

        color: var(--kr-color-main-help-text);
    }

    .v-document
    {
        display: block;
        position: relative;

        cursor: pointer;

        &:not(:last-child)
        {
            border-bottom: 1px solid var(--kr-color-main-light-divider);
        }
    }

    .v-text-box
    {
        display: inline-block;
        vertical-align: top;

        width: calc(100% - 72px);

        padding-top: 14px;
        padding-bottom: 14px;

        margin-left: 72px;
    }

    .v-text-link
    {
        color: var(--kr-color-feedback-active-2);

        margin-bottom: 4px;
    }

    .v-sub-text
    {
        color: var(--kr-color-main-help-text);
    }
</style>

<template>
    <div class="vc-documents-list">
        <a class="v-document" v-for="document in documents"
           target="_blank"
           rel="noreferrer"
           :href="`/documents/${document.url_name}`"
           :key="document.name">
            <div class="v-icon-box">
                <icon-document-component class="v-icon-document"/>
            </div>
            <div class="v-text-box">
                <div class="v-text-link kr-font-body-2">{{document.name}}</div>
                <div class="v-sub-text kr-font-caption">{{document.type}}</div>
            </div>
        </a>
    </div>
</template>

<script>
    import { Options, Vue } from "vue-class-component";
    import IconDocumentComponent from "../components/icons/IconDocumentComponent";

    const Component = Options;
    @Component({
        components: {
            IconDocumentComponent
        },
        props: {
            documents: Array
        }
    })
    export default class DocumentsListComponent extends Vue {

    }
</script>