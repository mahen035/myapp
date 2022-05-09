import React, {useState, useRef, useEffect} from 'react';

function RefDemo(props) {
    const [inputValue, setInputValue] = useState("");
    const [isInitial, setIsInitial] = useState(true);
  const count = useRef(0);

  useEffect(() => {
      if(isInitial)
        setIsInitial(false);
      if(!isInitial)  
         count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}

export default RefDemo;