import { Header } from './components/Header/Header';
import { MetricCard } from './components/MetricCard/MetricCard';
import { ChartPanel } from './components/ChartPanel/ChartPanel';
import { CenterView } from './components/CenterView/CenterView';
import { RealtimeList } from './components/RealtimeList/RealtimeList';
import { areaRankOption, resourceGaugeOption, sourceShareOption, taskStatsOption, visitTrendOption } from './chartOptions';
import { metrics, realtimeAlerts, realtimeLogs } from './data/mockData';

function App() {
  return (
    <main className="big-screen-shell">
      <div className="screen-bg" />
      <Header />

      <section className="metrics-grid" aria-label="核心指标">
        {metrics.map((metric, index) => (
          <MetricCard key={metric.title} metric={metric} index={index} />
        ))}
      </section>

      <section className="dashboard-grid">
        <div className="side-column">
          <ChartPanel title="访问趋势" subtitle="近 24 小时" option={visitTrendOption} />
          <ChartPanel title="数据来源占比" subtitle="业务域分布" option={sourceShareOption} />
          <ChartPanel title="任务处理效率" subtitle="实时完成率" option={taskStatsOption} />
        </div>

        <div className="center-column">
          <CenterView />
        </div>

        <div className="side-column">
          <ChartPanel title="区域数据排行" subtitle="综合指数" option={areaRankOption} />
          <ChartPanel title="系统资源监控" subtitle="资源占用" option={resourceGaugeOption} />
          <ChartPanel title="实时告警列表" subtitle="自动滚动">
            <RealtimeList type="alerts" items={realtimeAlerts} />
          </ChartPanel>
        </div>
      </section>

      <section className="bottom-zone">
        <ChartPanel title="数据处理流水" subtitle="模拟实时日志" className="bottom-panel">
          <RealtimeList type="logs" items={realtimeLogs} />
        </ChartPanel>
        <div className="mini-stat-grid">
          <div className="mini-stat"><span>今日接入接口</span><strong>326</strong><em>+32</em></div>
          <div className="mini-stat"><span>消息处理峰值</span><strong>82.6k</strong><em>msg/s</em></div>
          <div className="mini-stat"><span>平均响应</span><strong>18ms</strong><em>-6ms</em></div>
          <div className="mini-stat"><span>模型服务</span><strong>46</strong><em>在线</em></div>
        </div>
      </section>
    </main>
  );
}

export default App;
