import type { MetricItem } from '../../data/mockData';
import './MetricCard.css';

type MetricCardProps = {
  metric: MetricItem;
  index: number;
};

const formatter = new Intl.NumberFormat('zh-CN', {
  maximumFractionDigits: 2,
});

export function MetricCard({ metric, index }: MetricCardProps) {
  const Icon = metric.icon;

  return (
    <article className={`metric-card metric-card--${metric.accent}`} style={{ animationDelay: `${index * 120}ms` }}>
      <div className="metric-icon">
        <Icon size={22} />
      </div>
      <div className="metric-content">
        <span className="metric-title">{metric.title}</span>
        <div className="metric-value-row">
          <strong>{formatter.format(metric.value)}</strong>
          <em>{metric.unit}</em>
        </div>
        <span className={metric.trend.startsWith('-') ? 'metric-trend metric-trend--down' : 'metric-trend'}>
          较昨日 {metric.trend}
        </span>
      </div>
    </article>
  );
}
