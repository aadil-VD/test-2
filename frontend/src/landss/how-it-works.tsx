const steps = [
  {
    number: '01',
    title: 'Complete the Activity',
    description:
      'A guided 15-minute card-sorting reflection that surfaces what you truly value — not what you think you should value. Simple, intuitive, revealing.',
    showDivider: true,
  },
  {
    number: '02',
    title: 'Receive Your Report',
    description:
      'Instantly receive a personalised 600-word report drawing on your unique value profile — your strengths, patterns, and blockers.',
    showDivider: true,
  },
  {
    number: '03',
    title: 'Live With Intention',
    description:
      'Walk away with a clear picture of what happiness looks like for you — and the practical language to start making decisions that align with it.',
    showDivider: false,
  },
];

export const HowItWorks = () => {
  return (
    <section id="how" className="lp-section">
      <div className="lp-container">
        <p className="lp-label">The Process</p>
        <h2 className="lp-title">
          Three steps to
          <br />
          understanding yourself
        </h2>
        <p className="lp-sub">
          No lengthy questionnaires. No ambiguous charts. Just a focused reflection activity built on
          20 years of values research.
        </p>

        <div className="lp-steps">
          {steps.map((step) => (
            <div key={step.number} className="lp-step">
              <div className="lp-step-n">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {step.showDivider && <div className="lp-step-div" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
