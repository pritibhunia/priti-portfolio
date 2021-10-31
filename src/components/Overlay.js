import React from 'react';
import ReactDOM from 'react-dom'

const Styles = {
    Overlay: {
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        backgroundColor: 'black',
        opacity: 0.3,
        zIndex: 3,
        top: 0,
        left: 0
    }
}

const Overlay = (props) => {
    let overlayEl = document.getElementById('overlay-root');
    if (overlayEl == null) {
        overlayEl = document.createElement('div');
        overlayEl.id = 'overlay-root';
        document.body.appendChild(overlayEl);
    }
    return ReactDOM.createPortal(
        <div className='Overlay' style={Styles.Overlay}></div>,
        overlayEl
    )
}

export default Overlay
