import './RealtimeList.css';

type AlertItem = {
  level: string;
  area: string;
  message: string;
  time: string;
};

type LogItem = {
  module: string;
  detail: string;
  status: string;
};

type RealtimeListProps =
  | { type: 'alerts'; items: AlertItem[] }
  | { type: 'logs'; items: LogItem[] };

export function RealtimeList(props: RealtimeListProps) {
  if (props.type === 'alerts') {
    const doubledItems = [...props.items, ...props.items];

    return (
      <div className="realtime-list">
        <div className="realtime-track">
          {doubledItems.map((item, index) => (
            <div className="alert-row" key={`${index}-${item.time}`}>
              <span className={`alert-level level-${item.level}`}>{item.level}</span>
              <div>
                <strong>{item.area}</strong>
                <p>{item.message}</p>
              </div>
              <time>{item.time}</time>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const doubledItems = [...props.items, ...props.items];

  return (
    <div className="realtime-list">
      <div className="realtime-track">
        {doubledItems.map((item, index) => (
          <div className="log-row" key={`${index}-${item.module}`}>
            <span>{item.module}</span>
            <p>{item.detail}</p>
            <em>{item.status}</em>
          </div>
        ))}
      </div>
    </div>
  );
}
