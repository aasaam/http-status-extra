# HTTP Status Extra Preview

## 1xx Information

1xx codes are often interim responses for sharing connection status information. Not intended for final request or response action.

### Standard 1xx Information

| Emoji | Code    | Message               | Description                                                                                                                                                                                     |
| ----- | ------- | --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🏁     | **100** | `Continue`            | _The server has received the request headers, and the client should proceed to send the request body._                                                                                          |
| 🔌     | **101** | `Switching Protocols` | _The requester has asked the server to switch protocols._                                                                                                                                       |
| 🖥     | **102** | `Processing`          | _This code indicates that the server has received and is processing the request, but no response is available yet. This prevents the client from timing out and assuming the request was lost._ |
| 🗣     | **103** | `Early Hints`         | _Used to return some response headers before final HTTP message._                                                                                                                               |

## 2xx Successful

2xx codes indicate successful responses usually this means the action requested by the client was received, understood and accepted successfully.

### Standard 2xx Successful

| Emoji | Code    | Message                         | Description                                                                                                                                                                      |
| ----- | ------- | ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ✅     | **200** | `OK`                            | _The request is OK (this is the standard response for successful HTTP requests)._                                                                                                |
| 📝     | **201** | `Created`                       | _The request has been fulfilled, and a new resource is created._                                                                                                                 |
| 🔄     | **202** | `Accepted`                      | _The request has been accepted for processing, but the processing has not been completed._                                                                                       |
| 💫     | **203** | `Non-Authoritative Information` | _The request has been successfully processed, but is returning information that may be from another source._                                                                     |
| 💭     | **204** | `No Content`                    | _The request has been successfully processed, but is not returning any content._                                                                                                 |
| 🎉     | **205** | `Reset Content`                 | _The request has been successfully processed, but is not returning any content, and requires that the requester reset the document view._                                        |
| 🎊     | **206** | `Partial Content`               | _The server is delivering only part of the resource due to a range header sent by the client._                                                                                   |
| 🎏     | **207** | `Multi-Status`                  | _The message body that follows is by default an XML message and can contain a number of separate response codes, depending on how many sub-requests were made._                  |
| 📢     | **208** | `Already Reported`              | _The members of a DAV binding have already been enumerated in a preceding part of the (multistatus) response, and are not being included again._                                 |
| 📣     | **226** | `IM Used`                       | _The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance._ |

### Non-Standard 2xx Successful

| Emoji | Code    | Message        | Standard   | Description                                                                                                                   |
| ----- | ------- | -------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------- |
| 🆗     | **218** | `This is fine` | unofficial | _Used as a catch-all error condition for allowing response bodies to flow through Apache when ProxyErrorOverride is enabled._ |

## 3xx Redirection

3xx codes are a class of responses that suggest the User-Agent must follow another course of action to obtain the complete requested resource.

### Standard 3xx Redirection

| Emoji | Code    | Message              | Description                                                                                |
| ----- | ------- | -------------------- | ------------------------------------------------------------------------------------------ |
| 🔀     | **300** | `Multiple Choices`   | _A link list. The user can select a link and go to that location. Maximum five addresses._ |
| 🚚     | **301** | `Moved Permanently`  | _The requested page has moved to a new URL._                                               |
| 🔎     | **302** | `Found`              | _The requested page has moved temporarily to a new URL._                                   |
| 📨     | **303** | `See Other`          | _The requested page can be found under a different URL._                                   |
| 💠     | **304** | `Not Modified`       | _Indicates the requested page has not been modified since last requested._                 |
| ℹ️     | **307** | `Temporary Redirect` | _The requested page has moved temporarily to a new URL._                                   |
| 🆕     | **308** | `Permanent Redirect` | _Used in the resumable requests proposal to resume aborted PUT or POST requests._          |

### Non-Standard 3xx Redirection

| Emoji | Code    | Message        | Standard   | Description                                                                              |
| ----- | ------- | -------------- | ---------- | ---------------------------------------------------------------------------------------- |
| 🔃     | **306** | `Switch Proxy` | unofficial | _No longer used. Originally meant "Subsequent requests should use the specified proxy."_ |

## 4xx Client Error

4xx codes generally are error responses specifying an issue at the client’s end. Potentially a network issue.

### Standard 4xx Client Error

| Emoji | Code    | Message                           | Description                                                                                                                                                      |
| ----- | ------- | --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🚫     | **400** | `Bad Request`                     | _The request cannot be fulfilled due to bad syntax._                                                                                                             |
| 🔐     | **401** | `Unauthorized`                    | _The request was a legal request, but the server is refusing to respond to it. For use when authentication is possible but has failed or not yet been provided._ |
| 💰     | **402** | `Payment Required`                | _Not yet implemented by RFC standards, but reserved for future use._                                                                                             |
| ⛔     | **403** | `Forbidden`                       | _The request was a legal request, but the server is refusing to respond to it._                                                                                  |
| ❓     | **404** | `Not Found`                       | _The requested page could not be found but may be available again in the future._                                                                                |
| ❗     | **405** | `Method Not Allowed`              | _A request was made of a page using a request method not supported by that page._                                                                                |
| 🛡     | **406** | `Not Acceptable`                  | _The server can only generate a response that is not accepted by the client._                                                                                    |
| 🔩     | **407** | `Proxy Authentication Required`   | _The client must first authenticate itself with the proxy._                                                                                                      |
| ⌛️     | **408** | `Request Timeout`                 | _The server timed out waiting for the request._                                                                                                                  |
| 💥     | **409** | `Conflict`                        | _The request could not be completed because of a conflict in the request._                                                                                       |
| 💨     | **410** | `Gone`                            | _The requested page is no longer available._                                                                                                                     |
| 📏     | **411** | `Length Required`                 | _The "Content-Length" is not defined. The server will not accept the request without it._                                                                        |
| 🛑     | **412** | `Precondition Failed`             | _The precondition given in the request evaluated to false by the server._                                                                                        |
| 🗃     | **413** | `Payload Too Large`               | _The server will not accept the request, because the request entity is too large._                                                                               |
| 🆖     | **414** | `URI Too Long`                    | _The server will not accept the request, because the URL is too long. Occurs when you convert a POST request to a GET request with a long query information._    |
| 📼     | **415** | `Unsupported Media Type`          | _The server will not accept the request, because the media type is not supported._                                                                               |
| 📐     | **416** | `Range Not Satisfiable`           | _The client has asked for a portion of the file, but the server cannot supply that portion._                                                                     |
| 🤔     | **417** | `Expectation Failed`              | _The server cannot meet the requirements of the Expect request-header field._                                                                                    |
| 🍵     | **418** | `I'm a Teapot`                    | _Any attempt to brew coffee with a teapot should result in the error code "418 I'm a teapot". The resulting entity body MAY be short and stout._                 |
| 🔂     | **421** | `Misdirected Request`             | _The request was directed at a server that is not able to produce a response (for example because a connection reuse)._                                          |
| 💩     | **422** | `Unprocessable Entity`            | _The request was well-formed but was unable to be followed due to semantic errors._                                                                              |
| 🔒     | **423** | `Locked`                          | _The resource that is being accessed is locked._                                                                                                                 |
| 😒     | **424** | `Failed Dependency`               | _The request failed due to failure of a previous request._                                                                                                       |
| 📤     | **426** | `Upgrade Required`                | _The client should switch to a different protocol such as TLS/1.0, given in the Upgrade header field._                                                           |
| ⛓     | **428** | `Precondition Required`           | _The origin server requires the request to be conditional._                                                                                                      |
| 🌋     | **429** | `Too Many Requests`               | _The user has sent too many requests in a given amount of time. Intended for use with rate limiting schemes._                                                    |
| 🤮     | **431** | `Request Header Fields Too Large` | _The server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large._                |
| 🔏️     | **451** | `Unavailable For Legal Reasons`   | _A server operator has received a legal demand to deny access to a resource or to a set of resources that includes the requested resource._                      |

### Non-Standard 4xx Client Error

| Emoji | Code    | Message                                | Standard             | Description                                                                                                                                                                       |
| ----- | ------- | -------------------------------------- | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🕰     | **419** | `Page Expired`                         | unofficial           | _Used by the Laravel Framework when a CSRF Token is missing or expired._                                                                                                          |
| 🤖     | **420** | `Method Failure`                       | unofficial           | _A deprecated response used by the Spring Framework when a method has failed._                                                                                                    |
| 🚮     | **437** | `Legacy browser`                       | aasaam               | _Your request was blocked because you are using outdated browser. Try to download new version of most secure and standard browser._                                               |
| 📛     | **438** | `Intrusion Detected`                   | aasaam               | _Your request was blocked by Web Application Firewall (WAF)._                                                                                                                     |
| 🚷     | **439** | `Access denied`                        | aasaam               | _Your request was blocked by access rules._                                                                                                                                       |
| 🛂     | **440** | `Login Time`                           | iis                  | _The client's session has expired and must log in again. (IIS)_                                                                                                                   |
| 🗑     | **444** | `No Response`                          | nginx                | _A non-standard status code used to instruct nginx to close the connection without sending a response to the client, most commonly used to deny malicious or malformed requests._ |
| 🛃     | **449** | `Retry With`                           | iis                  | _The server cannot honour the request because the user has not provided the required information. (IIS)_                                                                          |
| 🔞     | **450** | `Blocked by Windows Parental Controls` | unofficial           | _The Microsoft extension code indicated when Windows Parental Controls are turned on and are blocking access to the requested webpage._                                           |
| ⏱     | **460** | `Client closed the connection`         | elasticloadbalancing | _Client closed the connection with the load balancer before the idle timeout period elapsed. Typically when client timeout is sooner than the Elastic Load Balancer's timeout._   |
| 🌡     | **463** | `X-Forwarded-For is to long`           | elasticloadbalancing | _The load balancer received an X-Forwarded-For request header with more than 30 IP addresses._                                                                                    |
| 🐳     | **494** | `Request header too large`             | nginx                | _Used by nginx to indicate the client sent too large of a request or header line that is too long._                                                                               |
| 🏅     | **495** | `SSL Certificate Error`                | nginx                | _An expansion of the 400 Bad Request response code, used when the client has provided an invalid client certificate._                                                             |
| 🏷     | **496** | `SSL Certificate Required`             | nginx                | _An expansion of the 400 Bad Request response code, used when a client certificate is required but not provided._                                                                 |
| ❎     | **497** | `HTTP Request Sent to HTTPS Port`      | nginx                | _An expansion of the 400 Bad Request response code, used when the client has made a HTTP request to a port listening for HTTPS requests._                                         |
| 🆔     | **498** | `Invalid Token`                        | unofficial           | _Returned by ArcGIS for Server. Code 498 indicates an expired or otherwise invalid token._                                                                                        |
| 🚶🏽     | **499** | `Client Closed Request`                | nginx                | _A non-standard status code introduced by nginx for the case when a client closes the connection while nginx is processing the request._                                          |

## 5xx Server Error

5xx error codes indicate that an error or unresolvable request occurred on the server side, whether that is a proxy or the origin host.

### Standard 5xx Server Error

| Emoji | Code    | Message                           | Description                                                                                                                                                        |
| ----- | ------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 💣     | **500** | `Internal Server Error`           | _An error has occurred in a server side script, a no more specific message is suitable._                                                                           |
| 📭     | **501** | `Not Implemented`                 | _The server either does not recognize the request method, or it lacks the ability to fulfill the request._                                                         |
| 🚧     | **502** | `Bad Gateway`                     | _The server was acting as a gateway or proxy and received an invalid response from the upstream server._                                                           |
| 🚨     | **503** | `Service Unavailable`             | _The server is currently unavailable (overloaded or down)._                                                                                                        |
| ⏲     | **504** | `Gateway Timeout`                 | _The server was acting as a gateway or proxy and did not receive a timely response from the upstream server._                                                      |
| 🕯     | **505** | `HTTP Version Not Supported`      | _The server does not support the HTTP protocol version used in the request._                                                                                       |
| 💔     | **506** | `Variant Also Negotiates`         | _Transparent content negotiation for the request results in a circular reference._                                                                                 |
| 💯     | **507** | `Insufficient Storage`            | _The server is unable to store the representation needed to complete the request._                                                                                 |
| ➰     | **508** | `Loop Detected`                   | _The server detected an infinite loop while processing the request (sent instead of 208 Already Reported)._                                                        |
| 📈     | **509** | `Bandwidth Limit Exceeded`        | _The server has exceeded the bandwidth specified by the server administrator; this is often used by shared hosting providers to limit the bandwidth of customers._ |
| 🏗     | **510** | `Not Extended`                    | _Further extensions to the request are required for the server to fulfil it._                                                                                      |
| 🔑     | **511** | `Network Authentication Required` | _The client needs to authenticate to gain network access._                                                                                                         |

### Non-Standard 5xx Server Error

| Emoji | Code    | Message                      | Standard   | Description                                                                                                                                                                                             |
| ----- | ------- | ---------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🔴     | **520** | `Unknown Error`              | cloudflare | _The 520 error is used as a "catch-all response for when the origin server returns something unexpected", listing connection resets, large headers, and empty or invalid responses as common triggers._ |
| 💤     | **521** | `Web Server Is Down`         | cloudflare | _The origin server has refused the connection from Cloudflare._                                                                                                                                         |
| ⌚️     | **522** | `Connection Timed Out`       | cloudflare | _Cloudflare could not negotiate a TCP handshake with the origin server._                                                                                                                                |
| 🏚     | **523** | `Origin Is Unreachable`      | cloudflare | _Cloudflare could not reach the origin server; for example, if the DNS records for the origin server are incorrect._                                                                                    |
| ⏰     | **524** | `A Timeout Occurred`         | cloudflare | _Cloudflare was able to complete a TCP connection to the origin server, but did not receive a timely HTTP response._                                                                                    |
| 🤝     | **525** | `SSL Handshake Failed`       | cloudflare | _Cloudflare could not negotiate a SSL/TLS handshake with the origin server._                                                                                                                            |
| 🚑     | **526** | `Invalid SSL Certificate`    | cloudflare | _Used by Cloudflare and Cloud Foundry's gorouter to indicate failure to validate the SSL/TLS certificate that the origin server presented._                                                             |
| 🔘     | **527** | `Railgun Error`              | cloudflare | _Error 527 indicates that the request timed out or failed after the WAN connection had been established._                                                                                               |
| 🌨     | **530** | `Site is frozen`             | cloudflare | _Error 530 indicates that the requested host name could not be resolved on the Cloudflare network to an origin server._                                                                                 |
| 📜     | **538** | `Temporary down`             | aasaam     | _According to contract, service not available. Call the support for more information._                                                                                                                  |
| 🥀     | **598** | `Network read timeout error` | unofficial | _Used by some HTTP proxies to signal a network read timeout behind the proxy to a client in front of the proxy._                                                                                        |
