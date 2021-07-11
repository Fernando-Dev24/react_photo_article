import React, { useState } from 'react';
import styled from 'styled-components';
import articleAuthor from './../article_avatar.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { FacebookShareButton, WhatsappShareButton, TwitterShareButton } from 'react-share';

const Author = () => {
   library.add(fab);

   const [active, setState] = useState(false);
   const showMoreOptions = (e) => {
      e.preventDefault();
      setState(!active);
   }

   return (
      <ContainerAuthor>
         <AvatarContainer>
            <img className="author" src={articleAuthor} alt="" />
            <AuthorInfo>
               <h5 className="author-name">Fernando Ortiz</h5>
               <span className="author-date">3 July, 2021</span>
            </AuthorInfo>
         </AvatarContainer>
         <article className="share-container">
            <ShareButton
               href="#"
               onClick={(e) => showMoreOptions(e)}
               isActive={active}>
               <FontAwesomeIcon icon={faShare} />
            </ShareButton>
            {active ? 
               <MoreOptions showMore>
                  <MoreOptionsContent>
                     <span className="option__label">Share</span>
                     <nav className="share__nav">
                        <FacebookShareButton className="share__option" url="https://photoarticle.netlify.app/">
                           <FontAwesomeIcon icon={['fab', 'facebook-square']} />
                        </FacebookShareButton>

                        <TwitterShareButton className="share__option" url="https://photoarticle.netlify.app/">
                           <FontAwesomeIcon icon={['fab', 'twitter']} />
                        </TwitterShareButton>
                        
                        <WhatsappShareButton className="share__option" url="https://photoarticle.netlify.app/">
                           <FontAwesomeIcon icon={['fab', 'whatsapp']} />
                        </WhatsappShareButton>
                     </nav>
                  </MoreOptionsContent>
                  <ShareButton href="#" onClick={(e) => showMoreOptions(e)}><FontAwesomeIcon icon={faShare}/></ShareButton>
               </MoreOptions>
               :
               <MoreOptions>
               <MoreOptionsContent>
                  <span className="option__label">Share</span>
                  <nav className="share__nav">
                     <FacebookShareButton className="share__option" url="https://photoarticle.netlify.app/">
                        <FontAwesomeIcon icon={['fab', 'facebook-square']} />
                     </FacebookShareButton>

                     <TwitterShareButton className="share__option" url="https://photoarticle.netlify.app/">
                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                     </TwitterShareButton>
                     
                     <WhatsappShareButton className="share__option" url="https://photoarticle.netlify.app/">
                        <FontAwesomeIcon icon={['fab', 'whatsapp']} />
                     </WhatsappShareButton>
                  </nav>
               </MoreOptionsContent>
            </MoreOptions>
            }
         </article>
      </ContainerAuthor>
   );
}

/* Styles */
const ContainerAuthor = styled.section`
   position: relative;
   display: flex;
   justify-content: space-between;
   align-items: center;
   @media screen and (max-width: 320px) {
      flex-direction: column;
   }
`;

const AvatarContainer = styled.article`
   display: flex;
   justify-content: center;
   align-items: center;

   @media screen and (max-width: 400px) {
      margin-bottom: 20px;
   }
`;

const AuthorInfo = styled.div`
   margin-left: 10px;
`;

const ShareButton = styled.a`
   padding: 7px 10px;
   font-size: .9rem;
   border-radius: 50%;
   background: rgba(0, 0, 0, .6);
   color: #FFF;
   &:hover {
      transition: all 300ms ease;
      background: rgba(0, 0, 0, .5);
   }

   @media screen and (max-width: 400px) {
      display: ${props => props.isActive ? 'none' : 'block'};
   }
`;

const MoreOptions = styled.div`
   display: ${props => props.showMore ? 'flex' : 'none'};
   justify-content: space-evenly;
   align-items: center;
   position: absolute;
   width: 100%;
   height: 100%;
   top: 0;
   left: 0;
   background: #0e2e6b;
   border-radius: 5px;

   @media screen and (max-width: 320px) {
      flex-direction: column;
      font-size: 1rem;
   }
`;

const MoreOptionsContent = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`;
 
export default Author;