import ImageMedia from '../components/ImageMedia/ImageMedia';
import ProfileMedia from '../components/ProfileMedia/ProfileMedia';
import AvatarListPic from '../components/AvatarListPic/AvatarListPic';

export const timelines = [
  {
    id: 1,
    title: '12 Invoices have been paid',
    text: 'Invoices have been paid to the company.',
    time: '12 min ago',
    type: 'primary',
    children: <ImageMedia />,
  },
  {
    id: 2,
    title: 'Client Meeting',
    text: 'Project meeting with john @10:15am',
    time: '45 min ago',
    type: 'danger',
    children: <ProfileMedia />,
  },
  {
    id: 3,
    title: 'Create a new project for client',
    text: 'Add files to new design folder',
    time: '2 day ago',
    type: 'warning',
    children: <AvatarListPic />,
  },
  {
    id: 4,
    title: '12 Invoices have been paid',
    text: 'Invoices have been paid to the company.',
    time: '5 day ago',
    type: 'success',
  },
];
