import { useEffect, useState } from "react"
import { Badge, Card, Spinner } from "react-bootstrap"

const ShopItem = ({match}) => {
    const [productItem, setproduct] = useState(null)
    useEffect(() => {
        getProduct()
    },)


    const getProduct = () => {
        return fetch(`https://fakestoreapi.com/products/${match.params.id}`)
            .then(res => res.json())
            .then(json => setproduct(json))
    }
    return (
        <>
            {
            productItem
                ?
                (<Card className="d-flex flex-row align-items-center my-5 p-5">
                    <Card.Img className="w-50" variant="top" src={productItem.image} />
                    <Card.Body>
                        <Card.Title>{productItem.title}</Card.Title>
                        <Card.Text>
                            {productItem.description}
                        </Card.Text>
                        <Card.Text>
                        <Badge bg="dark">{productItem.price}</Badge>
                        </Card.Text>
                    </Card.Body>
                </Card>)
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
export default ShopItem