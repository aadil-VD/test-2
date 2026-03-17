const receiveItems = [
  {
    icon: '◈',
    title: 'Your Core Value Profile',
    description:
      'The values driving your decisions — including the ones you may have lost or forgotten along the way.',
  },
  {
    icon: '◉',
    title: 'Your Value Blockers',
    description:
      'The four behavioural patterns quietly working against your happiness — named, explained, made actionable.',
  },
  {
    icon: '◎',
    title: 'Your Happiness Blueprint',
    description:
      'A clear narrative about what fulfilment looks like for you — and the specific shifts that will unlock it.',
  },
];

export const WhatYouReceive = () => {
  return (
    <section id="report">
      <div className="lp-receive-bg">
        <div className="lp-container">
          <div className="lp-receive-grid">
            <div>
              <p className="lp-label">What You Receive</p>
              <h2 className="lp-title">
                A report written
                <br />
                just for you
              </h2>
              <p className="lp-sub">
                Generated from your unique value map — not a personality bucket shared with millions
                of others.
              </p>
              <div className="lp-receive-items">
                {receiveItems.map((item) => (
                  <div key={item.title} className="lp-r-item">
                    <div className="lp-r-icon">{item.icon}</div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lp-receive-img">
              <img src="/glob.png" alt="Horoscope of Happiness Globe" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
