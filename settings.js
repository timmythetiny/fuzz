const item_template = document.getElementById('list_item_template');
const dir_list = document.getElementById('dir_list');

function main() {
	// reset_storage();
	log_current_storage();
	const directories = JSON.parse(window.localStorage.getItem('directories'));
	for (const directory of directories) {
		insert_row(directory);
	}
}

function log_current_storage() {
	console.log(window.localStorage.getItem('directories'));
}

function reset_storage() {
	const content = ['/path/to/things', '/path/to/stuff'];
	window.localStorage.setItem('directories', JSON.stringify(content));
}

function commit_storage() {
	const directories = [];
	for (const child of dir_list.children) {
		directories.push(child.querySelector('input').value);
	}
	window.localStorage.setItem('directories', JSON.stringify(directories));
	go_back();
}

function insert_row(value) {
	const clone = document.importNode(item_template.content, true);
	const directory_input = clone.querySelector('input[name=directory]');
	const list_item = clone.querySelector('li');
	const remove_button = clone.querySelector('.remove_button');
	directory_input.value = value;
	remove_button.onclick = () => remove_item(list_item);
	dir_list.appendChild(clone);
}

function go_back() {
	window.history.back();
}

function remove_item(item) {
	item.parentNode.removeChild(item);
}

main();