// TODOを追加する関数
const addTodo = () => {
    const todoInput = document.querySelector('#todo');
    const todoText = todoInput.value.trim();
    if (todoText === '') {
        alert('TODOを入力してください。');
        return;
    }

    const li = document.createElement('li');
    li.className = 'incomplete-list';
    li.innerHTML = `
        <span>${todoText}</span>
        <input class="incomplete-button" type="button" value="完了">
        <input class="incomplete-button" type="button" value="削除">
    `;

    document.querySelector('.incomplete-lists').appendChild(li);
    todoInput.value = '';
    // ↓これは削除機能と完了機能を追加してから追記
    addIncompleteEventListeners(li);
}

// TODOを削除する関数
const deleteTodo = () => {
    const li = this.parentNode;
    li.parentNode.removeChild(li);
}

// TODOを完了にする関数
const completeTodo = () => {
    const li = this.parentNode;
    li.className = 'complete-list';
    li.innerHTML = `
        <span>${li.querySelector('span').textContent}</span>
        <input class="complete-button" type="button" value="戻す">
        <input class="complete-button" type="button" value="削除">
    `;
    document.querySelector('.complete-lists').appendChild(li);
    // ↓これも後ででいいかもしれない
    addCompleteEventListeners(li);
}

// TODOを未完了に戻す関数
const revertTodo = () => {
    const li = this.parentNode;
    li.className = 'incomplete-list';
    li.innerHTML = `
        <span>${li.querySelector('span').textContent}</span>
        <input class="incomplete-button" type="button" value="完了">
        <input class="incomplete-button" type="button" value="削除">
    `;
    document.querySelector('.incomplete-lists').appendChild(li);
    addIncompleteEventListeners(li);
}

// 未完了のTODOアイテムにイベントリスナーを追加する関数
const addIncompleteEventListeners = (li) => {
    const completeButton = li.querySelector('.incomplete-button[value="完了"]');
    const deleteButton = li.querySelector('.incomplete-button[value="削除"]');

    if (completeButton) completeButton.addEventListener('click', completeTodo);
    if (deleteButton) deleteButton.addEventListener('click', deleteTodo);
}

// 完了のTODOアイテムにイベントリスナーを追加する関数
const addCompleteEventListeners = (li) => {
    const revertButton = li.querySelector('.complete-button[value="戻す"]');
    const deleteButton = li.querySelector('.complete-button[value="削除"]');

    if (revertButton) revertButton.addEventListener('click', revertTodo);
    if (deleteButton) deleteButton.addEventListener('click', deleteTodo);
}

// 初期化：既存のTODOアイテムにイベントリスナーを追加
document.querySelectorAll('.incomplete-list').forEach(addIncompleteEventListeners);
document.querySelectorAll('.complete-list').forEach(addCompleteEventListeners);

// TODO追加ボタンにイベントリスナーを追加
document.querySelector('.todo-button').addEventListener('click', addTodo);
