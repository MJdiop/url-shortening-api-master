import Button from './Button';
import './HeaderSection.scss';
import illustration from '../images/illustration-working.svg';

const HeaderSection = () => {
  return (
    <div className="header">
      <div className="header-desc">
        <h1 className="header-title">More than just shorter links</h1>
        <p className="header-text">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <Button Content={'Get Started'} />
      </div>

      <div className="header-img">
        <img src={illustration} alt="illustration" />
      </div>
    </div>
  );
};

export default HeaderSection;
