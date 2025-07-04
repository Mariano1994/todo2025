export enum TaskState {
  Creating = "creating",
  Created = "created",
}

export interface Task {
  id: string;
  title: string;
  concluded: boolean;
  satate: TaskState;
}
