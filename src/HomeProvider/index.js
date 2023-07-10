import React, { createContext, useState } from "react";

// tao 1 bien context
export const HomeContext = createContext();

const HomeProvider = ({ children }) => {
    // state muon chia se giua cac compoent
    const [active, setActive] = useState(true)
    const [toggleSidebar, setToggleSidebar] = useState(true)
    const [text, setText] = useState('')
    const handleTheme = e => {
        setActive(!active)
    }

    const value = {
        theme: active,
        onTheme: handleTheme,
        toggle: toggleSidebar,
        onToggle: () => setToggleSidebar(!toggleSidebar),
        text: text,
        onChangeText: (e) => setText(e.target.value)

    };
    return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
};

export default HomeProvider;
