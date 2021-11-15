import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import classes from "./GrowlMessage.module.scss";

const GrowlMessage = ({ id = '', show = true, type = 'info', shadow = false, onClose = () => { }, title = '', sticky = false, children }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            onClose(id);
        }, 3000);
        return () => {
            clearTimeout(timer);
        }
    }, [id, onClose]);

    if (!show) {
        return null;
    }

    let growlRoot = document.getElementById("growl-root");
    if (growlRoot == null) {
        growlRoot = document.createElement("div");
        growlRoot.id = "growl-root";
        growlRoot.classList.add(classes.growl__root);
        document.body.appendChild(growlRoot);
    }
    return ReactDOM.createPortal(
        <div id={id} className={`${classes.Growl} ${classes[type]} ${shadow ? classes.shadow : ""} ani-slideIn-left`} data-type={type}>
            {title && <div className={classes.title}>{title || type + " Message"}</div>}
            {children}
            <span className={classes.close} onClick={onClose}>&times;</span>
        </div>,
        growlRoot
    );
};

export default GrowlMessage;
