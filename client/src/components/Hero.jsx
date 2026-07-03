import hero from "../assets/hero.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Manage Your Money Smarter</h1>

        <p>
          Track expenses, monitor budgets and gain valuable insights into your
          financial habits.
        </p>

        <div className="buttons">
          <button>Get Started</button>
          <button>Learn More</button>
        </div>
      </div>

      <div className="hero-image">
        <img src={hero} alt="Hero" />
      </div>
    </section>
  );
}

export default Hero;