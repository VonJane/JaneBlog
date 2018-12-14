<<template>
    <div >
    <img class="bj_img" v-for="item in list" :src="item.image">
    <div class="layout_a ">
    <div class="layout_b">
      <p>输赢成败，又争由人算！且自逍遥没谁管。奈天昏地暗，斗转星移。风骤紧，缥缈峰头云乱。红颜弹指老，刹那芳华。</p>
    </div>
    <div class="layout_c">
      <img id="vue_img" :src="item.image" >
      <div id="vue_det">
       {{greetingtext}}
      </div>
    </div>
   
    <div style=" height: 50vh;">

    </div>
  </div>
  </div>
</template>>
<script>
import guzhuang from '../../../static/img/guzhuang.jpg'
import a1 from '../../../static/img/1.png'
export default {
    data(){
        return{
            list:[
                {name:'古装',desc:'古装',image:guzhuang},
                {name:'a1',desc:'a1',image:a1}
            ],
            el: '#vue_det',
            paper: "就好像 没认识你之前 我的人生是灰色的,认识你之后我的人生充满了意义" ,
            greetingtext:"1" ,
            count: 1
            }
        },
        mounted(){
          this.bootAnimation()
        },
        methods: {
          bootAnimation() {    
                                $("#vue_img").addClass("gray");  
                var screen=this.paper.substr(0,this.count);
                this.greetingtext=screen;
                this.count=this.count+1;
                if(this.count>this.paper.length)
                {
                  this.count=1;
                  this.greetingtext="";
                  $("#vue_img").removeClass("gray");  
                  return;
                }
                setTimeout(this.bootAnimation, 250);
            }
        }
}
</script>
<style scoped>
  body {
    margin: 0;
    overflow:visible;
  }

  .bj_img {
    display: block;
    position: fixed;
    right: 0;
  }

  .layout_a {
    position: relative;
    z-index: 999;
  }

  .layout_b {
    width: 0;
    height: 0;
    border-width: 148px;
    border-style: solid;
    opacity: 0.659;
    border-color: red transparent transparent red;
    position: absolute;
    z-index: 2;

  }

  .layout_b p {
    position: relative;
    top: -8rem;
    left: -7rem;
    color: #000;
    z-index: 999;
    writing-mode: tb-rl;
    height: 382px;
  }

  .layout_c {
    position: relative;
    height: 200vh;
    background-color: #fff;
   
  }
  #vue_det
  {
    position: absolute;
    top: 17rem;
    color: #000;
    font-size: 1.2rem;
    padding-top: 5rem;
    padding-left: 24rem;
  }
  .gray
  {
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);
    filter: grayscale(100%);
    filter: gray;
  }
</style>
