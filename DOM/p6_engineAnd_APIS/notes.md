The XMLHttpRequest API enables web apps to make HTTP requests to web servers and receive the responses programmatically using JavaScript. This in turn enables a website to update just part of a page with data from the server, rather than having to navigate to a whole new page. This practice is also sometimes known as Ajax.

The Fetch API is the more flexible and powerful replacement for the XMLHttpRequest API. The Fetch API uses promises instead of events to handle asynchronous responses, integrates well with service workers, and supports advanced aspects of HTTP such as CORS. For these reasons, the Fetch API is usually used in modern web apps instead of XMLHttpRequest.


Concepts and usage
The central interface in the XMLHttpRequest API is XMLHttpRequest. To make an HTTP request:

1.Create a new XMLHttpRequest instance by calling its constructor.
2.Initialize it by calling XMLHttpRequest.open(). At this point you provide the URL for the request, the HTTP method to use, and optionally, a username and password.
3.Attach event handlers to get the result of the request. For example, the load event is fired when the request has successfully completed, and the error event is fired in various error conditions.
4.Send the request by calling XMLHttpRequest.send().


HTTP Request Methods
GET: The GET request is used to retrieve data from the server. It is the most common type of API request and is used to fetch information.
POST: The POST request is used to send data to the server to create a new resource or update an existing one.
PUT: The PUT request is used to update an existing resource on the server. It replaces the entire resource with the new data provided in the request.
PATCH: The PATCH request is used to update a partial resource on the server. It only updates the specific fields that are provided in the request.
DELETE: The DELETE request is used to delete a resource from the server.


The numbers 0, 1, 2, 3, and 4 typically refer to different states or ready states of the XMLHttpRequest object. Here’s what each of these states means:

Ready States of XMLHttpRequest:
0 (UNSENT):
The XMLHttpRequest object has been created, but the open() method has not been called yet.
This is the initial state.

1 (OPENED):
The open() method has been called. During this state, you can set request headers using setRequestHeader() and specify the URL with the method.

2 (HEADERS_RECEIVED):

The open() method has been successfully called and the headers of the response have been received.
At this point, the getResponseHeader() method can be called to get the headers.

3 (LOADING):
The response is being received. xhr.responseText holds partial data.
This state can be used to show a progress indicator.

4 (DONE):

The operation is complete.
This is when the response data has been completely received.
Example of Checking Ready State:
javascript



var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true);

xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            console.log(xhr.responseText); // output response
        } else {
            console.error('Request failed with status', xhr.status);
        }
    }
};

xhr.send();
In this example:

xhr.onreadystatechange: This property holds the event handler to be called when the readystatechange event is fired, that is, the readyState attribute of the XMLHttpRequest changes.

xhr.readyState: This property returns the state of the request as an integer.

xhr.readyState === XMLHttpRequest.DONE: This statement checks if the request is complete.






