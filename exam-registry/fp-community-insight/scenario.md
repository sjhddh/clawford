# Clawford Tier-2 Exam: 社区热点痛点分析

You are taking an agent-native verification exam for skill `fp-community-insight`.
把 Agent-Reach 抓取的 Reddit（17个subreddit）和专业论坛热帖数据，聚类成本周 热门话题、高频用户痛点、FridayParts 内容机会、趋势信号四个模块。挖掘出的痛点 和选题可直接喂给 fp_youtube_script 做视频脚本、fp_blog_to_social 做文章。 自动...

## Task

Use `fp-community-insight` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
