import type { EChartsOption } from 'echarts';
import { areaRanks, sourceShare, systemResources, taskStats, visitTrend } from './data/mockData';

const textColor = '#9fc6df';
const splitLine = 'rgba(103, 203, 255, 0.12)';

export const visitTrendOption: EChartsOption = {
  color: ['#31dfff'],
  grid: { left: 34, right: 16, top: 28, bottom: 28 },
  tooltip: { trigger: 'axis', backgroundColor: 'rgba(3, 12, 32, 0.92)', borderColor: '#2adfff', textStyle: { color: '#eaffff' } },
  xAxis: { type: 'category', data: visitTrend.hours, boundaryGap: false, axisLine: { lineStyle: { color: splitLine } }, axisTick: { show: false }, axisLabel: { color: textColor } },
  yAxis: { type: 'value', axisLabel: { color: textColor }, splitLine: { lineStyle: { color: splitLine } } },
  series: [
    {
      type: 'line',
      smooth: true,
      symbol: 'circle',
      symbolSize: 7,
      data: visitTrend.values,
      areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'rgba(49, 223, 255, 0.36)' }, { offset: 1, color: 'rgba(49, 223, 255, 0.02)' }] } },
      lineStyle: { width: 3, shadowColor: 'rgba(49, 223, 255, 0.65)', shadowBlur: 14 },
    },
  ],
};

export const sourceShareOption: EChartsOption = {
  color: ['#35e7ff', '#4778ff', '#8b5cff', '#42f5ab', '#ffb457'],
  tooltip: { trigger: 'item', backgroundColor: 'rgba(3, 12, 32, 0.92)', borderColor: '#2adfff', textStyle: { color: '#eaffff' } },
  legend: { bottom: 0, icon: 'circle', textStyle: { color: textColor, fontSize: 11 } },
  series: [
    {
      type: 'pie',
      radius: ['48%', '70%'],
      center: ['50%', '42%'],
      roseType: 'area',
      label: { color: '#dffaff', formatter: '{b}\n{d}%' },
      labelLine: { lineStyle: { color: 'rgba(153, 226, 255, 0.5)' } },
      data: sourceShare,
    },
  ],
};

export const taskStatsOption: EChartsOption = {
  color: ['#5ce8ff'],
  grid: { left: 32, right: 16, top: 22, bottom: 28 },
  tooltip: { trigger: 'axis', backgroundColor: 'rgba(3, 12, 32, 0.92)', borderColor: '#2adfff', textStyle: { color: '#eaffff' } },
  xAxis: { type: 'category', data: taskStats.categories, axisLine: { lineStyle: { color: splitLine } }, axisTick: { show: false }, axisLabel: { color: textColor } },
  yAxis: { type: 'value', max: 100, axisLabel: { color: textColor }, splitLine: { lineStyle: { color: splitLine } } },
  series: [
    {
      type: 'bar',
      data: taskStats.values,
      barWidth: 16,
      itemStyle: { borderRadius: [8, 8, 0, 0], color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#69f0ff' }, { offset: 1, color: '#4b65ff' }] } },
    },
  ],
};

export const areaRankOption: EChartsOption = {
  color: ['#7c5cff'],
  grid: { left: 64, right: 32, top: 18, bottom: 20 },
  tooltip: { trigger: 'axis', backgroundColor: 'rgba(3, 12, 32, 0.92)', borderColor: '#8b5cff', textStyle: { color: '#eaffff' } },
  xAxis: { type: 'value', max: 100, axisLabel: { color: textColor }, splitLine: { lineStyle: { color: splitLine } } },
  yAxis: { type: 'category', data: areaRanks.map((item) => item.name).reverse(), axisLine: { show: false }, axisTick: { show: false }, axisLabel: { color: textColor } },
  series: [
    {
      type: 'bar',
      data: areaRanks.map((item) => item.value).reverse(),
      barWidth: 12,
      itemStyle: { borderRadius: 999, color: { type: 'linear', x: 0, y: 0, x2: 1, y2: 0, colorStops: [{ offset: 0, color: '#4667ff' }, { offset: 1, color: '#35e7ff' }] } },
      label: { show: true, position: 'right', color: '#dffaff', formatter: '{c}' },
    },
  ],
};

export const resourceGaugeOption: EChartsOption = {
  color: ['#31dfff', '#7c5cff', '#42f5ab', '#ffb457'],
  tooltip: { trigger: 'item', backgroundColor: 'rgba(3, 12, 32, 0.92)', borderColor: '#2adfff', textStyle: { color: '#eaffff' } },
  radar: {
    radius: '64%',
    axisName: { color: textColor },
    splitLine: { lineStyle: { color: splitLine } },
    splitArea: { areaStyle: { color: ['rgba(55, 203, 255, 0.03)', 'rgba(124, 92, 255, 0.04)'] } },
    axisLine: { lineStyle: { color: splitLine } },
    indicator: systemResources.map((item) => ({ name: item.name, max: 100 })),
  },
  series: [
    {
      type: 'radar',
      data: [{ value: systemResources.map((item) => item.value), name: '资源占用' }],
      areaStyle: { color: 'rgba(49, 223, 255, 0.22)' },
      lineStyle: { color: '#31dfff', width: 2 },
      symbol: 'circle',
      symbolSize: 6,
    },
  ],
};
