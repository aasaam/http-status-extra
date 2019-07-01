# AASAAM HTTP Status Extra

[![test](https://flat.badgen.net/travis/AASAAM/http-status-extra)](https://coveralls.io/github/AASAAM/http-status-extra) [![coveralls](https://flat.badgen.net/coveralls/c/github/AASAAM/http-status-extra)](https://travis-ci.org/AASAAM/http-status-extra) [![dependencies](https://flat.badgen.net/david/dep/AASAAM/http-status-extra)](https://david-dm.org/AASAAM/http-status-extra) [![dev-dependencies](https://flat.badgen.net/david/dep/dev/AASAAM/http-status-extra)](https://david-dm.org/AASAAM/http-status-extra?type=dev)

This simple package provide more fun stuff about standards and non-standards of HTTP Status Code.

All of data collected from [wikipedia](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes).

## Contribute

Feel free to open pull request but remember simple rules:

* Emoji must be unique over status codes.
* Standard `http` must be covered by [nodejs http module](https://nodejs.org/api/http.html#http_http_status_codes).

## Data

All data stored on [data.json](./data.json).

### Standard

| Emoji | Code | Message | Description |
|---|---|---|---|
| 🏁 | **100** | `Continue` | _The server has received the request headers and the client should proceed to send the request body (in the case of a request for which a body needs to be sent; for example, a POST request). Sending a large request body to a server after a request has been rejected for inappropriate headers would be inefficient. To have a server check the request's headers, a client must send Expect: 100-continue as a header in its initial request and receive a 100 Continue status code in response before sending the body. If the client receives an error code such as 403 (Forbidden) or 405 (Method Not Allowed) then it shouldn't send the request's body. The response 417 Expectation Failed indicates that the request should be repeated without the Expect header as it indicates that the server doesn't support expectations (this is the case, for example, of HTTP/1.0 servers)._ |
| 🔌 | **101** | `Switching Protocols` | _The requester has asked the server to switch protocols and the server has agreed to do so._ |
| 🖥 | **102** | `Processing` | _A WebDAV request may contain many sub-requests involving file operations, requiring a long time to complete the request. This code indicates that the server has received and is processing the request, but no response is available yet. This prevents the client from timing out and assuming the request was lost._ |
| 🗣 | **103** | `Early Hints` | _Used to return some response headers before final HTTP message._ |
| ✅ | **200** | `OK` | _Standard response for successful HTTP requests. The actual response will depend on the request method used. In a GET request, the response will contain an entity corresponding to the requested resource. In a POST request, the response will contain an entity describing or containing the result of the action._ |
| 📝 | **201** | `Created` | _The request has been fulfilled, resulting in the creation of a new resource._ |
| 🔄 | **202** | `Accepted` | _The request has been accepted for processing, but the processing has not been completed. The request might or might not be eventually acted upon, and may be disallowed when processing occurs._ |
| 💫 | **203** | `Non-Authoritative Information` | _The server is a transforming proxy (e.g. a Web accelerator) that received a 200 OK from its origin, but is returning a modified version of the origin's response._ |
| 💭 | **204** | `No Content` | _The server successfully processed the request and is not returning any content._ |
| 🎉 | **205** | `Reset Content` | _The server successfully processed the request, but is not returning any content. Unlike a 204 response, this response requires that the requester reset the document view._ |
| 🎊 | **206** | `Partial Content` | _The server is delivering only part of the resource (byte serving) due to a range header sent by the client. The range header is used by HTTP clients to enable resuming of interrupted downloads, or split a download into multiple simultaneous streams._ |
| 🎏 | **207** | `Multi-Status` | _The message body that follows is by default an XML message and can contain a number of separate response codes, depending on how many sub-requests were made._ |
| 📢 | **208** | `Already Reported` | _The members of a DAV binding have already been enumerated in a preceding part of the (multistatus) response, and are not being included again._ |
| 📣 | **226** | `IM Used` | _The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance._ |
| 🔀 | **300** | `Multiple Choices` | _Indicates multiple options for the resource from which the client may choose (via agent-driven content negotiation). For example, this code could be used to present multiple video format options, to list files with different filename extensions, or to suggest word-sense disambiguation._ |
| 🚚 | **301** | `Moved Permanently` | _This and all future requests should be directed to the given URI._ |
| 🔎 | **302** | `Found` | _Tells the client to look at (browse to) another URL. 302 has been superseded by 303 and 307. This is an example of industry practice contradicting the standard. The HTTP/1.0 specification (RFC 1945) required the client to perform a temporary redirect (the original describing phrase was "Moved Temporarily"), but popular browsers implemented 302 with the functionality of a 303 See Other. Therefore, HTTP/1.1 added status codes 303 and 307 to distinguish between the two behaviours. However, some Web applications and frameworks use the 302 status code as if it were the 303._ |
| 📨 | **303** | `See Other` | _The response to the request can be found under another URI using the GET method. When received in response to a POST (or PUT/DELETE), the client should presume that the server has received the data and should issue a new GET request to the given URI._ |
| 💠 | **304** | `Not Modified` | _Indicates that the resource has not been modified since the version specified by the request headers If-Modified-Since or If-None-Match. In such case, there is no need to retransmit the resource since the client still has a previously-downloaded copy._ |
| 🔁 | **305** | `Use Proxy` | _The requested resource is available only through a proxy, the address for which is provided in the response. For security reasons, many HTTP clients (such as Mozilla Firefox and Internet Explorer) do not obey this status code._ |
| ℹ️ | **307** | `Temporary Redirect` | _In this case, the request should be repeated with another URI; however, future requests should still use the original URI. In contrast to how 302 was historically implemented, the request method is not allowed to be changed when reissuing the original request. For example, a POST request should be repeated using another POST request._ |
| 🆕 | **308** | `Permanent Redirect` | _The request and all future requests should be repeated using another URI. 307 and 308 parallel the behaviors of 302 and 301, but do not allow the HTTP method to change. So, for example, submitting a form to a permanently redirected resource may continue smoothly._ |
| 🚫 | **400** | `Bad Request` | _The server cannot or will not process the request due to an apparent client error (e.g., malformed request syntax, size too large, invalid request message framing, or deceptive request routing)._ |
| 🔐 | **401** | `Unauthorized` | _Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided. The response must include a WWW-Authenticate header field containing a challenge applicable to the requested resource. See Basic access authentication and Digest access authentication. 401 semantically means "unauthorised" , the user does not have valid authentication credentials for the target resource._ |
| 💰 | **402** | `Payment Required` | _Reserved for future use. The original intention was that this code might be used as part of some form of digital cash or micropayment scheme, as proposed, for example, by GNU Taler, but that has not yet happened, and this code is not usually used. Google Developers API uses this status if a particular developer has exceeded the daily limit on requests. Sipgate uses this code if an account does not have sufficient funds to start a call. Shopify uses this code when the store has not paid their fees and is temporarily disabled._ |
| ⛔ | **403** | `Forbidden` | _The request was valid, but the server is refusing action. The user might not have the necessary permissions for a resource, or may need an account of some sort. This code is also typically used if the request provided authentication via the WWW-Authenticate header field, but the server did not accept that authentication._ |
| ❓ | **404** | `Not Found` | _The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible._ |
| ❗ | **405** | `Method Not Allowed` | _A request method is not supported for the requested resource; for example, a GET request on a form that requires data to be presented via POST, or a PUT request on a read-only resource._ |
| 🛡 | **406** | `Not Acceptable` | _The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request. See Content negotiation._ |
| 🔩 | **407** | `Proxy Authentication Required` | _The client must first authenticate itself with the proxy._ |
| ⌛️ | **408** | `Request Timeout` | _The server timed out waiting for the request. According to HTTP specifications: "The client did not produce a request within the time that the server was prepared to wait. The client MAY repeat the request without modifications at any later time."_ |
| 💥 | **409** | `Conflict` | _Indicates that the request could not be processed because of conflict in the current state of the resource, such as an edit conflict between multiple simultaneous updates._ |
| 💨 | **410** | `Gone` | _Indicates that the resource requested is no longer available and will not be available again. This should be used when a resource has been intentionally removed and the resource should be purged. Upon receiving a 410 status code, the client should not request the resource in the future. Clients such as search engines should remove the resource from their indices. Most use cases do not require clients and search engines to purge the resource, and a "404 Not Found" may be used instead._ |
| 📏 | **411** | `Length Required` | _The request did not specify the length of its content, which is required by the requested resource._ |
| 🛑 | **412** | `Precondition Failed` | _The server does not meet one of the preconditions that the requester put on the request header fields._ |
| 🗃 | **413** | `Payload Too Large` | _The request is larger than the server is willing or able to process. Previously called "Request Entity Too Large"._ |
| 🆖 | **414** | `URI Too Long` | _The URI provided was too long for the server to process. Often the result of too much data being encoded as a query-string of a GET request, in which case it should be converted to a POST request. Called "Request-URI Too Long" previously._ |
| 📼 | **415** | `Unsupported Media Type` | _The request entity has a media type which the server or resource does not support. For example, the client uploads an image as image/svg+xml, but the server requires that images use a different format._ |
| 📐 | **416** | `Range Not Satisfiable` | _The client has asked for a portion of the file (byte serving), but the server cannot supply that portion. For example, if the client asked for a part of the file that lies beyond the end of the file. Called "Requested Range Not Satisfiable" previously._ |
| 🤔 | **417** | `Expectation Failed` | _The server cannot meet the requirements of the Expect request-header field._ |
| 🍵 | **418** | `I'm a Teapot` | _This code was defined in 1998 as one of the traditional IETF April Fools' jokes, in RFC 2324, Hyper Text Coffee Pot Control Protocol, and is not expected to be implemented by actual HTTP servers. The RFC specifies this code should be returned by teapots requested to brew coffee. This HTTP status is used as an Easter egg in some websites, including Google.com._ |
| 🔂 | **421** | `Misdirected Request` | _The request was directed at a server that is not able to produce a response (for example because of connection reuse)._ |
| 💩 | **422** | `Unprocessable Entity` | _The request was well-formed but was unable to be followed due to semantic errors._ |
| 🔒 | **423** | `Locked` | _The resource that is being accessed is locked._ |
| 😒 | **424** | `Failed Dependency` | _The request failed because it depended on another request and that request failed (e.g., a PROPPATCH)._ |
| ⏱ | **425** | `Unordered Collection` | _Indicates that the server is unwilling to risk processing a request that might be replayed._ |
| 📤 | **426** | `Upgrade Required` | _The client should switch to a different protocol such as TLS/1.0, given in the Upgrade header field._ |
| ⛓ | **428** | `Precondition Required` | _The origin server requires the request to be conditional. Intended to prevent the 'lost update' problem, where a client GETs a resource's state, modifies it, and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict._ |
| 🌋 | **429** | `Too Many Requests` | _The user has sent too many requests in a given amount of time. Intended for use with rate-limiting schemes._ |
| 🤮 | **431** | `Request Header Fields Too Large` | _The server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large._ |
| 🔏️ | **451** | `Unavailable For Legal Reasons` | _A server operator has received a legal demand to deny access to a resource or to a set of resources that includes the requested resource. The code 451 was chosen as a reference to the novel Fahrenheit 451 (see the Acknowledgements in the RFC)._ |
| 💣 | **500** | `Internal Server Error` | _A generic error message, given when an unexpected condition was encountered and no more specific message is suitable._ |
| 📭 | **501** | `Not Implemented` | _The server either does not recognize the request method, or it lacks the ability to fulfil the request. Usually this implies future availability (e.g., a new feature of a web-service API)._ |
| 🚧 | **502** | `Bad Gateway` | _The server was acting as a gateway or proxy and received an invalid response from the upstream server._ |
| 🚨 | **503** | `Service Unavailable` | _The server cannot handle the request (because it is overloaded or down for maintenance). Generally, this is a temporary state._ |
| ⏲ | **504** | `Gateway Timeout` | _The server was acting as a gateway or proxy and did not receive a timely response from the upstream server._ |
| 🕯 | **505** | `HTTP Version Not Supported` | _The server does not support the HTTP protocol version used in the request._ |
| 💔 | **506** | `Variant Also Negotiates` | _Transparent content negotiation for the request results in a circular reference._ |
| 💯 | **507** | `Insufficient Storage` | _The server is unable to store the representation needed to complete the request._ |
| ➰ | **508** | `Loop Detected` | _The server detected an infinite loop while processing the request (sent instead of 208 Already Reported)._ |
| 📈 | **509** | `Bandwidth Limit Exceeded` | _The server has exceeded the bandwidth specified by the server administrator; this is often used by shared hosting providers to limit the bandwidth of customers._ |
| 🏗 | **510** | `Not Extended` | _Further extensions to the request are required for the server to fulfil it._ |
| 🔑 | **511** | `Network Authentication Required` | _The client needs to authenticate to gain network access. Intended for use by intercepting proxies used to control access to the network (e.g., "captive portals" used to require agreement to Terms of Service before granting full Internet access via a Wi-Fi hotspot)._ |

### Non-Standards

| Emoji | Code | Message | Standard | Description |
|---|---|---|---|---|
| 🆗 | **218** | `This is fine` | unofficial | _Used as a catch-all error condition for allowing response bodies to flow through Apache when ProxyErrorOverride is enabled. When ProxyErrorOverride is enabled in Apache, response bodies that contain a status code of 4xx or 5xx are automatically discarded by Apache in favor of a generic response or a custom response specified by the ErrorDocument directive._ |
| 🔃 | **306** | `Switch Proxy` | unofficial | _No longer used. Originally meant "Subsequent requests should use the specified proxy."_ |
| 🕰 | **419** | `Page Expired` | unofficial | _Used by the Laravel Framework when a CSRF Token is missing or expired._ |
| 🤖 | **420** | `Method Failure` | unofficial | _A deprecated response used by the Spring Framework when a method has failed._ |
| 🛂 | **440** | `Login Time` | iis | _The client's session has expired and must log in again._ |
| 🗑 | **444** | `No Response` | nginx | _Used internally to instruct the server to return no information to the client and close the connection immediately._ |
| 🛃 | **449** | `Retry With` | iis | _The server cannot honour the request because the user has not provided the required information._ |
| 🔞 | **450** | `Blocked by Windows Parental Controls` | unofficial | _The Microsoft extension code indicated when Windows Parental Controls are turned on and are blocking access to the requested webpage._ |
| 🐳 | **494** | `Request header too large` | nginx | _Client sent too large request or too long header line._ |
| 🏅 | **495** | `SSL Certificate Error` | nginx | _An expansion of the 400 Bad Request response code, used when the client has provided an invalid client certificate._ |
| 🏷 | **496** | `SSL Certificate Required` | nginx | _An expansion of the 400 Bad Request response code, used when a client certificate is required but not provided._ |
| ❎ | **497** | `HTTP Request Sent to HTTPS Port` | nginx | _An expansion of the 400 Bad Request response code, used when the client has made a HTTP request to a port listening for HTTPS requests._ |
| 🆔 | **498** | `Invalid Token` | unofficial | _Returned by ArcGIS for Server. Code 498 indicates an expired or otherwise invalid token._ |
| 🚶🏽 | **499** | `Token Required` | nginx | _Returned by ArcGIS for Server. Code 499 indicates that a token is required but was not submitted._ |
| 🔴 | **520** | `Unknown Error` | cloudflare | _The 520 error is used as a "catch-all response for when the origin server returns something unexpected", listing connection resets, large headers, and empty or invalid responses as common triggers._ |
| 💤 | **521** | `Web Server Is Down` | cloudflare | _The origin server has refused the connection from Cloudflare._ |
| ⌚️ | **522** | `Connection Timed Out` | cloudflare | _Cloudflare could not negotiate a TCP handshake with the origin server._ |
| 🏚 | **523** | `Origin Is Unreachable` | cloudflare | _Cloudflare could not reach the origin server; for example, if the DNS records for the origin server are incorrect._ |
| ⏰ | **524** | `A Timeout Occurred` | cloudflare | _Cloudflare was able to complete a TCP connection to the origin server, but did not receive a timely HTTP response._ |
| 🤝 | **525** | `SSL Handshake Failed` | cloudflare | _Cloudflare could not negotiate a SSL/TLS handshake with the origin server._ |
| 🚑 | **526** | `Invalid SSL Certificate` | cloudflare | _Used by Cloudflare and Cloud Foundry's gorouter to indicate failure to validate the SSL/TLS certificate that the origin server presented._ |
| 🔘 | **527** | `Railgun Error` | cloudflare | _Error 527 indicates that the request timed out or failed after the WAN connection had been established._ |
| 🌨 | **530** | `Site is frozen` | cloudflare | _Used by the Pantheon web platform to indicate a site that has been frozen due to inactivity._ |
| 🥀 | **598** | `Network read timeout error` | unofficial | _Used by some HTTP proxies to signal a network read timeout behind the proxy to a client in front of the proxy._ |
