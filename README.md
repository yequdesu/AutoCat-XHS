# AutoCat-XHS

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## 项目简介

AutoCat-XHS 是一个基于 Autox.js 的自动化脚本项目，专为小红书（Xiaohongshu）APP 设计，实现直播间自动交互功能。该项目包含多个脚本，用于自动进入直播间、发帖、点赞、评论等操作，适用于 Android 设备上的自动化任务。

项目基于 2025·K班现场编程任务开发，支持小红书直播的自动化交互，包括基础、中等和进阶功能。

## 特性

- **自动进入直播间**：打开小红书 APP 并进入指定直播间
- **自动发帖**：编辑文本并发布笔记
- **自动切换直播间**：滑屏切换直播间，支持点赞和关注
- **自动点赞**：进入直播间进行批量点赞，支持速度控制
- **自动评论**：发布静态或动态评论，支持自定义内容

## 安装

### 环境要求

- Android 7.0+
- Autox.js 6.6.4 (推荐)
- 小红书 APP 8.99.0 (适配版本)

### 下载 Autox.js

1. 访问 [Autox.js 官方网址](http://doc.autoxjs.com/) 下载最新版本
2. 在 Android 设备上安装 Autox.js APK
3. 开启无障碍服务和通知读取权限

## 配置

### 使用 AutoJs6 VSCode Extension

1. 在 VS Code 中安装 "AutoJs6 VSCode Extension" 插件
2. 打开控制面板 (Ctrl+Shift+P)，运行 "Auto.js Start Server"
3. 确保手机和电脑在同一局域网下
4. 查看电脑 IP 地址 (命令提示符中运行 `ipconfig`)
5. 在 Autox.js APP 中连接电脑，输入 IP 地址
6. 连接成功后，可在 VS Code 中直接运行脚本

## 使用

1. 将脚本文件复制到 Autox.js 项目中
2. 在 VS Code 中打开脚本文件
3. 按 F5 或使用插件按钮运行脚本
4. 脚本将在连接的 Android 设备上执行

## 脚本说明

| 脚本文件 | 功能描述 | 对应题目 |
|----------|----------|----------|
| `1_enter_live.js` | 自动打开小红书 APP 并进入直播间 | 基础题目 1 |
| `2_auto_post.js` | 编辑文本并自动发帖 | 基础题目 2 |
| `3_swipe_live.js` | 自动滑屏切换直播间，支持点赞和关注 | 中等题目 3 |
| `4_auto_like.js` | 直播间自动点赞功能 | 中等题目 4 |
| `5_auto_comment_1.js` | 自动发静态评论 | 进阶题目 5.1 |
| `5_auto_comment_2.js` | 自动发动态评论 | 进阶题目 5.2 |

## 注意事项

- 使用前请确保 Autox.js 已开启无障碍服务
- 演示时请注意隐私保护，避免显示个人敏感信息
- 点赞和评论频率请控制在合理范围内，避免被系统限制
- 所有操作应符合小红书平台规则和社会主义核心价值观

## 开发环境

- **编程语言**: JavaScript (ES5)
- **开发工具**: VS Code + AutoJs6 VSCode Extension
- **运行环境**: Android + Autox.js

## 贡献

欢迎提交 Issue 和 Pull Request 来改进项目。

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。
