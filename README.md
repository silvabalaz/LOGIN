# REST-API
Node.js and Express framework

Handle GET and POST Request, Login

Express framework provides *router()* method to create HTTP endpoints.

 
![code](https://user-images.githubusercontent.com/6881169/98713476-f604d100-2387-11eb-8866-50afdc4e05dd.png)


When user request the app from web browser, I'll serve the HTML file (GET request).
When user click on log-in button on HTML page I'll  POST request to Server and get the response.
Express requires an additional middleware module to extract incoming data of a POST request. This middleware is called as ‘body-parser’. 


*sudo npm install --save body-parser*


![login](https://user-images.githubusercontent.com/6881169/98708535-91df0e80-2381-11eb-83a0-af5b237df362.png)

