<template>
  <div class="home">
    <div style="border-bottom: 1px solid #ddd;"><Categorytoolbar/></div>
    <br>
    <br>
    <locationpicker/>
    <div class="catg-gubun">
      <v-tabs background-color="white" color="#4C1FBF" right grow>
        <v-tab>기념일유형</v-tab>
        <v-tab>종류별상품</v-tab>
        <v-tab>가격별상품</v-tab>
        <v-tab-item v-for="n in 3" :key="n">
          <v-container fluid>
            <v-card-text v-if="n==1">
              <v-chip-group
              v-model="selection"
              active-class="deep-purple accent-4 white--text"
              column
              >
                <v-chip
                  class="ma-1"
                >
                생일
                </v-chip>                
                <v-chip
                >
                결혼기념일
                </v-chip>
                <v-chip
                  class="ma-1"
                >
                승진
                </v-chip>
                <v-chip
                  class="ma-1"
                >
                결혼
                </v-chip>
                <v-chip
                  class="ma-1"
                >
                조문
                </v-chip>                                                 
              </v-chip-group>
              <div class="item-list">
                <div @click.stop="drawer = !drawer" class="one-item">
                  <!--one item-->
                    <dicacard/>
                    <!--one item-->                    
                </div>
              </div>
            </v-card-text>
            <v-card-text v-if="n==2">
              <v-chip-group
              v-model="selection"
              active-class="deep-purple accent-4 white--text"
              column
              >
                <v-chip
                  class="ma-1"
                >
                꽃바구니
                </v-chip>                
                <v-chip
                >
                꽃다발
                </v-chip>
                <v-chip
                  class="ma-1"
                >
                플라워박스
                </v-chip>
                <v-chip
                  class="ma-1"
                >
                결혼화환
                </v-chip>
                <v-chip
                  class="ma-1"
                >
                조문화환
                </v-chip>                                                 
              </v-chip-group>              
              <div class="item-list">
                <div @click.stop="drawer = !drawer" class="one-item">
                  <!--one item-->
                    <dicacard/>
                    <!--one item-->                    
                </div>
              </div>
            </v-card-text>
            <v-card-text v-if="n==3">
              <v-chip-group
              v-model="selection"
              active-class="deep-purple accent-5 white--text"
              column
              >
                <v-chip
                  class="ma-1"
                >
                4만원대
                </v-chip>                
                <v-chip
                >
                5만원대
                </v-chip>
                <v-chip
                  class="ma-1"
                >
                7만원대
                </v-chip>
                <v-chip
                  class="ma-1"
                >
                8만원대
                </v-chip>
                <v-chip
                  class="ma-1"
                >
                # 10만원대
                </v-chip>                                                 
              </v-chip-group>              
              <div class="item-list">
                <div @click.stop="drawer = !drawer" class="one-item">
                  <!--one item-->
                    <dicacard/>
                    <!--one item-->                    
                </div>
              </div>
            </v-card-text>
          </v-container>
        </v-tab-item>
    </v-tabs>
    </div>
   <!--상품상세 드로어-->
       <v-navigation-drawer
      v-model="drawer"
      absolute
      right
      temporary
      width=100%
    >

    <v-app-bar
      absolute
      color="white"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
      outlined
    >
      <v-btn icon>
         <v-icon color="#555555"
          light
          @click.stop="drawer = !drawer">mdi-arrow-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title>강력추천 개업선물 - 싱그러운 금전수C </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-badge
      :content="cartNum"
      :value="cartNum"
      color="#4C1FBF"
      overlap>
        <v-icon>mdi-cart</v-icon>
      </v-badge>
      
    </v-app-bar>


            <detail/>         
    </v-navigation-drawer>
   <!--상품상세 드로어-->
  </div>
</template>

<script>
  import locationpicker from '@/components/common/Locationpicker';
  import Categorytoolbar from '@/components/common/Categorytoolbar';
  import dicacard from '@/components/common/dicacard';
  import detail from '@/components/common/detail';     
   export default {
    name: 'category',
    components: {
      locationpicker,
      Categorytoolbar,
      dicacard,
      detail,
     },
    methods: {
      filtered: function () {
        document.getElementById(this).classList.add(" active");
      }
    },
    data: () => ({
      drawer: false,
      group: null,
      clicked: false,
      isactive: false,
      rating: 4.5,
      cartNum: 0,
      show: false,
    }),
  
    watch: {
      group () {
        this.drawer = false
      },
    },
  }


</script>
<style>
.home {
  width: 100%;
  margin: 0 auto;
}
  .category_list {
    margin-top: 10%;
  }
.d-tab {
  width: 100%;
  overflow: hidden;
}
.d-tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 17px;
}
.d-tab button.active {
  border-bottom: 1px solid #4C1FBF;
  color: #4C1FBF;
  font-weight: bold;
}
.tabcontent {
  display: none;
  padding: 6px 12px;
  border-top: none;
}
.catg-gubun {
  width:95%;
  margin: 0 auto;
}
.active {
  background-color: #4C1FBF;
}

/* 아이템 */
.one-item {
  margin-top: 8%;
  border-bottom: 1px solid #ddd;
  padding-bottom: 7%;
}

/* 아이템 */
</style>

