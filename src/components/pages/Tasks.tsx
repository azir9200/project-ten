import { useAppSelector } from "@/redux/hook";
import TaskCard from "../module/tasks/TaskCard";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { AddTaskModal } from "../module/modal/AddTaskModal";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);
  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-center items-center ">
        <h1>Tasks</h1>
        <AddTaskModal />
      </div>
      <p>Task page is here</p>
      <div className="space-y-5 mt-5">
        {tasks.map((task) => (
          <TaskCard task={task} id={task.id} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
