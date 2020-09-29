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
.clear {
  clear:both;
}
.text-size-bigest {
  font-size: 1.8em;
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
}
.text-emphasize {
  font-weight:bold;
}
.text-price {
  font-weight: bold;
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
</style>
