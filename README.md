[Русский](#внимание) | [English](#warning)

# Внимание!
Этот проект больше не поддерживается.

**Почему?** Этот проект создавался еще тогда, когда я не знал так хорошо встроенный пакет `util`. Когда я решил его изучить поглубже, то нашел там хороший обработчик аргументов командной строки.

<a href="#о-winargs"></a>

# О `winargs`
Я искал библиотеку, которая поможет моей программе на Node.js получить аргументы командной строки. Их много, но они тяжелые (или сложны для изучения) для маленьких проектов. Так что я решил написать свою библиотеку с нуля для решения этой проблемы. Преимущества ниже ⬇️.

![Это библиотека](https://img.shields.io/badge/Тип_программы-Библиотека_для_Node.js-green)
![Отсутствует на npm](https://img.shields.io/badge/Доступен_на_npm-нет-red)
# Преимущества
* **Мало весит** (2.9 КБ)

* **Без зависимостей**

* **Проста для изучения** (только 4 метода!)

# Установка
`npm i git+https://github.com/LazataknesSoftware/winargs.git`

# Что за cmd.exe-стиль?
* Параметр и значение выглядят как `/ПАРАМЕТР:ЗНАЧЕНИЕ`
* Логические (`true`/`false`) параметры выглядят как `/ПАРАМЕТР`
  
  > **Логические значения в cmd.exe-стиле**
  > 
  > Посмотрите на следующую команду:
  > 
  > `dir /b`
  > 
  > Аргумент `/b` является логическим. Если он имеется в командной строке, то `/b` равен `true`, иначе - `false`.
* Параметр справки выглядит как `/?`

# Методы
* `set(string flag,string description,boolean required)` - создает новый аргумент `flag` с описанием `description`. Он может быть обязательным или нет, в зависимости от параметра `required`.

  Пример:
  * Командная строка: `node index.js /AGE:21`
  * *index.js*:
    ```javascript
    let wa = require("winargs")
    wa.set("/AGE","Возраст пользователя",true)
    wa.parse();
    console.log(wa.get("Age"))
    ```
  * Результат: `21`
 
* `parse()` - создает глобальный словарь из аргументов командной строки, чтобы `get()` мог получить значения.

* `get(string key)` - вычисляет аргумент командной строки из глобального словаря. Возвращает значение типа `string`, если метод был вызван с параметром и аргумент существует; возвращает `true`, если метод был вызван без параметра и аргумент существует; иначе, если нет ни параметра, ни аргумента, `get()` возращает `false`

  Пример:
  * Командная строка: `node index.js /NAME:Nick`
  * *index.js*:
    ```javascript
    let wa = require("winargs");
    wa.set("/NAME","Имя пользователя",false);
    wa.parse();
    console.log(wa.get("name"));
    ```
  * Результат: `Nick`
 
* `helpWhenRun(boolean yes_no)` - `yes_no` определяет, должна ли показываться при запуске Node.js-приложения справка по аргументов без указания `/?`. Должно стоять перед `wa.parse()`.

  Пример:
  * Командная строка: `node index.js`
  * *index.js*:
    ```javascript
    let wa = require("winargs")
    wa.set("/OUTPUT","Выходной файл",false)
    wa.helpWhenRun(true)
    wa.parse()
    ```

---
**Нашли проблему в библиотеке? Создайте запрос в разделе "Issues"!**

---
# Warning! 
This project is no longer supported.

**Why?** This project was created, when I didn't know `util` package very well. When I decided to look into it further, I discovered that it had a very good command line parser.

<a href="#about-winargs"></a>
# About `winargs`
I searched library to parse command line arguments. There's a lot, but they are heavy (or have complex syntax) for small projects. So I decide to make my own library that parses commandline arguments. See features below ⬇️.

![This is a library](https://img.shields.io/badge/type_of_software-Node.js_library-green)
![Not available on npm](https://img.shields.io/badge/available_on_npm-no-red)
# Features
* **Lightweight** - 2.9 KB!

* **No dependencies!**

* **Simple** (4 functions only!)

# Installation
`npm i git+https://github.com/LazataknesSoftware/winargs.git`

# What is cmd.exe-style?
* Parameter and value looks like `/PARAMETER:VALUE`
* Boolean (`true`/`false`) parameters looks like `/PARAMETER`
  
  > **Boolean in cmd.exe-style**
  > 
  > Consider the following command line:
  > 
  > `dir /b`
  > 
  > The `/b` flag is boolean. If it is in command line, then `/b` is true, otherwise false.
* Help parameter looks like `/?`

# Methods
* `set(string flag,string description,boolean required)` - sets new `flag` with `description`. It can be required or not, depending on `required` parameter.

  Example:
  * Command prompt: `node index.js /AGE:21`
  * *index.js*:
    ```javascript
    let wa = require("winargs") // If library is together with your project
    wa.set("/AGE","Age of user",true)
    wa.parse();
    console.log(wa.get("Age"))
    ```
  * Output: `21`
 
* `parse()` - creates dictionary from command line arguments to `get()` was able to get values of keys.

* `get(string key)` - get value passed to parameter. Returns `string` if queried key with value; returns `true` if queries key without value; otherwise if there is no key and no value, `get()` returns `false`

  Example:
  * Command prompt: `node index.js /NAME:Nick`
  * *index.js*:
    ```javascript
    let wa = require("winargs"); // If library is together with your project
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
    let wa = require("winargs")
    wa.set("/OUTPUT","Output file",false)
    wa.helpWhenRun(true)
    wa.parse()
    ```

---
**If you find bug in library, then make an issue!**
