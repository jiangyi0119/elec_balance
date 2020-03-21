<template>
  <div class="page-index">
      <pageTop :logo="logo" :weight="weight" :price="price" :subTotal="subTotal"></pageTop>
      <pageMenu :menu="menus"></pageMenu>
      <div class="index-content">

      </div>
      <pageFooter :company="company" :version="version"></pageFooter>
  </div>
</template>

<script>
  import Vue from 'vue';

  import pageTop from "../components/top.vue";
  import pageFooter from "../components/footer.vue";
  import pageMenu from "../components/menu.vue";

  export default {
    name:"Index",
    components:{
      pageTop,pageFooter,pageMenu
    },
    data() {
      return {
          logo:'http://elec.img.jmd-mall.cn/png/logo.jpg',//商家logo
          weight:0.000,//重量
          price:0.000,//单位
          subTotal:0.000,//小计
          company:'公司名称',
          version:'V1.0.0',
          menus:[],
      }
      }
  }
</script>

<style>
  .page-index{
    height: 100%;
    /* border:1px solid red; */
  }
  .index-content{
    height: 81%;
  }
</style>
