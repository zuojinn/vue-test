<template>
  <section class="author">
    <!-- <button class="goHome" @click='goHome'>Home</button> -->
    <!--<a v-link="select">select</a>-->
    <div class="banner">
      <div v-for='(a, index) in author' :key='index' class="item">
        <div class="msg">
          <!-- <img :src="setAutherSrc(a.src)"/> -->
          <p class="name">{{a.name}}</p>
          <p class="slogan">{{a.slogan}}</p>
        </div>
        <span class="focus" v-if='a.status' @click='a.status = !a.status'>关注</span>
        <span class="focus focused" @click='a.status = !a.status' v-else>已关注</span>
      </div>
    </div>
    <section class="more">
      <div v-for='(o, index) in other' :key='index' class="other">
        <div class="authorMsg">
          <!-- <img :src="setOtherSrc(o.src)"/> -->
          <div class="intro">
            <p class="name">{{o.name}}</p>
            <p class="slogan">{{o.slogan}}</p>
          </div>
        </div>
        <div>
          <span class="focus" v-if='o.status' @click='o.status = !o.status' >关注</span>
          <span class="focus focused" @click='o.status = !o.status' v-else>已关注</span>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'author',
  computed: {
    ...mapState({
      author: state => state.AuthorStore.author,
      other: state => state.AuthorStore.other
    })
  }
}
</script>

<style>
.author{
  background: #fff;
  border-right: 1px solid #666;
}
.author  .banner{
    background: url(../assets/author/author_banner_bg.jpg);

}
.author .banner .item{
    height: 210px;
    width: 45%;
    margin: 2%;
    color: #fff;
    opacity: 0.9;
    display: inline-block;
    text-align: center;
    background: #2E2E2F;
}
.author .banner .item .msg{
    display: flex;
    flex-direction: column;
    background: #262627;
    padding: 10px 0;
    justify-content: space-around;
    align-items: center;
}
.author .banner .item .msg img{
    height: 100px;
    width: 100px;
    border-radius: 50%;
}

.author .banner .item .msg .name{
    margin: 10px 0;
}
.author .banner .item .msg .slogan{
    color: #666;
    width: 80%;
    font-size: 13px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.author .banner .item .focus{
    width: 80px;
    font-size: 13px;
    display: inline-block;
    padding: 4px 0;
    background: #E94C3D;
    border-radius: 10px;
    cursor: pointer;
    margin: 10px 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.author .banner .item .focused{
    background: #262627;
}
.author  .more{
    padding: 10px;
}
.author .more .other{
    height: 100px;
    background: #eee;
    display: flex;
    margin-bottom: 10px;
    justify-content: space-between;
    padding: 0 10px;
    align-items: center;
}
.author .more .other .authorMsg{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.author .more .other .authorMsg img{
    height: 80px;
    width: 80px;
    border-radius: 50%;
}
.author .more .other .authorMsg .intro{
    height: 40px;
    margin: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.author .more .other .authorMsg .intro .slogan{
    font-size: 13px;
    color: #666;
}
.author .more .other .focus{
    display: inline-block;
    width: 80px;
    color: #fff;
    cursor: pointer;
    font-size: 13px;
    text-align: center;
    padding: 5px 0;
    background: #D5483A;
    border-radius: 15px;
    margin-left: 10px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.author .more .other .focused{
    background: #262627;
}
.author  .goHome{
    position: fixed;
    right: 15px;
    bottom: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    outline: none;
    color: #FFFFFF;
    background: rgba(0,0,0,0.5);
  }
</style>
