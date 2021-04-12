import { User } from './models/User';

const user = User.buildUser({ id: 1 });
// user.attributes.set({ name: 'joe' });
// user.sync.save()
// user.fetch();
// console.log(user);

user.on('change', () => {
  console.log(123123);
});
// user.trigger('change');
user.set({
  name: 'test',
});
user.save();
