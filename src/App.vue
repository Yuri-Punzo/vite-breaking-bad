<!-- 
Descrizione:
Create un nuovo progetto utilizzando Vite e Vue 3 e definite i componenti necessari per strutturare il layout come da screenshot allegato. Al caricamento della pagina, effettuate una chiama ajax all'API di Breaking Bad: https://www.breakingbadapi.com/api/characters e con i dati restituiti, stampate una card per ogni personaggio.

Bonus:
Creare un componente loader da visualizzare fintantoché i risultati non sono pronti. -->
<script>
import axios from "axios"
import SiteHeader from "./components/SiteHeader.vue";
import SiteMain from "./components/SiteMain.vue"
import { store } from "./store"

export default {
  name: "App",
  components: {
    SiteHeader,
    SiteMain
  },
  data() {
    return {
      store
    }
  },
  methods: {
    callApi(url) {
      axios.get(url)
        .then(response => {
          //console.log(response);
          //console.log(response.data);
          this.store.characters = response.data
          this.store.charactersLength = response.data.length
          this.store.loading = false
        })
        .catch(error => {
          //console.error(error.message);
          this.error = error.message
        })
    }
  },
  mounted() {
    this.callApi(this.store.API_URL)
  }
}


</script>

<template>
  <SiteHeader />
  <SiteMain />
</template>

<style lang="scss" scoped>

</style>