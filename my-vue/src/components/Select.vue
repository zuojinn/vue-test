<template>
  <div class="select">
    <div class="banner">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="img in banners" :key="img.channelId">
          <img :src="setBannerSrc(img)"/>
        </swiper-slide>
        <div v-show='loadBtn' class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
      <section class="news">
        <div v-for='(news, index) in newsDate' :key='index' :id="news.id">
          <h4>{{news.id}}</h4>
        </div>
      </section>
  </div>
</template>
<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import {mapState} from 'vuex'
export default {
  data () {
    return {
      rocket: false,
      requestStatus: true,
      swiperOption: {
        pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 30,
        onSlideChangeEnd: swiper => {
          this.page = swiper.realIndex + 1
          this.index = swiper.realIndex
        }
      }
    }
  },
  computed: {
    ...mapState({
      newsDate: state => state.SelectStore.newsDate,
      banners: state => state.SelectStore.banners
    })
  },
  methods: {
    setBannerSrc (src) {
      return src
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>
<style>
.select{
  background: #fff;
}
.select .swiper-wrapper{
  height: 200px;
}
.select .swiper-wrapper .swiper-slide img{
  width: 100%;
  height: 200px;
}
.select .news{
  min-height: 500px;
  padding: 0 10px;
}
.select .news .new{
  height: 100px;
  color: #262627;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
}
.select .news .new img{
  height: 80px;
  width: 100px;
}
.select .news .new .intro{
  width: 80%;
  height: 80px;
  display: flex;
  padding-left: 10px;
  flex-direction: column;
  justify-content: space-between;
}
.select .news .new .intro h4{
  font-size: 20px;
  line-height: 1.2;
  font-weight: bold;
  overflow: hidden;
  display: -webkit-box;
  word-break: break-all;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
}
.select .news .new .intro p{
  font-size: 13px;
  color: #666;
}
.select .news .loadMore{
  height: 50px;
  width: 100%;
  color: #545454;
  background: #eee;
  text-align: center;
  line-height: 50px;
  font-size: 13px;
  border: none;
  border-radius: 0;
  outline: none;
  margin-bottom: 10px;
}
.select .news .fail{
  display: flex;
  min-height: 300px;
  align-items: center;
  justify-content: center;
}
/*加载动画*/
.spinner {
  position: fixed;
  left: 40%;
  bottom: 10%;
  width: 80px;
  height: 80px;
  margin: 50px auto;
  background-color: #69C61D;
  border-radius: 100%;
  -webkit-animation: scaleout 1.0s infinite ease-in-out;
  animation: scaleout 1.0s infinite ease-in-out;
}
@-webkit-keyframes scaleout {
  0% { -webkit-transform: scale(0.0) }
  100% {
    -webkit-transform: scale(1.0);
    opacity: 0;
  }
}
@keyframes scaleout {
  0% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 100% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
    opacity: 0;
  }
}
.goTop{
  color: #50BFFF;
  position: fixed;
  bottom: 40px;
  right: 20px;
  z-index: 9999;
  cursor: pointer;
  width: 60px;
  height: 60px;
  transition: all 1s ease;
  transform: scale(0.6);
}
.goTop:active{
  color: #C40000;
  transform: scale(1);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.8s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.tip{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.tip a{
  color: #19C8A9;
}
.tip span{
  margin-bottom: 10px;
}
</style>
