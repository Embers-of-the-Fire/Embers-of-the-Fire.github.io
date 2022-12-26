<div align="center">

  <h1>碧蓝航线科研规划器<br><sub>AzurLane Tech Research Helper</sub></h1>

  <strong>A tech-research helper using <a href="https://www.rust-lang.org/">RustLang</a> and <a href="https://github.com/rustwasm/wasm-pack">wasm-pack</a>.</strong>

  <p>
    <a href="https://space.bilibili.com/526159315"><img src="https://img.shields.io/badge/Author-%E7%BB%9F%E5%90%88%E9%83%A825000mm%E8%A3%85%E7%94%B2%E9%99%84%E7%94%B2(526159315)-blue"></a><br>
    <a href="https://www.npmjs.com/package/azurlane-tech-research"><img src="https://img.shields.io/badge/NPM-azurlane--tech--research-orange"></img></a>
    <a href="https://crates.io/crates/azurlane_tech_research"><img src="https://img.shields.io/badge/Crates.IO-azurlane--tech--research-yellow"></a>
  </p>
  <sub>Built with 🦀🕸</sub>
</div>

## 如何使用

[**📚 碧蓝航线 WIKI 📚**][azurlane-bwiki]

### 在线版

> 快速连接：  
> [科研策略专题攻略-BWiki][azurlane-bwiki-res]  
> [GitHub Page（还没做）][github-page-res]

使用**WebAssembly**构建的在线科研规划服务，基本囊括了科研规划的主要功能。

BWiki由于MediaWiki系统的限制可能部分展示会出现一定的问题。

GitHub Page原生构建，通常情况下不会出现问题。
> 但是我还没搞，先摸了

[github-page-res]: https://embers-of-the-fire.github.io/azurlane/
[azurlane-bwiki-res]: https://wiki.biligame.com/blhx/科研策略专题攻略
[azurlane-bwiki]: https://wiki.biligame.com/blhx/

### 离线版本地应用

开发中

## 复用及二次开发

### 应用程序扩展（C-FFI)

在`release`中我提供了`.dll`形式的符合C-FFI的接口，相关内容在release包和`CFFI`分支的`rust.h`中。

### 复用WASM

在`release`中我同样提供了`.wasm`的文件。由于`wasm-bindgen`对于wasm与rust交互复杂结构体仅有`JsValue`形式，无法提供类型注释，因此我在`master`分支中和release包中提供了`rust.ts`，其中仅标注了数据类型。

### 源代码

该项目使用`wasm-pack`脚手架，其中所有导入导出定义及源代码形式符合`wasm-pack`默认形式。
> 注意：为了纯隔离式运行，科研项目相关数据直接以硬代码形式写入于`dataset::Data::load()`(`src/dataset.rs`)函数中。

### 其他

#### 使用NPM（WASM）

[Azurlane Tech Research &lt;TS&gt;](https://www.npmjs.com/package/azurlane-tech-research)

```bash
npm i azurlane-tech-research
```

#### 使用rust-Cargo（标准crate，提供全部可提供API）

[azurlane_tech_research v0.1.0](https://crates.io/crates/azurlane_tech_research)

<sup>Add the following line to your Cargo.toml file:</sup>
```toml
azurlane_tech_research = "0.1.0"
```

## 许可

Licensed under MIT license ([LICENSE](LICENSE) or [MIT-opensource](http://opensource.org/licenses/MIT))

## 致谢

- [RustLang](https://www.rust-lang.org/)
- [Wasm-Pack](https://github.com/rustwasm/wasm-pack)
- [碧蓝航线Wiki](https://wiki.biligame.com/blhx/)
- [碧蓝海事局](https://space.bilibili.com/205889201)
- [天谴之羊](https://space.bilibili.com/337285187/)（核心算法支持）
- 热爱碧蓝航线的你
