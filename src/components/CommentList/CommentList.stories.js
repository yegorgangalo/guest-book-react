import { QueryClient, QueryClientProvider } from 'react-query';
import CommentList from './CommentList';

const Stories = {
  title: 'CommentList',
  component: CommentList,
  decorators: [
    Story => (
      <div style={{ width: 600 }}>
        <Story />
      </div>
    ),
  ],
};

export default Stories;

const queryClient = new QueryClient();
const Template = args => (
  <QueryClientProvider client={queryClient}>
    <CommentList {...args} />
  </QueryClientProvider>
);

export const Default = Template.bind({});
