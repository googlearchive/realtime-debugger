
# Realtime Debugger
The realtime debugger is an application that assists developers in debugging
and inspecting their realtime document within their own applications. To
view the debugger live, open a realtime document in an application. You can use
the [realtime playground](realtimeplayground.appspot.com) to create a document.
Once the document is open in the playground, open the developer console and
run this function:

```javascript

gapi.drive.realtime.debug()

```

This will open an iframe in the current page and run the debugger application.
You may run the application locally, but it requres an appId in order to open a
realtime document.


## How to Run
1. bower install
2. python -m SimpleHTTPServer

Once running, the application waits for a postmessage with a valid oauth token.
The code below demonstrates how to send a postmessage to the applcation.

```javascript

postMessage({
	token: valid_oauth_token,
	origin: 'http://localhost:8000',
}, 'http://localhost:8000');

```

## Contributing

Before creating a pull request, please fill out either the individual or
corporate Contributor License Agreement.

* If you are an individual writing original source code and you're sure you
own the intellectual property, then you'll need to sign an
[individual CLA](http://code.google.com/legal/individual-cla-v1.0.html).
* If you work for a company that wants to allow you to contribute your work
to this client library, then you'll need to sign a
[corporate CLA](http://code.google.com/legal/corporate-cla-v1.0.html).

Follow either of the two links above to access the appropriate CLA and
instructions for how to sign and return it. Once we receive it, we'll add you
to the official list of contributors and be able to accept your patches.