function Contact() {
    return (
        <div>
            <div>
                <h3 style={{ margin: '0 auto', alignContent: 'center', textAlign: 'left', fontSize: 30 }} className='sm:p-3'>Give Me A Buzz</h3>
            </div>
            <div className='flex flex-col sm:px-12 mx-auto bg-gray-400 items-center justify-center sm:items-between sm:p-8 sm:flex-row'>
                <div className='flex-grow sm:p-8'>
                    <p style={{ fontSize: 30 }}>Email: <a className='text-yellow-300 hover:text-black' href="mailto:joey@joeyjepson.com" rel="noreferrer" target="_blank" type="btn">joey@joeyjepson.com</a>
                    </p>
                    <p style={{ fontSize: 30 }}>Cell: <a className='text-yellow-300 hover:text-black' href="tel:480-643-0778" rel="noreferrer" target="_blank" type="btn">(480) 643-0778</a>
                    </p>
                    <p style={{ fontSize: 30 }}>LinkedIn: <a className='text-yellow-300 hover:text-black' href="https://www.linkedin.com/in/josephjepson/" rel="noreferrer" target="_blank" type="btn">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    </p>
                    <p style={{ fontSize: 30 }}>GitHub: <a className='text-yellow-300 hover:text-black' href="https://github.com/alligatormonday" rel="noreferrer" target="_blank" type="btn">
                        <i class="fab fa-github"></i>
                    </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Contact