# About `winargs`
I searched library to parse command-line arguments. There's a lot, but they are heavy (or have complex syntax) for small projects! So I decide to make my own library that parses commandline arguments. See features below ⬇️.

![This is a library](https://img.shields.io/badge/type_of_software-Node.js_library-green)
![Not available on npm](https://img.shields.io/badge/available_on_npm-no-red)
# Features
⭐ Lightweight - 2.9 KB!

⭐ No dependencies!

⭐ Simple (4 functions only!)

# Installation
`npm i git+https://github.com/LazataknesSoftware/winargs.git`

# What is cmd.exe-style?
* Parameter and value looks like `/PARAMETER:VALUE`
* Boolean (true/false) parameters looks like `/PARAMETER`
  
  > **Boolean in cmd.exe-style**
  > 
  > Consider the following command line:
  > 
  > `dir /b`
  > 
  > The `/b` flag is boolean. If it is in command line, then `/b` is true, otherwise false.
* Help parameter looks like `/?`

# Methods
* `set(flag,description,required)` - sets new `flag` with `description`. It can be required or not, depending on `required` parameter.

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
 
* `parse()` - creates dictionary from command line arguments to `get()` was able to get values of keys.

* `get(key)` - get value passed to parameter. Returns `string` if queried key with value; returns `true` if queries key without value; otherwise if there is no key and no value, `get()` returns `false`

  Example:
  * Command prompt: `node index.js /NAME:Nick`
  * *index.js*:
    ```javascript
    let wa = require("./winargs"); // If library is together with your project
    wa.set("/NAME","Name of user",false);
    wa.parse();
    console.log(wa.get("name"));
    ```
  * Output: `Nick`
 
* `helpWhenRun(boolean yes_no)` - `yes_no` determines must help be shown when starting Node.js-application without `/?`. Must be placed before `wa.parse()`.

  Example:
  * Command: `node index.js`
  * *index.js*:
    ```javascript
    let wa = require("./winargs")
    wa.set("/SAYHELLO","Greet",false)
    wa.helpWhenRun(true)
    wa.parse()
    ```

---
**If you find bug or error in library, then make an issue!**
