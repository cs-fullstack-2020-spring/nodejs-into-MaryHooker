//stupid simple web service
//reference to the class of http and created an instance to hang onto
let http = require('http');

// function receivedWebRequest()
// {

// }


//create a simple web service
let myNewServer = http.createServer(

    //callback function
    //inline version
    //takes request and response parameters
    (req, res) => {
        //told the browser that its html so it will run the below string
        res.writeHead(200,{'Content-Type':'text/html'})
        
        res.end("<h2>Yoohoo Worldoo!</h2>");
    }

    // receivedWebRequest(request,response)
)

//Launch the web service
//listen takes two parameters..(which port,what host)
myNewServer.listen(2112,'localhost');

//sanity
console.log(`Server running on port 2112`);