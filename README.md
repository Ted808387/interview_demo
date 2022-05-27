# 搜尋車輛(Demo) - 測驗

## 基本說明
- 使用Vue Cli/SCSS撰寫，Axio串接Fake API
- 利用三種搜尋方式(可切換)，找尋想要的項目
- 可切換主題

## 編寫細節
* 頁面主要分為:
    * 首頁
    * 產品目錄
    * 關於我們

* 元件:
    * 搜尋元件 - text、radio、select三種搜尋方式
    * 產品列表 - Fake API串接資料
    * 背景
### 主要功能
首頁添加切換按鈕，使用props進行傳遞資料至**搜尋元件**並切換搜尋方式。
將**搜尋元件**擷取到的搜尋條件利用emit傳入首頁，再利用props傳至**產品列表**。
```
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
    
home.vue
```
條件傳入**產品列表**，再過濾**產品列表**
傳遞參數修改後，可直接套用**產品列表**同元件至產品目錄

### 切換主題

於全域環境建置一參數，首頁設置select改變參數並切換主題
```
let app = createApp(App)
app.config.globalProperties.$theme = '1';
app.use(router).use(VueAxios, axios).mount('#app')
```
額外設置一個功能，帶入參數並切換CSS樣式參數。
```
const changetheme = (theme) => {
    document.getElementsByTagName("body")[0].style.setProperty("--primary",theme === '1' ? "#3497c5" 
    : theme === '2' ? '#b95062' 
    : theme === '3' ? "#45b369" 
    : "#fff");
}
```

---------------------------------------

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
