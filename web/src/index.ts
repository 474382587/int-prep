import { UserList } from './views/UserList';
import { UserEdit } from './views/UserEdit';
import { User } from './models/User';
import { UserForm } from './views/UserForm';

const root = document.getElementById('root');
// if (!root) {
//   throw new Error('no root element');
// } else {
//   const userForm = new UserEdit(
//     root,
//     User.buildUser({ name: 'joseph', age: 20 })
//   );
//   userForm.render();
//   console.log(userForm);
// }

if (root) {
  const userCollection = User.buildUserCollection();
  userCollection.fetch();
  userCollection.on('change', () => {
    const userList = new UserList(root, userCollection);
    userList.render();
  });
}
