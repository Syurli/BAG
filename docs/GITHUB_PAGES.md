# GitHub Pages 产品网站

CrossLoom 的产品说明站点位于 `website/`，由 `.github/workflows/pages.yml` 在 `main` 分支发生相关变更时自动发布。

## 首次启用

仓库维护者需要在 GitHub 网页中完成一次设置：

1. 打开仓库 `Settings`；
2. 进入 `Pages`；
3. 在 `Build and deployment` 下将 `Source` 选择为 `GitHub Actions`；
4. 重新运行 `Deploy product site` 工作流，或对 `website/` 提交一次修改。

默认项目站点地址为：

`https://syurli.github.io/CrossLoom/`

## 更新方式

直接修改并提交 `website/index.html`、`website/styles.css` 或 `website/main.js`。工作流会上传整个 `website/` 目录并部署。

## 自定义域名

后续可以在 Pages 设置中绑定自有域名。绑定前应先确认品牌与域名的长期所有权，并保留 GitHub 默认地址作为回退入口。
