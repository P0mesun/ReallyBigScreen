import { Zap } from 'lucide-react';
import { cityNodes } from '../../data/mockData';
import './CenterView.css';

export function CenterView() {
  return (
    <section className="center-view">
      <div className="center-toolbar">
        <span>城市运行指数</span>
        <strong>98.7</strong>
      </div>
      <div className="orbit orbit--outer" />
      <div className="orbit orbit--middle" />
      <div className="orbit orbit--inner" />
      <div className="radar-sweep" />
      <div className="core-node">
        <Zap size={34} />
        <strong>DATA CORE</strong>
        <span>6 大业务域 · 128 个接入节点</span>
      </div>
      <div className="flow-ring" />
      {cityNodes.slice(1).map((node, index) => (
        <div
          className="city-node"
          key={node.name}
          style={{
            '--x': `${node.x}%`,
            '--y': `${node.y}%`,
            '--delay': `${index * 0.42}s`,
          } as React.CSSProperties}
        >
          <i />
          <span>{node.name}</span>
          <em>{node.value}</em>
        </div>
      ))}
      <div className="center-stats">
        <div>
          <span>实时吞吐</span>
          <strong>42.8k/s</strong>
        </div>
        <div>
          <span>链路健康</span>
          <strong>99.96%</strong>
        </div>
        <div>
          <span>事件闭环</span>
          <strong>96.3%</strong>
        </div>
      </div>
    </section>
  );
}
