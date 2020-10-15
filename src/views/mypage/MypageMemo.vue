<template>
    <div>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header>
        <span class="text-emphasize">Q</span>
        <span>고객 쪽지 내용</span>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <span class="text-emphasize">A </span>
        <span> 상담원 답변 내용</span>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
    </div>
</template>
<script>
  export default {
    name: 'MypageMemo',
    data: () => ({
        page: 1,
    }),
  }
</script>