import { useState } from 'react';

const faqData = [
  {
    question: 'How long does the activity take?',
    answer:
      'The reflection takes approximately 15 minutes — a focused card-sorting exercise that surfaces your true priorities.',
  },
  {
    question: 'How is this different from Myers-Briggs or 16Personalities?',
    answer:
      'Those tools sort you into personality types. We surface your actual values — what you care about, what blocks you, and what you may have left behind. The result is specific to you.',
  },
  {
    question: 'Can I re-read my report later?',
    answer:
      'Yes — your report lives in your personal dashboard and is accessible anytime. A PDF download option is coming in a future update.',
  },
  {
    question: 'Is my data kept private?',
    answer:
      'Absolutely. Your reflection responses and report are private to you. We do not sell or share your data with third parties.',
  },
  {
    question: 'What if I want to go deeper after my report?',
    answer:
      'Optional follow-up coaching calls with certified R180 practitioners are available after you receive your report, along with a monthly insight subscription.',
  },
];

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq">
      <div className="lp-faq-bg">
        <div className="lp-container">
        <div className="lp-faq-inner">
          <p className="lp-label">Questions</p>
          <h2 className="lp-title">Everything you need to know</h2>
          <div className="lp-faq-list">
            {faqData.map((item, index) => (
              <div
                key={item.question}
                className={`lp-faq-item ${openIndex === index ? 'open' : ''}`}
                onClick={() => handleToggle(index)}
              >
                <div className="lp-faq-q">
                  {item.question}
                  <div className="lp-faq-icon"><span /></div>
                </div>
                <div className="lp-faq-a">{item.answer}</div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};
