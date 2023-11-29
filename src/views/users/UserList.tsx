import { createEffect } from 'solid-js';
import { Box } from '@suid/material';

import { fetchAndSetUsers, userStore } from '../../store/Users/store';
import { User } from '../../store';
import { Button, CustomizedTable } from '../../components';

const UserList = () => {
  createEffect(async () => {
    await fetchAndSetUsers();
  });

  const columns = [
    {
      name: 'Name',
      key: 'name',
      renderCell: (rowItem: User) => rowItem.name,
      textAlign: 'left',
    },
    {
      name: 'Email',
      key: 'email',
      renderCell: (rowItem: User) => (
        <p style={{ 'text-transform': 'lowercase' }}>{rowItem.email}</p>
      ),
      textAlign: 'center',
    },
    {
      name: 'Bio',
      key: 'bio',
      renderCell: (rowItem: User) => rowItem.bio,
      textAlign: 'center',
    },
    {
      name: 'Gender',
      key: 'gender',
      renderCell: (rowItem: User) => rowItem.gender,
      textAlign: 'right',
    },
  ];
  const handleAdduser = () => {
    // eslint-disable-next-line no-console
    console.log('Add User');
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
          marginBottom: '10px',
          '& button': {
            m: 1,
            borderRadius: 5,
            p: '5px 20px',
            '&:hover': { background: '#1B98F5', color: 'white' },
          },
        }}
      >
        <h2 style={{ 'font-weight': 600, 'font-size': '20px' }}>Users</h2>
        <Button onClick={handleAdduser} variant="outlined" label={'Add User'} />
      </Box>
      <CustomizedTable column={columns} rows={userStore.users} />
    </Box>
  );
};

export default UserList;
