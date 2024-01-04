<template>
  <div class="page-wrapper">
    <div>
      <Header />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue'
import MainFooter from './components/MainFooter.vue'
export default {
  components: {
    Header : MainHeader,
    Footer : MainFooter,
  },
  data() {
    return {
     
    };
  },
};
</script>

<style>

</style>