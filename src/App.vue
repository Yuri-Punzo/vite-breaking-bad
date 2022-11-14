<!-- 
Descrizione:
Create un nuovo progetto utilizzando Vite e Vue 3 e definite i componenti necessari per strutturare il layout come da screenshot allegato. Al caricamento della pagina, effettuate una chiama ajax all'API di Breaking Bad: https://www.breakingbadapi.com/api/characters e con i dati restituiti, stampate una card per ogni personaggio.

Bonus:
Creare un componente loader da visualizzare fintantoché i risultati non sono pronti. -->
<script>
import SiteHeader from './components/SiteHeader.vue';
import SiteMain from "./components/SiteMain.vue"

export default {
  name: "App",
  components: {
    SiteHeader,
    SiteMain
  }
}


</script>

<template>
  <SiteHeader />
  <SiteMain />
</template>

<style lang="scss" scoped>

</style>