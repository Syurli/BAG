# Contributing to BAG / 参与百舸

感谢参与百舸 / BAG（Build Across Games）。

## 开始前

1. 阅读 `AGENTS.md`、`docs/PRODUCT_NAMING.md`、设计原则和产品范围。
2. 对 IR、Bridge Protocol 或安全边界的改动先提交 RFC Issue。
3. 功能 Issue 必须描述用户结果、验收条件和兼容性影响。
4. 新增面向用户的正式工具时，必须先按产品命名规范确认独立产品名与 `A BAIGE Project` 署名。

## 分支与提交

- 功能分支：`feature/<name>`
- 修复分支：`fix/<name>`
- 文档分支：`docs/<name>`
- 品牌/命名迁移：`brand/<name>`
- 提交信息使用简短祈使句，并保持一次提交只表达一个意图。

## Pull Request

PR 必须包含：变更摘要、设计理由、测试、截图或录屏（涉及 UI 时）、兼容性说明和回退方案。

涉及命名与品牌时还需说明：

- 是否修改用户可见产品名；
- 是否修改 `@bag/*` 包、公共类型、CLI 或持久化标识；
- 是否需要迁移旧 `@baige/*`、`CrossLoom` / `@crossloom/*` 或其他历史名称；
- 是否正确区分 `BAG / Build Across Games` 母品牌与 `A BAIGE Project` 产品署名；
- 是否避免把 `BAIGE` 单独作为平台或技术名称。

## 设计原则

贡献应优先保持引擎中立、稳定 Diff、显式语义、本地优先和人工批准链。引擎专属能力应放入扩展命名空间，不得污染通用 IR。
