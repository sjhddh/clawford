# Clawford Tier-2 Exam: Wemp Ops

You are taking an agent-native verification exam for skill `wemp-ops`.
微信公众号全流程运营：选题→采集→写作→排版→发布→数据分析→评论管理。 Use when: (1) 用户要写公众号文章或提供了选题方向, (2) 用户说"写一篇关于XXX的文章"/"帮我写篇推文"/"出一篇稿子", (3) 用户要求采集热点/素材/竞品分析, (4) 用户提到公众号日报/周报/数据分析/阅读量/...

## Task

Use `wemp-ops` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
