import axios from 'axios';
import { ApiResponse } from '../types';

// URL de la API de Bob
const API_URL = 'https://bobweb.onrender.com';

/**
 * Envía un mensaje al chat de Bob
 * @param message Mensaje del usuario
 * @param sessionId ID de la sesión (opcional)
 * @returns Respuesta de la API
 */
export const sendMessage = async (message: string, sessionId?: string): Promise<ApiResponse> => {
  try {
    const response = await axios.post(`${API_URL}/chat`, {
      message,
      session_id: sessionId || 'default'
    });
    
    return response.data;
  } catch (error) {
    console.error('Error al enviar mensaje:', error);
    throw new Error('No se pudo conectar con Bob. Por favor, intenta de nuevo más tarde.');
  }
};

/**
 * Reinicia una sesión de chat
 * @param sessionId ID de la sesión a reiniciar
 * @returns Mensaje de confirmación
 */
export const resetSession = async (sessionId: string = 'default'): Promise<{ message: string }> => {
  try {
    const response = await axios.post(`${API_URL}/reset`, {
      session_id: sessionId
    });
    
    return response.data;
  } catch (error) {
    console.error('Error al reiniciar sesión:', error);
    throw new Error('No se pudo reiniciar la sesión. Por favor, intenta de nuevo más tarde.');
  }
};

/**
 * Verifica el estado del servicio
 * @returns Estado del servicio
 */
export const checkHealth = async (): Promise<{ status: string }> => {
  try {
    const response = await axios.get(`${API_URL}/health`);
    return response.data;
  } catch (error) {
    console.error('Error al verificar estado del servicio:', error);
    throw new Error('No se pudo verificar el estado del servicio.');
  }
};