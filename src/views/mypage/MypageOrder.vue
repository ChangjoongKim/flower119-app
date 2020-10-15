<template>
    <div class="orderList">
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header>
        <span class="text-emphasize">1234656-789</span>
        <span class="gray">2020.09.01</span>
        <span class="gray">서울시 서초구 </span>        
      </v-expansion-panel-header>
      <v-expansion-panel-content>
      <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td colspan="3" style="border-bottom: 1px solid #ddd;">
          </td>
        </tr> 
        <tr>
          <td width="10%" height="80px" valign="middle">
            <v-icon>mdi-account-heart</v-icon>
          </td>
          <td width="30%" class="gray">
            주문하신 분
          </td>
          <td width="60%">
            김창중 (010 6303 6778) trube@naver.com
          </td>
        </tr>        
        <tr>
          <td colspan="3" style="border-bottom: 1px solid #ddd;">
          </td>
        </tr>        
        <tr>
          <td width="10%" height="50px" valign="middle">
            <v-icon>mdi-account-check</v-icon>
          </td>
          <td width="30%" class="gray">
            받으시는 분
          </td>
          <td width="60%" class="v-li-content">
            홍길동 (010 6303 6778, 02-3471-6778)
          </td>
        </tr>
        <tr>
          <td colspan="3" style="border-bottom: 1px solid #ddd;">
          </td>
        </tr>
        <tr>
          <td width="10%" height="50px" valign="middle">
            <v-icon>mdi-truck</v-icon>
          </td>
          <td width="30%" class="gray">
            배송지
          </td>
          <td width="60%" height="80px">
            서울 서초구 서초동 1634-9 월드메르디앙아파트 101-402호
          </td>
        </tr>
        <tr>
          <td colspan="3" style="border-bottom: 1px solid #ddd;">
          </td>
        </tr>
        <tr>
          <td width="10%" height="50px" valign="middle">
            <v-icon>mdi-flower</v-icon>
          </td>
          <td width="30%" class="gray">
            상품
          </td>
          <td width="60%">
            싱그러운 금전수 C
          </td>
        </tr>
        <tr>
          <td colspan="3" style="border-bottom: 1px solid #ddd;">
          </td>
        </tr>
        <tr>
          <td width="10%" height="50px" valign="middle">
            <v-icon>mdi-comment-processing</v-icon>
          </td>
          <td width="30%" class="gray">
            메시지
          </td>
          <td width="60%" style="padding-top: 3%; padding-bottom: 3%;">
            To 0000
            <br>
            내용
            <br>
            From 000
            리본 보내시는 분 
            <br>
            000
            <br>
            리본 축전문구
            <br>
            축결혼            
          </td>
        </tr>
        <tr>
          <td colspan="3" style="border-bottom: 1px solid #ddd;">
          </td>
        </tr>          
        <tr>
          <td width="10%" height="50px" valign="middle">
            <v-icon>mdi-currency-krw</v-icon>
          </td>
          <td width="30%" class="gray">
            결제
          </td>
          <td width="60%" style="padding-top: 3%; padding-bottom: 3%;">
            신용카드
            <br>
            60,000원
          </td>
        </tr>
        <tr>
          <td colspan="3" style="border-bottom: 1px solid #ddd;">
          </td>
        </tr>          
        <tr>
          <td width="10%" height="50px" valign="middle">
            <v-icon>mdi-note</v-icon>
          </td>
          <td width="30%" class="gray">
            증빙자료
          </td>
          <td width="60%" style="padding-top: 3%; padding-bottom: 3%;">
            신용카드 전표
          </td>
        </tr>
        <tr>
          <td colspan="3" style="border-bottom: 1px solid #ddd;">
          </td>
        </tr>          
        <tr>
          <td width="10%" height="100px" valign="middle">
            <v-icon>mdi-alert-circle-outline</v-icon>
          </td>
          <td width="30%" class="gray">
            주의사항
          </td>
          <td width="60%">
            신용카드전표, 계산서를 출력하시려면 PC로 flower119.co.kr 에 방문하셔서 출력 부탁드립니다.
          </td>
        </tr>
      </table>        
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
    </div>
  
</template>
<script>
  export default {
    name: 'MypageOrder',
    data: () => ({
        page: 1,
    }),
  }
</script>
<style>
  .orderList {
    border-top: 2px solid #ddd;
  }
  .orderList01 {
    line-height: 3.4em;
  }
  .orderList-01 {
    width: 25%;
  }
  .orderList-02 {
    width: 25%;
  }
  .orderList-03 {
    width: 25%;
  }
  .orderList-04 {
    width: 25%;
  }      
</style>
