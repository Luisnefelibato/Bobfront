import { useState, useRef, useEffect } from 'react';
import useChat from '../../hooks/useChat';
import ChatBubble from './ChatBubble';
import ChatInput from './ChatInput';
import '../../styles/chat.css';

const ChatInterface = () => {
  const { messages, isLoading, error, sendMessage, clearChat } = useChat();
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Mensaje de bienvenida
  const welcomeMessage = {
    id: 'welcome',
    content: 'Hola, soy Bob, tu Gerente de Proyectos Financieros para Construcción. ¿En qué puedo ayudarte hoy?',
    sender: 'bot' as const,
    timestamp: new Date()
  };

  // Scroll al final cuando se reciben nuevos mensajes
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Ocultar mensaje de bienvenida cuando el usuario envía un mensaje
  useEffect(() => {
    if (messages.length > 0 && messages[0].sender === 'user') {
      setShowWelcomeMessage(false);
    }
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <img src="/images/bob.png" alt="Bob avatar" />
        <div className="chat-header-info">
          <h3>Bob</h3>
          <p>
            <span className="chat-status"></span>
            Gerente de Proyectos Financieros
          </p>
        </div>
        <button 
          className="btn btn-sm btn-outline" 
          onClick={clearChat}
          title="Limpiar conversación"
        >
          Reiniciar
        </button>
      </div>

      <div className="chat-messages">
        {/* Mensaje de bienvenida */}
        {showWelcomeMessage && messages.length === 0 && (
          <ChatBubble message={welcomeMessage} />
        )}
        
        {/* Mensajes de la conversación */}
        {messages.map((msg) => (
          <ChatBubble key={msg.id} message={msg} />
        ))}
        
        {/* Indicador de typing */}
        {isLoading && (
          <div className="message bot-message">
            <div className="message-avatar">B</div>
            <div className="message-content message-typing">
              <span className="typing-dot"></span>
              <span className="typing-dot"></span>
              <span className="typing-dot"></span>
            </div>
          </div>
        )}
        
        {/* Referencia para el scroll automático */}
        <div ref={messagesEndRef} />
      </div>

      {/* Mostrar mensajes de error */}
      {error && (
        <div className="chat-error">
          <p>{error}</p>
        </div>
      )}

      <ChatInput onSendMessage={sendMessage} isLoading={isLoading} />
    </div>
  );
};

export default ChatInterface;