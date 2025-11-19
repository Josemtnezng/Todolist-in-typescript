interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const itemBaseClasses = "flex items-center justify-between p-4 rounded-xl mb-3 transition duration-300 ease-in-out shadow-md";
  
  const completedClasses = "bg-gray-800 border-l-4 border-fuchsia-500 opacity-75";
  const pendingClasses = "bg-gray-700 hover:bg-gray-600 border-l-4 border-cyan-500";

  const textClasses = todo.completed ? 'line-through text-gray-400' : 'text-gray-100';

  const checkboxClasses = `h-5 w-5 rounded-full cursor-pointer appearance-none border-2 transition duration-300 
    ${todo.completed 
        ? 'bg-fuchsia-500 border-fuchsia-500 checked:bg-fuchsia-500' 
        : 'bg-gray-600 border-cyan-400 checked:bg-cyan-500 focus:ring-2 focus:ring-cyan-500'}`;

  const deleteButtonClasses = "text-fuchsia-400 hover:text-fuchsia-300 font-extrabold text-xl p-1 transition duration-300";

  return (
    <div className={`${itemBaseClasses} ${todo.completed ? completedClasses : pendingClasses}`}>
      <div className="flex items-center gap-4">
        <input 
          type="checkbox" 
          defaultChecked={todo.completed}
          className={checkboxClasses}
        />
        <p className={`text-lg ${textClasses}`}>
          {todo.text}
        </p>
      </div>
      <button className={deleteButtonClasses}>
        X
      </button>
    </div>
  );
};

export default TodoItem;
