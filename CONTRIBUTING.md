# Contributing

感谢参与百舸 CrossLoom。

## 开始前

1. 阅读 `AGENTS.md`、设计原则和产品范围。
2. 对 IR、Bridge Protocol 或安全边界的改动先提交 RFC Issue。
3. 功能 Issue 必须描述用户结果、验收条件和兼容性影响。

## 分支与提交

- 功能分支：`feature/<name>`
- 修复分支：`fix/<name>`
- 文档分支：`docs/<name>`
- 提交信息使用简短祈使句，并保持一次提交只表达一个意图。

## Pull Request

PR 必须包含：变更摘要、设计理由、测试、截图或录屏（涉及 UI 时）、兼容性说明和回退方案。

## 设计原则

贡献应优先保持引擎中立、稳定 Diff、显式语义、本地优先和人工批准链。引擎专属能力应放入扩展命名空间，不得污染通用 IR。
