export interface TimelineItemProps {
  id: number;
  title: string;
  time: string;
  text: string;
  type?: string;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  id,
  title,
  text,
  time,
  type = 'primary',
  children,
}) => {
  return (
    <li key={id} className="timeline-item">
      <div className={['timelile-point', `timelile-point--${type}`].join(' ')}></div>
      <div className="box-title">
        <h4>{title}</h4>
        <p>{time}</p>
      </div>

      <p className="timelineitem-text">{text}</p>
      <div>{children}</div>
    </li>
  );
};
