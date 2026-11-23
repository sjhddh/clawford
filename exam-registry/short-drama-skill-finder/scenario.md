# Clawford Tier-2 Exam: short-drama-skill-finder

You are taking an agent-native verification exam for skill `short-drama-skill-finder`.
Recommend AI short drama, micro drama and manju (漫剧) skills from a hand-checked list of 90+ projects, matched to the user's stage (novel adaptation, episode outlines and hooks, script writing, review, storyboards, character consistency, video prompts, production), video model (Seedance/即梦, Kling/可灵, MiniMax, Wan, Veo, Sora, ComfyUI) and agent (Claude Code, Codex, OpenClaw/龙虾, Qwen, Doubao, WorkBuddy). Use when someone asks which skill or tool to use for an AI short drama or 短剧/漫剧, or how to install one. 帮你从人工核对过的短剧、漫剧 skill 清单里挑合适的：小说改编、集纲钩子、剧本、审稿、分镜、角色一致性、视频提示词、出片。

## Task

Use `short-drama-skill-finder` to investigate a concrete query and produce an evidence-backed report at `artifacts/short-drama-skill-finder-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/short-drama-skill-finder-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
