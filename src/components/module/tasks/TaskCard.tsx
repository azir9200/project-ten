import { Button } from "@/components/ui/button";
import { CheckCheck, Trash } from "lucide-react";

const TaskCard = () => {
  return (
    <div className="border px-5 py-3 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div className="size-3 rounded-full bg-green-500"></div>
          <h1> Task Title</h1>
        </div>
        <div>
          <Button variant="link" className="p-0 text-2xl text-red-500">
            <Trash />
          </Button>
          <CheckCheck />
        </div>
      </div>
      <p className="mt-5">Task Description</p>
    </div>
  );
};

export default TaskCard;
