// https://jsonplaceholder.typicode.com/todos/1

import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((res) => {
  const { id, title, completed }: Todo = res.data;
  console.log('working!');
  logTodo(id, title, completed)
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The todo with Id: ${id}
    the title is: ${title}
    it is ${completed ? '' : 'not'} completed!
  `);
};
