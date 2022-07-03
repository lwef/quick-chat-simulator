import React, {useState, useEffect} from 'react';
import mit from './mit.txt';
import apache20 from './apache2.0.txt';

const License = (data) => {
    const [text, setText] = useState("");
    const [isShown, setIsShown] = useState(false);
    const [showOrHide, setShowOrHide] = useState("show license");

    const license = data.data;

    const handleClick = () => {
        setIsShown(!isShown);
        if(showOrHide === "show license") {
            setShowOrHide("hide license");
        } else {
            setShowOrHide("show license");
        }
    };

    useEffect(() => {
        console.log(data);
        try {
            if(license.type === "mit") {
                fetch(mit)
                .then(function(res){
                    return res.text();
                }).then(function (data) {
                    data = "The MIT License (MIT)\n" + license.copyright + "\n\n" + data;
                    setText(data);
                })
            } else if(license.type === "Apache License 2.0") {
                fetch(apache20)
                .then(function(res){
                    return res.text();
                }).then(function (data) {
                    data = data + "\n" + license.copyright;
                    setText(data);
                })
            }
            
        } catch (err) {
            console.log(err);
        }
    }, []);

    return (
        <div className='InfoPage__box'>
            <span className='title'>{license.title}</span>
            <span className='homepage'><a href={license.homepage}>homepage</a></span>
            <span className='showButton' onClick={handleClick}>{showOrHide}</span>
            <div className='license'>
                <pre style={{display: isShown? "block" : "none",  whiteSpace: "pre-wrap"}}>
                    {text}
                </pre>
            </div>
        </div>
    )
}

export default License;