// Supabase接続情報
const SUPABASE_URL = 'https://amfxiwfmkrehvzqfcuoz.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_FKS0l7eLRijhfdw60OsSeQ_7bTENynW';

// Supabaseクライアントを初期化
const { createClient } = supabase;
const client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 画面要素を取得
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

// Todo一覧をDBから読み込み、画面に描画
async function loadTodos() {
  const { data, error } = await client.from('todos').select('*').order('created_at', { ascending: true });
  if (error) { console.error(error); return; }
  list.innerHTML = '';
  data.forEach(renderTodo);
}

// 1件分のTodo要素を作ってリストに追加
function renderTodo(todo) {
  const li = document.createElement('li');
  li.textContent = todo.task;

  // 削除ボタンを作成して、対象Todoの削除処理に紐づけ
  const btn = document.createElement('button');
  btn.textContent = '削除';
  btn.onclick = () => deleteTodo(todo.id, li);

  li.appendChild(btn);
  list.appendChild(li);
}

// TodoをDBから削除し、成功したら画面からも削除
async function deleteTodo(id, li) {
  const { error } = await client.from('todos').delete().eq('id', id);
  if (error) { console.error(error); return; }
  li.remove();
}

// フォーム送信時に新規Todoを追加
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const task = input.value.trim();
  if (!task) return;

  // DBへ追加して、返ってきたデータを即時描画
  const { data, error } = await client.from('todos').insert({ task }).select().single();
  if (error) { console.error(error); return; }

  renderTodo(data);
  input.value = '';
});

// 初期表示時にTodo一覧を読み込む
loadTodos();
