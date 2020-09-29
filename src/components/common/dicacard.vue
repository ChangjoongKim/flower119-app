<template>
              <!--상품한개-->
                  <div class="dicacard">
                    <div class="one-item-dica">
                      <img src="http://img.flower119.co.kr/photo_board/PHOTO1258480699-80954.jpg" width="100%" />
                    </div>
                    <div class="one-item-info">
                      <div class="one-item-in">
                        <img src="http://img.flower119.co.kr/catg/Ca05784.jpg" width="100%" />
                        <p class="text-size-middle">강력추천 개업선물 - 싱그러운 금전수C</p>
                        <p><span class="text-price">60,000원</span> <span class="text-discount">20%</span>
                        <br>
                          <span class="text-size-small">사용후기</span> <span class="text-emphasize">60</span> <span class="text-size-small">개</span>
                        </p>
                      </div>
                    </div>
                    <div class="clear"></div>
                    <div>
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
              <!--상품한개-->
</template>

<script>
  export default {
    name: 'dicacard',

    data: () => ({

    }),
  }
</script>
<style scoped>
/* 아이템 */
.one-item {
  margin-top: 8%;
  border-bottom: 1px solid #ddd;
  padding-bottom: 7%;
}
.one-item-dica {
  float: left;
  width: 60%;
}
.one-item-info {
  float: left;
  width: 40%;
}
.one-item-in {
  width: 80%;
  margin: 0 auto;
}

/* 아이템 */
</style>