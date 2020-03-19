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
            <van-field
            v-model="confirmPassword"
            type="password"
            label="确认密码:"
            readonly
            clickable
            class="input-active-code"
            @touchstart.native.stop="confirmPasswordKeyboardStatus = true"
            safe-area-inset-bottom
             />
        </div>
        <div class="active-item">
          <van-button class="btn active-btn" @click="doActive()" type="info">立即注册</van-button>
        </div>
        <div class="active-link">
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
       <!--数字键盘-->
        <van-number-keyboard
          v-model="confirmPassword"
          :show="confirmPasswordKeyboardStatus"
          :maxlength="32"
          @blur="confirmPasswordKeyboardStatus = false"
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
            confirmPassword:'',//商户确认密码
            
            mobileKeyboardStatus:false,
            passwordKeyboardStatus:false,
            confirmPasswordKeyboardStatus:false,
             
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
  .page-register{
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
  .active-link span label{
    color:#FF0000;
  }
</style>
