<template>
    <div class="body-bg">>
      
        <vue-particles
        color="#f5f6fa"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#f5f6fa"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
      <div class="main">
        <div>
            <p>车险业务代理系统</p>
            <input type="text" placeholder="用户名" v-model="username">
            <br/>
            <input type="password" placeholder="密码" v-model="userpass" >
            <br/>
            <input type="button" value="登录" @click="logining" >
        </div>
       </div>
        
    </div>
</template>
  
<script>

    export default{
        name:'Login',
        components:{
            
        },
       
       data() {
           return {
               username:'',
               userpass:''
           }
       },
       methods: {
           logining:function(){
               if(this.username=="油炸小排骨"&&this.userpass=="123456"){
                   this.$router.push('/personnel')
               }
               else {
                   this.$router.push('/');
               }
           }
       },
    
    }
</script>
<style scoped>
    .body-bg{
       background-size: 100% 100%;
       background: url('../img/4.jpg') center center no-repeat;
       height: 100%;
       position: fixed;
       width: 100%;
    }
   
    input[type="text"],input[type="password"]{
    border-radius: 3px;
    margin-bottom: 12px;
    width: 220px;
    height: 40px;
    border: 1px solid #f5f6fa;
    
    color: #f5f6fa;
    margin-left: 90px;
    margin-top: 5px;
    
   }
   p{
       font-family: 'Courier New', Courier, monospace;
       color: #f5f6fa;
       width: 220px;
       height: 40px;
       font-size:25px ;
       margin-left: 95px;
       margin-top: 20px;
   }
   input[type="button"]{
       width: 230px;
       height: 40px;
       background-color: slategray;
       color: #f5f6fa;
       margin-top: 5px;
       border: none;
       border-radius: 4px;
       margin-left: 85px;
       
   }
   .main{
            width:400px;
            height: 300px;
            position: absolute;
            background-color:#2c3e50;
            opacity: 0.5;
            left:50%;
            top:50%;
            margin-left:-200px;
            margin-top:-100px;
            border-radius: 5px;
   }
 </style>