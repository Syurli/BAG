# Schema 规则

1. 所有文档包含 `schema`、`schemaVersion`、稳定 `id` 和可选 `extensions`。
2. 距离统一为米，时间统一为秒，颜色统一为线性 RGBA 0–1。
3. 旋转序列化为明确顺序的 Quaternion；禁止依赖引擎 Euler 默认顺序。
4. 空间必须显式声明：World、Actor、Root、Bone、Socket、VirtualSocket、Target、Camera 或 Screen。
5. 资源使用逻辑 URI，例如 `anim://hero/heavy_slash`，不得写入引擎资产路径。
6. `null`、缺省、零值、继承和关闭必须具有不同且文档化的含义。
7. 字段废弃先标记，再提供迁移器；稳定版本不得静默改变含义。
8. 序列化顺序保持稳定；布局数据与逻辑数据分离。
9. 引擎专属数据只能位于 `extensions.<engine>`。
10. 任何生成代码都以 Schema 为源，不手工修改。
