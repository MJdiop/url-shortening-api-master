import { useState, useEffect } from 'react';

import './Form.scss';

import Button from './Button';
import Links from './Links';
import img from '../images/giphy.gif';

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState('google.sn');
  const [data, setData] = useState('');
  const [url, setUrl] = useState(
    'https://api.shrtco.de/v2/shorten?url=google.sn'
  );

  useEffect(() => {
    const fetchData = async () => {
      await fetch(url)
        .then((res) => res.json())
        .then((d) => {
          if (d.ok === true) {
            setIsLoading(true);
            setData(d.result);
          }

          switch (d.error_code) {
            case 1:
              alert(d.error);
              setIsLoading(true);
              break;
            case 2:
              alert(d.error);
              setIsLoading(true);
              break;
            case 10:
              alert(d.error);
              setIsLoading(true);
              break;
            default:
              console.log('Working !!!');
              break;
          }
        });
    };
    fetchData();
  }, [url]);

  return (
    <div className="form">
      <form
        className="form-input"
        onSubmit={(e) => {
          setIsLoading(false);
          setUrl(`https://api.shrtco.de/v2/shorten?url=${value}`);
          e.preventDefault();
        }}
      >
        <input
          type="text"
          value={value}
          placeholder="Shorten a link here..."
          onChange={(e) => setValue(e.target.value)}
        />
        <Button Content="Shorten It!" />
      </form>

      {isLoading ? (
        <Links domaine={data.original_link} link={data.short_link} />
      ) : (
        <div className="load">
          <img src={img} alt="" />
        </div>
      )}

      {/* <Links twitter={} link={} />
      <Links linkedin={} link={} /> */}
    </div>
  );
};

export default Form;
