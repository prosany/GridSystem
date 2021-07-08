import React from 'react';
import './Home.css';

const Home = (props) => {
    const { thumbnailUrl, title } = props?.data;
    // console.log(jsonData)
    return (
        <>
            <div className="MainDiv">
                <img src={thumbnailUrl} alt={title} />
                <div className="Actions">
                    <span className="Title">{title}</span>
                    <span className="Remove" onClick={() => props.remove(props.id)}>Remove</span>
                </div>
            </div>
        </>
    );
};

export default Home;