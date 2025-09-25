import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, DayTask, DiaryEntry, Product, CommunityPost } from '../types';
import { generateDayTasks } from '../data/dayTasks';

interface AppContextType {
  user: User | null;
  isAuthenticated: boolean;
  currentView: string;
  dayTasks: DayTask[];
  diaryEntries: DiaryEntry[];
  products: Product[];
  communityPosts: CommunityPost[];
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  setCurrentView: (view: string) => void;
  completeTask: (dayId: number, taskId: string) => void;
  addDiaryEntry: (entry: Omit<DiaryEntry, 'id'>) => void;
  addProduct: (product: Omit<Product, 'id'>) => void;
  addCommunityPost: (post: Omit<CommunityPost, 'id' | 'userId' | 'userName' | 'likes' | 'comments' | 'date'>) => void;
  updateUserProfile: (updates: Partial<User>) => void;
  addProgressPhoto: () => void;
  getAvailableDay: () => number;
  isDayAvailable: (dayNumber: number) => boolean;
  isDayCompleted: (dayNumber: number) => boolean;
  completeOnboarding: (answers: Record<string, string>) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentView, setCurrentView] = useState('dashboard');
  const [dayTasks, setDayTasks] = useState<DayTask[]>([]);
  const [diaryEntries, setDiaryEntries] = useState<DiaryEntry[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [communityPosts, setCommunityPosts] = useState<CommunityPost[]>([]);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Buscar usuários cadastrados no localStorage
      const registeredUsers = JSON.parse(localStorage.getItem('martha_users') || '[]');
      
      // Verificar se existe um usuário com email e senha correspondentes
      const user = registeredUsers.find((u: any) => u.email === email && u.password === password);
      
      if (user) {
        // Login bem-sucedido
        const loggedUser: User = {
          id: user.id,
          name: user.name,
          email: user.email,
          profileImage: user.profileImage || 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face&auto=format',
          hairType: user.hairType || 'nao-definido',
          currentDay: user.currentDay || 1,
          startDate: user.startDate,
          points: user.points || 0,
          badges: user.badges || [],
          completedTasks: user.completedTasks || [],
          progressPhotos: user.progressPhotos || 0,
          onboardingCompleted: user.onboardingCompleted || false,
          onboardingAnswers: user.onboardingAnswers || {}
        };

        setUser(loggedUser);
        setIsAuthenticated(true);
        setDayTasks(generateDayTasks());
        return true;
      } else {
        // Credenciais inválidas
        return false;
      }
    } catch (error) {
      console.error('Erro no login:', error);
      return false;
    }
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    try {
      // Buscar usuários existentes
      const existingUsers = JSON.parse(localStorage.getItem('martha_users') || '[]');
      
      // Verificar se o email já está cadastrado
      const emailExists = existingUsers.some((u: any) => u.email === email);
      
      if (emailExists) {
        throw new Error('Email já cadastrado');
      }

      const newUser = {
        id: Date.now().toString(),
        name,
        email,
        password, // Em produção, isso deveria ser hasheado
        profileImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face&auto=format',
        hairType: 'nao-definido',
        currentDay: 1,
        startDate: new Date().toISOString(),
        points: 0,
        badges: [],
        completedTasks: [],
        progressPhotos: 0,
        onboardingCompleted: false,
        onboardingAnswers: {}
      };

      // Salvar no localStorage
      const updatedUsers = [...existingUsers, newUser];
      localStorage.setItem('martha_users', JSON.stringify(updatedUsers));

      // Fazer login automático após cadastro
      const userForState: User = {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        hairType: newUser.hairType,
        currentDay: newUser.currentDay,
        startDate: newUser.startDate,
        points: newUser.points,
        badges: newUser.badges,
        completedTasks: newUser.completedTasks,
        progressPhotos: newUser.progressPhotos,
        onboardingCompleted: newUser.onboardingCompleted,
        onboardingAnswers: newUser.onboardingAnswers
      };

      setUser(userForState);
      setIsAuthenticated(true);
      setDayTasks(generateDayTasks());
      return true;
    } catch (error) {
      console.error('Erro no cadastro:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    setCurrentView('dashboard');
  };

  const checkAndAwardBadges = (updatedUser: User, updatedDayTasks: DayTask[], updatedPosts?: CommunityPost[]) => {
    const newBadges: string[] = [];

    // Primeira Semana - Complete 7 dias consecutivos
    if (updatedUser.currentDay >= 7 && !updatedUser.badges.includes('primeira-semana')) {
      newBadges.push('primeira-semana');
    }

    // Mestre da Hidratação - Complete 10 tarefas de hidratação
    const hidratacaoTasks = updatedDayTasks
      .filter(day => day.type === 'hidratacao')
      .reduce((acc, day) => acc + day.tasks.filter(task => task.completed).length, 0);
    
    if (hidratacaoTasks >= 10 && !updatedUser.badges.includes('hidratacao-mestre')) {
      newBadges.push('hidratacao-mestre');
    }

    // Jornada Completa - Complete todos os 30 dias
    if (updatedUser.currentDay >= 30 && !updatedUser.badges.includes('jornada-completa')) {
      newBadges.push('jornada-completa');
    }

    // Fotógrafo Capilar - Adicione 5 fotos
    const photoCount = updatedUser.progressPhotos || 0;
    if (photoCount >= 5 && !updatedUser.badges.includes('fotografo')) {
      newBadges.push('fotografo');
    }

    // Membro Ativo - Faça 5 posts na comunidade
    const postsToCheck = updatedPosts || communityPosts;
    if (postsToCheck.filter(post => post.userId === updatedUser.id).length >= 5 && 
        !updatedUser.badges.includes('comunidade-ativa')) {
      newBadges.push('comunidade-ativa');
    }

    return newBadges;
  };

  const completeTask = (dayId: number, taskId: string) => {
    const updatedDayTasks = dayTasks.map(day => 
      day.day === dayId 
        ? {
            ...day,
            tasks: day.tasks.map(task =>
              task.id === taskId ? { ...task, completed: true } : task
            )
          }
        : day
    );

    setDayTasks(updatedDayTasks);

    if (user) {
      const task = dayTasks.find(d => d.day === dayId)?.tasks.find(t => t.id === taskId);
      if (task) {
        const updatedUser = {
          ...user,
          points: user.points + task.points,
          completedTasks: [...user.completedTasks, taskId]
        };

        // Verificar se deve avançar para o próximo dia
        const dayData = updatedDayTasks.find(d => d.day === dayId);
        const allTasksCompleted = dayData?.tasks.every(t => t.completed) || false;
        
        if (allTasksCompleted && dayId === user.currentDay && user.currentDay < 30) {
          updatedUser.currentDay = user.currentDay + 1;
        }

        // Verificar conquistas
        const newBadges = checkAndAwardBadges(updatedUser, updatedDayTasks);
        if (newBadges.length > 0) {
          updatedUser.badges = [...updatedUser.badges, ...newBadges];
          updatedUser.points += newBadges.length * 50; // Bonus por conquista
        }

        setUser(updatedUser);

        // Atualizar no localStorage
        const existingUsers = JSON.parse(localStorage.getItem('martha_users') || '[]');
        const userIndex = existingUsers.findIndex((u: any) => u.id === user.id);
        
        if (userIndex !== -1) {
          existingUsers[userIndex] = updatedUser;
          localStorage.setItem('martha_users', JSON.stringify(existingUsers));
        }
      }
    }
  };

  const addDiaryEntry = (entry: Omit<DiaryEntry, 'id'>) => {
    const newEntry: DiaryEntry = {
      ...entry,
      id: Date.now().toString()
    };
    setDiaryEntries(prev => [newEntry, ...prev]);
  };

  const addProduct = (product: Omit<Product, 'id'>) => {
    const newProduct: Product = {
      ...product,
      id: Date.now().toString()
    };
    setProducts(prev => [newProduct, ...prev]);
  };

  const addCommunityPost = (post: Omit<CommunityPost, 'id' | 'userId' | 'userName' | 'likes' | 'comments' | 'date'>) => {
    if (!user) return;
    
    const newPost: CommunityPost = {
      ...post,
      id: Date.now().toString(),
      userId: user.id,
      userName: user.name,
      likes: 0,
      comments: [],
      date: new Date().toISOString()
    };
    
    const updatedPosts = [newPost, ...communityPosts];
    setCommunityPosts(updatedPosts);
    
    // Atualizar pontos do usuário e verificar conquistas
    const updatedUser = {
      ...user,
      points: user.points + 15 // Bonus por post na comunidade
    };
    
    // Verificar conquistas com os posts atualizados
    const newBadges = checkAndAwardBadges(updatedUser, dayTasks, updatedPosts);
    if (newBadges.length > 0) {
      updatedUser.badges = [...updatedUser.badges, ...newBadges];
      updatedUser.points += newBadges.length * 50; // Bonus por conquista
    }
    
    setUser(updatedUser);
    
    // Atualizar no localStorage
    const existingUsers = JSON.parse(localStorage.getItem('martha_users') || '[]');
    const userIndex = existingUsers.findIndex((u: any) => u.id === user.id);
    
    if (userIndex !== -1) {
      existingUsers[userIndex] = updatedUser;
      localStorage.setItem('martha_users', JSON.stringify(existingUsers));
    }
  };

  const updateUserProfile = (updates: Partial<User>) => {
    setUser(prev => {
      if (!prev) return null;
      
      const updatedUser = { ...prev, ...updates };
      
      // Atualizar no localStorage
      const existingUsers = JSON.parse(localStorage.getItem('martha_users') || '[]');
      const userIndex = existingUsers.findIndex((u: any) => u.id === prev.id);
      
      if (userIndex !== -1) {
        existingUsers[userIndex] = updatedUser;
        localStorage.setItem('martha_users', JSON.stringify(existingUsers));
      }
      
      return updatedUser;
    });
  };

  const addProgressPhoto = () => {
    if (!user) return;

    const updatedUser = {
      ...user,
      progressPhotos: (user.progressPhotos || 0) + 1,
      points: user.points + 10 // Bonus por adicionar foto
    };

    // Verificar conquistas
    const newBadges = checkAndAwardBadges(updatedUser, dayTasks);
    if (newBadges.length > 0) {
      updatedUser.badges = [...updatedUser.badges, ...newBadges];
      updatedUser.points += newBadges.length * 50; // Bonus por conquista
    }

    setUser(updatedUser);

    // Atualizar no localStorage
    const existingUsers = JSON.parse(localStorage.getItem('martha_users') || '[]');
    const userIndex = existingUsers.findIndex((u: any) => u.id === user.id);
    
    if (userIndex !== -1) {
      existingUsers[userIndex] = updatedUser;
      localStorage.setItem('martha_users', JSON.stringify(existingUsers));
    }
  };

  // Função para calcular qual dia está disponível baseado na data de início
  const getAvailableDay = (): number => {
    if (!user || !user.startDate) return 1;
    
    const startDate = new Date(user.startDate);
    const currentDate = new Date();
    
    // Calcular a diferença em dias
    const timeDiff = currentDate.getTime() - startDate.getTime();
    const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
    
    // O dia disponível é o dia seguinte ao número de dias passados (mínimo 1, máximo 30)
    const availableDay = Math.min(Math.max(daysDiff + 1, 1), 30);
    
    return availableDay;
  };

  // Função para verificar se um dia específico está disponível
  const isDayAvailable = (dayNumber: number): boolean => {
    const availableDay = getAvailableDay();
    return dayNumber <= availableDay;
  };

  // Função para verificar se um dia foi completado
  const isDayCompleted = (dayNumber: number): boolean => {
    if (!user) return false;
    
    const dayTask = dayTasks.find(task => task.day === dayNumber);
    if (!dayTask) return false;
    
    // Verificar se todas as tarefas do dia foram completadas
    return dayTask.tasks.every(task => task.completed);
  };

  // Função para completar o onboarding
  const completeOnboarding = (answers: Record<string, string>) => {
    if (!user) return;

    const updatedUser: User = {
      ...user,
      onboardingCompleted: true,
      onboardingAnswers: {
        hairType: answers.hairType,
        hairNeeds: answers.hairNeeds,
        washFrequency: answers.washFrequency,
        hairLength: answers.hairLength,
        hairDamage: answers.hairDamage,
        experience: answers.experience
      }
    };

    setUser(updatedUser);

    // Atualizar no localStorage
    const registeredUsers = JSON.parse(localStorage.getItem('martha_users') || '[]');
    const updatedUsers = registeredUsers.map((u: any) => 
      u.id === user.id ? { ...u, onboardingCompleted: true, onboardingAnswers: updatedUser.onboardingAnswers } : u
    );
    localStorage.setItem('martha_users', JSON.stringify(updatedUsers));
  };

  return (
    <AppContext.Provider value={{
      user,
      isAuthenticated,
      currentView,
      dayTasks,
      diaryEntries,
      products,
      communityPosts,
      login,
      register,
      logout,
      setCurrentView,
      completeTask,
      addDiaryEntry,
      addProduct,
      addCommunityPost,
      updateUserProfile,
      addProgressPhoto,
      getAvailableDay,
      isDayAvailable,
      isDayCompleted,
      completeOnboarding
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}