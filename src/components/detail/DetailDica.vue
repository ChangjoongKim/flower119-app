<template>
  <div class="DetailDica">
  <v-card
    class="mx-auto"
    max-width="100%"
  >
    <v-img
      class="white--text align-end"
      height="100%"
      src="http://img.flower119.co.kr/photo_board/PHOTO1305304992-103554.jpg"
    >
      <v-card-title>huni***고객님의 배송사진 입니다</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      2020 10 08
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>배송업체 : 플라워119꽃배달서비스</div>

      <div>배송지 : 서울시 / 서초구</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>

  <div class="text-center paging">
    <v-pagination
      v-model="page"
      :length="4"
      circle
    ></v-pagination>
  </div>
</div>
</template>
<script>
  export default {
    name: 'DetailDica',
    data: () => ({
        page: 1,
    }),
  }
</script>
<style scoped>
  .DetailDica {
    margin-bottom: 20%;
  }
</style>
