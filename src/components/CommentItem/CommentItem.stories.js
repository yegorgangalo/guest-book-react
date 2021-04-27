import { QueryClient, QueryClientProvider } from 'react-query';
import CommentItem from './CommentItem';

const Stories = {
  title: 'CommentItem',
  component: CommentItem,
  decorators: [
    Story => (
      <div style={{ listStyle: 'none', width: 600 }}>
        <Story />
      </div>
    ),
  ],
};

export default Stories;

const queryClient = new QueryClient();
const Template = args => (
  <QueryClientProvider client={queryClient}>
    <CommentItem {...args} />
  </QueryClientProvider>
);

export const Default = Template.bind({});
Default.args = {
  _id: 123,
  name: 'Yegor',
  comment: 'Any comment in this place',
};
