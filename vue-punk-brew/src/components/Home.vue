<template lang="html">
  <main>
    <p v-if="loading">Loading...</p>
    <beer-card v-if="!loading" v-for="beer in beers" :beer="beer" :key="beer.id"></beer-card>
    <div v-else>No Beers!</div>
  </main>
</template>

<script>
  import axios from 'axios';

  export default{
    name: 'home',
    mounted() {
      axios.get('https://api.punkapi.com/v2/beers?per_page=80').then((res) => {
        this.beers = res.data;
        this.loading = false;
      });
    },
    data: () => ({
      beers: [],
      loading: true,
    }),
  };
</script>

<style lang="css" scoped>
  main {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    height: 100%;
  }
</style>
