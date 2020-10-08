<template>
  <div class="DetailUseAfter">
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="100%"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="100%"
      src="http://img.flower119.co.kr/photo_board/PHOTO140006906-54124.jpg"
    ></v-img>

    <v-card-title>금전수</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 subtitle-1">
        아주 늦게 후기를 올립니다. 선배님 사무실 개업에 드렸어요. 예쁘고 고급스러워서 만족했습니다. 감사합니다.
      </div>

      <div>saileeyj (2020-09-23) [구매횟수:26] [등급: 일반 ]</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>



    <v-card-text>
          <div class="my-4 subtitle-1">강은 자신의 물을 마시지 않고,
나무는 자신의 열매를 먹지 않으며,
태양은 스스로를 비추지 않고,
꽃은 자신을 위해 향기를 퍼트리지 않습니다.
남을 위해 사는 것이 자연의 법칙입니다.
우리 모두는 서로를 돕기 위해 태어났습니다.
아무리 어렵더라도 말입니다...
인생은 당신이 행복할 때 좋습니다.
그러나 더 좋은 것은 당신 때문에
 다른 사람이 행복할 때입니다.
프란시스코 교황님의 아름다운 메세지
지난 3월에 나온메세지입니다.
의미있는 삶을 산다는 것이 쉽지는 않은것 같아요.
고객님? 늘 믿고 플라워119 이용해 주셔서 감사합니다.</div>

    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Share
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
    name: 'DetailUseAfter',
    data: () => ({
      page: 1,
    }),
  }
</script>
<style scoped>

</style>
