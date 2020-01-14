import React, {useState} from 'react'

const Comment = props => {
    const [readMore, setReadMore] = useState(true)

    return (
        <div className="review">
            <img
                src={props.avatar}
                alt="" className="review--avatar"/>
            <div className="review--content">
                {readMore ? `${props.comment.slice(0, 220)}...` : props.comment}
                {readMore && <button className='review--readmore' onClick={() => setReadMore(false)}>Xem thêm</button>}
            </div>
        </div>
    )
}

export default Comment
