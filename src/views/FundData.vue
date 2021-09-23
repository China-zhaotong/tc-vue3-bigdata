<template>
  <div class="main">
    <div class="head">
      <div class="nav">
        <img class="img-left" src="../assets/funddata/left.png" /><span
          >基金大数据展示系统</span
        >
        <img class="img-right" src="../assets/funddata/left.png" />
      </div>
    </div>
    <a-row class="content">
      <a-col :span="6">
        <div class="card card-1"></div>
        <div class="card card-2"></div>
        <div class="card card-1"></div>
      </a-col>
      <a-col :span="12">
        <a-row class="middle">
          <a-col class="left" :span="6">
            <div class="item item-1">
              <div class="top"><span>30000</span></div>
              <div class="bottom"><span>开放基金</span></div>
            </div>
            <div class="item item-2">
              <div class="top"><span>30000</span></div>
              <div class="bottom"><span>开放基金</span></div>
            </div></a-col
          >
          <a-col class="ball" :span="12">
            <img src="../assets/funddata/bg.png" />
            <div class="item item-4">
              <div class="top"><span>30000</span></div>
              <div class="bottom"><span>货币基金</span></div>
            </div></a-col
          >
          <a-col class="right" :span="6">
            <div class="item item-3">
              <div class="top"><span>30000</span></div>
              <div class="bottom" style="display: flex; flex-direction: column">
                <span>场内交易</span><span>基金</span>
              </div>
            </div>
            <div class="item item-5">
              <div class="top"><span>30000</span></div>
              <div class="bottom"><span>理财基金</span></div>
            </div></a-col
          >
        </a-row>
        <a-row>
          <div class="card card-1"></div>
        </a-row>
        <!-- <div style="display: flex; height: 680px">
          <div class="left">
         
          </div>
          <div class="ball">
           
          </div>
          <div class="right">
           
          </div> -->
      </a-col>
      <a-col :span="6">
        <div class="card card-1"></div>
        <div class="card card-2"></div>
        <div class="card card-1"></div>
      </a-col>
    </a-row>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import echarts from "./Echarts.vue";

@Options({
  components: { echarts },
})
export default class FundData extends Vue {}
</script>
<style lang="less" scoped>
.main {
  width: 100%;
  height: 100%;
  background-image: url(../assets/funddata/main_bg.png);

  .head {
    width: 100%;
    height: 73px;
    display: flex;
    justify-content: center;
    .nav {
      width: 1020px;
      height: 73px;
      background-image: url(../assets/funddata/nav.png);
      display: flex;
      justify-content: center;
      span {
        margin-top: 15px;
        width: 254px;
        height: 24px;
        font-size: 24px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #7cfcff;
      }

      img {
        width: 8px;
        height: 13px;
        margin-top: 30px;
      }

      .img-left {
        margin-right: 80px;
      }
      .img-right {
        margin-left: 60px;
        transform: rotate(180deg);
      }
    }
  }
  .content {
    .middle {
      height: 680px;
      .left {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      }
      .ball {
        padding: 30px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          width: 400px;
          height: 349px;
        }
      }
      .right {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }

      .item {
        width: 140px;
        height: 215px;
        .top {
          width: 119px;
          height: 49px;
          background-image: url(../assets/funddata/item-top.png);
          text-align: center;
          margin-left: 10px;
          padding: 5px;
          span {
            width: 68px;
            height: 19px;
            font-size: 24px;
            font-family: DIN;
            font-weight: bold;
            color: #00e4ff;
            text-align: center;
          }
        }
        .bottom {
          width: 140px;
          height: 159px;
          // margin-top: 6px;
          background-image: url(../assets/funddata/item-bottom.png);
          padding: 81px 0 37px 37px;
          span {
            width: 67px;
            height: 17px;
            font-size: 16px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #ffffff;
            text-align: center;
          }
        }
      }

      .item-1 {
        margin-right: 50px;
      }
      .item-2 {
        margin-top: 50px;
      }
      .item-3 {
        margin-left: 50px;
      }
      .item-4 {
        margin-top: 50px;
      }
      .item-5 {
        margin-top: 50px;
      }
    }

    .card {
      background: rgba(10, 13, 44, 0.5);
      border: 1px solid #1c82f0;
      opacity: 0.3;
      margin-bottom: 10px;
    }
    .card-1 {
      height: 270px;
    }
    .card-2 {
      height: 390px;
    }
    .right {
      flex: 1;
      // background: yellow;
      // border: 1px solid #1c82f0;
      // opacity: 0.3;
    }

    // .card {
    //   position: absolute;
    //   background: rgba(10, 13, 44, 0.5);
    //   border: 1px solid #1c82f0;
    //   opacity: 0.3;
    // }

    // .card-1 {
    //   width: 400px;
    //   height: 270px;
    //   top: 0px;
    //   left: 10px;
    // }

    // .card-2 {
    //   width: 400px;
    //   height: 270px;
    //   top: 0px;
    //   right: 10px;
    // }
    // .card-3 {
    //   width: 400px;
    //   height: 390px;
    //   top: 280px;
    //   left: 10px;
    // }
    // .card-4 {
    //   width: 400px;
    //   height: 390px;
    //   top: 280px;
    //   right: 10px;
    // }
  }
}
</style>