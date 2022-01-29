function App() {
    const [todos, setTodos] = React.useState([
        {
            text: 'Love Michele',
            isCompleted: false
        },
        {
            text: 'Meet Thayen lunch',
            isCompleted: false
        },
        {
            text: 'Build a bird nest',
            isCompleted: false
        }

    ]);

    const addTodo = text => {
        const newTodos = [...todos, { text: text, isCompleted: false }];
        setTodos(newTodos);
    }


    // Handle removing item
    const removeTodo = index => {
        // Get a handle on the current list
        let temp = [...todos];

        // Remove the item selected/clicked on
        temp.splice(index, 1);
        setTodos(temp);
    }

    return (<>
        <div className="app">
            <div className="todo-list">
                {todos.map((todo, i) => <Todo todo={todo} index={i} remove={removeTodo} key={i} />)}
                <TodoForm addToDo={addTodo} />
            </div>
        </div>
    </>);
}

ReactDOM.render(
    <App />,
    document.getElementById('root')

)