# Understanding typings format
Seems like you are interested in understanding
I heard you are interested in helping the community by authoring typings. Great!

In this document, I'll help you to better understand how to write

When you are writing typings, you are writing a declaration source file. It always has extension `.d.ts`, and it is "a strict subset of implementation source files and are used to declare the static type information associated with existing JavaScript code in an adjunct manner." [source](https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#111-programs-and-source-files)



#### File Path
For purposes of resolving module references, TypeScript associates a file path with every module. The file path is simply the path of the module's source file without the file extension. For example, a module contained in the source file 'C:\src\lib\io.ts' has the file path 'C:/src/lib/io' and a module contained in the source file 'C:\src\ui\editor.d.ts' has the file path 'C:/src/ui/editor'.

# External Module Format
Typings are written in the TypeScript external module format. It is the same format you will get if you run `tsc -d` without bundling the file (i.e., not using the `outFile` parameter).

You can learn more about
This document will gives you an overview of what an external module format is and why the typings need to be written in this format.

## Module formats in TypeScript


## What is ambient?
Ambient is the term that refers to something aware of or relate to its immediate surrounding. An ambient module is a module that is awares of how it fits into its surrounding.

In programming terms, ambient modules define their external identifier(s). i.e. it defines how should other code access it.

For example, `jQuery` has two external identifiers: the global identifier `$` and the module name `'jquery'`.

Any code that uses `jQuery` will access it through either the global identifier `$` or `var $ = require('jquery');`.

## Why non-ambient?
Typings are "non-ambient" because **at the time of definition, you, the typed definition writer, will not know how it will be accessed in the user environment**.  They allow user to customize their module name(s).

For example, I want to use two versions of `jQuery`. I need some features from the latest and greatest `jQuery` while my project was already using an older version. To avoid conflict, I want to include the latest `jQuery` as `jquery-latest` and use it through `import $$ = require('jquery-latest')`.

If the `jQuery` typings are ambient, then the two versions of `jQuery` will conflict each other and fight for the global variable `$` and the module name `'jquery'`.

External module avoids this conflict. I can run `typings install jquery --name jquery-latest` to define the module name as `'jquery-latest'`.

## Terminology
* `.d.ts` are declaration source files. Containing declarations only.

### Ambient module declaration

```ts
declare module "something" {...}
```
https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#122-ambient-module-declarations

### Declaration module
Declaration file that contains top level export/import declarations

```ts
exprot declare var foo: number;
```

https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#111-programs-and-source-files

### Ambient declaration
https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#121-ambient-declarations


## Further Readings
https://github.com/Microsoft/TypeScript-Handbook/blob/master/pages/Namespaces%20and%20Modules.md
