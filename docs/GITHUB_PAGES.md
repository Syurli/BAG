# BAIGE GitHub Pages 产品网站

BAIGE 的产品说明站点位于 `website/`，由 `.github/workflows/pages.yml` 在 `main` 分支发生相关变更时自动发布。

## 当前地址与历史 slug

当前默认项目站点地址为：

`https://syurli.github.io/CrossLoom/`

其中 `CrossLoom` 是仓库历史 slug，不再是平台品牌名。页面标题、文案、技术术语和新链接文案均应使用 **BAIGE / 百舸**。

如果未来重命名 GitHub 仓库或迁移到自定义域名，应保留旧地址的跳转或迁移说明，避免历史链接失效。

## 首次启用

仓库维护者需要在 GitHub 网页中完成一次设置：

1. 打开仓库 `Settings`；
2. 进入 `Pages`；
3. 在 `Build and deployment` 下将 `Source` 选择为 `GitHub Actions`；
4. 重新运行 `Deploy product site` 工作流，或对 `website/` 提交一次修改。

## 更新方式

直接修改并提交 `website/index.html`、`website/styles.css`、`website/main.js` 或其他 `website/` 页面。工作流会上传整个 `website/` 目录并部署。

网站必须遵循 `PRODUCT_NAMING.md`：

- 母品牌写作 `BAIGE` / `百舸`；
- 官方独立产品使用自己的名称；
- 官方产品家族署名固定为 `A BAIGE Project`；
- 不在新页面继续把 `CrossLoom` 作为产品或平台名称展示。

## 自定义域名

后续可以在 Pages 设置中绑定自有域名。绑定前应先确认品牌与域名的长期所有权，并保留 GitHub 默认地址作为回退入口。
