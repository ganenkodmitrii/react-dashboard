import ImageMedia from '../ImageMedia/ImageMedia';
import ProfileMedia from '../ProfileMedia/ProfileMedia';
import AvatarListPic from '../AvatarListPic/AvatarListPic';

export const timelines = [
  {
    id: 1,
    title: '12 Invoices have been paid',
    text: 'Invoices have been paid to the company.',
    time: '12 min ago',
    color: '#7915ba',
    children: <ImageMedia />,
  },
  {
    id: 2,
    title: 'Client Meeting',
    text: 'Project meeting with john @10:15am',
    time: '45 min ago',
    color: '#2b97d7',
    children: <ProfileMedia />,
  },
  {
    id: 3,
    title: 'Create a new project for client',
    text: 'Add files to new design folder',
    time: '2 day ago',
    color: '#2b97d7',
    children: <AvatarListPic />,
  },
  {
    id: 4,
    title: '12 Invoices have been paid',
    text: 'Invoices have been paid to the company.',
    time: '5 day ago',
    color: '#7cc45e',
  },
];
