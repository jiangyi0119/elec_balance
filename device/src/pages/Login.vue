<template>
  <div class="page-register login-bg">

    <div class="active-box">
        <div class="active-logo">
          <img src="../assets/images/logo.png"/>
        </div>
        <div class="active-item">
            <van-field
            v-model="mobile"
            type="number"
            label="商户手机:"
            readonly
            clickable
            class="input-active-code"
            @touchstart.native.stop="mobileKeyboardStatus = true"
            safe-area-inset-bottom
             />

        </div>
        <div class="active-item">
            <van-field
            v-model="password"
            type="password"
            label="商户密码:"
            readonly
            clickable
            class="input-active-code"
            @touchstart.native.stop="passwordKeyboardStatus = true"
            safe-area-inset-bottom
             />
        </div>

        <div class="active-item">
          <van-button class="btn active-btn" @click="doLogin()" type="info">登  录</van-button>
        </div>
        <div class="active-link">没有账号？，点击<label @click="gotoRegister()">这里</label>注册账号
        </div>



     </div>
     <!--数字键盘-->
      <van-number-keyboard
        v-model="mobile"
        :show="mobileKeyboardStatus"
        :maxlength="32"
        @blur="mobileKeyboardStatus = false"
        theme="custom"
        close-button-text="完成"
      />
      <!--数字键盘-->
       <van-number-keyboard
         v-model="password"
         :show="passwordKeyboardStatus"
         :maxlength="32"
         @blur="passwordKeyboardStatus = false"
         theme="custom"
         close-button-text="完成"
       />

  </div>
</template>

<script>
  export default {
    name:"Active",
    data() {
        return {
            mobile:"",//商户手机号码
            password:'',//商户密码


            mobileKeyboardStatus:false,
            passwordKeyboardStatus:false,


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
      //执行登录
      doLogin:function(){
        this.$router.push({name:'Index'});

      },
       //转至注册页面
      gotoRegister:function(){
        this.$router.push({name:'Register'});
      },

    }
  }
</script>

<style>
  .page-register{
    padding-top:30px;
  }
  .active-box{
    position:absolute;
    clear: both;
    width:400px;
    height:370px;
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
    font-size:18px;
  }
  .input-active-code input{
    /* margin-left:15px; */
    height: 30px;
    font-size:20px;
    width:220px;
    text-align: center;
    border:1px solid #DDDDDD;
  }
  .active-btn{
      width: 100%;
      height: 30px;
      line-height: 30px;
      background: #0097CF;
      border-radius: 4px;
      border: none;
      color: #fff;
      font-size: 18px;
  }
  .active-link{
    font-size:18px;
    height: 30px;

    width:80%;
    margin: auto;
    margin-top:30px;
  }
  .active-link  label{
    color:#FF0000;
  }
</style>
