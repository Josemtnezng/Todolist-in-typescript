const TodoItem = () => {
  // Estos son datos falsos por ahora
  const fakeTodo = { text: 'Diseñar el componente de tarea', completed: false };

  return (
    <div className="flex items-center justify-between bg-gray-800 p-3 rounded-md mb-2">
      <div className="flex items-center gap-3">
        <input type="checkbox" className="h-5 w-5" />
        <p>{fakeTodo.text}</p>
      </div>
      <button className="text-red-500 hover:text-red-700 font-bold">
        X
      </button>
    </div>
  );
};

export default TodoItem;

