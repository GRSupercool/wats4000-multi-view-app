<template>
<div class="component">
  <h2>{{message}}</h2>
  </div>
</template>

<script>
export default {
 data () {
   return{
     message: 'This component works.'
   }
   }
 }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  width: 75%;
  min-height: 100vh;
  height: 100%;
  margin: 0 auto;
  background: #fff;
  padding: 2rem;
}
body, html {
  background: #666;
  margin: 0;
  padding: 0;
}
</style>
