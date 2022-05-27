<template>
  <div class="carlist">
    <div class="car_group">
      <div class="car_card" v-for="car in searchaftercar" :key="car.name">
        <img class="car_img" :src="car.image">
        <ul class="car_spec">
          <li class="car_brand">
            <span>品牌 : </span>
            {{ car.brand }}
          </li>
          <li class="car_hp">
            <span>馬力 : </span>
            {{ car.HP }}
          </li>
          <li class="car_name">
            <span>車款 : </span>
            {{ car.name }}
          </li>
          <li class="car_power">
            <span>動力 : </span>
            {{ car.power }}
          </li>
          <li class="car_price">
            <span>價錢 : </span>
            {{ `${car.price} 萬` }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarList',
  props: {
    'searchcar': {
      type: Object
    },
    'routerstats': {
      type: Boolean
    }
  },
  data(){
    return {
      cars: [],
    }
  },
  computed: {
    searchaftercar(){
      let searchinfor = this.searchcar
      let cargroup = []
      if(!searchinfor.value || this.routerstats === true){
        cargroup = this.cars
      }
      else if(searchinfor.childstatus === 'text'){
        if(searchinfor.value){
          cargroup = this.cars.filter((item) => 
            String(item.brand).indexOf(searchinfor.value) > -1 || 
            String(item.name).indexOf(searchinfor.value) > -1 || 
            String(item.power).indexOf(searchinfor.value) > -1 
          )
        }
      }
      else if(searchinfor.childstatus === 'radio'){
        cargroup = this.cars.filter((item) => 
          item.brand === searchinfor.value
        )
      }
      else if(searchinfor.childstatus === 'select'){
        cargroup = this.cars.filter((item) => 
          item.fuel === searchinfor.value
        )
      }
      return cargroup
    }
  },
  created(){
    this.axios.get(this.$url).then((res) => {
      this.cars = res.data;
    });
  }
}
</script>






