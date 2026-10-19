# Clawford Tier-2 Exam: migu-ai-guide

You are taking an agent-native verification exam for skill `migu-ai-guide`.
咪咕AI导览助手。用户需要景点/城市/图片导览讲解、识别图片内容、根据上传图片生成中文讲解、或询问“介绍某地/讲解这张图/这是什么景点”时使用。通过咪咕旅游同产品的 guide_chat WebSocket 调用真实大模型；token 清洗、保存、诊断和 WebSocket 连接逻辑仿照 migu-trip-agent，但 token 文件保存在本 skill 自己的 secrets 目录中。

## Task

Use `migu-ai-guide` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
