import './AdvanceStat.scss';
import Cards from './Cards';
import img from '../images/icon-brand-recognition.svg';
import img2 from '../images/icon-detailed-records.svg';
import img3 from '../images/icon-fully-customizable.svg';
import { Bar } from './Bar';

const AdvanceStat = () => {
  return (
    <div className="Advance">
      <h1 className="Advance-title">Advanced Statistics</h1>
      <p className="Advance-text">
        Track how your links are performing across the web with <br /> our
        advanced statistics dashboard.
      </p>
      <div className="card-content">
        <Cards
          CardImg={img}
          CardTitle="Brand
    Recognition"
          CardBody="Boost your brand recognition with each click. Generic links
    don’t mean a thing. Branded links help instil confidence in your content."
        />
        <Cards
          CardImg={img2}
          CardTitle="Detailed Records"
          CardBody="Gain insights into who is clicking your links. Knowing when
        and where people engage with your content helps inform better decisions."
        />
        <Cards
          CardImg={img3}
          CardTitle="Fully Customizable"
          CardBody="Improve brand awareness and content discoverability
        through customizable links, supercharging audience engagement."
        />
      </div>
      <Bar cls="bar" />
      <Bar cls="bar2" />
    </div>
  );
};

export default AdvanceStat;
