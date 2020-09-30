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
    <div class="dtl-tab-sticky" style="position: sticky; position:-webkit-sticky; top:0;">
      <v-tabs class="dtl-tab-sticky" background-color="white" color="#4C1FBF" right grow >
        <v-tab>상품설명</v-tab>
        <v-tab>실시간구매평</v-tab>
        <v-tab>사용후기</v-tab>
        <v-tab>실제배송사진</v-tab>        
        <v-tab-item v-for="n in 4" :key="n">
          <v-container fluid>
            <v-card-text v-if="n==1">
              <detailinfo/>
            </v-card-text>
            <v-card-text v-if="n==2">
              <DetailOpinion/>
            </v-card-text>
            <v-card-text v-if="n==3">
              <DetailUseAfter/>
            </v-card-text>
            <v-card-text v-if="n==4">
              <DetailDica/>
            </v-card-text>            
          </v-container>
        </v-tab-item>
      </v-tabs>
    </div>         

    <div class="cart-btn"
    >
      <router-link to="/cart">구매하기</router-link>
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
.dtl-tab-sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}
.cart-btn {
  width: 100%;
  position: fixed;
  bottom: 0px;
  height: 100px;
  background-color: white;
  z-index: 9999999;
  text-align: center;
}

</style>