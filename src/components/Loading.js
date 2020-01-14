import React from 'react'
import loading from '../loading.svg'

const Loading = props => {
    return (
        <div style={{
            width: '100%',
            height: props.height ? props.height : '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <img src={loading} alt="loading..." className='img-fluid'/>
        </div>
    )
}

export default Loading


