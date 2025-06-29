
import TaskCard from "../module/tasks/TaskCard";

const Tasks = () => {
  // const tasks = useAppSelector();
  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div>
        <h1>Tasks</h1>
      </div>
      <p>Task page is here</p>
      <div className="space-y-5 mt-5">
        {/* {tasks.map((tasks)=>(
 <TaskCard />
        ))} */}

        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
};

export default Tasks;
