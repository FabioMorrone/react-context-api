import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function Product() {
    const [prodotto, setProdotto] = useState([])

    const navigate = useNavigate()

    const { slug } = useParams()

    useEffect(() => {

        fetch(`http://localhost:3000/api/v1/posts/${slug}`)
            .then(res => res.json())
            .then(data => {
                setProdotto(data)

            })

    }, [slug])



    return (
        <>
            <main>
                <section id="product_details" className="mt-5">
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-12 col-md-5">
                                <img className="img-fluid" src={`http://localhost:3000${prodotto.image}`} alt={prodotto.title} />
                            </div>
                            <div className="col-12 col-md-7">
                                <div className="back">
                                    <button className="back" onClick={() => navigate(-1)}>
                                        <i className="bi bi-arrow-left"></i>
                                    </button>
                                </div>
                                <h1 className="text-light">Product: {prodotto.title}</h1>
                                <p className="text-light">{prodotto.content}</p>

                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
