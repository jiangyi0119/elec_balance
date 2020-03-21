<template>
  <div class="com-menu">
      <div class="menu-cart">购物车</div>
      <div class="menu-item">
  
          <ul>
            <li>零食</li>
            <li class="menu-active">蔬菜</li>
            <li>熟食</li>
          </ul>
      </div>
  </div>
</template>

<script>
   export default {
     
     data() {
       return {}
     },
     props:['menus'],
     
   }
</script>

<style>
  .com-menu{
    width:100%;
    height:5%;
    line-height: 50px;
    background:#2b90d9;
    overflow: hidden;
  }
  .menu-cart{
    float: left;
    width:20%;
    text-align: center;
    border-right: 1px solid #EEEEEE;
    font-size:22px;
    color:#FFFFFF;
    font-weight: bold;
    height: 100%;
  }
  .menu-item{
    float:left;
    width:79%;
    height:100%;
    background:#0097CF;
  }
  .menu-item ul{
    padding:0px;
    margin:0px;
  }
  .menu-item ul li{
    float:left;
    width:80px;
    text-align: center;
    font-size:22px;
    color:#FFFFFF;
  }
  .menu-item ul .menu-active{
    background:#00aa00;

  }
</style>
