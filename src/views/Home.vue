<template>
  <div class="home">
    <!-- interval是时间设置 -->
    <el-carousel :interval="3000" height="700px" arrow="always">  
      <el-carousel-item v-for="item in imgURLs" :key="item.id">
        <!-- <h3>{{ item.id }}</h3> -->
        <img :src="item.imgSrc" alt="">
      </el-carousel-item>
    </el-carousel>
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Hello Vue!</h1>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  data() {
    return {
      imgURLs: [
        {
          id: 1,
          imgSrc:
            "https://hcdn1.luffycity.com/static/frontend/index/banner1(4)_1539945492.0492468.png"
        },
        {
          id: 2,
          imgSrc:
            "https://hcdn1.luffycity.com/static/frontend/index/骑士(1)_1539945488.713867.png"
        },
        {
          id: 3,
          imgSrc:
            "https://hcdn1.luffycity.com/static/frontend/index/banner11_1538122470.2779157.png"
        },
        {
          id: 4,
          imgSrc:
            "https://hcdn1.luffycity.com/static/frontend/index/home-banner4_1535545832.4715614.png"
        }
      ]
    };
  },
  components: {
    HelloWorld
  }
};
</script>

<style scoped>
.home img{
  width: auto;
}
</style>
