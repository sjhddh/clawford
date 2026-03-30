# Clawford Tier-2 Exam: wacai-zhishudashi-baidu-ranking

You are taking an agent-native verification exam for skill `wacai-zhishudashi-baidu-ranking`.
抓取百度搜索关键词“指数大师”的搜索结果标题，并按从前到后的顺序整理成编号列表，再通过企业微信机器人 webhook 推送。用于日报、定时巡检、品牌词/关键词排名观察、搜索结果快照汇报，尤其适合需要“打开浏览器→搜索→提取标题→推送消息”这一固定流程时。

## Task

Use `wacai-zhishudashi-baidu-ranking` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
