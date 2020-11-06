//questa variabile abilita il prototiping di vue
Vue.config.devtools = true;

// definisco l'oggetto vue avendo gia caricato la sua cdn
var app = new Vue({
    //questo è l 'elemento dove si aggancia vue, tutto quello scritto in questo id di nome app verra gestito da vue
    el: '#app',

    //qui è dove creiamo definiamo le pseudo variabili di vue, infatti non sono delle vere variabili ma oggetti che vue definisce
    //e gestisce
    data: {
        messaggio: 'Hello Vue!',
        messaggio2: `Sono il messaggio con v-bind`,
        rosso : 'rosso',
        blu : 'blu',
        messaggio_input : '', // qui è dove verra scritto diamicamente il valore di input preso dal v-model
        placeholder : '...scrivi il tuo nome',
        img_druid : 'https://www.tgvinyl.net/wp-content/uploads/2019/02/WoW-Druid-black.jpg,',
        img_title : 'Druid wow class',
        img_width : 320 + 'px',
        colore_titolo : 'blu',
        dpi : '',
        sens : '',
        place_dpi : 'inserisci i tuoi dpi',
        place_sens : 'inserisci la tua sensibilità',
        edpi : '',

    },

    //i methods sono dove definiamo le nostre funzioni e possono essere benissimamente scritte in es6
    methods: {
        cambia_colore() {
            //qui per richiamare un oggetto di vue che si trova in data o da qualche altra parte basta usare il this
            if(this.colore_titolo == 'blu') {
                this.colore_titolo = 'rosso'
            } else {
                this.colore_titolo = 'blu'
            }
        },

        cacl_edpi() {

            this.edpi = this.dpi * this.sens;

            return this.edpi.toFixed(2)
        }

    }
})