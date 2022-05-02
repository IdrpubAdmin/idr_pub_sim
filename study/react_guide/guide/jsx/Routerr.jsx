import React from 'react';

const Routerr = () => {
    const htmlCode = "<div><button>버튼</button></div>";
    return (
        <>
        <div dangerouslySetInnerHTML={{ __html: htmlCode }}></div>
        </>
    )  
}

export default Routerr;