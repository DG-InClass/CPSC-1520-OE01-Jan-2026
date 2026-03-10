# Takeaways for Today's Lesson

> *HTTP and Server-side API Endpoints*

- Acronyms
  - **HTTP** - Hyper-Text Transfer Protocol
  - **XML** - E**x**tensible **M**arkup **L**anguage - you could define your own custom tags/attributes to describe your data
  - **HTML** - Hyper-Text Markup Language
  - **XHTML** - HTML that follows the stricter rules around tags and attributes
  - **API** - Application Programming Interface
  - **REST** - **Re**presentational **S**tate **T**ransfer API
  - **JSON** - **J**ava**S**cript **O**bject **N**otation - it looks a lot like JavaScript's **Object Literal** syntax
  - **AJAX** - Asynchronous JavaScript And XML
  - **URL** - Uniform Resource Locator/Location
  - **URI** - Uniform Resource Identifier
- Terms
  - **Endpoint** - Some URL/URI that is acting as an API that we can utilize in our programs. Typically, it's:
    - "Outside" of our program/system
    - An "exchange" point for us to GET or POST data
  - **HTTP Action/Verb/Method** - A *type* or *method* associated with a HTTP Request
    - `GET` - Asking the web server to send you information.
    - `POST` - Sending (new) information to the web server.
    - `PATCH`/`PUT` - Sending updated information to the web server.
    - `DELETE` - Requesting that the web server delete/remove information.


## What does `npm`/`pnpm` do?

Think about what `npm` and `pnpm` *are*. They are small programs that exist on your computer.
 
When we "use" that program in the terminal, we are actually *running* or *executing* that program.
 
Often, this kind of a program (CLI - Command-Line Interface) will have *subcommands* that they support.
 
Both `npm` and `pnpm` are "package manager programs". They help us manage and work with our Node-based applications. Here are some of the common subcommands:

- `init` to initialize or create a `package.json` (if one doesn't exist)
- `install` (or `i`) to download all the dependencies in our `package.json`
- `run` to list or execute a "script" from our `package.json`
  - Some common script names can be executed without having to include the `run` subcommand, such as the `start` script or (for pnpm only) the `dev` script.

## About URLs

An **URL** starts with the *Protocol* (typically `http://` or `https://`) and then identifies a *Domain* or "web server". The *Domain Name* is a human-friendly name for an **IP Address**. An example IP Address would be something like `127.0.0.1` (which goes by the friendly domain name of localhost.

Once you have an IP Address, you combine it with a **port number**. That "port" is the connection point to the web server. The default port number for `http://` is **80**. The default port number for `https://` is **443**. The browser typically does not show these default port numbers when we put the URL in the address bar.

## Database Concepts

There are a couple of acronyms that we can use to remember the basic concepts of what we can do with a database. One of those is the **READ** acronym:

- **R**ead data
- **E**dit data
- **A**dd data
- **D**elete data
