<template>
  <div>
    <v-app-bar
    fixed
    color="white"
    elevate-on-scroll
    scroll-target="#scrolling-techniques-7"
    outlined
    >
      <v-spacer></v-spacer>
      <v-toolbar-title>1강력추천 개업선물 - 싱그러운 금전수C </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-badge
      :content="cartNum"
      :value="cartNum"
      color="#4C1FBF"
      overlap>
        <v-icon>mdi-cart</v-icon>
      </v-badge>
  </v-app-bar>
  </div>
</template>

<script>
  export default {
    name: 'toolbar',

    data: () => ({
        cartNum: 0,
        show: false,
    }),
  }
</script>
<style scoped>

</style>
