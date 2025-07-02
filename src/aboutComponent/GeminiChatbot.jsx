// src/aboutComponent/GeminiChatbot.jsx
import React, { useState, useRef, useEffect } from 'react';
import './GeminiChatbot.scss';

const GeminiChatbot = ({ portfolioData }) => { // Added portfolioData prop
  const [input, setInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  // Scroll to the bottom of the chat history
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory]);

  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    const userMessage = { role: 'user', text: input };
    setChatHistory((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Construct the system instruction with portfolio data
      const systemInstruction = `You are a helpful assistant providing information about Harender Kumar's professional portfolio.
      Here is the data about Harender's skills, experience, education, certifications, projects, and awards:
      Skills: ${JSON.stringify(portfolioData.skillsData)}
      Experience: ${JSON.stringify(portfolioData.experienceData.map(exp => ({ company: exp.company, positions: exp.positions.map(pos => pos.title) })))}
      Education: ${JSON.stringify(portfolioData.educationData.map(edu => ({ institution: edu.company, degree: edu.position })))}
      Certifications: ${JSON.stringify(portfolioData.certificationData.map(cert => ({ title: cert.title, source: cert.Source })))}
      Projects: ${JSON.stringify(portfolioData.projectsData.map(proj => ({ title: proj.title, about: proj.about })))}
      Awards: ${JSON.stringify(portfolioData.awardsData.map(award => ({ title: award.title, organization: award.organization })))}
      
      Answer questions based only on the provided context about Harender's portfolio. If the question is outside this scope or you cannot find the answer in the provided data, politely state that you can only answer questions related to Harender's portfolio.`;

      // Prepare chat history for the API call, including the system instruction
      const apiChatHistory = [
        { role: 'user', parts: [{ text: systemInstruction }] },
        { role: 'model', parts: [{ text: "Okay, I understand. I will now answer questions based on Harender Kumar's portfolio data." }] },
        ...chatHistory.map(msg => ({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.text }]
        })),
        { role: 'user', parts: [{ text: input }] } // Add current user input
      ];

      const apiKey = process.env.REACT_APP_GEMINI_API_KEY; // Read from environment variable
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: apiChatHistory }) // Pass contents directly
      });

      const result = await response.json();

      if (result.candidates && result.candidates.length > 0 &&
          result.candidates[0].content && result.candidates[0].content.parts &&
          result.candidates[0].content.parts.length > 0) {
        const botResponseText = result.candidates[0].content.parts[0].text;
        setChatHistory((prev) => [...prev, { role: 'model', text: botResponseText }]);
      } else {
        setChatHistory((prev) => [...prev, { role: 'model', text: 'Sorry, I could not get a response. Please try again.' }]);
        console.error('Unexpected API response structure:', result);
      }
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      setChatHistory((prev) => [...prev, { role: 'model', text: 'An error occurred while connecting to the chatbot. Please try again later.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !isLoading) {
      handleSendMessage();
    }
  };

  return (
    <div id="gemini-chat-window" className="gemini-chatbot-container"> {/* Added id here */}
      <h2 className="section-title">Ask Me Anything!</h2>
      <div className="chat-window">
        <div className="chat-messages">
          {chatHistory.length === 0 && (
            <div className="welcome-message">
              Hi there! I'm a Gemini-powered chatbot. Ask me anything about Harender's portfolio, skills, or experience!
            </div>
          )}
          {chatHistory.map((message, index) => (
            <div key={index} className={`chat-message ${message.role}`}>
              <span className="message-role">{message.role === 'user' ? 'You:' : 'Bot:'}</span>
              <span className="message-text">{message.text}</span>
            </div>
          ))}
          {isLoading && (
            <div className="chat-message model loading">
              <span className="message-role">Bot:</span>
              <span className="message-text">Typing...</span>
            </div>
          )}
          <div ref={chatEndRef} /> {/* Scroll target */}
        </div>
        <div className="chat-input-area">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            disabled={isLoading}
          />
          <button onClick={handleSendMessage} disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeminiChatbot;
