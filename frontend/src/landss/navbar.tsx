export const Navbar = () => {
  return (
    <nav className="lp-nav">
      <div className="lp-container">
        <a href="#" className="lp-nav-logo">
          revaluate<span>180°</span>
        </a>
        <div className="lp-nav-links">
          <a href="#how">How It Works</a>
          <a href="#report">The Report</a>
          <a href="#faq">FAQ</a>
          <a href="#pricing" className="lp-nav-cta">
            Get Started — $19.99
          </a>
        </div>
      </div>
    </nav>
  );
};
