# winargs
Parse cmd.exe-style command line options

![This is a library](https://github.com/LazataknesSoftware/LazataknesSoftware/blob/main/applicationtype-library.png)

**_Note_**: This library is not available on npm (yet).
# Features
⭐ Lightweight - 2.9 KB!

⭐ No dependencies!

⭐ Simple (4 functions only!)

# What is cmd.exe-style?
* Parameter and value looks like /PARAMETER:VALUE
* Boolean (true/false) parameters looks like /PARAMETER
* Help parameter looks like "/?"

# Methods
* **set(*flag*,*description*,*required*)** - sets new *flag* with *description*. It can be required or not, depending on *required* parameter.

  Example:
  * Command prompt: `node index.js /AGE:21`
  * *index.js*:
    ```javascript
    let wa = require("./winargs") // If library is together with your project
    wa.set("/AGE","Age of user",true)
    wa.parse();
    console.log(wa.get("Age"))
    ```
  * Output: `21`
 
* **parse()** - creates dictionary from command line arguments to get() was able to get values of keys.

* **get(*key*)** - get value passed to parameter. Returns *string* if queried key with value; returns *true* if queries key without value; otherwise if there is no key and no value, *get()* returns *false*

  Example:
  * Command prompt: `node index.js /NAME:John`
  * *index.js*:
    ```javascript
    let wa = require("./winargs"); // If library is together with your project
    wa.set("/NAME","Name of user",false);
    wa.parse();
    console.log(wa.get("name"));
    ```
  * Output: `John`
 
* **helpWhenRun(_boolean_ tof)** - determines must help be shown when starting Node.js-application without "/?". Must be placed before **_wa.parse()_**.

  Example:
  * Command: `node index.js`
  * *index.js*:
    ```javascript
    let wa = require("./winargs")
    wa.set("/SAYHELLO","Greet",false)
    wa.helpWhenRun(true)
    wa.parse()
    ```
