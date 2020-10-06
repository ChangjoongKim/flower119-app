<template>
  <div class="detail">
    <div style="height: 3.5em;">
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
    <div class="margin-top-3">
      <v-tabs background-color="white" color="#4C1FBF" right grow >
        <v-tab>상품설명</v-tab>
        <v-tab>배송사진<span class="text-size-smallest">(2000)</span></v-tab>
        <v-tab>사용후기<span class="text-size-smallest">(2000)</span></v-tab>
        <v-tab>구매평<span class="text-size-smallest">(2000)</span></v-tab>        
        <v-tab-item v-for="n in 4" :key="n">
          <v-container fluid>
            <v-card-text v-if="n==1">
              <detailinfo/>
            </v-card-text>
            <v-card-text v-if="n==2">
              <DetailDica/>
            </v-card-text>
            <v-card-text v-if="n==3">
              <DetailUseAfter/>
            </v-card-text>
            <v-card-text v-if="n==4">
              <DetailOpinion/>
            </v-card-text>            
          </v-container>
        </v-tab-item>
      </v-tabs>
    </div>         

    <div class="cart-btn"
    >
      <div class="cart-vbtn">
        <table width="100%" align="center" border="0">
          <tr>
            <td width="50%" height="50" align="center" class="text-price" color="#000000">
               <span class="text-size-big">60,000</span><span class="text-size-small">원</span> 
            </td>
            <td width="50%" height="50" align="center">
              <router-link to="/cart">
                <v-btn
                class="mx-2 white--text"
                color="#4C1FBF"
                @click="cartNum++"
                >장바구니에 담기</v-btn>
              </router-link>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import detailinfo from '@/components/detail/detailinfo'; 
  import DetailOpinion from '@/components/detail/DetailOpinion'; 
  import DetailUseAfter from '@/components/detail/DetailUseAfter';
  import DetailDica from '@/components/detail/DetailDica';         
  export default {
    name: 'detail',
    components: {
      detailinfo,
      DetailOpinion,
      DetailUseAfter, 
      DetailDica,           
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
    mounted () {
      /* 자바스크립트 */

      /* 자바스크립트 */
    },
  }
</script>

<style scoped>
.cart-vbtn {
  margin: 0 auto;
  line-height: 2.0em;
}
.detail {
 margin: 0 auto;
}
.dtl_cart {
  position: fixed;
  bottom: 0px;
  text-align: center;
  width: 100%;
}
.dtl-tab-sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}
.cart-btn {
  width: 100%;
  position: fixed;
  bottom: 0px;
  height: 70px;
  padding-top: 1%;
  background-color: #efefef;
  z-index: 9999999;
  text-align: center;
}


</style>