<template>
    <div>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header>
        <span class="text-emphasize">적립</span>
        <span>3,000원</span>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <span class="text-emphasize"></span>
        <span> 123456-789 (2020-10-12) 주문건의 마일리지 적립입니다.</span>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-header>
        <span class="text-emphasize">차감</span>
        <span>3,000원</span>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <span class="text-emphasize"></span>
        <span> 123456-789 (2020-10-12) 주문건의 마일리지 차감입니다.</span>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
    </div>
</template>
<script>
  export default {
    name: 'MypageMemberModify',
    data: () => ({
        page: 1,
    }),
  }
</script>