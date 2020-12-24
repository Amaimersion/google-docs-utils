## Structure

- public methods that's intended for user usage are placed in this folder,
- all public methods are importing through `index.js`,
- `common` folder contains a code which is common for all public methods and not intended for public usage


## How to create a public method

- create file in `src`, import method via `index.js`, use already created public methods and common methods,
- split it into logical pieces. For example, if your method should first delete current selected content and then paste new text at some position, then you can create two separate public methods (if they not created yet), instead of creating single large file with two separate logical methods,
- use methods that already was created. If already created method somehow not suits for you, then change already created method, but try to not broke old versions


## How to create a common method

- if you think that you need some stuff only for internal usage, then you can create some common method,
- if you sure that you need common method only for your one public method, then you probably shouldn't create common method and you should place this method in a file along with public method; however, if you can imagine that this common method can be used by some another methods, then you should create common method,
- if common method is related to some logical namespace, then create/edit separate file. If you don't know where to put common method or it doesn't have it logical namespace, then put this method in `utils.js`


## Coding style

- make it simple,
- make it readable,
- write comments
