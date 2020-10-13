<template>
  <div class="chain">
    <toolbar />
    <div style="height:5.5em;"></div>
    <h1>근처꽃집</h1>
    <v-container>

    </v-container>
    <div>

      <div v-for="shop in shops" :key="shop.name">
          <img src="http://img.flower119.co.kr/cm_shop/attach/FILE_54.jpg" width="100%"/>
        <router-link :to="shop"> {{ shop.name }} </router-link>        
        {{ shop.averageRate }}         
        {{ shop.information }}
      </div> 
    </div>
  </div>
</template>

<script>
  import toolbar from '@/components/common/toolbar';
  import shops from '@/data/shops';

  export default {
    name: 'chain',
    components: {
      toolbar
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

