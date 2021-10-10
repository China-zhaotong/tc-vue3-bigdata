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
        <div style="position: relative">
          <span class="title-header">创业板总数</span>
          <span class="title-header" style="margin-top: 50px">创业板总数</span>
          <div class="card card-1">
            <!-- <div class="card-footer"></div> -->
          </div>
        </div>
        <div class="card card-2">
          <a-table
            class="ant-table-striped"
            :dataSource="dataSource"
            :columns="columns"
            :rowClassName="
              (record, index) => (index % 2 === 1 ? 'table-striped' : null)
            "
          />
          <div class="card-footer"></div>
        </div>
        <div class="card card-2">
          <div class="card-footer"></div>
        </div>
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
          <div class="card card-2">
            <div
              style="
                height: 60px;
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
              "
            >
              <span
                style="
                  font-size: 24px;
                  font-family: Microsoft YaHei;
                  font-weight: bold;
                  color: #ffffff;
                "
                >热销基金</span
              >

              <div style="width: 500px; display: flex; align-items: center">
                <a-button
                  v-for="n in 5"
                  :key="n"
                  style="
                    background: rgba(56, 136, 255, 0.2);
                    color: #fff;
                    border: none;
                    margin-left: 10px;
                  "
                  >股票基金</a-button
                >
              </div>
            </div>
            <a-table
              class="ant-table-striped"
              :dataSource="dataSource"
              :columns="columns"
              :rowClassName="
                (record, index) => (index % 2 === 1 ? 'table-striped' : null)
              "
            />
          </div>
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
        <div class="card card-1"><div class="card-footer"></div></div>
        <div class="card card-2">
          <a-table
            class="ant-table-striped"
            :dataSource="dataSource"
            :columns="columns"
            :rowClassName="
              (record, index) => (index % 2 === 1 ? 'table-striped' : null)
            "
          />
          <div class="card-footer"></div>
        </div>
        <div class="card card-2"><div class="card-footer"></div></div>
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
export default class FundData extends Vue {
  public dataSource = [
    {
      key: "1",
      name: "胡彦斌",
      age: 32,
      address: "西湖区湖底公园1号",
    },
    {
      key: "2",
      name: "胡彦祖",
      age: 42,
      address: "西湖区湖底公园1号",
    },
    {
      key: "2",
      name: "胡彦祖",
      age: 42,
      address: "西湖区湖底公园1号",
    },
    {
      key: "2",
      name: "胡彦祖",
      age: 42,
      address: "西湖区湖底公园1号",
    },
  ];

  public columns = [
    {
      title: "代码",
      dataIndex: "name",
      key: "name",
      align: "center",
    },
    {
      title: "所属公司",
      dataIndex: "age",
      key: "age",
      align: "center",
    },
    {
      title: "年收益率",
      dataIndex: "address",
      key: "address",
      align: "center",
    },
    {
      title: "规模",
      dataIndex: "address",
      key: "address",
      align: "center",
    },
  ];
}
</script>
<style lang="less" scoped>
.main {
  width: 100%;
  height: 100%;
  background: url(../assets/funddata/main_bg.png) no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  padding: 0 10px;
  position: relative;
  z-index: 1;

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
    .title-header {
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #3badeb;
      border-left: 2px solid #308eff;
    }
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
      // background: rgba(10, 13, 44, 0.5);
      border: 1px solid rgba(28, 130, 240, 0.1);
      padding: 15px 15px;
      top: 10px;
      position: absolute;
      &::after {
        position: absolute;
        top: 0;
        right: 0;
        width: 10px;
        height: 10px;
        border-right: 2px solid #308eff;
        border-top: 2px solid #308eff;
        content: "1";
      }

      .card-footer {
        position: absoulte;
        bottom: 0;
        left: 0;
        width: 100%;

        &::before {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 10px;
          height: 10px;
          border-left: 2px solid #308eff;
          border-bottom: 2px solid #308eff;
          content: "1";
        }
        &::after {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 10px;
          height: 10px;
          border-right: 2px solid #308eff;
          border-bottom: 2px solid #308eff;
          content: "1";
        }
      }

      .card-header {
        position: absoulte;
        top: 0;
        left: 0;
        width: 100%;
        background: red;
        height: 10px;

        &::before {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 10px;
          height: 10px;
          border-left: 2px solid #308eff;
          border-bottom: 2px solid #308eff;
          content: "1";
        }
        &::after {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 10px;
          height: 10px;
          border-right: 2px solid #308eff;
          border-bottom: 2px solid #308eff;
          content: "1";
        }
      }
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
<style scoped>
.ant-table-striped :deep(.table-striped) td {
  font-size: 12px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #ffffff;
  line-height: 24px;
  background: rgba(48, 142, 255, 0.1);
}

.ant-table-striped :deep(.ant-table) {
  background: none;
  color: #fff;
  border: none;
  font-size: 12px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #ffffff;
  line-height: 24px;
}

.ant-table-striped :deep(.ant-table-tbody) tr td {
  border-bottom: none;
}
.ant-table-striped :deep(.ant-table-thead) tr th {
  background: #308eff;
  color: #fff;
  border: none;
  font-size: 12px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  background: rgba(48, 142, 255, 0.1);
  line-height: 24px;
}
</style>
