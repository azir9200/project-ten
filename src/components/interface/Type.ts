export interface ITask {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  isComplete: "false";
  priority: "high" | "medium" | "low";
}
