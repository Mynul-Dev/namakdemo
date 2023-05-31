import React from 'react';
import { useState } from 'react';
const CartContext = React.createContext([]);
const AppProvider = ({ children }) => {
    const [BeatRoute, setBeatRoute] = useState('')
    return <CartContext.Provider value={[BeatRoute, setBeatRoute]}>{children}</CartContext.Provider>;
}
export { CartContext, AppProvider } 