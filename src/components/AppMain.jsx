import React from 'react'

const AppMain = (props) => {
    return (
        <div className={"appMain " + props.classname}>
            <main>
                {props.children}
            </main>
        </div>
    );
}

export default AppMain;