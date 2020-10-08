<template>

<div class="DetailOpinion">
  <div>받으시는 분들의 연령대</div>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            연령대
          </th>
          <th class="text-left">
            구매비율(%)
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in ages"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.ratios }} % </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  <div>
    구매평
  </div>
  <div>
    <v-card class="elevation-2">
          <v-card-title class="headline">
            좋습니다!!!
          </v-card-title>
          <v-card-text>
            ahu**** | 2020.10.07
          </v-card-text>
          <v-card-text>
            개업축하 | 40대남자
          </v-card-text>          
        </v-card>
  </div>
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
    name: 'DetailOpinion',
    data: () => ({
        ages: [
          {
            name: '10대',
            ratios: 0,
          },
          {
            name: '20대',
            ratios: 20,
          },
          {
            name: '30대',
            ratios: 30,
          },
          {
            name: '40대',
            ratios: 40,
          },
          {
            name: '50대',
            ratios: 10,
          },
          {
            name: '60대~',
            ratios: 0,
          },          
        ],
        page: 1,
    }),
  }
</script>
<style scoped>

</style>
