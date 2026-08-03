<div align="center">

# 百舸 CrossLoom

### 百舸争流，共织通途。

**Local-first, cross-engine game authoring with human-controlled AI.**

[English](#english) · [中文](#中文) · [Product Website](https://syurli.github.io/CrossLoom/) · [Web Roadmap](https://syurli.github.io/CrossLoom/roadmap.html)

</div>

---

<a id="english"></a>

## English

**CrossLoom** is an open, local-first game authoring platform for independent developers and small-to-medium teams. It uses engine-neutral domain data, lightweight engine bridges, and a controlled LLM Patch workflow to reduce the cost of building complex editors for combat, quests, dialogue, AI, animation events, and related systems.

### Core principles

- **Local-first** — project data and production assets remain on the developer's machine by default.
- **Cross-engine** — CrossLoom IR describes design intent independently from Unreal Engine, Godot, Unity, or a proprietary engine.
- **Human-controlled AI** — an LLM may propose validated structural patches, but it cannot bypass review or directly alter final engine assets.
- **Open and portable** — schemas, the Bridge Protocol, and reference runtimes are open so projects are not locked to one tool.
- **Production-oriented** — versioned data, deterministic validation, rollback, migration, and source control come before feature count.

### First-year focus

The first flagship module is a **combat action editor** with animation timelines, damage volumes, virtual sockets, VFX and audio events, movement curves, input and cancel windows, and authoritative engine preview.

- **Primary support:** Unreal Engine
- **Cross-engine reference:** Godot
- **Technical preview:** Unity
- **Target release:** `v0.8 Public Beta`

### Repository structure

```text
apps/studio/                 CrossLoom Studio web/desktop front end
packages/editor-core/        Shared editor state and command model
packages/schema/             CrossLoom IR and schemas
packages/bridge-protocol/    Engine bridge protocol
engines/unreal/              Unreal Bridge and Runtime
engines/godot/               Godot Bridge and Runtime
engines/unity/               Unity technical preview
docs/                        Architecture, principles, constraints, specifications
website/                     GitHub Pages product website
```

### Quick start

```bash
corepack enable
pnpm install
pnpm dev
pnpm check
```

### Documentation

- [Design Principles](./docs/DESIGN_PRINCIPLES.md)
- [AI Development Constraints](./docs/AI_DEVELOPMENT_CONSTRAINTS.md)
- [Architecture](./docs/ARCHITECTURE.md)
- [Product Scope](./docs/PRODUCT_SCOPE.md)
- [Schema Rules](./docs/SCHEMA_RULES.md)
- [Bridge Protocol](./docs/BRIDGE_PROTOCOL.md)
- [Testing Strategy](./docs/TEST_STRATEGY.md)
- [Security Boundaries](./docs/SECURITY_BOUNDARIES.md)
- [One-year Roadmap](./ROADMAP.md)

---

<a id="中文"></a>

## 中文

**百舸 CrossLoom** 是一个面向独立开发者与中小团队的开源、本地优先、跨引擎游戏内容编辑平台。项目以统一领域数据、轻量引擎桥接和受控 LLM Patch 工作流，降低战斗、任务、对话、AI、动画事件等复杂编辑器的开发与维护成本。

### 核心原则

- **本地优先**：项目数据与正式资产默认保留在开发者设备中。
- **跨引擎**：CrossLoom IR 独立描述设计意图，再由 Bridge 与 Runtime 适配 Unreal、Godot、Unity 或自研引擎。
- **人工主导 AI**：LLM 只能提出经过校验的结构化 Patch，不能绕过审核，也不能直接修改最终引擎资产。
- **开放可迁移**：开放 Schema、Bridge Protocol 与参考 Runtime，避免项目被单一工具锁定。
- **生产导向**：版本化数据、确定性校验、回滚、迁移和版本控制优先于功能数量。

### 第一年度重点

首年旗舰模块为**战斗动作编辑器**，包括动画时间轴、伤害判定体、虚拟挂点、VFX/Audio 事件、位移曲线、输入与取消窗口，以及由引擎提供的权威预览。

- **首要支持引擎**：Unreal Engine
- **跨引擎参考实现**：Godot
- **技术预览**：Unity
- **年度目标版本**：`v0.8 Public Beta`

### 工程结构

```text
apps/studio/                 CrossLoom Studio 桌面/Web 前端
packages/editor-core/        通用编辑器状态与命令模型
packages/schema/             CrossLoom IR 与 Schema
packages/bridge-protocol/    引擎桥接协议
engines/unreal/              Unreal Bridge 与 Runtime
engines/godot/               Godot Bridge 与 Runtime
engines/unity/               Unity 技术预览
docs/                        架构、原则、约束与规范
website/                     GitHub Pages 产品说明站点
```

### 快速开始

```bash
corepack enable
pnpm install
pnpm dev
pnpm check
```

### 文档入口

- [设计原则](./docs/DESIGN_PRINCIPLES.md)
- [AI 开发约束](./docs/AI_DEVELOPMENT_CONSTRAINTS.md)
- [系统架构](./docs/ARCHITECTURE.md)
- [产品范围](./docs/PRODUCT_SCOPE.md)
- [Schema 规则](./docs/SCHEMA_RULES.md)
- [Bridge Protocol](./docs/BRIDGE_PROTOCOL.md)
- [测试策略](./docs/TEST_STRATEGY.md)
- [安全边界](./docs/SECURITY_BOUNDARIES.md)
- [一年开发路线图](./ROADMAP.md)

---

## Status / 当前状态

- Version / 版本：`0.1.0-foundation`
- Stage / 阶段：M0 Architecture Freeze / 架构冻结
- Website / 产品网站：<https://syurli.github.io/CrossLoom/>
- Roadmap / 网站路线图：<https://syurli.github.io/CrossLoom/roadmap.html>

## License / 许可证

CrossLoom is licensed under [Apache License 2.0](./LICENSE). The product name, logo, and official distribution marks are not automatically licensed with the source code.

CrossLoom 采用 [Apache License 2.0](./LICENSE)。产品名称、Logo 与官方发行标识不因代码许可证而自动授权。
