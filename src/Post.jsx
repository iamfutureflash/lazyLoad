import React from 'react'

function Post(props) {
    const { id, title, body } = props;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={`https://picsum.photos/id/${id}/200/200`} alt="..." /></figure>
            <div className="card-body">
                <h2 className="card-title">{title || "---"}</h2>
                <p>{body || "---"}</p>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div> */}
            </div>
        </div>
    )
}

export default Post