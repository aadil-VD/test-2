const testimonials = [
  {
    quote:
      "I've done Myers-Briggs, StrengthsFinder, everything. This was the first one that made me feel genuinely seen — not sorted into a box.",
    name: 'Sarah M.',
    role: 'Marketing Director, 34',
  },
  {
    quote:
      "The 'Shoulder Blocker' section hit harder than six months of therapy. It opened up a conversation we'd been avoiding for years.",
    name: 'James T.',
    role: 'Engineer, 29',
  },
  {
    quote:
      'I was sceptical of a $20 insight report. The writing is beautiful and it genuinely changed how I think about my decisions.',
    name: 'Priya K.',
    role: 'Student, 22',
  },
];

export const Testimonials = () => {
  return (
    <section>
      <div className="lp-testi-bg">
        <div className="lp-container">
          <p className="lp-label">From people like you</p>
          <h2 className="lp-title">What others discovered</h2>
          <div className="lp-testi-grid">
            {testimonials.map((t) => (
              <div key={t.name} className="lp-testi">
                <p>&ldquo;{t.quote}&rdquo;</p>
                <div className="lp-testi-author">
                  <strong>{t.name}</strong>
                  {t.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
