import Todo_chap from './todo_chap';
import Todo_ong from './todo_ong';


function Project() {
	return (
        <div className="w-[100%] flex items-center">

        <Todo_chap />
        <Todo_ong />
    </div>
	);
}

export default Project;
