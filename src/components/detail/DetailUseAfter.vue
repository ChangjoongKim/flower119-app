<template>
  <div class="DetailUseAfter" id="detailUseAfter">

  <div v-for="comment in comments" v-bind:key="comment">

    <v-card-title>{{ comment.title }}</v-card-title>

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
          {{ comment.rate }} (413)
        </div>
      </v-row>

      <div class="my-4 subtitle-1">
        {{ comment.content }}
      </div>

      <div>{{ comment.memId }}  {{ comment.date }} 구매횟수: {{ numberOfOrder }} 회원등급: {{ memGrade }} </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>



    <v-card-text>
          <div class="my-4 subtitle-1">

          </div>

    </v-card-text>
  </div>



  <input v-model="newComment" />

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        사용후기작성
      </v-btn>
    </v-card-actions>

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
    el: '#detailUseAfter',
    data: () => ({
      page: 1,
      comments: [
        { title: '금전수', 
          content: '내용', 
          rate: '4.5', 
          memId: '아이디', 
          date: '날짜', 
          numberOfOrder: '구매횟수', 
          memGrade: '회원등급'
        }
      ]
    }),
  }
</script>
<style scoped>

</style>
