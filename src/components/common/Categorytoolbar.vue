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
      <v-toolbar-title>
        <v-text-field
        class="mx-4"
        flat
        hide-details
        label="어디로 꽃배달 하세요?"
        prepend-inner-icon="mdi-magnify"
        solo-inverted
      ></v-text-field>
      </v-toolbar-title>
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
    name: 'Categorytoolbar',

    data: () => ({
        cartNum: 0,
        show: false,
    }),
  }
</script>
<style scoped>

</style>
