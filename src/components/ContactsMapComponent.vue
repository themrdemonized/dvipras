<style scoped lang="scss">
    .vc-contacts-map {
        width: 100%;
        height: 268px;
        overflow: hidden;
    }
</style>

<template>
    <div class="vc-contacts-map" :id="id">
        <!-- <iframe frameborder="no" style="height: 100%; box-sizing: border-box;" width="100%" :src=src></iframe> -->
    </div>
</template>

<script>
    import { Options, Vue } from "vue-class-component";
    import { uuid } from 'vue-uuid';

    const Component = Options;
    @Component({
        components: {

        },
        props: {
            src: {
                type: String,
                default: "https://widgets.2gis.com/widget?type=firmsonmap&amp;options=%7B%22pos%22%3A%7B%22lat%22%3A48.47927984123268%2C%22lon%22%3A135.0640940666199%2C%22zoom%22%3A16%7D%2C%22opt%22%3A%7B%22city%22%3A%22khabarovsk%22%7D%2C%22org%22%3A%2270000001006949946%22%7D"
            },
            popup: {
                type: String,
                default: "ДВИПРАЗ"
            },
            coords: {
                type: Array,
                default: [48.47927984123268, 135.0640940666199]
            },
            zoom: {
                type: Number,
                default: 16,
            }
        },
        watch: {
           
        },
        emits: []
    })
    export default class ContactsMapComponent extends Vue {
        id = "null";
        map = null;
        DGHandle = null;

        mounted() {
            let _this = this;

            // wait until 2GIS map script async loaded, hacky way
            this.DGHandle = setInterval(function() {
                // console.log("2GIS check DG load");
                if (DG) {
                    // console.log("2GIS DG Loaded");
                    clearInterval(_this.DGHandle);

                    _this.id = "contacts-map-" + _this.$uuid.v4();
                    DG.then(function() {
                        _this.map = DG.map(_this.id, {
                            center: _this.coords,
                            zoom: _this.zoom,
                            touchZoom: false,
                            scrollWheelZoom: false,
                            doubleClickZoom: false,
                            boxZoom: false,
                            zoomControl: false,
                        });
                        DG.marker(_this.coords).addTo(_this.map).bindPopup(_this.popup);
                    });
                }
            }, 0);
        }

        unmounted() {
            if (this.map) {
                this.map.remove();
            }
        }
    }
</script>