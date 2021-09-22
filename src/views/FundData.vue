<template>
  <h1>基金大数据</h1>
  <echarts />
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import echarts from "./Echarts.vue";

@Options({
  components: { echarts },
})
export default class FundData extends Vue {}
</script>
