<template>
  <div class="home">
    <div class="head">
      <div class="title">
        <img class="img" src="../assets/home/title-left.png" /><span
          >沪深股市大数据展示系统</span
        ><img class="img" src="../assets/home/title-right.png" />
      </div>
    </div>
    <div class="user">
      <img src="../assets/home/user.png" />
      <span>赵仝</span>
      <img src="../assets/home/exit.png" />
    </div>
    <div class="head-bottom">
      <img src="../assets/home/title-bottom.png" />
    </div>
    <a-row class="content" style="">
      <a-col
        :span="24"
        style="
          postion: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        "
      >
        <div
          style="
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            max-width: 1976px;
            min-width: 1376px;
          "
        >
          <!-- <img src="../assets/home/right1.png" /> -->
          <img src="../assets/home/left.png" style="margin-right: -232px" />
          <div
            style="
              width: 50%;
              height: 550px;
              min-width: 1019px;
              max-width: 1920px;
              margin-top: -100px;
            "
          >
            <img src="../assets/home/right1.png" />
            <div style="display: flex; height: 500px; margin-top: 20px">
              <img
                src="../assets/home/right-c1.png"
                style="width: 129px; height: 500px"
              />
              <div style="margin-left: -85px">
                <div class="item bg1">
                  <div class="item-content">
                    <img src="../assets/home/item1.png" />
                    <div class="title" @click="itemClick('/funddata')">
                      <span class="top">沪深主板大数据展示系统</span>
                      <span class="bottom"
                        >Shanghai and Shenzhen main board big data display
                        system</span
                      >
                    </div>
                  </div>
                </div>
                <div class="item-divider"></div>
                <div class="item bg2">
                  <div class="item-content">
                    <img src="../assets/home/item2.png" />
                    <div class="title">
                      <span class="top">基金大数据展示系统</span>
                      <span class="bottom">Fund big data display system</span>
                    </div>
                  </div>
                </div>
                <div class="item-divider"></div>
                <div class="item bg3">
                  <div class="item-content">
                    <img src="../assets/home/item3.png" />
                    <div class="title" @click="itemClick('/chuangye')">
                      <span class="top">创业板大数据展示系统 </span>
                      <span class="bottom">Gem big data display system</span>
                    </div>
                  </div>
                </div>
                <div class="item-divider"></div>
                <div class="item bg4">
                  <div class="item-content">
                    <img src="../assets/home/item4.png" />
                    <div class="title">
                      <span class="top">次新股信息系统</span>
                      <span class="bottom">Sub-ipo information system</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a-col>
    </a-row>
    <div class="foot"></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class Home extends Vue {
  /**
   * 点击跳转到具体的页面
   */
  itemClick(path: string): void {
    this.$router.push({ path: path });
  }
}
</script>
<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: url(../assets/home/bg.png);
  .head {
    width: 100%;
    background: none;
    display: flex;
    justify-content: center;
    height: 75px;
    .title {
      width: 666px;
      height: 75px;
      font-size: 44px;
      font-weight: 400;
      color: #ffffff;
      font-style: italic;
      text-shadow: 0px 3px 11px rgba(0, 17, 78, 0.3);
      background: linear-gradient(0deg, #2d77f3 0%, #00ffff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      span {
        margin: 0 20px;
        width: 496px;
      }
      .img {
        width: 65px;
        height: 19px;
      }
    }
  }
  .head-bottom {
    position: absolute;
    top: 30px;
    display: flex;
    justify-content: center;
    padding-right: 30px;
    img {
      width: 1199px;
      height: 114px;
    }
  }
  .user {
    width: auto;
    position: absolute;
    top: 34px;
    right: 34px;

    span {
      width: 41px;
      height: 14px;
      font-size: 14px;
      font-family: PingFang;
      font-weight: 500;
      color: #00afff;
      line-height: 24px;
      margin: 0 13px;
    }
  }
  .content {
    height: 80%;

    .item {
      width: 100%;
      height: 110px;

      .item-content {
        height: 80px;
        margin: 18px 0 12px 134px;
        display: flex;

        .title {
          padding: 11px 0 0 12px;
          width: 400px;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          .top {
            width: 388px;
            height: 30px;
            font-size: 30px;
            font-family: PingFang;
            font-weight: bold;
            color: #ffffff;
            line-height: 30px;
            text-shadow: 0px 2px 4px rgba(6, 31, 96, 0.66);
          }
          .bottom {
            width: 368px;
            height: 12px;
            margin-top: 13px;
            font-size: 12px;
            font-family: Helvetica Neue;
            font-weight: 100;
            color: #c8dfe9;
            opacity: 0.5;
          }
        }
      }
    }
    .item-divider {
      width: 100%;
      height: 20px;
    }
    .bg1 {
      background: url(../assets/home/bg1.png) no-repeat;
      background-size: 100% 100%;
      background-position: center center;
    }
    .bg2 {
      background: url(../assets/home/bg4.png) no-repeat;
      background-size: 100% 100%;
      background-position: center center;
    }
    .bg3 {
      background: url(../assets/home/bg2.png) no-repeat;
      background-size: 100% 100%;
      background-position: center center;
    }
    .bg4 {
      background: url(../assets/home/bg3.png) no-repeat;
      background-size: 100% 100%;
      background-position: center center;
    }
  }
  .foot {
    position: absolute;
    width: 100%;
    height: 94px;
    bottom: 0px;
    background: url(../assets/home/foot.png) no-repeat;
    background-size: 100% 100%;
    background-position: center center;
  }
}
</style>
