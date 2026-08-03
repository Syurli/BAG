# Bridge Protocol 初稿

## 核心接口

- `handshake`
- `getCapabilities`
- `getProjectInfo`
- `listAssets`
- `getAssetMetadata`
- `resolveAssetAlias`
- `getSkeleton`
- `getAnimationMetadata`
- `getSockets`
- `exportPreviewProxy`
- `validateDocument`
- `applyPatch`
- `compileDocument`
- `startPreview` / `stopPreview`
- `setPreviewTime` / `evaluatePose`
- `subscribeRuntimeTrace`
- `locateEngineAsset`

## 通信建议

HTTP 用于代理资产和较大静态数据；WebSocket 用于控制、增量 Patch、姿态流和运行状态。高频骨骼数据使用二进制协议，控制消息使用版本化 JSON。

## 安全默认值

Bridge 仅监听 `127.0.0.1`，要求会话 Token，并限制可访问项目根目录。任何远程监听都必须由用户明确开启。

## 能力协商

Bridge 必须声明形状、动画、热重载、姿态流、VFX 参数和高级能力支持情况。Studio 根据结果隐藏、警告或禁止不支持的功能。
