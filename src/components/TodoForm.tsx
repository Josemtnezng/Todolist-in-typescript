const TodoForm = () => {
return (
    <form className="flex mb-4">
        <input type = "text" placeholder="¿Qué necesitas hacer?"
        className="flex-grow p-2 rounded-l-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"/> 
        <button type ="submit" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-r-md font-bold">
            Añadir
        </button>
    </form>
    );
}; 

export default TodoForm;