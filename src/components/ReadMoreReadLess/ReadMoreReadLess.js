import React, {useState} from 'react';

const ReadMoreReadLess = ({children, limit}) => {

    const [isReadMoreShown, setIsReadMoreShown] = useState(false);

    const handleButton = () => {
        setIsReadMoreShown(prevState => !prevState)
    }

    return (
        <div className="read-more-read-less">
            {isReadMoreShown ? children : children.substring(0, limit)}
            <button className="btn" onClick={handleButton}>{isReadMoreShown ? 'Read Less' : '...Read More'}</button>
        </div>
    );
};

export {ReadMoreReadLess};