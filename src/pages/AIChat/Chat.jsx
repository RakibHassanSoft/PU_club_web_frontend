import React, { useState, useEffect, useRef } from "react";
import { FaComputer } from "react-icons/fa6";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Chat = () => {
    const [hasArea, setHasArea] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const chatBoxRef = useRef(null);
    const [isTextarea, setIsTextarea] = useState(false);

    const appendMessage = (message, sender) => {
        setMessages((prevMessages) => [...prevMessages, { message, sender }]);
    };

    const sendMessage = async () => {
        if (!input.trim()) return;

        appendMessage(input, "user");
        setInput("");

        try {
            const response = await fetch(
                "https://ai-api-for-career-canvas.vercel.app/chat",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ message: input }),
                }
            );

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error("Network response was not ok: " + errorText);
            }

            const data = await response.json();
            appendMessage(data.response, "ai");
        } catch (error) {
            console.error("Error:", error);
            appendMessage("Error communicating with the AI. Please try again.", "ai");
        }
    };

    useEffect(() => {
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
        }
    }, [messages]);

    const renderMessage = (msg) => (
        <ReactMarkdown
            children={msg}
            remarkPlugins={[remarkGfm]}
            components={{
                code({ node, inline, className, children, ...props }) {
                    if (inline) {
                        return (
                            <code className="bg-blue-950 text-red-700 px-1 rounded">
                                {children}
                            </code>
                        );
                    }
                    return (
                        <div className="my-2 p-2">
                            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                                {children}
                            </SyntaxHighlighter>
                            <button
                                onClick={() => navigator.clipboard.writeText(children)}
                                className="mt-2 text-sm text-white hover:underline"
                            >
                                Copy
                            </button>
                        </div>
                    );
                },
            }}
        />
    );

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault(); // Prevents the default behavior (like adding a new line)
            sendMessage(); // Calls the sendMessage function
        }
    };

    return (
        <div className="w-full mb-12 lg:w-5xl mt-12 mx-auto bg-white shadow-lg p-4 rounded-lg border border-red-500">
            <p className="text-3xl font-bold text-red-700 text-center mb-4">
                PU Programming Club
                <h1 className="flex justify-center items-center gap-3">
                    <FaComputer /> AI Chatbot
                </h1>
            </p>

            <div className={`${hasArea ? "h-0" : "h-72"} overflow-y-auto`} >
            </div>

            {messages.map((msg, index) => (
                <div
                    key={index}
                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} mb-2`}
                >
                    <div
                        className={`px-4 py-2 rounded-lg shadow ${
                            msg.sender === "user"
                                ? "bg-white text-black"
                                : "bg-black text-white"
                        }`}
                        style={{
                            display: "inline-block",
                            maxWidth: "75%",
                            wordWrap: "break-word",
                        }}
                    >
                        {renderMessage(msg.message)}
                    </div>
                </div>
            ))}

            <div className="w-full px-2">
                <div className="flex flex-col sm:flex-row gap-2 items-stretch">
                    {isTextarea ? (
                        <textarea
                            placeholder="Type your message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="flex-1 p-2 border border-red-300 rounded resize-none focus:outline-none focus:border-red-500"
                            rows={4}
                            onKeyDown={handleKeyPress}
                        />
                    ) : (
                        <input
                            type="text"
                            placeholder="Type your message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="flex-1 p-2 border border-red-300 rounded text-red-900 focus:outline-none focus:border-red-500"
                            onKeyDown={handleKeyPress}
                        />
                    )}
                    <button
                        onClick={() => {
                            sendMessage();
                            setIsTextarea(true); 
                        }}
                        className="sm:w-auto w-full px-6 py-2 bg-gradient-to-r from-red-500 to-red-700 text-white font-bold rounded-lg"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chat;
