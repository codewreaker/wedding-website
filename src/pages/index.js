import React from 'react';
import App from './app'
import { ModalProvider } from "../modal";

export default () => {
    return (
        <ModalProvider>
            <App />
        </ModalProvider>
    )
}