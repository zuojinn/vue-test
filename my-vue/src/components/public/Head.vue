<template>
  <header class="head">
    <a href="javascript: void(0)"><img class="vNews" @click="goHome" src="../../assets/head/logo.png"/></a>
    <svg class="icon searchBtn" @click='openSearch' aria-hidden="true">
      <use xlink:href="#icon-sousuo"></use>
    </svg>
    <div class="searchPage">
      <div class="header">
        <div class="search">
          <input v-model='searchContent' type="text" />
          <svg class="icon" @click='searchNewsBtn' aria-hidden="true">
            <use xlink:href="#icon-sousuo"></use>
          </svg>
        </div>
        <svg class="icon close" @click='closeSearch' aria-hidden="true">
          <use xlink:href="#icon-hao"></use>
        </svg>
      </div>
      <div class="content">
        <p class="today">今天</p>
        <ul class="news">
          <li ref='newsItem' v-for='(news, index) in searchNews' :key='index'>
            <a :href="'#' + news.id" @click='goNews'>
              <p v-if='+index < 3'><i class="isTop3"> {{index + 1}} </i><span ref='title' class="title"> {{news.title}}</span></p>
              <p v-else><i> {{index + 1}} </i><span ref='title' class="title"> {{news.title}}</span></p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="aside" @click='toggleMenu'>
      <div v-for='i in 3' :key='i' class="line"></div>
    </div>
  </header>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'apphead', // Do not use built-in or reserved HTML elements as component id
  data () {
    return {
      imgs: [],
      searchContent: ''
    }
  },
  computed: {
    ...mapState({
      searchNews: state => state.SelectStore.searchNews
    })
  },
  watch: {
    searchContent (curVal, oldVal) {
      if (curVal === '') {
        this.$refs.newsItem.map((item) => {
          item.style.display = 'block'
          item.className = ''
        })
      }
      if (curVal !== '') {
        this.$refs.title.map((item) => {
          if (item.innerText.match(curVal)) {
            item.parentNode.parentNode.parentNode.className = 'hightColor'
          } else {
            item.parentNode.parentNode.parentNode.style.display = 'none'
          }
        })
      }
    }
  },
  methods: {
    setClass (classname) {
      return classname
    },
    setSrc (src) {
      return src
    },
    searchNewsBtn () {
      alert('搜索完成')
    },
    goNews () {
      this.closeSearch()
      this.clearSearchContent()
    },
    goHome () {
      this.$router.push('/select')
    },
    clearSearchContent () {
      this.searchContent = ''
    },
    ...mapMutations([
      'toggleMenu', 'openSearch', 'closeSearch'
    ])
  }
}
</script>
<style>
.head{
  height: 60px;
  background: #262627;
  position: relative;
}
.head  img{
    height: 50px;
    position: absolute;
    top: 5px;
    right: 20%;
    cursor: pointer;
  }
.head  .vNews{
    height: 20px;
    top: 20px;
    left: 10px;
  }
.head  .baidu{
    right: 30%;
  }
.head  .searchBtn{
    cursor: pointer;
    color: #FFFFFF;
    position: absolute;
    top: 18px;
    right: 15%;
  }
.head  .aside{
    height: 60px;
    width: 60px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    padding-top: 1px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.head .aside .line{
    height: 1px;
    width: 25px;
    background: #fff;
    transition: all 0.5s;
}
.head .aside .line:nth-of-type(2){
    margin: 6px 0;
}
.head .closeMenu .line:first-child{
    transform: rotate(45deg);
}
.head .closeMenu .line:nth-child(2){
    display: none;
}
.head .closeMenu .line:last-child{
    transform: rotate(-45deg);
}

.head  .searchPage{
    display: none;
    position: fixed;
    height: 100%;
    width: 100%;
    overflow: scroll;
    background: #fff;
    z-index: 999;
}

.head .searchPage .header{
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 2%;
    background: #262627;
}
.head .searchPage .header .search{
        height: 40px;
        width: 85%;
        border: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
}
.head .searchPage .header .search input{
    height: 40px;
    width: 82%;
    color: #FFFFFF;
    text-indent: 10px;
    background-color: #262627;
    outline: none;
}
.head .searchPage .header .search .icon{
    color: #FFFFFF;
    margin-right: 5%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.head .searchPage .header  .close{
    height: 30px;
    width: 30px;
    color: #FFFFFF;
}

.head  .content{
    overflow: hidden;
    background-color: #FFFFFF;
}
.head  .content  .today{
    height: 25px;
    background: #E3E4EE;
    line-height: 25px;
    text-indent: 15px;
    font-size: 14px;
}
.head  .content  .news li{
    font-size: 16px;
    margin: 15px;
}

.head  .content  .news li p{
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.head  .content  .news li i{
    font-size: 16px;
    font-style: normal;
    margin-right: 10px;
}
.head  .content  .news li i.isTop3{
    color: red;
}
.head  .content  .news li span{
    width: 90%;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.head  .hightColor{
    color: #FFFFFF;
    background-color: #EEEEEE;
}
</style>
