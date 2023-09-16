import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)"}}>
        <div className='redes'>
            <a href='https://www.facebook.com/kenia.montalvoevg/'>
                <img src="/img/facebook.png" alt='Facebook' />
            </a>
            <a href='https://www.linkedin.com/in/kenia-montalvo/'>
                <img src="/img/linkedin.png" alt='LinkedIn' />
            </a>
            <a href='https://www.instagram.com/kenia_montalvo/'>
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <img src='/img/logo.png' alt='org' />
        <strong>Desarrollado por Kenia Montalvo</strong>
    </footer>
}

export default Footer