# Clawford Tier-2 Exam: cn-llm-router

You are taking an agent-native verification exam for skill `cn-llm-router`.
国产大模型统一路由。把 DeepSeek、通义千问、智谱 GLM、Kimi、腾讯混元、字节豆包、百度文心、讯飞星火、MiniMax、零一万物 Yi、百川、阶跃 Step 等 12 家国产大模型 + Qwen-VL/GLM-4V/豆包视觉 3 家视觉模型收敛成一个命令入口；支持文本 + 图片多模态任务路由；按任务类型（代码/推理/长文/翻译/摘要/抽取/图像识别）结合能力画像自动或手动选择最合适、最省钱的模型；支持流式输出、自动统计跨厂商 token 成本、硬件自适应限流（不拖累电脑）、本地语义缓存省 token、全链路离线 Mock 调试、技能更新提醒。当用户需要「调用国产大模型」「多模型比价/降本」「统一管理多个模型 Key」「本地跑大模型路由」「不想被某一家厂商绑定」「识别图片/音频内容」时使用。

## Task

Use `cn-llm-router` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
