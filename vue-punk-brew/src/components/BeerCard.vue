<template lang="html">
  <div class="beer-card">
    <img :src="img" :alt="name">
    <h3>
      {{beer.name}}
      <br />
      <small>{{beer.tagline}}</small>
    </h3>

    <p>{{beer.description}}</p>

    <h4>Food pairing</h4>
    <ul>
      <li v-for="food in beer.food_pairing">{{food}}</li>
    </ul>

    <a :href="url">More</a>
  </div>
</template>

<script>
  export default {
    props: ['beer'],
    name: 'beer-card',
    computed: {
      url() {
        return `/#/beer/${this.beer.id}`;
      },
      img() {
        return this.beer.image_url;
      },
      name() {
        return this.beer.name;
      },
    },
  };
</script>

<style lang="css" scoped>
  .beer-card {
    background-color: #fff;
    box-shadow: 0px 2px 5px 1px rgba(0,0,0, 0.2);
    max-width: 400px;
    width: 100%;
    margin: 1rem 0;
    padding: 1rem;
  }
  img {
    height: 300px;
    max-width: 100%;
    display: block;
    margin: 0 auto 1em;
  }
</style>
