import React from 'react'
import styled from 'styled-components';

import { ReactComponent as Linkedin } from '../assets/linkedin.svg';
import { ReactComponent as Github } from '../assets/github.svg';
import { ReactComponent as Instagram } from '../assets/instagram.svg';
import { ReactComponent as Behance } from '../assets/behance.svg';

const SocialLink = styled.div`
         display: flex;
         position: absolute;
         right: 20px;
         bottom: 0;
         > div svg {
            width: 22px;
            height: 22px;
            margin: 15px 10px;
            cursor: pointer;

            transition: all 300ms ease-in-out;

            fill: var(--black);
            &:hover {
                fill: var(--yellow);

            }
`
const SocialMedia = () => {
    return (
          <SocialLink>
                  <div>
                     <a
                        href='https://www.linkedin.com/in/ghofranebenhmaid/'
                        target='_blank'
                     >
                        <Linkedin  />
                     </a>
                  </div>
                  <div>
                     <a
                        href='https://github.com/ghofranebenhmaid'
                        target='_blank'
                     >
                        <Github />
                     </a>
                  </div>
                  <div>
                     <a
                        href='https://www.instagram.com/ghofranbenhmaid/'
                        target='_blank'
                     >
                        <Instagram />
                     </a>
                  </div>
                  <div>
                     <a
                        href='https://www.behance.net/ghofranebenhmaid'
                        target='_blank'
                     >
                        <Behance />
                     </a>
                  </div>
               </SocialLink>
    )
}

export default SocialMedia
