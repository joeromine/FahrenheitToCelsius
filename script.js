
var converted = 0;

function convert(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/soap+xml; charset=utf-8");
    
    
    fetch("https://www.w3schools.com/xml/tempconvert.asmx",
          {
            method: 'POST',
            headers: {'Content-Type': "application/soap+xml"},
            body: `<?xml version="1.0" encoding="utf-8"?>
                   <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://www.w3.org/2003/05/soap-envelope">  
                     <soap:Body>
                       <FahrenheitToCelsius xmlns="https://www.w3schools.com/xml/">
                         <Fahrenheit>98</Fahrenheit>    
                       </FahrenheitToCelsius>
                     </soap:Body>
                  </soap:Envelope>`,
      redirect: 'follow'}).then(response => response.text()).then(result => 
        {
          converted = result.substring(result.indexOf('<FahrenheitToCelsiusResult>') + 27,result.indexOf('</FahrenheitToCelsiusResult'))
          let txt = document.createElement("h2");
          txt.innerText = converted;
          document.body.appendChild(txt);
        });
}
