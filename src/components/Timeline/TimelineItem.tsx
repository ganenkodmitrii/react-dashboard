interface TimelineItemProps {
  title: string;
  time: string;
  text: string;
  color: string | undefined;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, text, time, color, children }) => {
  return (
    <li className="timeline-item">
      <div className="timelile-point" style={{ backgroundColor: color }}></div>
      <div className="box-title">
        <h4>{title}</h4>
        <p>{time}</p>
      </div>

      <p className="timelineitem-text">{text}</p>
      <div>{children}</div>
    </li>
  );
};

export default TimelineItem;
