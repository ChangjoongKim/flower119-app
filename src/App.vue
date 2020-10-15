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
/* 기본 설정 */
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
/* 문단 타입 */
.describePtype {
  width: 90%;
  margin: 0 auto;
}
.describePtype2 {
  width: 90%;
  margin: 0 auto;
}
.subDescribePtype {
  width: 90%;
  margin: 0 auto;
}
.listPtype {
  width: 50%;
  float: left;
}
.analysisPtype {
  width: 50%;
  float: left;
}
.cardPtype {
  width: 100%;
}
.width-90 {
  width: 90%;
  margin: 0 auto;
}
.width-80 {
  width: 80%;
  margin: 0 auto;
}
.border-bottom-line {
  border-bottom: 1px solid #ddd;
  padding-bottom: 5%;
}
.border-top-line {
  border-top: 1px solid #ddd;
  padding-top: 5%;
}
.background-gray {
  background-color: #f5f5f7;
}
.bottom-height {
  line-height: 5.5em;
}
.fixed {
  position: fixed;
  top: 0px;
}
/* 폰트 */
.text-size-biggest {
  font-size: 1.8em;
  line-height: 1.2em;
}
.text-size-bigbigest {
  font-size: 5.0em;
  line-height: 1.2em;
  font-weight: bold;
}
.text-size-big{
  font-size: 1.4em;
}
.text-size-medium{
  font-size: 1.1em;
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
  color:  purple;
}
.red {
  color: #B70000;
}
/* 정렬 */
.align-center {
  margin: 0 auto;
  text-align: center;
}
/* 마진 */
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
.margin-bottom-20 {
  margin-bottom: 20%;
}
.paging {
  margin-top: 15%;
  margin-bottom: 20%;
}
</style>
