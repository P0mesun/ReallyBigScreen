import type { LucideIcon } from 'lucide-react';
import { Activity, AlertTriangle, DatabaseZap, RadioTower, ShieldCheck, Workflow } from 'lucide-react';

export type MetricItem = {
  title: string;
  value: number;
  unit: string;
  trend: string;
  accent: 'cyan' | 'blue' | 'purple' | 'orange';
  icon: LucideIcon;
};

export const metrics: MetricItem[] = [
  { title: '今日访问量', value: 128940, unit: '次', trend: '+18.6%', accent: 'cyan', icon: Activity },
  { title: '实时在线人数', value: 6842, unit: '人', trend: '+9.2%', accent: 'blue', icon: RadioTower },
  { title: '数据接入量', value: 938, unit: 'GB', trend: '+24.8%', accent: 'purple', icon: DatabaseZap },
  { title: '告警数量', value: 27, unit: '条', trend: '-12.4%', accent: 'orange', icon: AlertTriangle },
  { title: '系统稳定率', value: 99.96, unit: '%', trend: '+0.12%', accent: 'cyan', icon: ShieldCheck },
  { title: '处理任务数', value: 1268, unit: '项', trend: '+15.3%', accent: 'blue', icon: Workflow },
];

export const visitTrend = {
  hours: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
  values: [3200, 2480, 1980, 2860, 6200, 9280, 10820, 12490, 13920, 15800, 17360, 16620],
};

export const sourceShare = [
  { name: '智慧交通', value: 34 },
  { name: '城市治理', value: 26 },
  { name: '公共服务', value: 18 },
  { name: '环境监测', value: 14 },
  { name: '应急联动', value: 8 },
];

export const taskStats = {
  categories: ['采集', '清洗', '建模', '分析', '归档', '同步'],
  values: [86, 72, 64, 92, 58, 80],
};

export const areaRanks = [
  { name: '浦东新区', value: 98.6 },
  { name: '天河区', value: 95.3 },
  { name: '西湖区', value: 92.7 },
  { name: '武侯区', value: 89.2 },
  { name: '南山区', value: 86.8 },
];

export const systemResources = [
  { name: 'CPU', value: 62 },
  { name: '内存', value: 74 },
  { name: '存储', value: 53 },
  { name: '带宽', value: 81 },
];

export const realtimeAlerts = [
  { level: '高', area: '北区数据网关', message: '接口响应时间超过阈值', time: '10:42:18' },
  { level: '中', area: '交通流量节点', message: '采集延迟持续 3 分钟', time: '10:39:02' },
  { level: '低', area: '环境监测站', message: '传感器电量低于 20%', time: '10:35:47' },
  { level: '中', area: '业务调度中心', message: '任务队列出现短时堆积', time: '10:31:26' },
  { level: '低', area: '数据归档服务', message: '夜间归档任务已重试', time: '10:28:54' },
  { level: '高', area: '应急联动平台', message: '关键通道连接波动', time: '10:23:11' },
];

export const realtimeLogs = [
  { module: '数据采集', detail: '新增 24 条城市道路流量数据', status: '已完成' },
  { module: '智能分析', detail: '完成重点区域客流预测模型更新', status: '运行中' },
  { module: '事件中心', detail: '自动归并 6 条重复告警事件', status: '已完成' },
  { module: '资源调度', detail: '扩容 2 个实时计算 Worker', status: '已完成' },
  { module: '质量巡检', detail: '发现 3 条缺失字段并自动修复', status: '已完成' },
  { module: '消息总线', detail: '推送 18,620 条实时状态消息', status: '运行中' },
  { module: '画像服务', detail: '区域热力标签计算完成', status: '已完成' },
  { module: '开放接口', detail: '第三方应用调用峰值刷新', status: '监控中' },
];

export const cityNodes = [
  { name: '数据中心', value: 100, x: 0, y: 0 },
  { name: '交通', value: 86, x: -42, y: -28 },
  { name: '治理', value: 78, x: 42, y: -24 },
  { name: '环境', value: 64, x: -36, y: 32 },
  { name: '民生', value: 72, x: 38, y: 34 },
  { name: '应急', value: 68, x: 0, y: -52 },
];
