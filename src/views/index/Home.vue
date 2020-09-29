<template>
  <div class="home">
      <div style="border-bottom: 1px solid #ddd;"><toolbar/></div>
      <br>
      <locationpicker/>


      </div>
</template>

<script>
  import locationpicker from '@/components/common/Locationpicker';
  import toolbar from '@/components/common/toolbar';
  export default {
    name: 'home',
    components: {
      locationpicker,
      toolbar,
    },
        data () {
      return {
        //
      }
    },
  }


</script>
<style>
  .category_list {
    margin-top: 10%;
  }
.d-tab {
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
  border-bottom: 2px solid #000000;
}
.tabcontent {
  display: none;
  padding: 6px 12px;
  border-top: none;
}
</style>
