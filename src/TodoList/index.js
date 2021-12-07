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

			<ul>{props.searchedTodos.map(todo => props.render(todo))}</ul>
		</section>
	);
}

export { TodoList };
