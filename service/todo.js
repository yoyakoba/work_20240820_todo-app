const baseUrl = process.env.AUTH0_BASE_URL;
const BASE_URL = `${baseUrl}/todos`;

const getTasks = async () => {
  const response = await fetch(BASE_URL);
  return await response.json();
};

const addTodo = async (task) => {
  await fetch(`${BASE_URL}/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });
};

const updateTodo = async (id, task) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });
};

const deleteTodo = async (id) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });
};

export { getTasks, addTodo, updateTodo, deleteTodo };

