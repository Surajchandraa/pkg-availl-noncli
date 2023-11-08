# pkg-avail-noncli
pkg-avail-noncli is a package that allows you to check the availability of npm package names, either individually or in groups.

## Installation:
- `npm install pkg-avail-noncli` 

## Set up:
- Install the package `npm i pkg-avail-noncli`
- require package in your code `const pkg = require('pkg-avail-noncli')`

## Functions provided:
- `pkg.check_for_single_pkg(package_name,callback)` this function is for checking single package that name of this package is available on npm or not.

- `pkg.check_for_multiple_pkg(array_of_pkg_names,callback)` this function is for checking array or package names.

## Code example 1:

- ***code***-
```js

    const pkg = require('pkg-avail-noncli')
    let data=['random-package-123', 'existing-package', 'awesome-package', 'unique-package-456','npm-checker','taken-package','cool-package','unused-package','test-package-789']


    pkg.check_for_multiple_pkg(data,(err,check)=>{
        if(!err){
            console.log(check)
        }
        else{
            console.log(err)
        }
    })


```


- ***Output***
```bash
    'taken-package' is available
    'unique-package-456' is available
    'npm-checker' is already taken
    'existing-package' is available
    'random-package-123' is available
    'cool-package' is already taken
    'awesome-package' is already taken
    'test-package-789' is available
    'unused-package' is already taken
```

## code example 2:
- ***code***-
```js
    const pkg = require('pkg-avail-noncli');

    pkg.check_for_single_pkg("npm-checker",(err,check)=>{
        if(!err){
            console.log(check)
        }
        else{
            console.log(err)
        }
    })


```

- ***output***-
```bash
    'npm-checker' is already taken

```
