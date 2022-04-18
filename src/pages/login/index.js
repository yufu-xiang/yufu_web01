import React, { useState } from "react"
import "./index.scss"
import { Carousel, Alert, Toast, ToastContainer } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useStore } from "../../store"

const Login = () => {
    const navegate = useNavigate()
    const { loginStore } = useStore()
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [isShowWarn, setIsShowWarn] = useState(false)

    function handleOnClick() {
        if (userName !== "" && password !== "") {
            localStorage.setItem("userName", userName)
            localStorage.setItem("password", password)
            loginStore.setUserName(userName)
            navegate("/", { replace: true })
        } else {
            setIsShowWarn(true)
        }
    }

    return (
        <div className="container">
            <div className="banner">
                <Carousel fade={true} indicators={false} controls={false}>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100 h-auto mt-1"
                            src={require("../../assets/img/login01.jpg")}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100 h-auto mt-1"
                            src={require("../../assets/img/login02.jpg")}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100 h-auto mt-1"
                            src={require("../../assets/img/login03.jpg")}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="main">
                <div className="logo">
                    <h2>Login</h2>
                    <h2>Login</h2>
                </div>
                <input onChange={(e) => setUserName(e.target.value)} value={userName} placeholder={"手機號碼、用戶名稱或電子郵件地址"}/>
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password}
                       placeholder={"密码"}/>
                <div>
                    <button onClick={handleOnClick}>登入</button>
                    <span>忘记密码</span>
                </div>
            </div>
            <ToastContainer position={"middle-center"}>
                <Toast bg={"light"}  show={isShowWarn} delay="2000" autohide={true} onClose={() => setIsShowWarn(false)}>
                    <Toast.Header>
                        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt=""/>
                        <strong className="me-auto">警告</strong>
                    </Toast.Header>
                    <Toast.Body>用户名或密码错误</Toast.Body>
                </Toast>
            </ToastContainer>
        </div>
    )
}

export default Login

