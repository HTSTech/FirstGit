
  import { useEffect } from 'react'
  import axios from 'axios'
  
  export default function About() {
  
    useEffect(() => {
      //getData();
      eval(;)
    }, [])
   
    async function getData() {
      
      axios.get("./api/About").then(res=>{
        console.log("res=> ",res);
        document.getElementById("AboutID").innerHTML = res.data;
        
        //* css
        axios.post("./api/About", {"action": "Get-Css"}).then(CssRes=>{
          console.log("CssRes", CssRes);
          let createCssElement = document.createElement("style");
          // createCssElement.nodeValue = CssRes.data;
          createCssElement.appendChild(document.createTextNode(CssRes.data));
          
          document.getElementById("AboutID").appendChild(createCssElement)
          axios.post("./api/About", {"action": "Get-js"}).then(JsRes=>{
            console.log("JsRes", JsRes);
            eval(JsRes.data)
          })
        })
      })
  
    }
    
  
    return (
      <div id='AboutID'>
        <body id="igsx"><div id="irr8">About Page</div></body>
        <style>
          [object Text]
        </style>
      </div>
    )
  }