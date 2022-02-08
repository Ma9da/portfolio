import { useEffect, useState } from "react"
import { Badge, Card, Spinner } from "react-bootstrap"
import { Link } from "react-router-dom"
import './shop.css'
import 'boxicons'
import Tabsfilters from "../tabs/TabsFilters"

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        // eslint-disable-next-line
        let isMounted = true
        if (isMounted) { fetchProducts() }
        return () => { isMounted = false }
    }, [])

    const fetchProducts = () => {
        return fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json)).catch((error) => { return error })
    }

    return (
        <>
            {
                products
                    ?
                    (<div className="container">
                        <div className="row">
                            <h1 className="text-center my-5">Shop</h1>
                            <Tabsfilters/>
                            {products.map(product => {
                                return (
                                    <div className="col-xl-3 col-md-6 col-sm-6" key={product.id}>
                                        <Card className="shop-card my-3">
                                            <Card.Img variant="bottom" className="w-50 m-auto" src={product.image} />
                                            <Card.Body className="shopping-card">
                                                <Card.Title>{product.title.length > 10 ? product.title.substring(0, 10) + "..." : product.title}</Card.Title>
                                                <Card.Text className="text-truncate">
                                                    {product.description}
                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Footer className="d-flex justify-content-between align-items-center">
                                                <small className="text-muted">{product.category}</small>
                                                <small><box-icon name='star' type='solid' color='#ffe234' size="15px" ></box-icon> {product.rating.rate}</small>
                                                <small><box-icon type='solid' name='shopping-bags' color='#242424' size="15px"></box-icon> {product.rating.count}</small>
                                                <Badge pill bg="secondary">
                                                    {product.price + " L.E"}
                                                </Badge>
                                            </Card.Footer>
                                            <Link to={`/ShopItem/${product.id}`} className="stretched-link"></Link>
                                        </Card>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    )
                    :
                    (
                        <Spinner animation="grow" role="status" className="my-5 text-center">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    )
            }
        </>
    )
}
export default Shop