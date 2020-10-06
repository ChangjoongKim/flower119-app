<template>
  <v-app>

    <v-main>
      <router-view/>
    </v-main>
    <navtab v-if="!isChecked"></navtab>
  </v-app>
</template>

<script>

import navtab from './components/common/navtab';



export default {
  name: 'App',

  components: {
    navtab
    
  },

  data: () => ({
    //
  }),
  methods: {

    //
    
  },

     created(){ 

       
       if(document.location.pathname == '/item/Detail'){ this.isChecked = true; } 
    }
};
</script>
<style>
div, p, table, tr, td {
  padding: 0;
  margin: 0;
  border: 0;
  line-height: 1.8em;
}
a {
  text-decoration: none;
}
.clear {
  clear:both;
}
.text-size-bigest {
  font-size: 1.8em;
  line-height: 1.2em;
}
.text-size-big{
  font-size: 1.2em;
}
.text-size-medium{
  font-size: 1.0em;
}
.text-size-small{
  font-size: 8pt;
}
.text-size-smallest{
  font-size: 6pt;
  letter-spacing: 0em;
}
.text-emphasize {
  font-weight:bold;
}
.text-price {
  font-weight: bold;
}
.text-price a {
  color: #000000;
}
.text-discount {
  color: #B70000;
  font-weight: bold;
}
.text-line-through {
  text-decoration: line-through;
}
.black {
  color: black;
}
.gray {
  color: #777777;
}
.purple {
  color:  #4C1FBF;
}
.red {
  color: #B70000;
}
.align-center {
  margin: 0 auto;
  text-align: center;
}
.margin-top-15 {
  margin-top : 15%;
}
.margin-top-10 {
  margin-top : 10%;
}
.margin-top-5 {
  margin-top : 5%;
}
.margin-top-3 {
  margin-top : 3%;
}
.margin-top-2 {
  margin-top : 2%;
}
</style>
