<template>
  <div class="home">
    <div><Hometoolbar /></div>
      <div style="height:5.5em;"></div>
      <v-tabs           v-model="tab"
          align-with-title background-color="white" color="#4C1FBF" left>

        <v-tab>인기</v-tab>
        <v-tab>팔로잉</v-tab>
        <v-tab>최신</v-tab>
        <v-tab>꽃집</v-tab>
       
        <v-tab-item v-for="n in 4" :key="n">
          <v-container fluid>
            <v-card-text v-if="n==1">

            <!--게시글 한 개-->
            <div class="cardPtype border-bottom-line">
              <div>
                <div class="margin-top-5"><img src="http://img.flower119.co.kr/catg/Ca08667.jpg" width="100%" /></div>
                <div class="width-90">
                  <div class="text-emphasize margin-top-5">코멘트</div>
                  <div class="text-size-small margin-top-5">
                      <table width="100%">
                        <tr>
                          <td width="15%">
                            <v-avatar color="#999999">
                              <v-icon dark>mdi-flower</v-icon>
                            </v-avatar>
                          </td>
                          <td width="55%">
                            <span class="text-shop-name">플라워119꽃배달서비스</span>
                            <br>
                            <v-icon small color="#4C1FBF">mdi-star</v-icon> <span>4.5</span><span class="text-size-small">(499)</span>
                          </td>
                          <td width="30%" align="right" class="text-size-small" valign="top">
                            서울특별시 / 서초구
                            <br>
                            2020.09.25
                          </td>
                        </tr>
                      </table>
                  </div>
                </div>
              </div>
            </div>
            <!--게시글 한 개-->
                        <!--게시글 한 개-->
            <div class="cardPtype border-bottom-line">
              <div>
                <div class="margin-top-5"><img src="http://img.flower119.co.kr/catg/Ca08667.jpg" width="100%" /></div>
                <div class="width-90">
                  <div class="text-emphasize margin-top-5">코멘트</div>
                  <div class="text-emphasize gray">게시일</div>
                  <div class="text-size-small margin-top-5">
                      <table width="100%">
                        <tr>
                          <td width="15%">
                            <v-avatar color="#999999">
                              <v-icon dark>mdi-flower</v-icon>
                            </v-avatar>
                          </td>
                          <td width="55%">
                            <span class="text-shop-name">플라워119꽃배달서비스</span>
                            <br>
                            <v-icon small color="#4C1FBF">mdi-star</v-icon> <span>4.5</span><span class="text-size-small">(499)</span>
                          </td>
                          <td width="30%" align="right" class="text-size-small" valign="top">
                            서울특별시 / 서초구
                            <br>
                            2020.09.25
                          </td>
                        </tr>
                      </table>
                  </div>
                </div>
              </div>
            </div>
            <!--게시글 한 개-->

            </v-card-text>
            <v-card-text v-if="n==2">
    <div class="cardPtype border-bottom-line">
      <div>
        <div class="margin-top-5"><img src="http://img.flower119.co.kr/catg/Ca08667.jpg" width="100%" /></div>
        <div class="width-80">
          <div class="text-emphasize margin-top-5">상품명</div>
          <div class="text-emphasize gray">가격</div>
          <div class="text-size-small margin-top-5">
            (후기 350개)
          </div>
        </div>
      </div>
    </div>
            </v-card-text>
            <v-card-text v-if="n==3">
    <div class="cardPtype border-bottom-line">
      <div>
        <div class="margin-top-5"><img src="http://img.flower119.co.kr/catg/Ca08667.jpg" width="100%" /></div>
        <div class="width-80">
          <div class="text-emphasize margin-top-5">상품명</div>
          <div class="text-emphasize gray">가격</div>
          <div class="text-size-small margin-top-5">
            (후기 350개)
          </div>
        </div>
      </div>
    </div>
            </v-card-text>            
            <v-card-text v-if="n==4">
    <div class="cardPtype border-bottom-line">
      <div>
        <div class="margin-top-5"><img src="http://img.flower119.co.kr/catg/Ca08667.jpg" width="100%" /></div>
        <div class="width-80">
          <div class="text-emphasize margin-top-5">상품명</div>
          <div class="text-emphasize gray">가격</div>
          <div class="text-size-small margin-top-5">
            (후기 350개)
          </div>
        </div>
      </div>
    </div>
            </v-card-text>       
          </v-container>
        </v-tab-item>
    </v-tabs>
    </div>

</template>

<script>
  import Hometoolbar from '@/components/common/Hometoolbar'
  export default {
    name: 'home',
    components: {
      Hometoolbar,
    },
        data () {
      return {
        //
      }
    },
  }


</script>
<style>
  .home {
    margin-bottom: 15%;
  }
</style>
