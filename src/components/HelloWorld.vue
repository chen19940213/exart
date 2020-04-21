<template>
  <div class="all">
    <!-- banner1 -->
    <div class="header">
      <div class="banner1">
        <div
          v-for="(imgUrl, index) in bannerList"
          v-show="index===mark"
          :key="index"
          class="slideshow"
        >
          <img :src="imgUrl" />
        </div>
      </div>
      <img src="../assets/img/header.png" alt="logo" class="headerImg" />
    </div>
    <!-- {/* submit */} -->
    <div class="submit">
      <div>立即获取产品报价</div>
      <input type="text" placeholder="请输入姓名" v-model="name" />
      <input type="number" placeholder="请输入手机号（必填）" v-model="phone" />
      <button @click="uploadInfo">免费获取</button>
    </div>
    <!-- {/* banner2 */} -->

    <div class="banner2">
      <div
        v-for="(item, index) in bannerList2"
        v-show="index===mark"
        :key="index"
        class="bannerinfo"
      >
        <div>
          <img img src="../assets/img/inform.png" alt />
          <p>{{item.addressName}}</p>
        </div>

        <p>{{item.addressPhone}}</p>
        <p>
          {{item.addressTime}}
          <span>分钟前</span>
        </p>
      </div>
    </div>

    <!-- {/* info */} -->
    <div class="infotop">
      <img src="../assets/img/left.png" alt />
      <span>公司简介</span>
      <img src="../assets/img/right.png" alt />
    </div>
    <div class="infocon">
      <div>中山市鸿臣电子塑料有限公司创建于2011年，位于广东省中山市北部的著名经济强镇小榄镇，是一家集生产、加工、销售、服务于一体的私营企业，拥有完整、科学的质量管理体系。生产业务以专用线束生产和注塑加工为主。其主要应用于家用电器、汽车电子、玩具等产品。</div>
      <div>公司秉承“品质第一，服务至上”的经营理念，坚持“客户第一”的原则，为广大客户提供优质的服务；以严格的品质要求，为客户提供最优质的产品服务；以稳固、发展、高新、团结和创新的精神，尊重人才，注重技术。</div>
      <div>经过9年多的努力和发展，现今已具有一定的规模和实力，拥有一支朝气蓬勃，技术过硬且创新敬业的新生代高素质人才队伍。依靠良好的信誉和技术优势，取得了用户的一致好评及同行的共同认可。</div>
      <div>未来，鸿臣将一如既往地提供精准服务和精准交付的高质产品，服务所有客户，帮助客户完成价值，与客户共同创业，共享成果。</div>
    </div>
    <!-- {/* infoimg */} -->
    <div class="infoimg">
      <img src="../assets/img/infoimg1.png" alt />
      <img src="../assets/img/infoimg2.png" alt />
    </div>
    <!-- {/* product */} -->
    <div class="infotop">
      <img src="../assets/img/left.png" alt />
      <span>产品展示</span>
      <img src="../assets/img/right.png" alt />
    </div>
    <!-- {/* productinfo */} -->
    <ul class="productinfo">
      <li>
        <div>
          <img src="../assets/img/product2.png" alt />
          <p>显示板线材</p>
        </div>
        <div>
          <img src="../assets/img/product2.png" alt />
          <p>通信线</p>
        </div>
      </li>

      <li>
        <div>
          <img src="../assets/img/product3.png" alt />
          <p>声控板线材</p>
        </div>
        <div>
          <img src="../assets/img/product4.png" alt />
          <p>驱动板线材</p>
        </div>
      </li>

      <li>
        <div>
          <img src="../assets/img/product5.png" alt />
          <p>开关连接线</p>
        </div>
        <div>
          <img src="../assets/img/product6.png" alt />
          <p>火线反馈线</p>
        </div>
      </li>

      <li>
        <div>
          <img src="../assets/img/product7.png" alt />
          <p>点火器配套线</p>
        </div>
        <div>
          <img src="../assets/img/product8.png" alt />
          <p>比列阀连接线</p>
        </div>
      </li>
    </ul>
    <!-- {/* callphone */} -->
    <div class="callphone">
      <a href="tel:076022230669">
        <img src="../assets/img/contact1.png" alt />
      </a>
    </div>
    <!-- {/* address */} -->

    <div class="infotop">
      <img src="../assets/img/left.png" alt />
      <span>联系我们</span>
      <img src="../assets/img/right.png" alt />
    </div>
    <!-- {/* contactinfo */} -->
    <div class="contactinfo">
      <p>中山市鸿臣电子塑料有限公司</p>
      <p>联系人：李先生</p>
      <p>固&emsp;话：（070）22230669</p>
      <p>电&emsp;话：18948858136</p>
      <p>Q&emsp;Q ： 1398577897</p>
      <div class="contactinfoAddress">
        <p>地&emsp;址：</p>
        <p>中山市小榄镇绩东一民安南路137号亿利 B楼四楼</p>
      </div>
    </div>
    <!-- {/* submit2 */} -->
    <div class="submit">
      <div>立即获取产品报价</div>
      <input type="text" placeholder="请输入姓名" v-model="name" />
      <input type="number" placeholder="请输入手机号（必填）" v-model="phone" />
      <button @click="uploadInfo">免费获取</button>
    </div>

    <!-- {/* banner3 */} -->
    <div class="banner2" style="margin-bottom:61px">
      <div
        v-for="(item, index) in bannerList2"
        v-show="index===mark"
        :key="index"
        class="bannerinfo"
      >
        <div>
          <img img src="../assets/img/inform.png" alt />
          <p>{{item.addressName}}</p>
        </div>

        <p>{{item.addressPhone}}</p>
        <p>
          {{item.addressTime}}
          <span>分钟前</span>
        </p>
      </div>
    </div>
    <!-- {/* callphone2 */} -->
    <div class="callphone2">
      <a href="tel:076022230669">
        <img src="../assets/img/contact1.png" alt />
      </a>
    </div>
  </div>
</template>
<script>
import { MessageBox } from "mint-ui";
import "mint-ui/lib/style.css";
export default {
  components: {},

  data() {
    return {
      name: "",
      phone: "",
      mark: 0,
      bannerList: [
        require("../assets/img/banner1.png"),
        require("../assets/img/banner2.png"),
        require("../assets/img/banner3.png")
      ],
      bannerList2: [
        {
          addressName: "李先生",
          addressPhone: "154****5469",
          addressTime: 51
        },
        {
          addressName: "张先生",
          addressPhone: "138****4469",
          addressTime: 44
        },
        {
          addressName: "李先生",
          addressPhone: "172****6606",
          addressTime: 20
        },
        {
          addressName: "李先生",
          addressPhone: "151****6436",
          addressTime: 6
        }
      ]
    };
  },
  // 轮播
  methods: {
    uploadInfo() {
      var _this = this
      this.$http({
        method: "post",
         url: "https://www.coolship.vip/ship/api/index/addUserInfo",
        headers:{'Content-Type': 'application/x-www-form-urlencoded'}, 
        data: { name: _this.name, phone: _this.phone},
          transformRequest: function(obj) {  
        var str = [];  
        for(var p in obj){  
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));  
        }  
        return str.join("&");  
    }  
      })
        .then(
          function(res) {
            console.log(res)
            if(res.data.status==200){
 MessageBox('提示', '资格获取成功，请等待工作人员联系');
            }else{
 MessageBox('提示', '资格获取失败，'+res.data.message);

            }
          }
        )
        .catch(function(error) {
          console.log(error);
        });
    },
    autoPlay() {
      this.mark++;
      if (this.mark === 3) {
        this.mark = 0;
      }
    },
    play() {
      setInterval(this.autoPlay, 2000);
    },
    change(i) {
      this.mark = i;
    }
  },
  created() {
    this.play();
   
  }
};
</script>
<style scoped>
.all {
  overflow: hidden;
  max-width: 430px;
  margin: 0 auto;
  height: 100%;
  padding-bottom: 10px;
  box-shadow: 0px 0px 5px #888888;
  /* margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%); */
}
.all img {
  max-width: 430px;
}
/* banner1 */
.header .banner1 img {
  width: 100vw;
  height: 189px;
}
.header .headerImg {
  width: 100vw;
  height: 247px;
  margin-top: -42px;
}
/* submit1 */
.submit {
  padding: 0 15px;
}
.submit div {
  margin: 18px auto 15px auto;
  font-size: 17px;
  font-family: Helvetica;
  color: rgba(51, 51, 51, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 800;
}
.submit input {
  -webkit-appearance: none;
  display: block;
  width: 100%;
  height: 40px;
  border-radius: 4px;
  border: 1px solid rgba(234, 234, 234, 1);
  margin: 0 auto;
  text-indent: 13px;
  outline: none;
  font-size: 14px;
  font-family: Helvetica;
  color: rgba(153, 153, 153, 1);
}
.submit input:nth-child(2) {
  margin: 8px auto 16px auto;
}
.submit button {
  width: 100%;
  height: 40px;
  background: rgba(22, 85, 253, 1);
  border-radius: 4px;
  margin-top: 16px;
  font-size: 16px;
  font-family: Helvetica;
  color: rgba(255, 255, 255, 1);
}
/* banner2 */
.banner2 {
  padding: 0 15px;
}
.bannerinfo {
  background: rgba(248, 248, 248, 1);
  display: flex;
  padding: 0 24px;
  height: 33px;
  justify-content: space-between;
  align-items: center;
  margin-top: 26px;
}
.bannerinfo div {
  display: flex;
}
.bannerinfo div p {
  margin-left: 6px;
  font-size: 14px;
  font-family: Helvetica;
  color: rgba(110, 110, 110, 1);
}
.bannerinfo > p {
  font-size: 14px;
  font-family: Helvetica;
  color: rgba(51, 51, 51, 1);
}
.bannerinfo > p span {
  color: rgba(110, 110, 110, 1);
}
/* info */
.infotop {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 54px auto 24px auto;
}
.infotop img {
  height: 18px;
  width: 18px;
}
.infotop span {
  margin: 0 4px;
  font-size: 22px;
  font-family: Helvetica;
  color: rgba(27, 31, 60, 1);
}
.infocon {
  text-indent: 30px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  padding: 0 32px;
  line-height: 22px;
}
/* infoimg */
.infoimg {
  display: flex;
  justify-content: space-around;
  margin-top: 24px;
}
.infoimg img {
  width: 168px;
  height: 126px;
}
/* productinfo */
/* .productinfo {
  padding: 0 15px;
} */
.productinfo li {
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  /* background: red; */
}
.productinfo li div img {
  width: 168px;
  height: 126px;
  display: flex;
}
.productinfo li div p {
  font-size: 16px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: rgba(27, 31, 60, 1);
  margin: 12px auto 18px auto;
  text-align: center;
}
/* callphone */
.callphone {
  padding: 0 15px;
}
.callphone2 img {
  width: 345px;
  height: 40px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.callphone img {
  width: 100%;
  height: 40px;
}
/* contactinfo */
.contactinfo {
  padding: 0 12px 0 35px;
}
.contactinfo p {
  font-size: 15px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  margin-top: 10px;
}
.contactinfo div {
  display: flex;
  align-items: flex-start;
}
.contactinfo div p:nth-child(1) {
  width: 69px;
}
.contactinfo div p:nth-child(2) {
  line-height: 21px;
}
.contactinfo > p:nth-child(2) {
  margin-top: 26px;
}
</style>