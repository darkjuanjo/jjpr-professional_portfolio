import React, { useState, useEffect } from 'react';
import Header from '../src/assets/components/Header';
import Hero from '../src/assets/components/Hero';
import Me from '../src/assets/components/Me';
import Work from '../src/assets/components/Work';
import ContactMe from '../src/assets/components/ContactMe';
import Resume from '../src/assets/components/Resume';
import TheFooter from '../src/assets/components/Footer'

function App() {
  const [categories] = useState([
    'About Me', 'Work', 'Contact Me', 'Resume'
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  useEffect(() => { //DOM changes
    document.title = currentCategory;
  }, [currentCategory]);
  return (
    <div id='page-container'>
      <div id='content-wrap'>
      <Header 
     categories={categories}
     setCurrentCategory={setCurrentCategory}
     currentCategory={currentCategory}
     />
     <Hero/>
     <main>
       {
         (() => {
           switch (currentCategory) {
             case 'About Me': return <Me/>
             case 'Work': return <Work/>
             case 'Contact Me': return <ContactMe/>
             case 'Resume': return <Resume/>
             default: return 'Pending'
           }
         })()
       }
     </main>
      </div>
     <TheFooter/>
    </div>
  );
}

export default App;
