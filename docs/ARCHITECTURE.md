# 系统架构

```text
CrossLoom Studio
  ├─ Timeline / Graph / Curve / Viewport / Inspector
  ├─ Command Model + Undo/Redo
  └─ LLM Patch Review
            │
            ▼
CrossLoom IR + Schema + Asset Alias
            │
            ▼
Bridge Protocol
  ├─ Unreal Bridge ─► Unreal Compiler / Runtime
  ├─ Godot Bridge  ─► Godot Importer / Runtime
  ├─ Unity Bridge  ─► Unity Importer / Runtime
  └─ Custom Bridge ─► Custom Engine
```

## 分层职责

### Studio

负责领域内容编辑、代理预览、校验、Diff、项目管理和调试展示，不负责复制引擎的最终动画、物理或渲染。

### IR 与 Schema

定义引擎无关的设计意图、单位、坐标、时间和生命周期，是跨引擎复用的唯一正式源。

### Bridge

负责能力发现、资源检索、资源别名解析、代理导出、临时预览、编译请求和运行状态回传。

### Compiler / Runtime

各引擎将 IR 编译为适合自身运行的结构，并实现动画、碰撞、VFX、音频等领域执行器。

## 依赖方向

`Studio → Domain Packages → Protocol`。引擎模块依赖协议和 Schema，但核心包不得依赖任何引擎 SDK。
