import './Hero.css';
function Hero() {
    return (
        <section className='hero'>
            <img className="hero--photo"
                src="https://i.etsystatic.com/21582717/r/il/2c1982/4019171183/il_340x270.4019171183_1yg5.jpg"
                alt='ada' />
            <h1 className="hero-header">Onlline Experiences</h1>
            <p className="hero--text">Join uinique interactivie activities led by one of a kind host all without leaving home</p>
        </section>
    )
};

export default Hero;