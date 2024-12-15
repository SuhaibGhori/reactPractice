import React from 'react';  // Use single or double quotes
import ReactDOM from 'react-dom';  // Correct spelling and quotes

const Rootdiv = document.getElementById('root');  // Single quotes for the ID

ReactDOM.createRoot(Rootdiv).render(
  <div>
    <h1>REACT JS</h1>
    <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/> Mollitia, necessitatibus aliquam totam quae ipsam sed,<br/> voluptatum ipsum est eum, ullam dignissimos explicabo voluptates <br/> et sapiente? Earum aliquid neque a error.</p>
    <img width={500} src="https://pixlr.com/images/generator/how-to-generate.webp"/>
    
    <p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
  Vivamus lacinia odio vitae vestibulum.<br />
  Cras venenatis euismod malesuada.
</p>
<button>submit</button>

  </div>
);
