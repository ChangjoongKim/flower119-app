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
          {{ comment.averageRage }} ({{ comment.numUseAfter }})
        </div>
      </v-row>

      <div class="my-4 subtitle-1">
        {{ comment.content }}
      </div>

      <div>아이디 : {{ comment.memId }} 등록일 :  {{ comment.date }} 구매횟수: {{ comment.numberOfOrder }} 회원등급: {{ comment.memGrade }} </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>



    <v-card-text>
          <div class="my-4 subtitle-1">

          </div>

    </v-card-text>
  </div>



 <form>
    <v-text-field
      v-model="name"
      label="제목"
    ></v-text-field>
    <v-textarea
      autocomplete="email"
      label="내용"
    ></v-textarea>
    <v-select
      v-model="select"
      label="점수"
      :items ="rate"
    ></v-select>
    <v-checkbox
      v-model="checkbox"
      label="개인정보이용 동의"
    ></v-checkbox>

    <v-btn
      class="mr-4"
      @click="submit"
    >
      사용후기작성
    </v-btn>
    <v-btn @click="clear">
      취소
    </v-btn>
  </form>

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
      rate: ['5', '4', '3', '2', '1'],
      comments: [
        { title: '금전수', 
          content: '내용', 
          averageRate: '4.5',
          numUseAfter: '2000', 
          memId: '아이디', 
          date: '날짜', 
          numberOfOrder: '구매횟수', 
          memGrade: '회원등급'
        },
        { title: '타이틀2', 
          content: '내용2', 
          averageRate: '5.0',
          numUseAfter: '1000', 
          memId: '아이디2', 
          date: '날짜2', 
          numberOfOrder: '구매횟수2', 
          memGrade: '회원등급2'
        }
      ],
      newComments: '',
    }),
  }
</script>
<style scoped>

</style>
