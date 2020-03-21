<template>
  <div class="components-footer">
      <div class="footer-company"><span>{{company}}</span></div>
      <div class="footer-version">{{version}}</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    props:['company','version'],
    // filters:{
    //    formatNumber:function(num){
    //      return parseFloat(num).toFixed(3);
    //    },
    // },
    methods:{

    }
  }
</script>

<style>
  .components-footer{
    width:100%;
    height: 4%;
    background:#EEEEEE;
    line-height: 40px;
    color:#666666;
    font-size:16px;
  }
  .components-footer .footer-company{
    float:left;
    width:30%;
  }
  .components-footer .footer-company span{
    float:left;
    padding-left:30px;
  }
  .components-footer .footer-version{
    float:right;
    padding-right: 10px;
  }
</style>
