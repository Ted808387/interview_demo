<template>
  <Wave/>
  <nav class="navbar">
    <router-link to="/">首頁</router-link>
    <router-link to="/products">產品目錄</router-link>
    <router-link to="/aboutus">關於我們</router-link>
    <select name="theme" v-model="theme">
      <option value="1">主題一</option>
      <option value="2">主題二</option>
      <option value="3">主題三</option>
    </select>
  </nav>
  <router-view/>
</template>

<script>
import Wave from './components/Wave.vue'
import changetheme from '@/utils/theme.js'

export default {
  components: {
    Wave
  },
  data(){
    return {
      theme: '1'
    }
  },
  beforeUpdate(){
    this.$theme = this.theme
    changetheme(this.$theme)
  }
}
</script>

<style lang="scss">
  @import './assets/scss/all.scss';
</style>
