<div align="center">

# 百舸 BAIGE

### 百舸争流，各成其器。

**Local-first, cross-engine game authoring infrastructure with human-controlled AI.**

[English](#english) · [中文](#中文) · [Product Website](https://syurli.github.io/CrossLoom/) · [Web Roadmap](https://syurli.github.io/CrossLoom/roadmap.html)

</div>

---

<a id="english"></a>

## English

**BAIGE (百舸)** is an open, local-first foundation for building cross-engine game authoring tools. It provides engine-neutral domain data, shared editor infrastructure, lightweight engine bridges, and a controlled LLM Patch workflow so individual tools can focus on their own domain instead of rebuilding the same platform layer.

BAIGE is the ecosystem and technical foundation. User-facing tools are independently named products, and official products carry the signature:

> **A BAIGE Project**

### Core principles

- **Local-first** — project data and production assets remain on the developer's machine by default.
- **Cross-engine** — BAIGE IR describes design intent independently from Unreal Engine, Godot, Unity, or a proprietary engine.
- **Human-controlled AI** — an LLM may propose validated structural patches, but it cannot bypass review or directly alter final engine assets.
- **Open and portable** — schemas, the Bridge Protocol, and reference runtimes are open so projects are not locked to one tool.
- **Product independence** — official tools keep their own names, identities, and domain focus while sharing BAIGE infrastructure.
- **Production-oriented** — versioned data, deterministic validation, rollback, migration, and source control come before feature count.

### Product naming

BAIGE products are not named `BAIGE <Feature>`. Each official product receives an independent name, preferably drawn from Chinese classical literature, poetry, imagery, or related cultural language. The shared family mark is **A BAIGE Project**.

See [Product Naming Rules](./docs/PRODUCT_NAMING.md).

### Current foundation focus

The current repository is building the shared authoring foundation and a first combat-authoring vertical slice with animation timelines, damage volumes, virtual sockets, VFX and audio events, movement curves, input and cancel windows, and authoritative engine preview.

- **Primary support:** Unreal Engine
- **Cross-engine reference:** Godot
- **Technical preview:** Unity
- **Target release:** `v0.8 Public Beta`

### Repository structure

```text
apps/studio/                 BAIGE Studio web/desktop front end
packages/editor-core/        Shared editor state and command model
packages/schema/             BAIGE IR and schemas
packages/bridge-protocol/    Engine bridge protocol
engines/unreal/              Unreal Bridge and Runtime
engines/godot/               Godot Bridge and Runtime
engines/unity/               Unity technical preview
docs/                        Architecture, principles, naming, constraints, specifications
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

- [Product Naming Rules](./docs/PRODUCT_NAMING.md)
- [Design Principles](./docs/DESIGN_PRINCIPLES.md)
- [AI Development Constraints](./docs/AI_DEVELOPMENT_CONSTRAINTS.md)
- [Architecture](./docs/ARCHITECTURE.md)
- [Product Scope](./docs/PRODUCT_SCOPE.md)
- [Schema Rules](./docs/SCHEMA_RULES.md)
- [Bridge Protocol](./docs/BRIDGE_PROTOCOL.md)
- [Testing Strategy](./docs/TEST_STRATEGY.md)
- [Security Boundaries](./docs/SECURITY_BOUNDARIES.md)
- [One-year Roadmap](./ROADMAP.md)

### Naming migration

This repository was initially published under the codename **CrossLoom**. Repository and GitHub Pages URLs may continue to contain `CrossLoom` during the migration, but CrossLoom is no longer the product or platform name. New code uses the `@baige/*` namespace and BAIGE terminology.

---

<a id="中文"></a>

## 中文

**百舸 BAIGE** 是一个面向跨引擎游戏创作工具的开源、本地优先基础平台。它提供统一领域数据、通用编辑器基础、轻量引擎桥接与受控 LLM Patch 工作流，使每个领域工具能够专注自身问题，而不必重复建设平台层。

BAIGE 是母品牌、生态与技术底座。面向用户的工具拥有自己的独立名称；所有官方产品统一使用以下署名：

> **A BAIGE Project**

### 核心原则

- **本地优先**：项目数据与正式资产默认保留在开发者设备中。
- **跨引擎**：BAIGE IR 独立描述设计意图，再由 Bridge 与 Runtime 适配 Unreal、Godot、Unity 或自研引擎。
- **人工主导 AI**：LLM 只能提出经过校验的结构化 Patch，不能绕过审核，也不能直接修改最终引擎资产。
- **开放可迁移**：开放 Schema、Bridge Protocol 与参考 Runtime，避免项目被单一工具锁定。
- **产品独立**：官方工具拥有自己的名称、视觉身份和领域边界，同时共享 BAIGE 基础设施。
- **生产导向**：版本化数据、确定性校验、回滚、迁移和版本控制优先于功能数量。

### 产品命名

百舸官方产品不采用 `BAIGE + 功能名` 的统一前缀方式。每个面向用户的产品应拥有独立名称，优先从中国古典文学、诗词、意象与相关文化语言中取名，并统一使用 **A BAIGE Project** 作为家族署名。

完整规则见 [产品命名规范](./docs/PRODUCT_NAMING.md)。

### 当前基础建设重点

当前仓库正在建设 BAIGE 共用创作基础，并通过首个战斗创作垂直切片验证动画时间轴、伤害判定体、虚拟挂点、VFX/Audio 事件、位移曲线、输入与取消窗口，以及引擎权威预览等能力。

- **首要支持引擎**：Unreal Engine
- **跨引擎参考实现**：Godot
- **技术预览**：Unity
- **年度目标版本**：`v0.8 Public Beta`

### 工程结构

```text
apps/studio/                 BAIGE Studio 桌面/Web 前端
packages/editor-core/        通用编辑器状态与命令模型
packages/schema/             BAIGE IR 与 Schema
packages/bridge-protocol/    引擎桥接协议
engines/unreal/              Unreal Bridge 与 Runtime
engines/godot/               Godot Bridge 与 Runtime
engines/unity/               Unity 技术预览
docs/                        架构、原则、命名、约束与规范
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

- [产品命名规范](./docs/PRODUCT_NAMING.md)
- [设计原则](./docs/DESIGN_PRINCIPLES.md)
- [AI 开发约束](./docs/AI_DEVELOPMENT_CONSTRAINTS.md)
- [系统架构](./docs/ARCHITECTURE.md)
- [产品范围](./docs/PRODUCT_SCOPE.md)
- [Schema 规则](./docs/SCHEMA_RULES.md)
- [Bridge Protocol](./docs/BRIDGE_PROTOCOL.md)
- [测试策略](./docs/TEST_STRATEGY.md)
- [安全边界](./docs/SECURITY_BOUNDARIES.md)
- [一年开发路线图](./ROADMAP.md)

### 命名迁移说明

本仓库最初使用 **CrossLoom** 作为代号。迁移期间仓库地址与 GitHub Pages 地址可能仍包含 `CrossLoom`，但 CrossLoom 不再作为平台或产品名称使用。新代码统一采用 `@baige/*` 命名空间和 BAIGE 术语。

---

## Status / 当前状态

- Version / 版本：`0.1.0-foundation`
- Stage / 阶段：M0 Architecture Freeze / 架构冻结
- Website / 产品网站：<https://syurli.github.io/CrossLoom/>
- Roadmap / 网站路线图：<https://syurli.github.io/CrossLoom/roadmap.html>

## License / 许可证

BAIGE source code is licensed under [Apache License 2.0](./LICENSE). BAIGE, 百舸, official product names, logos, and the **A BAIGE Project** mark are not automatically licensed with the source code.

BAIGE 源代码采用 [Apache License 2.0](./LICENSE)。BAIGE、百舸、官方产品名称、Logo 与 **A BAIGE Project** 标识不因代码许可证而自动授权。
