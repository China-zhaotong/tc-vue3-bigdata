<template>
  <v-chart :option="option" autoresize @click="click" @dblclick="dblclick" />
</template>
<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart, LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
} from "echarts/components";
import VChart from "vue-echarts";
import { ref, defineComponent } from "vue";
import ChuangYeEcharts from "./ChuangYeEchartsOption";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  LineChart,
]);

export default defineComponent({
  name: "HelloWorld",
  components: {
    VChart,
  },
  props: ["option_type"],
  provide: {},
  setup: (props) => {
    const option = ref(ChuangYeEcharts(props.option_type));

    const click = (params) => {
      console.log('click事件触发')
    }

    const dblclick = (params) =>{
      console.log('dblclick事件触发')
    }

    return { option,click,dblclick};
  },
});
</script>
