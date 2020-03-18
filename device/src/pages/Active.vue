<template>
  <div class="page-active login-bg">

    <div class="active-box">
        <div class="active-logo">
          <img src="../assets/images/logo.png"/>
        </div>
        <div class="active-item">
            <span>机器码：</span>
            <span>{{deviceCode}}</span>

        </div>
        <div class="active-item">
            <van-field
            v-model="activeCode"
            type="number"
            label="激活码:"
            readonly
            clickable
            class="input-active-code"
            @touchstart.native.stop="keywordShowStatus = true"
            safe-area-inset-bottom
             />
        </div>
        <div class="active-item">
          <van-button class="btn active-btn" @click="doActive()" type="info">设备激活</van-button>
        </div>
        <div class="active-link">
            <span>还没有激活码？点击<label @click="getActiveCode()">这里</label>获取</span>
        </div>



     </div>
     <!--数字键盘-->
      <van-number-keyboard
        v-model="activeCode"
        :show="keywordShowStatus"
        :maxlength="6"
        @blur="keywordShowStatus = false"
      />
  </div>
</template>

<script>
  export default {
    name:"Active",
    data() {
        return {
            deviceCode:"xxxxxxxxxxx",//机器码
            activeCode:'',//激活码
            keywordShowStatus:false,//是否显示数字键盘
        }
    },
    created() {
        this.deviceCode=this.$route.query.deviceCode;
        if(this.deviceCode==''){
          this.$router.push({ name: 'Error',msg:'机器码信息不正确' });
          return;
        }
    },
    mounted() {

    },
    methods:{

      doActive:function(){
        this.$router.push({name:'Register'});
      },
      //获取激活码提示
      getActiveCode:function(){
        this.$dialog.alert({message:"请联系客服获取激活码",className:'dialog-style'});
      },
    }
  }
</script>

<style>
  .page-active{
    padding-top:30px;
  }
  .active-box{
    position:absolute;
    clear: both;
    width:400px;
    height:350px;
    border-radius: 30px;
    background:#FFFFFF;
    overflow: hidden;
    border: 1px solid #eee;
    margin: auto;
    vertical-align: middle;
    top:30%;
    left:34%;
  }
  .active-box .active-logo{
    text-align: center;
  }
  .active-box .active-logo>img{

     max-width:80%;
     text-align: center;
  }
  .active-item{
    color:#333333;
    height: 30px;
    width:80%;
    margin: auto;
    font-size:20px;
    margin-top:20px;
  }
  .input-active-code{
    float:left;
    font-size:20px;
    padding:0px!important;
   }
  .input-active-code .van-cell__title {
    font-size:20px;
  }
  .input-active-code input{
    margin-left:15px;
    height: 30px;
    font-size:20px;
    width:230px;
    text-align: center;
  }
  .active-btn{
        width: 100%;
        height: 40px;
        line-height: 40px;
        background: #0097CF;
        border-radius: 4px;
        border: none;
        color: #fff;

        font-size: 24px;
  }
  .active-link{
    font-size:18px;
    height: 30px;

    width:80%;
    margin: auto;
    margin-top:30px;
  }
  .active-link span label{
    color:#FF0000;
  }
</style>
