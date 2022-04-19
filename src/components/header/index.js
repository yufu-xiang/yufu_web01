import React, { useState } from "react"
import PropTypes from "prop-types"
import "./index.scss"

const Header = props => {
    const [isShowPop, setIsShowPop] = useState(false)
    return (
        <>
            <div className="header">
                <div className="filter" onClick={() => setIsShowPop(!isShowPop)}>
                    <img src={require("../../assets/img/header/menu.png")}/>
                </div>
                <title>

                </title>
                <div className="search">
                    <img src={require("../../assets/img/header/search.png")}/>
                </div>
            </div>

            <div data-is-show={isShowPop} className='filter-pop'>
                <h2>更多设定</h2>
                <ul>
                    <li>设定1</li>
                    <li>设定2</li>
                    <li>设定3</li>
                    <li>设定4</li>
                    <li>设定5</li>
                </ul>
                <div onClick={()=>setIsShowPop(false)} className="close-img"/>
            </div>

        </>

    )
}

Header.propTypes = {}

export default Header
