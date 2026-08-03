# 百舸 CrossLoom

> **百舸争流，共织通途。**

**CrossLoom** is a local-first, cross-engine game authoring platform with human-controlled AI.

百舸 CrossLoom 面向独立开发者与中小团队，以统一领域数据、轻量引擎桥接和受控 LLM Patch 工作流，降低战斗、任务、对话、AI 等复杂编辑器的开发成本。

## 核心主张

- **本地优先**：项目数据与正式资产默认不离开开发者设备。
- **跨引擎**：源数据使用引擎无关的 CrossLoom IR，由 Bridge 与 Runtime 适配 Unreal、Godot、Unity 及自研引擎。
- **人工主导**：LLM 只能提出可审查的结构化变更，不能绕过人工确认直接修改最终资产。
- **开放可迁移**：开放 Schema、Bridge Protocol 与参考实现，避免将项目锁定在单一工具中。
- **生产导向**：以可验证、可回滚、可版本控制的数据闭环为第一优先级。

## 第一年度目标

首年旗舰模块为**战斗动作编辑器**：动画时间轴、伤害判定体、虚拟挂点、VFX/Audio 事件、位移曲线、输入与取消窗口，以及 Unreal 权威预览。Unreal 作为首要支持引擎，Godot 用于验证跨引擎语义，Unity 提供技术预览。

## 仓库结构

```text
apps/studio/                 CrossLoom Studio 桌面/Web 前端
packages/editor-core/        通用编辑器状态与命令模型
packages/schema/             CrossLoom IR 与 Schema
packages/bridge-protocol/    引擎桥接协议
engines/unreal/              Unreal Bridge 与 Runtime（规划）
engines/godot/               Godot Bridge 与 Runtime（规划）
engines/unity/               Unity 技术预览（规划）
docs/                        架构、原则、约束与规范
website/                     GitHub Pages 产品说明站点
```

## 开发状态

- 版本：`0.1.0-foundation`
- 阶段：工程与协议基础搭建
- 当前里程碑：M0 架构冻结

## 快速开始

```bash
corepack enable
pnpm install
pnpm dev
pnpm check
```

当前版本主要提供工程骨架与设计约束。功能实现将按 [ROADMAP.md](./ROADMAP.md) 推进。

## 文档入口

- [设计原则](./docs/DESIGN_PRINCIPLES.md)
- [AI 开发约束](./docs/AI_DEVELOPMENT_CONSTRAINTS.md)
- [系统架构](./docs/ARCHITECTURE.md)
- [产品范围](./docs/PRODUCT_SCOPE.md)
- [Schema 规则](./docs/SCHEMA_RULES.md)
- [Bridge Protocol](./docs/BRIDGE_PROTOCOL.md)
- [测试策略](./docs/TEST_STRATEGY.md)
- [安全边界](./docs/SECURITY_BOUNDARIES.md)

## 许可证

计划采用 Apache-2.0。正式公开发行前将完成第三方依赖与品牌使用审查。
