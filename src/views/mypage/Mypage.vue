<template>
  <div class="mypage">
    <div class="margin-top-5">
      <div class="width-90"><span class="text-emphasize">김창중님</span><span class="gray">의 마이페이지 입니다</span></div>
      <div class="margin-top-5">
        <v-tabs background-color="white" color="#4C1FBF" right grow>
          <v-tab>나의주문내역</v-tab>
          <v-tab>상담톡</v-tab>
          <v-tab>마일리지</v-tab>
          <v-tab>정보수정</v-tab>        
          <v-tab-item v-for="n in 4" :key="n">
            <v-container fluid>
              <v-card-text v-if="n==1">
                <MypageOrder/>
              </v-card-text>
              <v-card-text v-if="n==2">
                <MypageMemo/>
              </v-card-text>
              <v-card-text v-if="n==3">
                <MypageCoupon/>
              </v-card-text>            
              <v-card-text v-if="n==4">
                <MypageMemberModify/>
              </v-card-text>       
            </v-container>
          </v-tab-item>
      </v-tabs>
      </div>
    </div>
  </div>
</template>


<script>
  import MypageOrder from '@/views/mypage/MypageOrder'; 
  import MypageMemo from '@/views/mypage/MypageMemo'; 
  import MypageCoupon from '@/views/mypage/MypageCoupon'; 
  import MypageMemberModify from '@/views/mypage/MypageMemberModify'; 
  export default {
    data () {
      return {

      }
    },
    components: {
      MypageOrder,
      MypageMemo,
      MypageCoupon,
      MypageMemberModify,
     },
  }
</script>

