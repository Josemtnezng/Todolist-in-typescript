import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


function App(){
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center pt-10 text-white">
      <h1 className='text-4xl font bold mb-6'>Mi Todo List</h1>
      <div className="w-full max-w-md">
        <TodoForm/ >
         <TodoList/ >
         </div>
    </div>
  )
}
export default App;

