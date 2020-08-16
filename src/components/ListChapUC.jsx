import React from 'react'
import ListUC from './ListUC'

const ListChap = (props) => {
    return (
        <div>
            {props.list.map((list, i) =>
            <div key={i} className="row blockChapter">
                <div className="col-xl-9">
                    <h2 id={`chapter-`+(i+1)}>{list.chapTitle}</h2>
                    {console.log({i})}
                    <ListUC list={list.uc}/>
                </div>
            </div>
            )}
        </div>
    )
}

export default ListChap;