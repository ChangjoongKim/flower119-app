<template>
  <div class="detail  vuebar-element" v-bar>
    <div style="height: 4.5em;">

    </div>
    <div>
      탭
    </div>         
    <v-carousel
    hide-delimiter-background
    show-arrows-on-hover
    height="400"
    cycle
    >
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
    <detailinfo/>
    <div>
      <ul>

          <li>ddddd</li>
                    <li>ddddd</li>
                    
          <li>ddddd</li>
                    <li>ddddd</li>

      </ul>

    </div>
        <div>
      <ul>

          <li>ddddd</li>
                    <li>ddddd</li>
                    
          <li>ddddd</li>
                    <li>ddddd</li>

      </ul>

    </div>
        <div>
      <ul>

          <li>ddddd</li>
                    <li>ddddd</li>
                    
          <li>ddddd</li>
                    <li>ddddd</li>

      </ul>

    </div>
        <div>
      <ul>

          <li>ddddd</li>
                    <li>ddddd</li>
                    
          <li>ddddd</li>
                    <li>ddddd</li>

      </ul>

    </div>
        <div style="height:600px">
      <ul>

          <li>ddddd</li>
                    <li>ddddd</li>
                    
          <li>ddddd</li>
                    <li>ddddd</li>

      </ul>

    </div>
    

    <v-bottom-navigation
      absolute
      color="white"
      hide-on-scroll
      horizontal
      scroll-target="#scroll-threshold-example"
      scroll-threshold="500"
    >
      <router-link to="/cart">구매하기</router-link>
    </v-bottom-navigation>
  </div>
</template>

<script>
  import detailinfo from '@/components/detail/detailinfo'; 
  export default {
    name: 'detail',
    components: {
      detailinfo,
    },

    data: () => ({

        items: [
          {
            src: 'http://img.flower119.co.kr/main/Ma05784.jpg',
          },
          {
            src: 'http://img.flower119.co.kr/add/A1a05784_0.jpg',
          },
          {
            src: 'http://img.flower119.co.kr/add/A2a05784_1.jpg',
          },
          {
            src: 'http://img.flower119.co.kr/add/A3a05784_2.jpg',
          },
        ],

    }),
  }
</script>
<style scoped>
.detail {
 margin: 0 auto;
}
.dtl_cart {
  position: fixed;
  bottom: 0px;
  text-align: center;
  width: 100%;
}
.vuebar-element {
  height: 250px;
  width: 100%;
  max-width: 500px;
  background: #dfe9fe;
}
.vb > .vb-dragger {
    z-index: 3;
    width: 5px;
    right: 0;
}
.vb > .vb-dragger > .vb-dragger-styler {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transform: rotate3d(0,0,0,0);
    transform: rotate3d(0,0,0,0);
    -webkit-transition:
        background-color 100ms ease-out,
        margin 100ms ease-out,
        height 100ms ease-out;
    transition:
        background-color 100ms ease-out,
        margin 100ms ease-out,
        height 100ms ease-out;
    background-color: rgba(48, 121, 244,.1);
    margin: 5px 5px 5px 0;
    border-radius: 20px;
    height: calc(100% - 10px);
    display: block;
}

.vb.vb-scrolling-phantom > .vb-dragger > .vb-dragger-styler {
    background-color: rgba(48, 121, 244,.3);
}

.vb > .vb-dragger:hover > .vb-dragger-styler {
    background-color: rgba(48, 121, 244,.5);
    margin: 0px;
    height: 100%;
}

.vb.vb-dragging > .vb-dragger > .vb-dragger-styler {
    background-color: rgba(48, 121, 244,.5);
    margin: 0px;
    height: 100%;
}

.vb.vb-dragging-phantom > .vb-dragger > .vb-dragger-styler {
    background-color: rgba(48, 121, 244,.5);
}
</style>

