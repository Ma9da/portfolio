import { useEffect, useState } from "react"
import { Badge, Card } from "react-bootstrap"
import { Link } from "react-router-dom"

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetchProducts()
    }, [])
    const fetchProducts = () => {
        return fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <h1 className="text-center my-5">Shop</h1>
                    {products.map(product => {
                        return (
                            <div className="col-3" key={product.id}>
                                <Card>
                                    <Card.Img variant="top" className="w-50 m-auto"  src={product.image} />
                                    <Card.Body>
                                        <Card.Title>{product.title}</Card.Title>
                                        <Card.Text>
                                            {product.description}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="d-flex justify-content-between">
                                        <small className="text-muted">{product.category}</small>
                                        <Badge pill bg="secondary">
                                            {product.price}
                                        </Badge>
                                    </Card.Footer>
                                    <Link to={`/ShopItem/${product.id}`} className="stretched-link"></Link>
                                </Card>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default Shop