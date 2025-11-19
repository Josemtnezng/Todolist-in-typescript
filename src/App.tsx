import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App(){
  return (
    <div className="bg-gray-950 min-h-screen flex flex-col items-center pt-12 text-gray-200">
      <h1 className='text-5xl font-extrabold mb-10 tracking-wider text-cyan-400 drop-shadow-lg shadow-cyan-500/50'>
         Mi Todo List 🚀
      </h1>
      <div className="w-full max-w-lg p-6 bg-gray-800 rounded-2xl shadow-2xl shadow-indigo-900/50">
        <TodoForm/ >
         <TodoList/ >
         </div>
    </div>
  )
}
export default App;
