import React from "react"
import { useStore } from "../../store"
import Header from "../../components/header"
import Footer from "../../components/footer"
const Home = () => {
    const {loginStore}=useStore()
    return (
        <div>
            <Header/>
            我是首页{loginStore.userName}
            <Footer/>
        </div>
    )
}

export default Home
