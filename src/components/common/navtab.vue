<template>
      <div id="nav" class="navigation">
         <router-link tag="li" to="/">
           <i class="fa fa-fw fa-heart"></i>
           <br>
           <span class="text-size-small">꽃사랑</span>
         </router-link>
         <router-link tag="li" to="/category">
           <i class="fa fa-fw fa-truck"></i>
           <br>
            <span class="text-size-small">꽃배달</span>
         </router-link>
         <router-link tag="li" to="/chain">
           <i class="fa fa-map-marker"></i>
           <br>
           <span class="text-size-small">근처꽃집</span>
         </router-link>
         <router-link tag="li" to="/mypage">
           <i class="fa fa-fw fa-user-circle-o"></i>
           <br>
           <span class="text-size-small">마이페이지</span>
         </router-link>
         <router-link tag="li" to="/cart">
           <i class="fa fa-fw fa-shopping-cart"></i>
           <br>
           <span class="text-size-small">장바구니</span>
         </router-link>
      </div>
</template>

<script>
  export default {
    name: 'navtab',

    data: () => ({

    }),
  }
</script>
<style scoped>
  #nav {
    position: fixed;
    bottom: 0px;
    padding: 0;
    margin: 0;
    padding-top: 8px;
    padding-bottom: 5px;
    width: 100%;
    color: #777777;
    font-size: 20px;
    border-top: 1px solid #dddddd;
    line-height: 1.0em;
    background-color: white;
    z-index: 99;
  }
  #nav a {
    text-decoration: none;
  }
  div, ul, li {
    margin: 0;
    padding: 0;
    border: 0;
  }
  li {
    width: 20%;
    float: left;
    list-style: none;
    text-align: center;
  }
  .text-size-small{
    font-size: 8pt;
  }
 .router-link-exact-active {
   color: #4C1FBF;
   font-weight: bold;
 }
</style>
