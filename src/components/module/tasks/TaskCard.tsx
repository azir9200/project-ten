import type { ITask } from "@/components/interface/Type";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCheck, Trash2 } from "lucide-react";

interface IProps {
  task: ITask;
}

const TaskCard = ({ task }: IProps) => {
  return (
    <div className="border px-5 py-3 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div
            className={cn("size-3 rounded-full bg-green-500", {
              "bg-green-500": task.priority === "low",
              "bg-yellow-400": task.priority === "medium",
              "bg-red-500": task.priority === "high",
            })}
          ></div>
          <h1> {task.title}</h1>
        </div>
        <div className="flex gap-3 items-center ">
          <Button variant="link" className="p-0 text-2xl text-red-500">
            <Trash2 />
          </Button>
          <CheckCheck />
        </div>
      </div>
      <p className="mt-5"> {task.description} </p>
    </div>
  );
};

export default TaskCard;
