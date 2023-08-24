import heroImg from './assets/hero.svg';
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Shaman chillwave vaporware, asymmetrical listicle plaid
            vexillologist meditation sartorial freegan heirloom. Selfies tonx
            bicycle rights, vibecession yr hella helvetica viral vinyl. Try-hard
            pickled truffaut kombucha green juice Brooklyn.
          </p>
        </div>
        <div className="image-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
