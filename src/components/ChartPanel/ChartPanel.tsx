import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import type { EChartsOption } from 'echarts';
import './ChartPanel.css';

type ChartPanelProps = {
  title: string;
  subtitle?: string;
  option?: EChartsOption;
  children?: React.ReactNode;
  className?: string;
};

export function ChartPanel({ title, subtitle, option, children, className = '' }: ChartPanelProps) {
  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!chartRef.current || !option) {
      return undefined;
    }

    const chart = echarts.init(chartRef.current);
    chart.setOption(option);

    const resizeObserver = new ResizeObserver(() => chart.resize());
    resizeObserver.observe(chartRef.current);

    return () => {
      resizeObserver.disconnect();
      chart.dispose();
    };
  }, [option]);

  return (
    <section className={`chart-panel ${className}`}>
      <div className="panel-header">
        <h2>{title}</h2>
        {subtitle && <span>{subtitle}</span>}
      </div>
      {option ? <div ref={chartRef} className="chart-canvas" /> : children}
    </section>
  );
}
