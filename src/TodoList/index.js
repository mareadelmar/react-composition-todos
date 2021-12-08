import React from "react";
import "./TodoList.css";

function TodoList(props) {
	return (
		<section>
			{props.error && props.onError()}
			{props.loading && props.onLoading()}

			{!props.loading && !props.totalTodos && props.onEmptyTodos()}

			{!!props.totalTodos &&
				!props.searchedTodos.length &&
				props.onEmptySearchResult(props.searchKeyword)}

			{!props.loading &&
				props.searchedTodos.map(
					todo => props.render(todo) || props.children(todo)
				)}

			<ul>{props.children}</ul>
		</section>
	);
}

export { TodoList };
