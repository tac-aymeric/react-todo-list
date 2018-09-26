import axios from 'axios';
import { TODOS_ENDPOINT } from './consts';

export async function create(todoContent) {
  const {data: todo} = await axios.post(TODOS_ENDPOINT, {
    content: todoContent
  });
  return todo;
}

export async function update(id, newTodo) {
  const {data: todo} = await axios.put(`${TODOS_ENDPOINT}/${id}`, newTodo);
  return todo;
}

export async function retrieve() {
  const {data: todos} = await axios.get(TODOS_ENDPOINT);
  return todos;
}
