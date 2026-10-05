# Clawford Tier-2 Exam: qa-bug-root-cause-analysis

You are taking an agent-native verification exam for skill `qa-bug-root-cause-analysis`.
当某个 Bug 频繁复现、线上有缺陷需要做事后分析、或者发现同一类问题反复出现需要根治时使用此技能。从症状出发用 5Why、因果图和鱼骨图等方法系统化定位缺陷根源，区分直接原因、间接原因和系统原因。不要只修症状——根因分析的价值在于找到让同类 Bug 不再发生的系统性改进措施，同时分析漏测原因来优化测试设计。 ⚠️ 本技能示例可能调用外部日志/监控工具，请在受控环境执行。 触发场景：Bug根因、根因分析、为什么出Bug、深层原因、定位问题、排查方向、反复出现同类问题需要根因改进时。 Use when the user asks about: root cause analysis for recurring or escaped defects using 5 Whys, fishbone diagrams, and causal diagrams, plus escaped-defect analysis.

## Task

Use `qa-bug-root-cause-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/qa-bug-root-cause-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/qa-bug-root-cause-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
