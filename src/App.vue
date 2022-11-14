<!-- 
Descrizione:
Create un nuovo progetto utilizzando Vite e Vue 3 e definite i componenti necessari per strutturare il layout come da screenshot allegato. Al caricamento della pagina, effettuate una chiama ajax all'API di Breaking Bad: https://www.breakingbadapi.com/api/characters e con i dati restituiti, stampate una card per ogni personaggio.

Bonus:
Creare un componente loader da visualizzare fintantoché i risultati non sono pronti. -->
<script>
import axios from "axios"
import { store } from "./store"
import SiteHeader from "./components/SiteHeader.vue";
import SiteMain from "./components/SiteMain.vue"

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
          console.log(response);
          console.log(response.data);
          console.log(response.data[0]);
          this.store.characters = response.data
        })
        .catch(error => {
          console.error(error.message);
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