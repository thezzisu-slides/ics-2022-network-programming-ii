---
layout: st-left-section-header
image: ST02A_D030.png
background: BK001D.png
---

# Spec:
## The Web Servers

---
layout: st-left
background: BK001D.png
---

# Overview: The Modern Web Stack

- From the top most to the bottom most, we have:
  - **Browser:** [HTML and CSS(W3C)](https://html.spec.whatwg.org), [JavaScript(TC39)](https://tc39.es/ecma262/), ...
  - **HTTP protocol family:** HTTP/1.0: RFC 1945; HTTP/1.1: RFC 9112; HTTP/2: RFC 9113; HTTP/3: RFC 9114; WebSocket and so on...
  - **Transport Layer Protocol:** TCP: RFC 793; UDP: RFC 768 (Used in HTTP/3 QUIC)
  - **Internet Layer Protocol:** IP: RFC 791; IPv6: RFC 2460
  - **Link Layer Protocol:** Ethernet: IEEE 802.3; ...

But for most of the programmers, they'll never touch the lower layers.

```js
require('http').createServer((req, res) => res.send('hello!')).listen(3000)
```

The above one-liner is a working HTTP server in Node.JS.

---
layout: st-left
background: BK001D.png
---

# HTTP/1.1

- HTTP/1.1 is the most widely used version of HTTP.
- We could use `curl` to test it: (only important lines are shown)

```bash
thezzisu@AS-ZISU > ~ curl.exe -vvv https://332.zisu.dev/
> GET / HTTP/1.1
> Host: 332.zisu.dev
> User-Agent: curl/7.83.1
> Accept: */*
>
< HTTP/1.1 200 OK
< Content-Type: text/html; charset=UTF-8
< Content-Length: 427
< Connection: keep-alive
<
<!DOCTYPE html>
<html lang="en">
  <head>...</head>
  <body><div id="app"></div></body>
</html>* Connection #0 to host 332.zisu.dev left intact
```

---
layout: st-left
background: BK001D.png
---

# HTTP/1.1 Request

```
> GET / HTTP/1.1          # ---> 1. Request Line
> Host: 332.zisu.dev      # --
> User-Agent: curl/7.83.1 #  |-> 2. Request Headers
> Accept: */*             # --
>                         # ---> 3. Empty Line
# Request Body (Empty for GET request)
```

1. The first line of the request is called the **Request Line**.
  - The format is `METHOD URI HTTP_VERSION`.
2. The following lines are called the **Request Headers**.
  - Each line is in the format of `KEY: VALUE`.
3. The empty line is called the **Empty Line**.
  - It's used to separate the headers and the body.
4. The following data are called the **Request Body**.
  - It could be empty for some requests; also, binary data is allowed.

---
layout: st-left
background: BK001D.png
---

# HTTP/1.1 Response

```
< HTTP/1.1 200 OK                        # ---> 1. Status Line
< Content-Type: text/html; charset=UTF-8 # --
< Content-Length: 427                    #  |-> 2. Response Headers
< Connection: keep-alive                 # --
<                                        # ---> 3. Empty Line
<!DOCTYPE html>                          # --
<html lang="en">                         #  |
  <head>...</head>                       #  |-> 4. Response Body
  <body><div id="app"></div></body>      #  |      (Optional)
</html>                                  # --
```

1. The first line of the response is called the **Status Line**.
  - The format is `HTTP_VERSION STATUS_CODE STATUS_MESSAGE`.
2. The following headers and body is the same as the request.

---
layout: st-left
background: BK001D.png
---

# HTTP/1.1

- HTTP/1.1 is a **stateless** protocol.
- It means that the server doesn't remember the previous requests.
- The server will only process the current request and send the response.
- Also, HTTP protocol is more complex then the above examples, eg
  - Multiline headers
  - Chunked body
  - ...
- It's highly recommended to **avoid manually implementing HTTP protocol** by using a library like `libcurl`.

---
layout: st-left
background: BK001D.png
---

# Mime Types

- HTTP Protocol do not define what the content of the response body is.
- The server should tell the client what the content is by using the **Mime Type**.
- The browser can extract the mime type from the response header `Content-Type` and render the content accordingly, with some exceptions.
- Common Mime Types:
  - `text/html`: HTML file
  - `text/javascript`: JavaScript file
  - `image/png`: PNG image
  - `application/json`: JSON data

<!-- Browser will use content type sniffing to guess the actual content type -->

---
layout: st-left
background: BK001D.png
---

# Universal Resource Identifier (URI)

- Format: `scheme:[//authority]path[?query][#fragment]`
- **schema**: the protocol to be used, eg `http`, `ftp`, ...
- **authority**: the authority to be used, eg `example.com`, `1.1.1.1:80`, `user:pass@host:port`, ...
- **path**: the path to the resource, eg `/index.html`, `/api/v1/users`, ...
- **query**: the query string, eg `?name=thezzisu&age=18`, ...
- **fragment**: the fragment of the resource, eg `#top`, `#section-1`, ...

For example, the URI of this page is:

`https://slides.zisu.dev/ics-2022-network-programming-ii/#/22`.

---
layout: st-left
background: BK001D.png
---

# Web Specifications

- HTML5
- CSS3
- ECMAScript 2015 (ES6) and later
  - class, async/await, Promise, Proxy, ...
- Web APIs and Progressive Web Apps (PWA)
  - fetch, Web Storage, Web Workers, WebRTC, WebAssembly, ...
- Security Policies
  - Same Origin Policy, Content Security Policy, ...
