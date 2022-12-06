import React from "react";

function App() {

  return(
    <>
    <div> React Framework</div>;
    <img 
    src ='https://kobaltsolutions.com/wp-content/uploads/2021/04/Screen-Shot-2021-04-08-at-4.06.03-PM.png'/>
    
    <h2> App Installation:  </h2>
    <h3> 
      At the beggining, I needed Node and npm since React uses these to run. 
      With the command "npx create-react-app lab10", a public source with an html file and directory called src were formed. 
      Also all of the javascript files were created inside the src folder.
      One of the files in src folder is called "App" which is like the root of the programs. 
      I also needed to refrence it in "Index.html" with "id=root". 
    </h3>
    <h2> Page Construction:</h2>
    <h3>
      With one html and tow javascript files, I was able to build this page in React framework.
      In "Index.js", with the command "ReactDOM.render(<App />,document.getElementById('root'))", everything gets combined and the result will return to function App. 

    </h3>
    <h2>Encountered Issues: </h2>
    <h3>
      First of all, the requirements for this framework are a lot. 
      I had to install Node and npm. 
      In addition, it needs compliling to deploy, which leads to a server with Node installed on it. 
      So I had to create an Github acount and generated tow public and private keys on my pc. 
      Then transferred my public key to Github to authenticate my pc. 
      After, I built a repository to store the React code. 
      In the package "json" file, under "script" objects, I added the "deploy" and "predeploy" steps. 
      So "npm run build" and "gh-pages -d build" coomands could be run. 
      I also had to add "homepage" to be my Github URL. 
      
    </h3>



    </>

  ) 

}

export default App;