import React, { useState } from "react"
import { useStore } from "../../store"
import Header from "../../components/header"
import Footer from "../../components/footer"
import "./index.scss"
import { Card, CardGroup, Carousel } from "react-bootstrap"

const Home = () => {
    const { loginStore } = useStore()
    const labelList = [
        { id: 1, name: "全部" },
        { id: 2, name: "中式" },
        { id: 3, name: "西式" },
        { id: 4, name: "法式" },
        { id: 5, name: "美式" },
        { id: 16, name: "日式" },
    ]
    const [selectedFilter, setSelectedFilter] = useState(labelList[0].id)
    return (
        <div className="home">
            <Header/>
            <div className="title">
                E-Food
            </div>
            <Card className="hot">
                <Carousel fade={true} indicators={false} controls={false}>
                    <Carousel.Item interval={4000}>
                        <Card.Body>
                            <img className="sale" src={require("../../assets/img/home/sale.png")}/>
                            <img className="hot-img" src={require("../../assets/img/home/food-hot01.jpg")}/>
                            <div className="text">
                                <p>丹麦啤酒</p>
                                <span>
                            国外酿酒师傅亲手酿造，喝一杯快乐似神仙~
                        </span>
                            </div>
                        </Card.Body>
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                        <Card.Body>
                            <img className="sale" src={require("../../assets/img/home/sale.png")}/>
                            <img className="hot-img" src={require("../../assets/img/home/food-hot02.jpg")}/>
                            <div className="text">
                                <p>香煎鲑鱼</p>
                                <span>
                            来自纽西兰的进口鲑鱼，保证大口满足~
                        </span>
                            </div>
                        </Card.Body>
                    </Carousel.Item>
                </Carousel>
            </Card>
            <div className="labels">
                {labelList.map((item, index) => (
                    <div data-is-selected={selectedFilter === item.id} onClick={() => setSelectedFilter(item.id)}
                         key={index}>
                        {item.name}
                    </div>
                ))}
            </div>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={require("../../assets/img/home/food01.jpg")}/>
                    <Card.Body>
                        <Card.Title>便当</Card.Title>
                        <Card.Text>
                            超级好吃，老少咸宜，一吃就会爱不释手!
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={require("../../assets/img/home/food02.jpg")}/>
                    <Card.Body>
                        <Card.Title>西式</Card.Title>
                        <Card.Text>
                            喜欢异国料理的朋友可以尝试看看，网路评价5颗星!
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={require("../../assets/img/home/food03.jpg")}/>
                    <Card.Body>
                        <Card.Title>在地美食</Card.Title>
                        <Card.Text>
                            快来尝尝道地吃食，绝不会让你后悔~
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
            <Footer/>
        </div>
    )
}

export default Home
