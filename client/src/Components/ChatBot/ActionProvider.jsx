import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    const handleHello = () => {
        const botMessage = createChatBotMessage('Hello. Nice to meet you.');
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage]}));
    };
    const handleBay = () => {
        const botMessage = createChatBotMessage('chao. nos vemos.');
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage]}));
    };
    // const handle = () => {
    //     const botMessage = createChatBotMessage('');
    //     setState((prev) => ({
    //         ...prev,
    //         messages: [...prev.messages, botMessage]}));
    // };


    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        handleHello,
                        handleBay,
                        // handle
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;