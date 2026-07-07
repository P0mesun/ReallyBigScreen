import { useCurrentTime } from '../../hooks/useCurrentTime';
import './Header.css';

export function Header() {
  const currentTime = useCurrentTime();

  return (
    <header className="screen-header">
      <div className="header-wing" />
      <div className="title-wrap">
        <div className="subtitle">ReallyBigScreen · City Operation Visualization Center</div>
        <h1>如意数据大屏</h1>
        <div className="title-glow">城市运行可视化中心</div>
      </div>
      <div className="header-time">
        <span>实时态势</span>
        <strong>{currentTime}</strong>
      </div>
      <div className="header-line" />
    </header>
  );
}
