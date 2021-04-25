import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Button from './Button';
import './links.scss';

const Links = ({ domaine, link }) => {
  const [copied, setCopied] = useState(false);

  return (
    <section>
      <div className="Links">
        <span className="domaine">{domaine}</span>
        <span className="link">{link}</span>
        {copied ? (
          <span className={copied ? 'copied' : 'copy'}>
            <Button Content="copied!" />
          </span>
        ) : (
          <CopyToClipboard text={link} onCopy={() => setCopied(true)}>
            <span className="copy">
              <Button Content="copy" />
            </span>
          </CopyToClipboard>
        )}
      </div>
    </section>
  );
};

export default Links;
