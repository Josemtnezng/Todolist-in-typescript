import TodoItem from './TodoItem';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList = () => {
  const fakeTodos: Todo[] = [
    { id: 1, text: 'Diseñar el componente con estilo Neon', completed: false },
    { id: 2, text: 'Añadir la animación de "glow" al botón', completed: true },
    { id: 3, text: 'Aprender más de Tailwind CSS', completed: false },
  ];

  return (
    <div>
      {fakeTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;