# Lesson 6: API 平台与开发者工具 / API Platform & Developer Tools

## 面向开发者 / FLock for Developers

**FLock API 平台**是一个**兼容 OpenAI SDK 的 API**，让开发者可以使用 FLock 生态中的模型构建 AI 应用。

The **FLock API Platform** is an **OpenAI SDK-compatible API** that lets developers build AI-powered applications using models from the FLock ecosystem.

如果你知道如何使用 OpenAI 的 API，你就知道如何使用 FLock 的。

If you know how to use OpenAI's API, you already know how to use FLock's.

## 主要特性 / Key Features

### OpenAI SDK 兼容性 / OpenAI SDK Compatibility

```python
# OpenAI
from openai import OpenAI
client = OpenAI(api_key="sk-...")
response = client.chat.completions.create(
    model="gpt-4",
    messages=[{"role": "user", "content": "Hello"}]
)

# FLock — 只需更改 base URL 和 API key
from openai import OpenAI
client = OpenAI(
    base_url="https://api.flock.io/v1",
    api_key="your-flock-api-key"
)
response = client.chat.completions.create(
    model="flock-model-name",
    messages=[{"role": "user", "content": "Hello"}]
)
```

### 可用端点 / Available Endpoints
- `/chat/completions` — 对话补全 / Chat completions
- `/embeddings` — 文本嵌入 / Text embeddings
- `/models` — 列出可用模型 / List available models

## 你可以用它构建什么 / What You Can Build

由于 FLock 模型使用隐私保护 FL 训练，它们特别适合：

Because FLock models are trained with privacy-preserving FL, they're especially suited for:

- **医疗应用** — AI 处理患者数据但不会将数据发送到任何地方
- **企业聊天机器人** — 敏感业务数据的 AI 助手
- **金融工具** — 不共享客户记录的欺诈检测
- **法律 AI** — 不上传敏感文档的合同分析

## 入门 / Getting Started

1. 在 [beta.flock.io](https://beta.flock.io) 注册
2. 获取 API 密钥
3. 阅读 [docs.flock.io](https://docs.flock.io) 上的文档
4. 进行你的第一次 API 调用

## 开发者资源 / Developer Resources

| 资源 | 链接 |
|------|------|
| 文档 / Docs | docs.flock.io/flock-products/api-platform |
| API 端点参考 / API Endpoint Ref | docs.flock.io/flock-products/api-platform/api-endpoint |
| 模型 API 指南 / Model API Guide | docs.flock.io/flock-products/ai-marketplace/quickstart/model-api-guide |
| Discord Bot 教程 | docs.flock.io/flock-products/ai-marketplace/quickstart/tutorials/create-a-discord-bot-with-model-api.md |
| Farcaster Frames 教程 | docs.flock.io/flock-products/ai-marketplace/quickstart/tutorials/farcaster-frames-with-model-api.md |

---

**知识检验 / Knowledge Check:**

1. 从 OpenAI 切换到 FLock 的 API 需要修改多少代码？/ How much code do you need to change to switch from OpenAI to FLock's API?
2. 使用 FLock 模型相比中心化模型的一个优势是什么？/ What's one advantage of using FLock models over centralized models?
3. 在哪里可以找到 API 文档？/ Where can you find the API documentation?

---

*下一课 / Next: [Lesson 7 — How to Participate](lesson-7-how-to-participate.md)*
