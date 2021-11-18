import { useEffect, useState } from "react"
import { Badge, Figure, Spinner } from "react-bootstrap"

const ShopItem = ({ match }) => {
    const [productItem, setproduct] = useState(null)
    useEffect(() => {
        // eslint-disable-next-line
        let isMounted = true
        if (isMounted) { getProduct() }
        return () => { isMounted = false }
    })


    const getProduct = () => {
        return fetch(`https://fakestoreapi.com/products/${match.params.id}`)
            .then(res => res.json())
            .then(json => setproduct(json)).catch((error) => { return error })
    }
    return (
        <>
            {
                productItem
                    ?
                    (
                        <>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-7">
                                        <Figure className="my-5">
                                            <Figure.Image
                                                width={171}
                                                height={180}
                                                alt="171x180"
                                                src={productItem.image}
                                            />
                                            <Figure.Caption>
                                                <h3>{productItem.title}</h3>
                                                <div className="d-flex d-none d-xl-block">
                                                    <Badge bg="info">{productItem.price + " L.E"} </Badge>
                                                    <Badge className="mx-2" bg="primary">
                                                        {"number of purchases: " + productItem.rating.count}
                                                    </Badge>
                                                    <Badge bg="secondary">{productItem.category} </Badge>
                                                </div>
                                                <div className="my-2"><Badge bg="light" text="dark">
                                                    Rating: {productItem.rating.rate + " "}<box-icon name='star' type='solid' color='#ffe234' size="13px" ></box-icon>
                                                </Badge></div>
                                                <p>
                                                    {productItem.description}
                                                </p>
                                            </Figure.Caption>
                                        </Figure>
                                    </div>
                                </div >
                            </div >
                        </>
                    )
                    :
                    (
                        <div className="container">
                            <div className="row justify-content-center py-5">
                                <div className="col-1 d-flex align-items-center">
                                    <Spinner size="sm" animation="grow" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </Spinner>
                                    <Spinner className="d-none d-xl-block" size="sm" animation="grow" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </Spinner>
                                    <Spinner className="d-none d-xl-block" size="sm" animation="grow" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </Spinner>
                                </div>
                            </div>
                        </div>
                    )
            }
        </>
    )
}
export default ShopItem