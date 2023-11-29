const userData = [
  { name: 'suneel', email: 'suneel@gmail.com', bio: 'tester', gender: 'male' },
  { name: 'john', email: 'john@gmail.com', bio: 'developer', gender: 'male' },
  { name: 'emma', email: 'emma@gmail.com', bio: 'designer', gender: 'female' },
  { name: 'alex', email: 'alex@gmail.com', bio: 'analyst', gender: 'male' },
  { name: 'sara', email: 'sara@gmail.com', bio: 'engineer', gender: 'female' },
  { name: 'mike', email: 'mike@gmail.com', bio: 'manager', gender: 'male' },
  { name: 'lisa', email: 'lisa@gmail.com', bio: 'scientist', gender: 'female' },
  {
    name: 'david',
    email: 'david@gmail.com',
    bio: 'programmer',
    gender: 'male',
  },
  { name: 'alice', email: 'alice@gmail.com', bio: 'artist', gender: 'female' },
  { name: 'kevin', email: 'kevin@gmail.com', bio: 'writer', gender: 'male' },
];

export function fetchUsers() {
  try {
    return userData;
  } catch (error) {
    throw new Error(`Failed to fetch users: ${error}`);
  }
}

// export async function addUserApi(payload: User) {
//   try {
//     const response = await fetch('users', {
//       method: 'POST',
//       body: JSON.stringify(payload),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     // eslint-disable-next-line no-console
//     console.log(response);
//   } catch (error) {
//     throw new Error(`Failed to add users: ${error}`);
//   }
// }
