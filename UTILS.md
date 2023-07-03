# 帮助列表

官方文档：[Docsify](https://docsify.js.org/#/zh-cn/)

## Docsify 扩展语法

参考[Docsify Docs](https://docsify.js.org/#/zh-cn/helpers?id=%e6%96%87%e6%a1%a3%e5%8a%a9%e6%89%8b)

## 如何引用文章

1. 引用文件：使用`./docs`文件夹下的相对路径，例如，`./docs/foo.md`直接使用`foo`作为引用；如果使用 html 直链需要添加`#/`（即`#/foo`）。
2. 引用某一个特定的标题，将标题中的空格去掉后，使用`#foo`的方式引用。例如标题`A BC`的引用为`#A-BC`。

## 添加代码块

该系统内置了对于Paradox语言的支持，请在代码区中使用`pdx`语言，即：
````md
```pdx
# Your code here
```
````

## 常用字符

-   `&emsp;`: 全角空格（连用两个可以用于首行缩进）
-   `£`: 英镑标志（<kbd>alt</kbd> + 163）
-   `§`: 小节号（<kbd>alt</kbd> + 167）