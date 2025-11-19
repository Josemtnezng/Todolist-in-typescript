const TodoForm = () => {
return (
    <form className="flex mb-6 space-x-2 rounded-xl overflow-hidden shadow-lg shadow-gray-700/30"> 
        <input type = "text" placeholder="¿Qué necesitas hacer?"
        className="flex-grow p-3 text-gray-200 bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:bg-gray-600 transition duration-300 border-none"/> 
        <button type ="submit"
        className="bg-cyan-600 hover:bg-cyan-500 p-3 font-bold text-gray-900 hover:shadow-lg hover:shadow-cyan-500/50 transition duration-300 whitespace-nowrap">
            Añadir
        </button>
    </form>
    );
}; 

export default TodoForm;