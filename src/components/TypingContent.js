import React, { useEffect, useState } from 'react';
import classes from './TypingContent.module.css';
import PropTypes from 'prop-types';

const TypingContent = (props) => {
    const [index, setIndex] = useState(0);
    const data = props.data;

    useEffect(() => {
        let text = data[index];
        document.getElementById("typing").innerHTML = text;
        document.getElementById("typing").classList.add(classes.typing);
        const timer = setTimeout(() => {
            document.getElementById("typing").classList.remove(classes.typing);
            setIndex((prevIndex) => {
                return (prevIndex + 1) % data.length;
            });
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    }, [index, data]);

    return (
        <div className={`${props.className} ${classes.typewriter}`}>
            <div>
                <div id="typing"></div>
            </div>
        </div>
    )
}

TypingContent.propTypes = {
    data: PropTypes.array
}

export default TypingContent
