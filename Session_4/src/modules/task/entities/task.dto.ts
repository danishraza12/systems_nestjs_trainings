export interface TaskDTO {
  id: number;
  title: String;
  description: String;
  status: String;
  dueDate: String;
  createdAt: String;
  updatedAt: String;
}

export interface TaskFilterDTO {
  status: String;
  dueDate: String;
  startDate: String;
  endDate: String;
}