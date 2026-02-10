export interface MockTask {
  id: string;
  title: string;
  completed: boolean;
}

export const TASKS: MockTask[] = [
  {
    id: '1',
    title: 'Learn Angular Signals',
    completed: false,
  },
];
