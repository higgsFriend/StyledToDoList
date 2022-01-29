function TodoForm({addToDo}) {
    // Add another item to the list
    const [value, setValue] = React.useState('');

    // Handle the addition of an new item
    const handleSubmit = e => {
        // Prevent page reload
        e.preventDefault();
        if (!value) return;
        // Make a new list with the new value
        addToDo(value);

        // Clear the value so we can add another
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                placeholder="Add Todo ..."
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
}