<template>
  <div class="chain">
    <toolbar />
    <div style="height:5.5em;"></div>
    <h1>근처꽃집</h1>
    <v-container>

    </v-container>
    <div>

      <div v-for="shop in shops" :key="shop">
        <div>
          <img src="http://img.flower119.co.kr/cm_shop/attach/FILE_54.jpg"/>
          <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
          ></v-rating>
          <div>{{ shop.name }}</div>
          <div>
            {{ shop.information }}
          </div>
          <router-link to="/chain/shop">
            <v-btn>
            샵 방문하기
            </v-btn>
          </router-link>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import toolbar from '@/components/common/toolbar';

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
    ]
    }),
  }
</script>

