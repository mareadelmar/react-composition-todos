import React from "react";
import { useTodos } from "./useTodos";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";
import { TodoForm } from "../TodoForm";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoHeader } from "../TodoHeader";

function App() {
	const {
		error,
		loading,
		searchedTodos,
		completeTodo,
		deleteTodo,
		openModal,
		setOpenModal,
		completedTodos,
		totalTodos,
		searchValue,
		setSearchValue,
		addTodo,
	} = useTodos();

	return (
		<React.Fragment>
			<TodoHeader loading={loading}>
				<TodoCounter
					totalTodos={totalTodos}
					completedTodos={completedTodos}
					//loading={loading}
				/>
				<TodoSearch
					searchValue={searchValue}
					setSearchValue={setSearchValue}
					//loading={loading}
				/>
			</TodoHeader>

			<TodoList
				error={error}
				loading={loading}
				searchedTodos={searchedTodos}
				totalTodos={totalTodos}
				searchKeyword={searchValue}
				onError={() => <TodosError />}
				onLoading={() => <TodosLoading />}
				onEmptyTodos={() => <EmptyTodos />}
				onEmptySearchResult={keyword => (
					<p>No hay resultados de búsqueda para {keyword}</p>
				)}
				render={todo => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
						onComplete={() => completeTodo(todo.text)}
						onDelete={() => deleteTodo(todo.text)}
					/>
				)}
			>
				{todo => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
						onComplete={() => completeTodo(todo.text)}
						onDelete={() => deleteTodo(todo.text)}
					/>
				)}
			</TodoList>

			{!!openModal && (
				<Modal>
					<TodoForm setOpenModal={setOpenModal} addTodo={addTodo} />
				</Modal>
			)}

			<CreateTodoButton setOpenModal={setOpenModal} addTodo={addTodo} />
		</React.Fragment>
	);
}

export default App;
