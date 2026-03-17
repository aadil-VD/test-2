export const Hero = () => {
  return (
    <section className="lp-hero">
      <div className="lp-hero-glow" />
      <div className="lp-orbital lp-o1" />
      <div className="lp-orbital lp-o2" />
      <div className="lp-orbital lp-o3" />

      <p className="lp-eyebrow">Evidence-based · Values-driven · Deeply personal</p>

      <h1>
        Your <em>Horoscope<br />of Happiness</em>
      </h1>

      <p className="lp-hero-sub">
        A short reflection activity. A personalised report that reveals your core values, hidden
        blockers, and the path toward a life that actually feels like yours.
      </p>

      <div className="lp-hero-btns">
        <a href="#pricing" className="lp-btn-primary">
          Discover Yours — $19.99
        </a>
        <a href="#how" className="lp-btn-outline">
          See How It Works
        </a>
      </div>

      <div className="lp-hero-stats">
        <div>
          <strong>15 min</strong>activity
        </div>
        <div>
          <strong>~600</strong>word report
        </div>
        <div>
          <strong>Instant</strong>insights
        </div>
      </div>
    </section>
  );
};
