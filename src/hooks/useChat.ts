import { useState, useEffect, useCallback } from 'react';
import { ChatMessage, ChatState } from '../types';
import { sendMessage, resetSession } from '../services/api';
import { v4 as uuidv4 } from 'uuid';

// Hook personalizado para gestionar la lógica del chat
export const useChat = () => {
  // Estado inicial del chat
  const initialState: ChatState = {
    messages: [],
    isLoading: false,
    error: null,
    sessionId: localStorage.getItem('chatSessionId') || 'default'
  };

  const [state, setState] = useState<ChatState>(initialState);

  // Cargar mensajes guardados al iniciar
  useEffect(() => {
    const savedMessages = localStorage.getItem('chatMessages');
    if (savedMessages) {
      setState(prevState => ({
        ...prevState,
        messages: JSON.parse(savedMessages)
      }));
    }
  }, []);

  // Guardar mensajes cuando cambian
  useEffect(() => {
    if (state.messages.length > 0) {
      localStorage.setItem('chatMessages', JSON.stringify(state.messages));
    }
  }, [state.messages]);

  // Guardar sessionId cuando cambia
  useEffect(() => {
    localStorage.setItem('chatSessionId', state.sessionId);
  }, [state.sessionId]);

  // Función para enviar un mensaje
  const sendUserMessage = useCallback(async (content: string) => {
    if (!content.trim()) return;

    // Crear mensaje del usuario
    const userMessage: ChatMessage = {
      id: uuidv4(),
      content,
      sender: 'user',
      timestamp: new Date()
    };

    // Actualizar estado con el mensaje del usuario
    setState(prevState => ({
      ...prevState,
      messages: [...prevState.messages, userMessage],
      isLoading: true,
      error: null
    }));

    try {
      // Enviar mensaje a la API
      const response = await sendMessage(content, state.sessionId);

      // Crear mensaje de respuesta del bot
      const botMessage: ChatMessage = {
        id: uuidv4(),
        content: response.response,
        sender: 'bot',
        timestamp: new Date()
      };

      // Actualizar estado con la respuesta del bot
      setState(prevState => ({
        ...prevState,
        messages: [...prevState.messages, botMessage],
        isLoading: false,
        sessionId: response.session_id
      }));
    } catch (error) {
      setState(prevState => ({
        ...prevState,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Error desconocido'
      }));
    }
  }, [state.sessionId]);

  // Función para limpiar el chat
  const clearChat = useCallback(async () => {
    try {
      // Reiniciar sesión en el servidor
      await resetSession(state.sessionId);
      
      // Limpiar mensajes locales
      setState({
        messages: [],
        isLoading: false,
        error: null,
        sessionId: 'default'
      });
      
      // Limpiar storage
      localStorage.removeItem('chatMessages');
      localStorage.setItem('chatSessionId', 'default');
    } catch (error) {
      setState(prevState => ({
        ...prevState,
        error: error instanceof Error ? error.message : 'Error al limpiar el chat'
      }));
    }
  }, [state.sessionId]);

  return {
    messages: state.messages,
    isLoading: state.isLoading,
    error: state.error,
    sessionId: state.sessionId,
    sendMessage: sendUserMessage,
    clearChat
  };
};

export default useChat;