import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { FaComments, FaTimes } from "react-icons/fa";

function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hello! How can I help you today?", isBot: true }
    ]);
    // const [newMessage, setNewMessage] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    const presetQuestions = [
        "What are your product prices?",
        "What are your delivery options?",
        "How can I return an item?",
        "Do you offer discounts?",
        "How can I contact customer support?"
    ];

    const handleSendMessage = (message) => {
        if (!message.trim()) return;

        setMessages((prev) => [...prev, { text: message, isBot: false }]);
        setIsTyping(true);

        setTimeout(() => {
            const botResponse = getBotResponse(message);
            setMessages((prev) => [...prev, { text: botResponse, isBot: true }]);
            setIsTyping(false);
        }, 1000);
    };

    const getBotResponse = (message) => {
        const lowerMessage = message.toLowerCase();
        if (lowerMessage.includes("price")) {
            return "Our prices vary by product. You can check specific prices on our website. Is there a particular item you're interested in?";
        } else if (lowerMessage.includes("delivery") || lowerMessage.includes("shipping")) {
            return "We offer free shipping on orders over $50. Standard delivery takes 3-5 business days.";
        } else if (lowerMessage.includes("return")) {
            return "We have a 30-day return policy for unused items in original packaging.";
        } else if (lowerMessage.includes("discount")) {
            return "Yes! We have seasonal discounts. Subscribe to our newsletter for updates!";
        } else if (lowerMessage.includes("contact")) {
            return "You can reach our support team via email at support@example.com or call us at +1234567890.";
        } else {
            return "I'm here to help! Please select one of the available questions above.";
        }
    };

    return (
        <div className="position-fixed bottom-0 end-0 mb-3 me-3" style={{ zIndex: 1000 }}>
            {!isOpen ? (
                <Button 
                    variant="primary" 
                    className="rounded-circle p-3"
                    onClick={() => setIsOpen(true)}
                >
                    <FaComments size={24} />
                </Button>
            ) : (
                <Card style={{ width: "320px", borderRadius: "10px", boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)" }}>
                    <Card.Header className="d-flex justify-content-between align-items-center bg-primary text-white">
                        <span>Customer Support</span>
                        <Button 
                            variant="link" 
                            className="text-white p-0"
                            onClick={() => setIsOpen(false)}
                        >
                            <FaTimes />
                        </Button>
                    </Card.Header>
                    <Card.Body style={{ height: "400px" }} className="d-flex flex-column">
                        <div className="flex-grow-1 overflow-auto mb-3">
                            {messages.map((message, index) => (
                                <div
                                    key={index}
                                    className={`d-flex ${message.isBot ? "justify-content-start" : "justify-content-end"} mb-2`}
                                >
                                    <div
                                        className={`p-2 rounded ${message.isBot ? "bg-light" : "bg-primary text-white"}`}
                                        style={{ maxWidth: "80%" }}
                                    >
                                        {message.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="text-muted text-start">Typing...</div>
                            )}
                        </div>
                        <div className="d-flex flex-wrap gap-2 mb-2">
                            {presetQuestions.map((question, index) => (
                                <Button 
                                    key={index} 
                                    variant="outline-primary" 
                                    size="sm"
                                    onClick={() => handleSendMessage(question)}
                                >
                                    {question}
                                </Button>
                            ))}
                        </div>
                    </Card.Body>
                </Card>
            )}
        </div>
    );
}

export default Chatbot;
