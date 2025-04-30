import { ChatMessage } from '../../types';

// Formateador de fecha/hora
const formatTime = (date: Date) => {
  return new Date(date).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });
};

interface ChatBubbleProps {
  message: ChatMessage;
}

const ChatBubble = ({ message }: ChatBubbleProps) => {
  // Formatear el contenido del mensaje: saltos de línea, código, etc.
  const formatContent = (content: string) => {
    // Convertir URLs en enlaces
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const withLinks = content.replace(urlRegex, (url) => {
      return `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`;
    });

    // Preservar saltos de línea
    const withLineBreaks = withLinks.replace(/\n/g, '<br />');

    return { __html: withLineBreaks };
  };

  return (
    <div className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}>
      <div className="message-avatar">
        {message.sender === 'user' ? 'U' : 'B'}
      </div>
      <div className="message-content">
        <div 
          dangerouslySetInnerHTML={formatContent(message.content)} 
        />
        <span className="message-timestamp">
          {formatTime(message.timestamp)}
        </span>
      </div>
    </div>
  );
};

export default ChatBubble;