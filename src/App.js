import React, { useState, useEffect } from 'react';
import Header from '../src/assets/components/Header'

function App() {
  const [categories] = useState([
    'About Me', 'Work', 'Contact Me', 'Resume'
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  useEffect(() => { //DOM changes
    document.title = currentCategory;
  }, [currentCategory]);
  return (
    <div>
     <Header 
     categories={categories}
     setCurrentCategory={setCurrentCategory}
     currentCategory={currentCategory}
     />
    </div>
  );
}

export default App;
