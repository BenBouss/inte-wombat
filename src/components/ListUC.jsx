import React from 'react'

const UCList = (props) => {
    return (
        <ul className="ucList">
            {props.list.map((list, i) =>
            <li key={i} className={`itemUC ` + list.ucType}>
                <div className="itemUCOuter flex-items-center">
                    <div>
                        <div className="titleUC">{list.ucTitle}</div>
                        <div className="refInternet">{list.ucRef}</div>
                    </div>
                </div>
            </li>
            )}
        </ul>
    );
}

export default UCList;