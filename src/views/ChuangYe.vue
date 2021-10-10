<template>
  <div class="main">
    <div class="head">
      <div class="nav">
        <img class="img-left" src="../assets/funddata/left.png" /><span
          >创业板大数据展示系统</span
        >
        <img class="img-right" src="../assets/funddata/left.png" />
      </div>
    </div>
    <a-row class="content">
      <a-col :span="6" class="left">
        <div class="card-parent card-1">
          <span class="title-header">创业板总数</span>
          <div class="card">
            <a-row style="height: 100px; padding: 20px">
              <a-col :span="6" class="flex-column-center">
                <span class="white-font">创业板总数</span>
                <span class="yellow-font">2000个</span>
              </a-col>
              <a-col :span="6" class="flex-column-center">
                <span class="white-font">上涨</span>
                <span class="yellow-font">2000个</span>
              </a-col>
              <a-col :span="6" class="flex-column-center">
                <span class="white-font">下跌</span>
                <span class="yellow-font">2000个</span>
              </a-col>
              <a-col :span="6" class="flex-column-center">
                <span class="white-font">平盘</span>
                <span class="yellow-font">2000个</span>
              </a-col>
            </a-row>
            <span class="title-content">涨停数</span>
            <chuang-ye-echarts
              style="height: 70%; padding: 20px"
              :option_type="1"
            />
            <div class="card-footer"></div>
          </div>
        </div>
        <div class="card-parent card-1">
          <span class="title-header">热门股票</span>
          <div class="card" style="padding: 20px">
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
        </div>
        <div class="card-parent card-1">
          <span class="title-header">机构统计数据</span>
          <div class="card">
            <chuang-ye-echarts
              style="height: 80%; padding: 20px"
              :option_type="2"
            />
            <div class="card-footer"></div>
          </div>
        </div>
      </a-col>
      <a-col :span="12" class="middle">
        <div class="top-content">
          <span class="head-title" style="margin-top: 150px"
            >创业板今日交易总额
          </span>
          <span class="middle-title" style="margin-top: 200px">涨跌幅 </span>
          <div class="bottom" style="margin-top: 30px">
            <div class="bottom-card">0</div>
            <div class="bottom-card">5</div>
            <span>.</span>
            <div class="bottom-card">5</div>
            <div class="bottom-card">0</div>
            <span>%</span>
          </div>
        </div>
        <div class="card-parent card-2">
          <span class="title-header">创业板详细数据</span>
          <div class="card" style="padding: 20px">
            <a-row
              style="height: 100px; display: flex; justify-content: flex-end"
            >
              <a-col style="width: 200px">
                <a-radio-group>
                  <a-radio-button
                    style="
                      background: #3888ff;
                      font-size: 12px;
                      font-family: Microsoft YaHei;
                      font-weight: 400;
                      color: #ffffff;
                    "
                    >今日数据</a-radio-button
                  >
                  <a-radio-button
                    style="
                      font-size: 12px;
                      font-family: Microsoft YaHei;
                      font-weight: 400;
                      color: #3888ff;
                      background: none;
                    "
                    >昨日数据</a-radio-button
                  >
                </a-radio-group></a-col
              >
            </a-row>
            <chuang-ye-echarts
              style="height: 90%; padding: 20px"
              :option_type="3"
            />
            <div class="card-footer"></div>
          </div>
        </div>
      </a-col>
      <a-col :span="6" class="right">
        <div class="card-parent card-1">
          <span class="title-header">资金流入详细</span>
          <div class="card" style="padding: 20px">
            <a-table
              class="ant-table-striped"
              :dataSource="dataSource2"
              :columns="columns2"
              :rowClassName="
                (record, index) => (index % 2 === 1 ? 'table-striped' : null)
              "
            >
              <template #name2="{ record }">
                <span
                  style="
                    font-size: 12px;
                    font-family: DIN;
                    font-weight: bold;
                    color: #f2255d;
                    line-height: 40px;
                  "
                >
                  {{ record.name2 }}
                </span>
              </template>
              <template #name3="{ record }">
                <span
                  style="
                    font-size: 12px;
                    font-family: DIN;
                    font-weight: bold;
                    color: #39b766;
                    line-height: 40px;
                  "
                >
                  {{ record.name3 }}
                </span>
              </template></a-table
            >
            <div class="card-footer"></div>
          </div>
        </div>
        <div class="card-parent card-1">
          <span class="title-header">主力流入净趋势图</span>
          <div class="card" style="padding: 20px">
            <chuang-ye-echarts style="height: 50%" :option_type="4" />
            <a-row>
              <a-col
                :span="12"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                "
              >
                <span
                  style="
                    font-size: 16px;
                    font-family: Microsoft YaHei;
                    font-weight: bold;
                    color: #feffff;
                  "
                  >涨停占比数据</span
                >
                <chuang-ye-echarts style="height: 50%" :option_type="5"
              /></a-col>
              <a-col
                :span="12"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                "
              >
                <span
                  style="
                    font-size: 16px;
                    font-family: Microsoft YaHei;
                    font-weight: bold;
                    color: #feffff;
                  "
                  >跌停占比数据</span
                >
                <chuang-ye-echarts style="height: 50%" :option_type="5"
              /></a-col>
            </a-row>
            <div class="card-footer"></div>
          </div>
        </div>
        <div class="card-parent card-1">
          <span class="title-header">往期热门</span>
          <div class="card" style="padding: 20px">
            <a-table
              class="ant-table-striped"
              :dataSource="dataSource1"
              :columns="columns1"
              :rowClassName="
                (record, index) => (index % 2 === 1 ? 'table-striped' : null)
              "
            />
            <div class="card-footer"></div>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ChuangYeEcharts from "../components/echarts/ChuangYeEcharts.vue";
@Options({
  components: { ChuangYeEcharts },
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
  public dataSource1 = [
    {
      key: "1",
      name1: "22222",
      name2: "隆基股份",
      name3: "新能源",
      name4: "时间",
      name5: "交易金额",
    },
    {
      key: "2",
      name1: "22222",
      name2: "隆基股份",
      name3: "新能源",
      name4: "时间",
      name5: "交易金额",
    },
    {
      key: "3",
      name1: "22222",
      name2: "隆基股份",
      name3: "新能源",
      name4: "时间",
      name5: "交易金额",
    },
    {
      key: "4",
      name1: "22222",
      name2: "隆基股份",
      name3: "新能源",
      name4: "时间",
      name5: "交易金额",
    },
  ];
  public dataSource2 = [
    {
      key: "1",
      name1: "超大单",
      name2: "343.212亿",
      name3: "5454.212亿",
    },
    {
      key: "2",
      name1: "超大单",
      name2: "343.212亿",
      name3: "5454.212亿",
    },
    {
      key: "3",
      name1: "超大单",
      name2: "343.212亿",
      name3: "5454.212亿",
    },
    {
      key: "4",
      name1: "超大单",
      name2: "343.212亿",
      name3: "5454.212亿",
    },
  ];
  public columns1 = [
    {
      title: "代码",
      dataIndex: "name1",
      key: "name1",
      align: "center",
    },
    {
      title: "名称",
      dataIndex: "name2",
      key: "name2",
      align: "center",
    },
    {
      title: "所属板块",
      dataIndex: "name3",
      key: "name3",
      align: "center",
    },
    {
      title: "时间",
      dataIndex: "name4",
      key: "name4",
      align: "center",
    },
    {
      title: "交易金额",
      dataIndex: "name5",
      key: "name5",
      align: "center",
    },
  ];
  public columns2 = [
    {
      title: "类型",
      dataIndex: "name1",
      key: "name1",
      align: "center",
    },
    {
      title: "流入",
      dataIndex: "name2",
      key: "name2",
      align: "center",
      slots: { customRender: "name2" },
    },
    {
      title: "流出",
      dataIndex: "name3",
      key: "name3",
      align: "center",
      slots: { customRender: "name3" },
    },
  ];
}
</script>
<style lang="less" scoped>
.main {
  width: 100%;
  height: 100%;
  background: url(../assets/chuangye/main_bg.png) no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  padding: 0 10px;
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
      position: absolute;
      top: 10px;
      padding-left: 20px;
    }
    .title-content {
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #3badeb;
      border-left: 2px solid #308eff;
      padding-left: 20px;
    }
    .left {
      .flex-column-center {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }

      .white-font {
        font-size: 12px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #ffffff;
      }

      .yellow-font {
        font-size: 24px;
        font-family: DIN;
        font-weight: 500;
        color: #f7ed7a;
      }
    }

    .middle {
      display: flex;
      flex-direction: column;
      padding: 0 20px;
      .top-content {
        width: 100%;
        height: 50%;
        background: url(../assets/chuangye/middle_bg.png) no-repeat;
        background-size: 100% 100%;
        background-position: center center;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .head-title {
          font-size: 28px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #ffffff;
        }

        .middle-title {
          font-size: 20px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #ffffff;
          margin-right: 30px;
        }

        .bottom {
          display: flex;
          width: 300px;
          justify-content: space-around;
          align-items: baseline;
          font-size: 20px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #feffff;
          .bottom-card {
            width: 42px;
            height: 56px;
            background: #f2255d;
            font-size: 42px;
            font-family: DIN;
            font-weight: bold;
            color: #ffffff;
            text-align: center;
            line-height: 56px;
          }
        }
      }
    }

    .card-parent {
      width: 100%;
      position: relative;
      padding-top: 20px;
      .card {
        border: 1px solid rgba(28, 130, 240, 0.3);
        top: 0;
        position: relative;

        &::after {
          position: absolute;
          top: 0;
          right: 0;
          width: 10px;
          height: 10px;
          border-right: 2px solid #308eff;
          border-top: 2px solid #308eff;
          content: "";
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
            content: "";
          }
          &::after {
            position: absolute;
            bottom: 0;
            right: 0;
            width: 10px;
            height: 10px;
            border-right: 2px solid #308eff;
            border-bottom: 2px solid #308eff;
            content: "";
          }
        }
      }
    }
    .card-1 {
      height: 30%;
    }
    .card-2 {
      height: 40%;
    }
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
