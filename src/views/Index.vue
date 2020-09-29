<template>
  <div class="home">
    <h1>내비 탭이 있는 것</h1>
    <div>
        <router-view></router-view>
        <navtab></navtab>
    </div>
  </div>

</template>

<script>
  import {Component, Vue} from 'vue-poperty-decorator';
  import navtab from '@/components/common/navtab';

  @Component({
    components: {
      navtab
    }
  })

  export default class Index extends Vue {

  }

</script>

