export interface User {
  id: string;
  name: string;
  email: string;
  profileImage?: string;
  hairType: string;
  currentDay: number;
  startDate: string;
  points: number;
  badges: string[];
  completedTasks: string[];
  progressPhotos: number;
}

export interface DayTask {
  id: string;
  day: number;
  title: string;
  tasks: Task[];
  tip: string;
  type: 'hidratacao' | 'nutricao' | 'reconstrucao' | 'limpeza' | 'descanso';
}

export interface Task {
  id: string;
  description: string;
  completed: boolean;
  points: number;
}

export interface DiaryEntry {
  id: string;
  date: string;
  content: string;
  mood: 'excelente' | 'bom' | 'regular' | 'ruim';
  images?: string[]; // Array de imagens em base64
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: 'shampoo' | 'condicionador' | 'mascara' | 'leave-in' | 'oleo';
  rating: number;
  notes?: string;
}

export interface CommunityPost {
  id: string;
  userId: string;
  userName: string;
  content: string;
  image?: string;
  likes: number;
  comments: Comment[];
  date: string;
}

export interface Comment {
  id: string;
  userId: string;
  userName: string;
  content: string;
  date: string;
}