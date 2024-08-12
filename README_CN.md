# Sora.FM

Sora AI 视频生成器

> Sora 文本生成视频 API 还未发布，网站上展示的所有视频都是由 OpenAI 官方生成的。

## 线上演示

[https://sora.trys.ai](https://sora.trys.ai)

![preview](./preview_cn.png)

## 使用 Vercel 一键部署

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fall-in-aigc%2Fsorafm&env=POSTGRES_URL,WEB_BASE_URI&envDescription=POSTGRES_URL%20needed%20for%20the%20application&project-name=my-sora-project&repository-name=my-sora-project&redirect-url=https%3A%2F%2Fsora.trys.ai&demo-title=Sora.FM&demo-description=Sora%20AI%20Video%20generator&demo-url=https%3A%2F%2Fsora.trys.ai&demo-image=https%3A%2F%2Fgithub.com%2Fall-in-aigc%2Fsorafm%2Fraw%2Fmain%2Fpreview.png)

## 使用 Docker 部署

- 构建镜像

```shell
sudo docker build -f deploy/Dockerfile -t sorafm:latest .
```

- 运行服务

```shell
sudo docker run -itd -p 127.0.0.1:8014:8080 --restart=always sorafm:latest
```

- 配置 nginx

```txt
server {
    listen 80;

    location / {
        proxy_pass http://127.0.0.1:8014/;
        proxy_set_header Host $http_host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    error_log /var/log/nginx/sorafm.error;
}
```

## 本地开发

1. 克隆项目

```shell
git clone https://github.com/all-in-aigc/sorafm
```

2. 安装依赖

```shell
cd sorafm
pnpm install
```

3. 初始化数据库

使用本地的 [local postgres](https://wiki.postgresql.org/wiki/Homebrew) 或者托管的 [vercel-postgres](https://vercel.com/docs/storage/vercel-postgres) 或者 [supabase](https://supabase.com/)

使用 `data/install.sql` 文件里的建表语句创建数据表。

4. 设置环境变量

在项目根目录创建 `.env.local` 文件，写入如下配置：

```
POSTGRES_URL="postgres://USER:PASSWORD@HOST/DB"

WEB_BASE_URI="http://localhost:3000"
```

5. 本地开发

```shell
pnpm dev --port 3000
```

打开 `http://localhost:3000` 预览

## 致谢以下项目

- [aiwallpaper](https://aiwallpaper.shop) 提供代码参考
- [nextjs](https://nextjs.org/docs) 全栈开发框架
- [node-postgres](https://node-postgres.com/) 数据处理库
- [tailwindcss](https://tailwindcss.com/) 页面构建

## 其他

> 如果你想学习全栈开发，实现类似的产品，你可以参加我的 [全栈开发课程](https://mp.weixin.qq.com/s/4duIpeZkmqlKPa4jrcUdIA)

你可以在 Twitter 上联系我: https://twitter.com/idoubicc

或者关注我的微信公众号 👇

<img src="https://zknown-1251007641.cos.ap-guangzhou.myqcloud.com/images/20240130090120.png" width="300" height="320" />
