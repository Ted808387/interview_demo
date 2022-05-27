<template>
  <div class="home">
    <div class="left_page">
      <h1 class="left_title">汽車目錄</h1>
      <div class="change_btn">
        <ul class="status_group_btn">
          <li class="status_btn" @click="changestatus('輸入框')">輸入框</li>
          <li class="status_btn" @click="changestatus('單選鈕')">單選鈕</li>
          <li class="status_btn" @click="changestatus('下拉選單')">下拉選單</li>
        </ul>
        <ChangeSearch class="changesearch" :childstatus='status' @update='updatesearch'/>
      </div>
      <button class="btn_more" @click="switchpage">Read More</button>
    </div>
    <div class="right_page">
      <CarList :searchcar="search" :routerstats="router"/>
    </div>
  </div>
</template>

<script>
import CarList from '@/components/CarList.vue'
import ChangeSearch from '@/components/ChangeSearch.vue'

export default {
  name: 'Home',
  components: {
    CarList,
    ChangeSearch
  },
  data (){
    return {
      status: '輸入框',
      search: {},
      router: false,
    }
  },
  methods: {
    changestatus(value){
      this.search = {}
      this.status = value
    },
    updatesearch(value){
      this.search = value
    },
    switchpage(){
      this.router = !this.router
      this.$router.push({
        name: 'products',
        params: { 
          root: this.router
        }
      })
    }
  }
}
</script>
