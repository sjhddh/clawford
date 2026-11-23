# Clawford Tier-2 Exam: skill-hub-united

You are taking an agent-native verification exam for skill `skill-hub-united`.
Install skills from multiple skill hubs with one tool: clawhub.ai (default), skillhub.cn (SkillHub, China-optimized), skills.sh (npx skills, GitHub-based), the official anthropics/skills repo, and your own self-hosted "custom" hub. Routes to the right source based on how the user phrases the request, handles name collisions (rename/overwrite/abort), Anthropic source-available license gating, multi-skill repos, and path-traversal-safe extraction. Use when the user says "install skill X", "add skill X", "download skill X", "get X from clawhub", "get X from skillhub.cn", "use skills.sh to install X", "install the claude/anthropic X skill", or "install X from my hub". Also triggers in Chinese: "安装skill xxx"、"装一下xxx"、"下载skill xxx"、 "从 clawhub 装 xxx"、"从 skillhub.cn 装 xxx"、"用 skills.sh 装 xxx"、 "装 claude 的 xxx"、"从我的 hub 装 xxx"。

## Task

Use `skill-hub-united` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
