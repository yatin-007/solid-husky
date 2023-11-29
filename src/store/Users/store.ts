import { createStore, produce } from 'solid-js/store';

import { User } from './types';
import { fetchUsers } from './services';

type UserState = {
  users: User[];
  isLoading: boolean;
  isError: boolean;
};

const [userStore, setUserStore] = createStore<UserState>({
  users: [],
  isLoading: true,
  isError: false,
});

async function fetchAndSetUsers() {
  try {
    const usersResponse: User[] = await fetchUsers();

    setUserStore(
      produce((draft) => {
        (draft.users = usersResponse), (draft.isLoading = false);
      }),
    );
  } catch (error) {
    setUserStore(
      produce((draft) => {
        (draft.isLoading = false), (draft.isError = true);
      }),
    );
  }
}

// async function addUsers(payload: User) {
//   try {
//     await addUserApi(payload);
//   } catch (error) {}
// }

export { userStore, fetchAndSetUsers };
