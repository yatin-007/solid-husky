import { For, createSignal } from 'solid-js';
import { Box } from '@suid/material';

import { Button, Card } from '../../components';
import { AddBlog } from './components/AddBlog';

const blogData = [
  {
    title: 'Risk of Rain Returns is Remarkable!',
    description:
      'Introduction In the ever-evolving landscape of web development',
  },
  {
    title: '10 Best Practices in Front-end Development (React)',
    description: 'Another blog description.',
  },
  {
    title: '10 Best Practices in Front-end Development (React)',
    description: 'A third blog entry.',
  },
  {
    title: '10 Best Practices in Front-end Development (React)',
    description: 'Yet another blog post.',
  },
  {
    title: 'Risk of Rain Returns is Remarkable!',
    description: 'The fifth blog in the series.',
  },
  {
    title: 'Risk of Rain Returns is Remarkable!',
    description: 'The fifth blog in the series.',
  },
];

const Blogs = () => {
  const [isOpen, setIsOpen] = createSignal(false);

  const handleAddBlog = () => {
    setIsOpen(true);
  };

  return (
    <Box class="h-fit min-h-[70%] bg-white px-4 py-2 border-b rounded-lg border-gray-200">
      <Box
        sx={{
          position: 'sticky',
          top: '-16px',
          zIndex: 999,
          background: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          '& button': {
            m: 1,
            borderRadius: 5,
            p: '5px 20px',
            '&:hover': { background: '#1B98F5', color: 'white' },
          },
        }}
      >
        <h2 style={{ 'font-weight': 600, 'font-size': '20px' }}>Blogs</h2>
        <Button onClick={handleAddBlog} variant="outlined" label={'Add Blog'} />
      </Box>
      <For each={blogData}>
        {(item) => <Card title={item.title} description={item.description} />}
      </For>

      {isOpen() && (
        <AddBlog title="Add Blogs" isOpen={isOpen()} setIsOpen={setIsOpen} />
      )}
    </Box>
  );
};
export default Blogs;
