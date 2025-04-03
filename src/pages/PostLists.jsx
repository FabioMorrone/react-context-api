import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function PostLists() {
    const [postLists, setPostLists] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/posts', {})
            .then(res => {
                return res.json();
            })
            .then(data => {
                setPostLists(data)
            })
    }, [])



    return (
        <>
            <main>
                <div className="container p-4">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
                        {postLists.map(post => (
                            <div className="col" key={post.slug}>
                                <Link to={`/prodotto/${post.slug}`} className="text-decoration-none">
                                    <div className="card h-100 shadow-sm">
                                        <div className="position-relative">
                                            <img
                                                className="card-img-top"
                                                src={`http://localhost:3000${post.image}`}
                                                alt={post.name}
                                                style={{ height: '200px', objectFit: 'cover' }}
                                            />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title text-dark">{post.title}</h5>
                                            <p className="card-text text-secondary">
                                                {post.content}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </>
    )
}