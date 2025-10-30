export interface Assignment {
  id: string;
  title: string;
  dueDate: string;
  description: string;
  completed: boolean;
}

const STORAGE_KEY = 'assignments';

export const getAssignments = (): Assignment[] => {
  if (typeof window === 'undefined') {
    return [];
  }
  const assignmentsJson = localStorage.getItem(STORAGE_KEY);
  return assignmentsJson ? JSON.parse(assignmentsJson) : [];
};

export const addAssignment = (assignment: Omit<Assignment, 'id' | 'completed'>): Assignment => {
  if (typeof window === 'undefined') {
    return { ...assignment, id: Date.now().toString(), completed: false };
  }
  const assignments = getAssignments();
  const newAssignment: Assignment = {
    id: Date.now().toString(),
    completed: false,
    ...assignment,
  };
  assignments.push(newAssignment);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(assignments));
  return newAssignment;
};

export const updateAssignmentStatus = (id: string, completed: boolean): Assignment | undefined => {
  if (typeof window === 'undefined') {
    return undefined;
  }
  const assignments = getAssignments();
  const assignmentIndex = assignments.findIndex(a => a.id === id);
  if (assignmentIndex > -1) {
    assignments[assignmentIndex].completed = completed;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(assignments));
    return assignments[assignmentIndex];
  }
  return undefined;
};
