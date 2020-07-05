import React, { useRef, useContext, useState, useEffect } from "react";
import ReactDOM from "react-dom";
// import styled, { keyframes } from "styled-components";

const Context = React.createContext();

export function ModalProvider({ children }) {
    const modalRef = useRef();
    const [context, setContext] = useState();

    // make sure re-render is triggered after initial
    // render so that modalRef exists
    useEffect(() => {
        setContext(modalRef.current);
    }, []);

    return (
        <Container>
            <div ref={modalRef} />
            <Context.Provider value={context}>{children}</Context.Provider>
        </Container>
    );
}

export function Modal({ onClose, buttonText, children, ...props }) {
    const modalNode = useContext(Context);
    const modal = modalNode
        ? ReactDOM.createPortal(
            <Overlay onClick={onClose}>
                <Dialog {...props}>
                    {children}
                    <a className="rn-button-style--2 btn-solid" onClick={onClose}>{buttonText}</a> 
                </Dialog>
            </Overlay>,
            modalNode
        )
        : null;
    return modal
}

const Container = ({ children, ...props }) => <div id="modal-context" {...props}>{children}</div>
const Overlay = ({ children, ...props }) => <div {...props} className={'modal-overlay fade-in'}>{children}</div>
const Dialog = ({ children, ...props }) => <div {...props} className={'modal-dialog'}>{children}</div>
