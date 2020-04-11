import React, {useState} from 'react'

const Contact = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [note, setNote] = useState('')
    const [messForm, setMessForm] = useState(null)
    const [statusForm, setStatusForm] = useState(true)

    const script_URL = 'https://script.google.com/macros/s/AKfycbxWoGkyhW0ViRqBqWjkJCvQWyd4c9wsEkixWxnDp-GsfxzxVMVI/exec'

    function handleSubmit(e) {
        e.preventDefault()
        if (!name || !phone || !note) {
            return setMessForm('Cần có thông tin Họ tên, Số điện thoại và Nội dung tư vấn!')
        }

        let form = new FormData()
        form.append('fullname', name)
        form.append('phone', phone)
        form.append('email', email)
        form.append('note', note)
        // console.log(form)
        fetch(script_URL, {
            method: 'POST',
            body: form
        })
            .then(res => {
            if (res.ok) {
            setStatusForm(false)
            setMessForm('Bạn đã đăng ký tư vấn thành công. Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất!')
        }
    })
.catch(e => {
        setMessForm('Có lỗi khi gửi. Gọi hotline 024.6673.9999 để được giải đáp!')
        console.error(e)
})
}

return (
    <div className="form-contact">
        <form onSubmit={handleSubmit}>
            <div className="time">
                <div className="title">thời gian làm việc</div>
                <div className="clock">
                    <img src="assets/images/clock.png" alt=""/>
                    <p className='font-weight-bold color--red'>8H00 - 20H00</p>
                </div>
                <div className="calendar">
                    <ul>
                        <li>T2</li>
                        <li>T3</li>
                        <li>T4</li>
                        <li>T5</li>
                        <li>T6</li>
                        <li>T7</li>
                        <li>CN</li>
                    </ul>
                    <span className='color--red font-weight-bold'>(KỂ CẢ NGÀY LỄ, TẾT)</span>
                </div>
            </div>
            <p className='title'>đăng ký tư vấn</p>
                {statusForm &&
                    <>
                        <input name="fullname" type="text" placeholder='Họ và tên (*)' required value={name}
        onChange={e => setName(e.target.value)}/>
            <input name="phone" type="text" placeholder='Số điện thoại (*)' required value={phone}
            onChange={e => setPhone(e.target.value)}/>
            <input name="email" type="email" placeholder='Email' value={email}
            onChange={e => setEmail(e.target.value)}/>
            <textarea name="note" id="" cols="30" rows="5"
            placeholder='Bạn đang có vấn đề thắc mắc cần từ vấn (*)' required
            onChange={e => setNote(e.target.value)} value={note}></textarea>
        </>
    }
        <p className="color--yellow">{messForm}</p>
                {statusForm && <button type='submit'>Đăng ký ngay</button>}
    </form>
        </div>
    )
}

export default Contact
