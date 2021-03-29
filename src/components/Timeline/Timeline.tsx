const Timeline: React.FC = ({ children }) => {
  return (
    <div className="card-timeline">
      <h2 className="title-employee">User Timeline</h2>

      <ul className="timeline-list">{children}</ul>
    </div>
  );
};
export default Timeline;
