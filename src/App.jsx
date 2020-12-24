import React  from 'react';
import './index.css';
import { useState } from 'react';

const App = () => {
    let Time = new Date().toLocaleTimeString();

    const [ctime ,setCtime] = useState(Time);
    const update = () =>{
        let utime = new Date().toLocaleTimeString();
        setCtime(utime);
    }
    setInterval(update,1000);
    
    return(
        <>
            <h1>{ctime}</h1>
        </>
    );
};

export default App;