# BAG 系统架构

> **BAG — Build Across Games**

```text
BAG Studio
  ├─ Timeline / Graph / Curve / Viewport / Inspector
  ├─ Command Model + Undo/Redo
  └─ LLM Patch Review
            │
            ▼
BAG IR + Schema + Asset Alias
            │
            ▼
BAG Bridge Protocol
  ├─ Unreal Bridge ─► Unreal Compiler / Runtime
  ├─ Godot Bridge  ─► Godot Importer / Runtime
  ├─ Unity Bridge  ─► Unity Importer / Runtime
  └─ Custom Bridge ─► Custom Engine
```

## 分层职责

### BAG Studio

负责领域内容编辑、代理预览、校验、Diff、项目管理和调试展示，不负责复制引擎的最终动画、物理或渲染。

Studio 是 BAG 共用基础设施。具体领域产品可以在其上提供自己的编辑视图、工作流和产品名称；这些官方产品统一使用 `A BAIGE Project` 署名。

### BAG IR 与 Schema

定义引擎无关的设计意图、单位、坐标、时间和生命周期，是跨引擎复用的唯一正式源。

### BAG Bridge Protocol

负责能力发现、资源检索、资源别名解析、代理导出、临时预览、编译请求和运行状态回传。

### Compiler / Runtime

各引擎将 IR 编译为适合自身运行的结构，并实现动画、碰撞、VFX、音频等领域执行器。

## 依赖方向

`BAG Studio → Domain Packages → BAG Protocol`。引擎模块依赖协议和 Schema，但核心包不得依赖任何引擎 SDK。

共享 TypeScript 包统一使用 `@bag/*` namespace；旧 `@baige/*`、`@crossloom/*` 仅允许用于显式迁移兼容。

## 平台与产品边界

BAG 是百舸的英文母品牌与技术底座，英文展开为 **Build Across Games**。面向用户的正式领域工具应独立命名：

```text
<Product Name>
A BAIGE Project
        │
        ▼
BAG Studio / IR / Bridge / Runtime
```

`BAIGE` 不作为平台或技术层名称使用，只保留在固定家族署名 `A BAIGE Project` 中。

详细命名规则见 `PRODUCT_NAMING.md`。
