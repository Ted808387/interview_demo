<template>
  <div class="products">
    <CarList :searchcar="search" :routerstats="router" class="productslist"/>
  </div>
</template>

<script>
import CarList from '@/components/CarList.vue';

export default {
  name: 'Products',
  components: {
    CarList
  },
  data (){
    return {
      search: {},
      router: {
        type: Boolean
      },
    }
  },
  created(){
    this.router = this.$route.params.root
  }
}
</script>




