# BAIGE One-year Roadmap / 百舸一年开发路线图

- Period / 周期：**2026-08 — 2027-07**
- Target / 年度目标：**v0.8 Public Beta**
- Website roadmap / 网站完整路线图：<https://syurli.github.io/CrossLoom/roadmap.html>

> The GitHub repository and Pages path still use the historical `CrossLoom` slug during the naming migration. The platform name is BAIGE.
>
> 命名迁移期间 GitHub 仓库与 Pages 路径仍保留历史 `CrossLoom` slug；平台正式名称为 BAIGE。

The goal is a usable public beta rather than an unfocused 1.0 with every possible editor module.

年度目标是交付可实际使用的公开 Beta，而不是堆叠所有编辑器类型、范围失控的 1.0。

| Phase / 阶段 | Months / 月份 | Milestone / 里程碑 | Deliverable / 交付结果 |
|---|---:|---|---|
| M0 | 1 | Architecture Freeze / 架构冻结 | 3D animation proxy, damage volumes, minimal dual-engine validation / 3D 动画代理、判定体与双引擎最小验证 |
| M1 | 2–3 | Data Loop / 数据闭环 | BAIGE IR, Schema, persistence, timeline, inspector / BAIGE IR、Schema、项目保存、时间轴与属性面板 |
| M2 | 4–5 | Combat MVP | Animation, volumes, sockets, events, curves, templates / 动画、判定体、挂点、事件、曲线和模板 |
| M3 | 6–7 | Unreal Alpha | Bridge, authoritative preview, Runtime, PIE loop / Bridge、权威预览、Runtime 与 PIE 闭环 |
| M4 | 8–9 | Cross-engine Alpha | Godot reference implementation and Unity technical preview / Godot 参考实现与 Unity 技术预览 |
| M5 | 10 | Public Preview | LLM Patch, visual diff, human approval, provenance / LLM Patch、可视化 Diff、人工批准和来源记录 |
| M6 | 11 | Release Candidate | Installer, documentation, examples, closed testing / 安装、文档、示例与封闭测试 |
| M7 | 12 | v0.8 Public Beta | Open-source release, official build, supporter edition / 开源发布、官方构建与赞助版 |

## Year-one success criteria / 首年成功标准

1. A real developer is willing to author a combat action with a BAIGE-based tool.  
   真实开发者愿意使用基于 BAIGE 的工具完成一个战斗动作。
2. The same source data executes in at least two engines.  
   同一份源数据能够在至少两个引擎中执行。
3. LLM assistance is useful without receiving ownership or unrestricted access to final assets.  
   LLM 在不拥有或无限制访问最终资产的前提下有效辅助编辑。
4. A new user can install, author, preview, and export without direct help from the maintainer.  
   陌生用户无需维护者现场指导即可完成安装、编辑、预览与导出。

## Explicitly out of scope for year one / 首年明确不做

- Full quest, dialogue, behavior-tree, or animation-state-machine editors.  
  完整任务、对话、行为树和动画状态机编辑器。
- Material, Niagara, VFX Graph, or general Sequencer replacements.  
  材质、Niagara、VFX Graph 或通用 Sequencer 替代。
- Cloud collaboration, real-time co-editing, and a plugin marketplace.  
  云端协同、多人实时编辑和插件市场。
- Equal-depth production support for Unreal, Godot, and Unity in year one.  
  首年内让 Unreal、Godot 与 Unity 达到同等深度的正式支持。
