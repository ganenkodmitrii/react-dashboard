import React from 'react';
import { TimelineItem, TimelineItemProps } from './TimelineItem';

interface TimelineComposition {
  Item: React.FC<TimelineItemProps>;
}

const Timeline: React.FC & TimelineComposition = ({ children }) => {
  return <ul className="timeline-list">{children}</ul>;
};

Timeline.displayName = 'Timeline';

Timeline.Item = TimelineItem;

export default Timeline;
