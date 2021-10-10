import { EChartsOption } from "echarts";
import * as echarts from "echarts";

const default_op: EChartsOption = {};

const option1: EChartsOption = {
  grid: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    containLabel: true,
  },
  xAxis: {
    type: "value",
    show: false,
  },
  yAxis: {
    type: "category",
    data: ["涨停数", "净流入超过一亿", "0-1亿", "0-1000万"],
    axisLabel: {
      fontSize: 12,
      fontWeight: 400,
      color: "#AAD4FF",
    },
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
  },
  series: [
    {
      type: "bar",
      name: "产出",
      barWidth: 20,
      itemStyle: {
        borderRadius: [0, 10, 10, 0],
      },
      label: {
        show: true,
        position: "insideBottomLeft",
      },
      data: [
        {
          value: 50,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
              {
                offset: 0,
                color: "rgba(114, 83, 242, 1)",
              },
              {
                offset: 1,
                color: "rgba(114, 83, 242, 0)",
              },
            ]),
          },
        },
        {
          value: 20,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
              {
                offset: 0,
                color: "rgba(16, 222, 227, 1)",
              },
              {
                offset: 1,
                color: "rgba(16, 222, 227, 0)",
              },
            ]),
          },
        },
        {
          value: 50,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
              {
                offset: 0,
                color: "rgba(251, 156, 94, 1)",
              },
              {
                offset: 1,
                color: "rgba(251, 156, 94, 0)",
              },
            ]),
          },
        },
        {
          value: 20,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
              {
                offset: 0,
                color: "rgba(62, 158, 231, 1)",
              },
              {
                offset: 1,
                color: "rgba(62, 158, 231, 0)",
              },
            ]),
          },
        },
      ],
    },
  ],
};

const option2: EChartsOption = {
  title: {
    text: "机构总数：500家",
    textStyle: {
      fontSize: "14px",
      fontWeight: 400,
      color: "#AAD4FF",
    },
  },
  legend: {
    top: 10,
    right: 10,
    orient: "vertical",
    icon: "circle",
    textStyle: {
      fontSize: 14,
      fontWeight: "bold",
    },
    data: [
      {
        name: "净卖出",
        textStyle: {
          color: "rgba(0, 255, 240, 1)",
        },
      },
      {
        name: "其他",
        textStyle: {
          color: "#FEC107",
        },
      },
      {
        name: "净买入",
        textStyle: {
          color: "#02A1FF",
        },
      },
    ],
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["40%", "80%"],
      top: 50,
      left: 10,
      right: 10,
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: "40",
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        {
          value: 50,
          name: "净卖出",
          itemStyle: {
            color: "rgba(0, 255, 240, 1)",
          },
        },
        {
          value: 30,
          name: "其他",
          itemStyle: {
            color: "#FEC107",
          },
        },
        {
          value: 20,
          name: "净买入",
          itemStyle: {
            color: "#02A1FF",
          },
        },
      ],
    },
  ],
};

const option3: EChartsOption = {
  grid: {
    top: 20,
    left: 10,
    right: 10,
    bottom: 20,
    containLabel: true,
  },
  xAxis: {
    type: "category",
    data: [
      "涨停",
      "涨1-10%",
      "涨10-20%",
      "平盘",
      "-1 ~ --10%",
      "-10~-20% ",
      "跌停",
    ],
    axisTick: {
      show: false,
    },
  },
  yAxis: {
    type: "value",
    splitLine: {
      lineStyle: {
        color: "rgba(10, 13, 44, 0.5)",
      },
    },
  },
  series: [
    {
      data: [
        {
          value: 20,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
              {
                offset: 0,
                color: "rgba(114, 83, 242, 1)",
              },
              {
                offset: 1,
                color: "rgba(114, 83, 242, 0)",
              },
            ]),
          },
          label: {
            show: true,
            color: "rgba(114, 83, 242, 1)",
            position: "top",
          },
        },
        {
          value: 40,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
              {
                offset: 0,
                color: "rgba(255, 152, 1, 1)",
              },
              {
                offset: 1,
                color: "rgba(255, 152, 1, 0)",
              },
            ]),
          },
          label: {
            show: true,
            color: "rgba(255, 152, 1, 1)",
            position: "top",
          },
        },
        {
          value: 20,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
              {
                offset: 0,
                color: "rgba(254, 193, 7, 1)",
              },
              {
                offset: 1,
                color: "rgba(254, 193, 7, 0)",
              },
            ]),
          },
          label: {
            show: true,
            color: "rgba(254, 193, 7, 1)",
            position: "top",
          },
        },
        {
          value: 20,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
              {
                offset: 0,
                color: "rgba(2, 161, 255, 1)",
              },
              {
                offset: 1,
                color: "rgba(2, 161, 255, 0)",
              },
            ]),
          },
          label: {
            show: true,
            color: "rgba(2, 161, 255, 1)",
            position: "top",
          },
        },
        {
          value: 20,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
              {
                offset: 0,
                color: "rgba(0, 255, 240, 1)",
              },
              {
                offset: 1,
                color: "rgba(0, 255, 240, 0)",
              },
            ]),
          },
          label: {
            show: true,
            color: "rgba(0, 255, 240, 1)",
            position: "top",
          },
        },
        {
          value: 20,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
              {
                offset: 0,
                color: "rgba(34, 225, 180, 1)",
              },
              {
                offset: 1,
                color: "rgba(34, 225, 180,0)",
              },
            ]),
          },
          label: {
            show: true,
            color: "rgba(34, 225, 180, 1)",
            position: "top",
          },
        },
        {
          value: 20,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
              {
                offset: 0,
                color: "rgba(127, 99, 244, 1)",
              },
              {
                offset: 1,
                color: "rgba(127, 99, 244, 0)",
              },
            ]),
          },
          label: {
            show: true,
            color: "rgba(127, 99, 244, 1)",
            position: "top",
          },
        },
      ],
      type: "bar",
      itemStyle: {
        borderRadius: [10, 10, 0, 0],
      },
      barWidth: 50,
    },
  ],
};

const option4: EChartsOption = {
  grid: {
    top: 20,
    left: 10,
    right: 10,
    bottom: 20,
    containLabel: true,
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      lineStyle: {
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "rgba(255,255,255,0)", // 0% 处的颜色
            },
            {
              offset: 0.5,
              color: "rgba(255,255,255,1)", // 100% 处的颜色
            },
            {
              offset: 1,
              color: "rgba(255,255,255,0)", // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
        },
      },
    },
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      axisLabel: {
        formatter: "{value}",
        fontSize: 14,
        margin: 20,
        color: "#7ec7ff",
      },
      axisLine: {
        lineStyle: {
          color: "#243753",
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "#243753",
        },
      },
      axisTick: {
        show: false,
      },
      data: ["05-26", "06-26", "07-26", "08-26", "09-26", "10-11"],
    },
  ],
  yAxis: [
    {
      boundaryGap: false,
      type: "value",
      axisLabel: {
        color: "#7ec7ff",
      },
      nameTextStyle: {
        color: "#fff",
        fontSize: 12,
        lineHeight: 40,
      },
      splitLine: {
        lineStyle: {
          color: "#243753",
        },
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#283352",
        },
      },
      axisTick: {
        show: false,
      },
      max: 200,
      min: -200,
      splitNumber: 5,
    },
  ],
  series: [
    {
      name: "报名",
      type: "line",
      smooth: true,
      showSymbol: true,
      symbolSize: 8,
      zlevel: 3,
      itemStyle: {
        color: "#19a3df",
        borderColor: "#a3c8d8",
      },
      lineStyle: {
        width: 6,
        color: "#19a3df",
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(
          0,
          0,
          0,
          1,
          [
            {
              offset: 0,
              color: "rgba(88,255,255,0.2)",
            },
            {
              offset: 0.8,
              color: "rgba(88,255,255,0)",
            },
          ],
          false
        ),
      },
      data: [-100, 0, 200, 100, 150, 123],
    },
  ],
};
const option5: EChartsOption = {
  series: [
    {
      name: "Pressure",
      type: "gauge",
      startAngle: 0,
      endAngle: 360,
      clockwise: false,
      detail: {
        formatter: "{value}%",
        offsetCenter: [0, 0],
        fontSize: 16,
        fontWeight: 400,
        color: " #22E1B4",
      },
      data: [
        {
          value: 50,
        },
      ],
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          width: 20,
          color: [[1, "rgba(41, 68, 167, 1)"]],
        },
      },
      axisLabel: {
        show: false,
      },
      pointer: {
        show: false,
      },
      anchor: {
        show: false,
      },
      progress: {
        show: true,
        width: 20,
        itemStyle: {
          color: "rgba(34, 225, 180, 1)",
        },
      },
    },
  ],
};

//根据type选择不同的初始化option
export default function selectOption(type: number): EChartsOption {
  if (type == 1) {
    return option1;
  } else if (type == 2) {
    return option2;
  } else if (type == 3) {
    return option3;
  } else if (type == 4) {
    return option4;
  } else if (type == 5) {
    return option5;
  } else {
    return default_op;
  }
}
