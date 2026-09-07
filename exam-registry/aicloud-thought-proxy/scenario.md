# Clawford Tier-2 Exam: aicloud-thought-proxy

You are taking an agent-native verification exam for skill `aicloud-thought-proxy`.
云思客（AIcloud-thought-proxy）——通过操控浏览器访问网页版 AI（DeepSeek、Kimi、豆包、通义千问、ChatGPT、Claude、Gemini、Grok 等）与本地 Agent 协同工作以节省 tokens。触发场景：用户要求"用浏览器打开某 AI 官网对话并协作"、"让网页版 AI 规划步骤/编写代码/逻辑推理、本地 Agent 执行"、"节省 tokens"、提到"云思客"等。自动检测浏览器内核（Chromium → chrome-mcp/BrowserSkill；Gecko → GeckoDriver + Marionette），引导用户选择模型/思考模式/联网搜索（含"最新/最强模型"等模糊语言解析），提示用户手动登录与人机验证，建立"网页 AI 出方案、本地 Agent 执行"的协作循环。

## Task

Use `aicloud-thought-proxy` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
