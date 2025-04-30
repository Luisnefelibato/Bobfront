// Definición de tipos para la aplicación

// Interfaz para los mensajes del chat
export interface ChatMessage {
    id: string;
    content: string;
    sender: 'user' | 'bot';
    timestamp: Date;
  }
  
  // Interfaz para la sesión de chat
  export interface ChatSession {
    id: string;
    messages: ChatMessage[];
  }
  
  // Interfaz para la respuesta de la API
  export interface ApiResponse {
    response: string;
    session_id: string;
  }
  
  // Interfaz para el estado del chat
  export interface ChatState {
    messages: ChatMessage[];
    isLoading: boolean;
    error: string | null;
    sessionId: string;
  }
  
  // Interfaz para las características que mostramos en la landing page
  export interface Feature {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
  }