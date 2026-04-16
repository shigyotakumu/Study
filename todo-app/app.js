const SUPABASE_URL = 'https://amfxiwfmkrehvzqfcuoz.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_FKS0l7eLRijhfdw60OsSeQ_7bTENynW';

const { createClient } = supabase;
const client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

async function loadTodos() {
  const { data, error } = await client.from('todos').select('*').order('created_at', { ascending: true });
  if (error) { console.error(error); return; }
  list.innerHTML = '';
  data.forEach(renderTodo);
}

function renderTodo(todo) {
  const li = document.createElement('li');
  li.textContent = todo.task;

  const btn = document.createElement('button');
  btn.textContent = '削除';
  btn.onclick = () => deleteTodo(todo.id, li);

  li.appendChild(btn);
  list.appendChild(li);
}

async function deleteTodo(id, li) {
  const { error } = await client.from('todos').delete().eq('id', id);
  if (error) { console.error(error); return; }
  li.remove();
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const task = input.value.trim();
  if (!task) return;

  const { data, error } = await client.from('todos').insert({ task }).select().single();
  if (error) { console.error(error); return; }

  renderTodo(data);
  input.value = '';
});

loadTodos();
