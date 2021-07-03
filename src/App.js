import React from 'react';
import ArticleImage from './components/ArticleImage';
import ArticleContent from './components/ArticleContent';

function App() {
  return (
    <main className="wrapper">
      <section className="cardSection">
        <ArticleImage />
      </section>
      
      <section className="cardSection">
        <ArticleContent />
      </section>
    </main>    
  );
}

export default App;