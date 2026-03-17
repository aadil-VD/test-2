const features = [
  '15-minute guided values reflection activity',
  '600-word personalised happiness report',
  'Your full value profile with zone breakdown',
  'Your 4 behavioural blockers, explained',
  'Practical, actionable next steps',
  'Viewable inside your personal dashboard',
];

export const Pricing = () => {
  return (
    <section id="pricing" className="lp-pricing-section">
      <div className="lp-container">
      <p className="lp-label">Get Your Report</p>
      <h2 className="lp-title">One-time. Instant. Yours forever.</h2>
      <p className="lp-sub" style={{ margin: '0 auto', textAlign: 'center' }}>
        No subscription. No hidden fees. Your personalised Horoscope of Happiness, ready within
        minutes.
      </p>
      <div className="lp-price-card">
        <div className="lp-price-badge">Most Popular</div>
        <div className="lp-price-num">
          <sup>$</sup>19.99
        </div>
        <p className="lp-price-note">One-time · No subscription</p>
        <ul className="lp-price-feats">
          {features.map((feat) => (
            <li key={feat}>{feat}</li>
          ))}
        </ul>
        <a href="#" className="lp-btn-primary" style={{ width: '100%', textAlign: 'center', display: 'block' }}>
          Begin Your Reflection
        </a>
      </div>
      </div>
    </section>
  );
};
