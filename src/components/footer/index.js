import React, { useState } from "react"
import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"
import "./index.scss"

const Footer = () => {
    const navigate = useNavigate()
    const navList = [
        { label: "home", img: require("../../assets/img/footer/home.png"), path: "/" },
        { label: "order", img: require("../../assets/img/footer/order.png"), path: "/order" },
        { label: "cart", img: require("../../assets/img/footer/cart.png"), path: "/cart" },
        { label: "user", img: require("../../assets/img/footer/user.png"), path: "/user" },
    ]
    const [selected, setSelected] = useState(navList[0].label)

    function handleClick(item) {
        setSelected(item.label)
        // navigate(item.path)
    }

    return (
        <ul className='footer'>
           <div>
               {navList.map((item, index) => (
                   <li onClick={() => handleClick(item)} key={index} className={selected === item.label ? "active" : ""}>
                       <span className="icon"><img src={item.img} alt={item.label}/></span>
                       <span className="text">{item.label}</span>
                   </li>
               ))}
               <div className="indicator"/>
           </div>
        </ul>
    )
}

export default Footer
