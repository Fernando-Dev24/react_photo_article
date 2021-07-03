import React from 'react';
import styled from 'styled-components';
import Author from './Author';

const ArticleContent = () => {
   return (
      <Container>
         <Title>A human invention that, perfectly, could be similar to the God's creation</Title>
         <HookText>Yes, I refer to a camera. I mean, it was created by a human being, and perhaps, could be similar to our eyes. One of my favorites hobbies and where, for a foreign reason; I found peace when you think about how perfect we were created.</HookText>
         <Author />
      </Container>
   );
}

const Container = styled.section`
   padding: 60px;
`;

const Title = styled.h4`
   font-size: 1.1rem;
   line-height: 1.5rem;
   color: #222;
`;

const HookText = styled.p`
   margin: 30px 0 60px 0;
   font-size: 0.9rem;
   line-height: 1.5rem;
   color: rgba(0, 0, 0, .6);
`;

export default ArticleContent;