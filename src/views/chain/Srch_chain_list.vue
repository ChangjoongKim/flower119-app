<template>
  <div class="chain">
    <Chaintoolbar />
    <div style="height:5.5em;"></div>
    <div class="width-90">
      <div class="cardPtype border-bottom-line" v-for="shop in shops" :key="shop.name">
        <div>
          <div class="margin-top-5"><img src="http://img.flower119.co.kr/cm_shop/attach/FILE_54.jpg" width="100%"/></div>
          <div class="width-90">
            <div class="text-emphasize margin-top-5"><router-link :to="shop"> {{ shop.name }} </router-link> </div>
            <div class="text-emphasize gray">
              {{ shop.averageRate }}       
              {{ shop.information }}</div>
            <div class="text-size-small margin-top-5">
              (후기 350개)
            </div>
          </div>
        </div>
      </div>
      <div >
          
       

      </div> 
    </div>
  </div>
</template>

<script>
  import Chaintoolbar from '@/components/common/Chaintoolbar';
  import shops from '@/data/shops';

  export default {
    name: 'chain',
    components: {
      Chaintoolbar
    },
    data: () => ({
   shops: [
      {
        name: '화원명1',
        averageRate: '4.5',
        information: '소개1',
      },
      {
        name: '화원명2',
        averageRate: '3.5',
        information: '소개2',
      },
    ], 
    dialog: false,
    }),
    shops,

  }
</script>

