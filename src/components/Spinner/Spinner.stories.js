import Spinner from './Spinner';

const Stories = {
  title: 'Spinner',
  component: Spinner,
  decorators: [
    Story => (
      <div style={{ position: 'relative', width: 20 }}>
        <Story />
      </div>
    ),
  ],
};

export default Stories;

const Template = args => <Spinner {...args} />;

export const Default = Template.bind({});
