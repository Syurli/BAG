# 百舸 / BAG 系列产品命名规范

> 本文件定义百舸母品牌、英文品牌 BAG、官方产品、技术模块、第三方生态与历史名称的统一命名规则。
>
> **母品牌：`百舸 / BAG`**  
> **英文展开：`Build Across Games`**  
> **官方产品统一署名：`A BAIGE Project`**

## 1. 品牌层级

百舸采用“母品牌 + 独立产品名 + 家族署名”的结构。

```text
百舸 / BAG
Build Across Games
│
├─ <独立产品名>
│  └─ A BAIGE Project
├─ <独立产品名>
│  └─ A BAIGE Project
└─ shared infrastructure
   ├─ BAG Studio
   ├─ BAG IR
   ├─ BAG Bridge Protocol
   ├─ BAG Runtime
   └─ @bag/*
```

### 母品牌

- 中文正式名：**百舸**
- 英文正式名：**BAG**
- 英文展开：**Build Across Games**
- 对外英文品牌统一大写为 `BAG`。
- `Build Across Games` 用于解释品牌含义、首页副标题、About、演讲材料与品牌介绍；不要求每次出现 `BAG` 都同时写全称。
- `BAIGE` **不是**母品牌英文名，也不是 BAG 的技术命名空间。

推荐展示：

```text
百舸 / BAG
Build Across Games
```

或：

```text
BAG — Build Across Games
```

### 官方产品

面向用户的领域工具、插件或独立产品必须拥有自己的产品名，不依赖 `BAG` 前缀才能成立。

标准展示：

```text
<Product Name>
A BAIGE Project
```

`A BAIGE Project` 是百舸官方产品的固定家族署名。其大小写与单词顺序固定，不翻译、不改写。

禁止以下变体：

- `A BAG Project`
- `A Baige Project`
- `A baige project`
- `BAIGE Project: <Name>`
- 将 `BAIGE` 单独作为平台英文名

## 2. BAG 与 BAIGE 的职责边界

这是品牌体系中最重要的规则。

### BAG

`BAG` 用于：

- 百舸英文母品牌；
- 平台与生态名称；
- 共享技术基础设施；
- 技术文档与公共 API；
- npm/package namespace；
- Studio、IR、Bridge Protocol、Runtime 等平台组件。

### BAIGE

`BAIGE` 默认**只用于固定署名 `A BAIGE Project`**。

除迁移文档或历史说明外，不应新增：

```text
BAIGE Studio
BAIGE IR
BAIGE Runtime
@baige/*
BaigeDocument
BAIGE_SCHEMA_VERSION
```

这些形式统一改用 BAG 命名。

## 3. 产品命名风格

官方产品优先采用中国古典文学、诗词、典故、自然意象与传统文化中的简洁词语。

名称应满足：

1. **独立成名**：脱离 BAG 前缀后仍像一个完整产品名。
2. **有意象**：名称能承载产品能力、使用感受或领域气质。
3. **短而可记**：中文优先 1–3 个汉字；必要时可更长，但避免说明句式名称。
4. **可国际传播**：提供稳定的罗马字或英文写法，避免过度依赖难输入字符。
5. **可搜索**：正式确定前检查 GitHub、搜索引擎、主要软件商店、域名与相关技术生态中的重名情况。
6. **可延展**：名称适合形成 Logo、图标、动效与视觉意象。
7. **不过度解释**：文化出处可以成为品牌故事，但用户无需理解典故才能使用产品。

## 4. 禁止的产品命名方式

面向用户的官方产品默认禁止：

```text
BAG AI Editor
BAG Quest Editor
BAG Dialogue Tool
BAG Combat Tool
BAG <Feature>
```

原因：BAG 是平台和母品牌，不应退化为所有产品共用的功能前缀。

技术基础设施例外，见下一节。

## 5. 技术基础设施命名

不直接作为独立领域产品传播的共享基础设施使用 BAG 技术命名。

推荐：

```text
BAG Studio
BAG IR
BAG Bridge Protocol
BAG Runtime
BAG Schema
BAG Core
```

代码命名统一使用：

```text
workspace:      bag
npm scope:      @bag/*
TypeScript:     BagDocument, BagProject
C/C++ types:    FBag..., UBag..., Bag...
constants:      BAG_...
CLI prefix:     bag-...
file metadata:  bag / BAG
```

除明确迁移兼容外，新公共 API 不得继续引入：

```text
baige
@baige/*
Baige...
BAIGE_...
crossloom
@crossloom/*
CrossLoom...
CROSSLOOM_...
```

## 6. 官方产品的软件标识

一个正式产品至少定义以下信息：

```text
Display Name:        <独立产品名>
Family Mark:         A BAIGE Project
Product Slug:        <stable-ascii-slug>
Repository Name:     <product-name-or-slug>
Package Namespace:   @bag/<product-slug> 或独立包名
Platform:            BAG / Build Across Games
Legacy Names:        [仅迁移需要时填写]
```

产品显示名称和代码 slug 可以不同。显示名称服务品牌；slug 服务文件系统、包管理器和 CLI 稳定性。

## 7. 中文与英文展示

中文母品牌：

```text
百舸
BAG · Build Across Games
```

英文母品牌：

```text
BAG
Build Across Games
```

官方产品：

```text
<Product Name>
A BAIGE Project
```

`A BAIGE Project` 在中文和英文页面均保持原样。

## 8. 第三方生态标识

`A BAIGE Project` 仅用于百舸官方维护或明确纳入官方治理的产品。

第三方项目不得自行使用该署名。

第三方生态在品牌政策允许时可以使用：

```text
Built with BAG
Compatible with BAG
Powered by BAG
```

其中 `Powered by BAG` 仅用于运行时确实依赖 BAG 技术且不会造成官方背书误解的场景。

## 9. 历史名称与迁移

历史代号和旧名称可以保留用于 Git 历史、Release Notes、Migration Guide、兼容别名、旧资产导入和搜索重定向，但不得继续作为新版本主品牌。

当前迁移规则：

- `CrossLoom`：百舸平台旧代号，只允许出现在历史记录与迁移兼容说明中。
- `BAIGE`（单独使用）：上一阶段曾短暂作为英文母品牌；现已废止。除历史说明外，只允许作为固定署名 `A BAIGE Project` 的一部分出现。
- `UDMBF`：旧 AI 工具/版本名称；重置后的后继产品应按本规范获得独立正式名称，并使用 `A BAIGE Project` 署名。

## 10. 产品命名评审清单

正式采用一个新产品名之前至少检查：

- [ ] 是否符合诗词、古典文化或既定百舸命名气质；
- [ ] 是否与产品领域形成可讲述但不过度牵强的联系；
- [ ] 是否可被中文用户快速读写和记忆；
- [ ] 是否有稳定国际写法；
- [ ] GitHub、搜索引擎与主要商店是否存在高冲突同名产品；
- [ ] 域名、仓库 slug、npm/package ID 是否存在可用方案；
- [ ] 是否适合做 Logo、图标和产品启动页；
- [ ] 是否能自然与 `A BAIGE Project` 并列；
- [ ] 是否已记录名称出处与含义；
- [ ] 是否需要旧名迁移策略。

## 11. README 与产品页模板

产品 README：

```text
# <Product Name>

**A BAIGE Project**

<一句话产品定义>

Built on BAG · Build Across Games
```

产品网站 Hero：

```text
<Product Name>
A BAIGE Project

<产品自身的主标题/价值主张>
```

应用 About / Splash：

```text
<Product Name>
A BAIGE Project
Version x.y.z
```

BAG 平台自身不需要使用 `A BAIGE Project` 署名。

## 12. 品牌治理

- 代码开源不等于 `BAG`、`Build Across Games`、百舸、官方产品名、Logo 与 `A BAIGE Project` 标识自动开放使用。
- 新官方产品名进入公开发布前，应由维护者完成最终品牌确认。
- 任何重命名公共 API、数据格式或包名的行为必须同时提供迁移说明。
- 本文件是后续 Codex/Agent 进行产品命名、README、网站和新项目脚手架工作的默认规则源。
