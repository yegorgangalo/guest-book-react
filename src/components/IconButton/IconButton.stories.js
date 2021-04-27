import { FaRegEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import Spinner from '../Spinner';
import IconButton from './IconButton';

const Stories = {
  title: 'IconButton',
  component: IconButton,
  argTypes: {
    onClick: { action: 'onclick callback' },
  },
};

export default Stories;

const Template = args => <IconButton {...args} />;

export const Edit = Template.bind({});
Edit.args = {
  children: <FaRegEdit size="24" />,
  'aria-label': 'Edit Contact',
};

export const Delete = Template.bind({});
Delete.args = {
  children: <MdDelete size="24" />,
  'aria-label': 'Delete Contact',
};

export const Loading = Template.bind({});
Loading.args = {
  children: <Spinner size="24" />,
  'aria-label': 'Loading',
};
