<template>
  <div class="home-top">
      <div><img :src="logo"/></div>
      <div>
        <span>重量</span>
        <span>{{weight|formatNumber}}</span>
        <span>kg</span>
      </div>
      <div>
        <span>单价</span>
         <span>{{price|formatNumber}}</span>
         <span>元</span>
      </div>
      <div>
        <span>小计</span>
         <span>{{subTotal|formatNumber}}</span>
         <span>元</span>
      </div>
   </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    props:['logo','weight','price','subTotal'],
    filters:{
       formatNumber:function(num){
         return parseFloat(num).toFixed(3);
       },
    },
    methods:{

    }
  }

</script>

<style>
  .home-top{
    width:100%;
    height: 10%;
    overflow: hidden;
  }
  .home-top div img{
    height: 100%;
    width:100%;
  }

  .home-top div{
    float:left;
    width:26%;
    height: 100%;
    line-height: 100px;
    /* overflow: hidden; */
    /* border: 1px solid #0097CF; */
  }
  .home-top div:first-child{
    width:20%;
    background:#333333;
  }
  .home-top div:nth-child(3){
    border-left: 1px dotted #999999;
    border-right: 1px dotted #999999;
  }
   .home-top div span:first-child{
     margin-left:20px;
   }
   .home-top div span:first-child,.home-top div span:last-child{
     font-size:20px;
     text-align: left;
     float:left;
     /* border:1px solid red; */
   }
    .home-top div span:nth-child(2){
      width:60%;
      float:left;
      font-size:48px;
      text-align: center;

    }
</style>
