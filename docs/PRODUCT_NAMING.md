# BAIGE 系列产品命名规范

> 本文件定义百舸（BAIGE）母品牌、官方产品、技术模块、第三方生态与历史名称的统一命名规则。
>
> **官方产品统一署名：`A BAIGE Project`**

## 1. 品牌层级

百舸采用“母品牌 + 独立产品名 + 家族署名”的结构。

```text
百舸 / BAIGE
├─ <独立产品名>
│  └─ A BAIGE Project
├─ <独立产品名>
│  └─ A BAIGE Project
└─ shared infrastructure
   ├─ BAIGE Studio
   ├─ BAIGE IR
   ├─ BAIGE Bridge Protocol
   └─ @baige/*
```

### 母品牌

- 中文正式名：**百舸**
- 英文正式名：**BAIGE**
- 英文必须全大写书写 `BAIGE`，用于加强品牌辨识度。
- `BAIGE` 是品牌名，不要求解释为英文缩写。

### 官方产品

面向用户的领域工具必须拥有独立产品名。产品名不应依赖 `BAIGE` 前缀才能成立。

标准展示：

```text
<产品名>
A BAIGE Project
```

`A BAIGE Project` 的大小写与单词顺序固定，不使用以下变体：

- `A Baige Project`
- `A baige project`
- `A BAG Project`
- `Built on BAIGE`（官方产品主署名）
- `BAIGE Project: <Name>`

## 2. 产品命名风格

官方产品优先采用中国古典文学、诗词、典故、自然意象与传统文化中的简洁词语。

名称应满足：

1. **独立成名**：脱离 BAIGE 前缀后仍像一个完整产品名。
2. **有意象**：名称应能承载产品的核心能力、使用感受或领域气质。
3. **短而可记**：优先 1–3 个汉字；必要时可更长，但避免说明句式名称。
4. **可国际传播**：应提供稳定的罗马字/英文写法，避免过度依赖难输入字符。
5. **可搜索**：正式确定前检查 GitHub、搜索引擎、主要软件商店、域名与相关技术生态中的重名情况。
6. **可延展**：名称应允许形成 Logo、图标、动效与视觉意象，而不是仅描述功能。
7. **不过度解释**：文化出处可以成为品牌故事，但用户不应理解典故后才能知道这是产品。

## 3. 禁止的产品命名方式

面向用户的官方工具默认禁止：

```text
BAIGE AI Editor
BAIGE Quest Editor
BAIGE Dialogue Tool
BAIGE Combat Tool
BAIGE <Feature>
```

原因：BAIGE 是厂牌和平台，不应退化为所有产品共用的功能前缀。

技术基础设施例外，见下一节。

## 4. 技术基础设施命名

不直接作为独立产品传播的共享基础设施可以使用 BAIGE 技术命名。

推荐：

```text
BAIGE Studio
BAIGE IR
BAIGE Bridge Protocol
BAIGE Runtime
BAIGE Schema
BAIGE Core
```

代码命名统一使用：

```text
npm scope:      @baige/*
TypeScript:     BaigeDocument, BaigeProject
C/C++ types:    FBaige..., UBaige..., Baige...
constants:      BAIGE_...
CLI prefix:     baige-...
file metadata:  baige / BAIGE
```

不要在新公共 API 中继续引入：

```text
crossloom
@crossloom/*
CrossLoom...
CROSSLOOM_...
```

## 5. 官方产品的软件标识

一个正式产品至少应定义以下信息：

```text
Display Name:        <独立产品名>
Family Mark:         A BAIGE Project
Product Slug:        <stable-ascii-slug>
Repository Name:     <product-name-or-slug>
Package Namespace:   @baige/<product-slug> 或独立包名
Legacy Names:        [仅迁移需要时填写]
```

产品的显示名称和代码 slug 可以不同。显示名称服务品牌；slug 服务文件系统、包管理器和 CLI 稳定性。

## 6. 中文与英文展示

中文页面推荐：

```text
<中文产品名>
A BAIGE Project
```

英文页面可以使用经确定的英文名、罗马字名或与中文名称一致的品牌写法，但家族署名仍保持：

```text
<Product Name>
A BAIGE Project
```

不要翻译 `A BAIGE Project`。

## 7. 第三方生态标识

`A BAIGE Project` 仅用于 BAIGE 官方维护或明确纳入官方治理的项目。

第三方项目不得自行使用该署名。

第三方生态可以在品牌政策允许时使用：

```text
Built with BAIGE
Compatible with BAIGE
```

`Powered by BAIGE` 仅在运行时确实依赖 BAIGE 技术且不会造成官方背书误解时使用。

## 8. 历史名称与迁移

历史代号和旧产品名可以保留用于：

- Git 历史；
- Release Notes；
- Migration Guide；
- 兼容别名；
- 旧资产导入；
- 搜索重定向。

但不得继续作为新版本的主品牌展示。

当前迁移中：

- `CrossLoom`：百舸平台旧代号，仅允许出现在仓库 URL、迁移说明和历史记录中。
- `UDMBF`：旧 AI 工具/版本名称；重置后的后继产品应按本规范获得独立正式名称，并使用 `A BAIGE Project` 署名。

除明确的兼容层外，新代码、文档标题、网页标题、包名和 UI 不应新增上述旧名称。

## 9. 产品命名评审清单

正式采用一个新名称前至少检查：

- [ ] 是否符合诗词/古典文化或既定 BAIGE 命名气质；
- [ ] 是否与产品领域形成可讲述但不过度牵强的联系；
- [ ] 是否可被中文用户快速读写和记忆；
- [ ] 是否有稳定的国际写法；
- [ ] GitHub、搜索引擎与主要商店是否存在高冲突同名产品；
- [ ] 域名、仓库 slug、npm/package ID 是否存在可用方案；
- [ ] 是否适合做 Logo、图标和产品启动页；
- [ ] 是否能自然与 `A BAIGE Project` 并列；
- [ ] 是否已记录名称出处与含义；
- [ ] 是否需要旧名迁移策略。

## 10. README 与产品页模板

推荐产品 README 顶部：

```text
# <Product Name>

**A BAIGE Project**

<一句话产品定义>
```

推荐产品网站 Hero：

```text
<Product Name>
A BAIGE Project

<产品自身的主标题/价值主张>
```

推荐应用 About / Splash：

```text
<Product Name>
A BAIGE Project
Version x.y.z
```

## 11. 品牌治理

- 代码开源不等于 BAIGE、百舸、官方产品名、Logo 与 `A BAIGE Project` 标识自动开放使用。
- 新官方产品名进入公开发布前，应由维护者完成最终品牌确认。
- 任何重命名公共 API、数据格式或包名的行为必须同时提供迁移说明。
- 本文件是后续 Codex/Agent 进行产品命名、README、网站和新项目脚手架工作的默认规则源。
