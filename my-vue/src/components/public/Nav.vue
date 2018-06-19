<template>
    <section class="nav">
        <div class="nav" v-for='(m,index) in menus' :key='index'>
            <router-link :to='setPath(m.path)'><span>{{m.text}}</span></router-link>
        </div>
    </section>
</template>
<script>
    export default {
        data (){
            return {
                menus:[
                    {
                        text: '精选',
                        path: '/select'
                    },
                    {
                        text: '话题',
                        path: '/point'
                    },
                    {
                        text: '作者',
                        path: '/author'
                    }
                ]
            }
        },
        methods: {
            setPath(path){
                return path
            }
        }
    }
</script>
<style>
.nav{
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff;
}
.nav .nav{
    width: 33%;
    height: 100%;
}
.nav .nav a{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #666;
    font-size: 18px;
    text-align: center;
}
.nav .nav a  span:first-child{
    height: 30px;
    width: 100%;
    line-height: 30px;
}
.nav div:nth-child(2) > a > span{
    border-left: 1px solid #eee;
    border-right: 1px solid #eee;
}
.nav .active{
    border-bottom: 1px solid red;
    box-sizing: border-box;
  }
</style>
