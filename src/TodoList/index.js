import React from "react";
import "./TodoList.css";

function TodoList(props) {
	return (
		<section>
			{props.error && props.onError()}
			{props.loading && props.onLoading()}

			{!props.loading &&
				!props.searchedTodos.length &&
				props.onEmptyTodos()}

			<ul>{props.searchedTodos.map(todo => props.render(todo))}</ul>
		</section>
	);
}

export { TodoList };
