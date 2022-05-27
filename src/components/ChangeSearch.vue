<template>
    <div class="search">
        <input class="text" type="text" v-if="childstatus === '輸入框'" v-model.trim="textsearch" placeholder="輸入關鍵字">
        <div class="radio" v-else-if="childstatus === '單選鈕'">
            <p>廠牌</p>
            <label for="radio1" class="search_radio">
                <input type="radio" id="radio1" value="Ford" v-model="radiosearch">
                Ford
            </label>
            <label for="radio2" class="search_radio">
                <input type="radio" id="radio2" value="Hyundai" v-model="radiosearch">
                Hyundai
            </label>
            <label for="radio3" class="search_radio">
                <input type="radio" id="radio3" value="Toyota" v-model="radiosearch">
                Toyota
            </label>
            <label for="radio4" class="search_radio">
                <input type="radio" id="radio4" value="Volkswagen" v-model="radiosearch">
                Volkswagen
            </label>
        </div>
        <select class="select" name="select" v-model="selectsearch" v-else>
            <option selected disabled>選擇燃料選項</option>
            <option value="gasoline">Gasoline</option>
            <option value="diesel fuel">Diesel fuel</option>
            <option value="battery">Battery</option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'ChangeSearch',
    props: {
        'childstatus': {
            type: String
        }
    },
    data(){
        return{
            textsearch: '',
            radiosearch: '',
            selectsearch: '選擇燃料選項'
        }
    },
    watch: {
        textsearch (value) {
            this.$emit('update', {
                value: value, 
                childstatus: 'text'
            });
        },
        radiosearch (value) {
            this.$emit('update', {
                value: value, 
                childstatus: 'radio'
            });
        },
        selectsearch (value) {
            this.$emit('update', {
                value: value, 
                childstatus: 'select'
            });
        }
    }
}
</script>