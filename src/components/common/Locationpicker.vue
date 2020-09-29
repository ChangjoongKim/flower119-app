<template>
  <div class="location-picker">
    <div class="picker-in">
      <table width="100%" border="0" cell-padding="0" cell-spacing="0" >
        <tr>
          <td width="75%" align="center" valign="middle">
            <smooth-picker class="smpick" ref="smoothPicker" :data="data" :change="dataChange" />
          </td>
          <td width="25%" align="center" valign="middle">
            <button class="smbtn" type="button" @click="confirm">선택</button>
          </td>
        </tr>
      </table>


      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
  // 1. import
  import 'vue-smooth-picker/dist/css/style.css'
  import { SmoothPicker } from 'vue-smooth-picker'

  export default {
    name: 'locationpicker',
    components: {
      SmoothPicker // 2. register
    },
    data () {
      return {
        // 4. pass data
        data: [
          {
            currentIndex: 0,
            flex: 3,
            list: [
              '서울시', '강원도', '경기도'
            ],
            onClick: this.clickOnPlan,
            textAlign: 'center',
            className: 'row-group'
          },
          {
            divider: true,
            flex: 1,
            text: '-',
            textAlign: 'center',
            className: 'divider'
          },
          {
            currentIndex: 2,
            flex: 3,
            list: [
              '서울1', '서울2', '서울3', '서울4', '서울5'
            ],
            onClick: this.clickOnProduct,
            textAlign: 'center',
            className: 'item-group'
          }
        ]
      }
    },
    methods: {
      // 5. listen change event
      dataChange (gIndex, iIndex) {
        console.info('list', gIndex, iIndex)
        if (gIndex === 0) {
          let currentIndex = 0
          let list = []
          switch (iIndex) {
            case 2:
              list = ['경기1', '경기2', '경기3', '경기4', '경기5', '경기6', '경기7', '경기8', '경기9']
              currentIndex = 4
              break
            case 1:
              list = ['강원1', '강원2', '강원3', '강원4', '강원5', '강원6', '강원7']
              currentIndex = 3
              break
            default:
              list = ['서울1', '서울2', '서울3', '서울4', '서울5']
              currentIndex = 2
          }
          this.$refs.smoothPicker.setGroupData(2, Object.assign({}, this.data[2], { currentIndex, list }))
        }
      },
      // 6. listen click event
      clickOnPlan (gIndex, iIndex) {
        window.alert('Clicked plan: ' + this.data[gIndex].list[iIndex])
      },
      clickOnProduct (gIndex, iIndex) {
        window.alert('Clicked product: ' + this.data[gIndex].list[iIndex])
      },
      // 7. get finally data's index list
      confirm () {
        const ciList = this.$refs.smoothPicker.getCurrentIndexList()
        const planDetail = this.data[0].list[ciList[0]]
        const productDetail = this.data[2].list[ciList[2]]
        window.alert(
          'Confirmed index list: ' + ciList + '.\n' +
          'Confirmed plan: ' + planDetail + '.\n' +
          'Confirmed product: ' + productDetail
        )
      }
    },
    props : {
      location: String
    }
  }
</script>
<style>
  .location-picker {
    width: 90%;
    margin: 0 auto;
  }
  .picker-in button {
    width: 80%;
    border: 1px solid #4C1FBF;
    color: #4C1FBF;
    border-radius: 5px;
    line-height: 2.8em;
  }
  .picker-label {
    text-align: left;
    width: 100%;
    margin: 0 auto;
    margin-top: 5%;
    font-size: 1.2em;
  }
  .text-size-middle {
    font-size: 0.8em;
  }
</style>
