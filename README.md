# ReallyBigScreen · 如意数据大屏

ReallyBigScreen（如意数据大屏）是一个公开开源的数据可视化大屏教学项目，目标是帮助大家从 0 到 1 学习如何自己动手制作一个现代化、可维护、具有视觉冲击力的数据可视化大屏。

当前版本主题为：**如意数据大屏 · 城市运行可视化中心**。

## 项目简介

本项目使用 Vite、React、TypeScript 和 ECharts 搭建，采用模拟数据实现一个完整的数据中心/运营中心/指挥中心风格的大屏首页。项目在视觉上强调深色科技感、发光边框、渐变卡片、网格背景、中心雷达扫描、指标数据和实时滚动列表，同时保持代码结构清晰，适合作为教学项目长期维护和二次开发。

## 项目预览说明

启动本地开发服务后，浏览器会展示一个适合 16:9 大屏展示的数据可视化首页，包含：

- 顶部标题栏与实时当前时间
- 6 个核心指标卡片
- 中央城市运行主视觉面板
- 左侧访问趋势、数据来源、任务处理图表
- 右侧区域排行、系统资源监控、实时告警列表
- 底部数据处理流水与小型统计模块

## 技术栈

- [Vite](https://vite.dev/)：现代前端构建工具
- [React](https://react.dev/)：组件化 UI 开发
- [TypeScript](https://www.typescriptlang.org/)：类型安全的 JavaScript
- [ECharts](https://echarts.apache.org/)：数据可视化图表库
- [lucide-react](https://lucide.dev/)：轻量图标库
- CSS：全局样式与组件样式组织

## 本地运行方式

安装依赖：

```bash
npm install
```

启动开发服务：

```bash
npm run dev
```

构建验证：

```bash
npm run build
```

代码检查：

```bash
npm run lint
```

默认访问地址：

```text
http://localhost:5173
```

如果端口被占用，请以终端输出的 Vite 地址为准。

## 项目结构

```text
src/
  components/
    CenterView/       # 中央主视觉区域
    ChartPanel/       # 通用图表面板
    Header/           # 顶部标题栏
    MetricCard/       # 核心指标卡片
    RealtimeList/     # 实时告警/日志列表
  data/
    mockData.ts       # 统一模拟数据
  hooks/
    useCurrentTime.ts # 当前时间 Hook
  styles/
    global.css        # 全局样式与页面布局
  App.tsx             # 大屏页面组合
  chartOptions.ts     # ECharts 配置
  main.tsx            # 应用入口
```

## 后续计划

- 增加更多大屏主题模板
- 增加真实地图和地理数据可视化示例
- 增加主题切换和配置化面板能力
- 增加自适应缩放方案说明
- 接入 WebSocket 或轮询模拟实时数据流
- 补充从 0 到 1 的教学文档和实现讲解
- 增加截图预览和在线演示地址

## 适合人群

- 想学习数据可视化大屏开发的初学者
- 希望了解前端可视化项目工程化实践的开发者
- 需要参考数据大屏项目结构的学习者
- 对数据展示、图表设计、可视化交互感兴趣的同学

## 开源协议

本项目基于 [MIT License](./LICENSE) 开源。
