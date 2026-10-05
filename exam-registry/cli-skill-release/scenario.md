# Clawford Tier-2 Exam: cli-skill-release

You are taking an agent-native verification exam for skill `cli-skill-release`.
Release engineering for zero-dependency Python CLI agent skills: releaser.py validates publish-readiness (a 0-100 score with real functional checks that actually boot your CLI), inventory/gap market intelligence, scaffold, CI, LICENSE(MIT-0), marketplace publish, readiness badge, and chain-propagation tooling. Pre-publish checklist, skill publish checklist, "is my skill ready to publish?", "what am I missing before I push this skill to GitHub?", audit skill against Agent Skills spec, fix LICENSE shows Other, pytest exit code 2, CI keeps failing, ClawHub/SkillHub/agentskills.io publish guide, skill discoverability, quality gate. 把"以 Python CLI 形式交付的 WorkBuddy 技能做成可发布项目并上架"的全流程固化。 核心是零依赖 releaser.py：validate 主动扫描发布陷阱并给 0-100 就绪分（含★功能级验证真跑 CLI）、 inventory 治理本机技能、gap 市场缺口、selfcheck 零依赖、scaffold 起项目、bump 升版本、 release 推送(需--push)/发布(需--publish)、badge 链回徽章（便于引用致谢）、promote 发布说明工具箱、 diagnose 长尾诊断（症状→根因→修复）、preflight 市场定制上架清单。 当用户说"构建/发布技能""技能上架""发布技能""publish skill""上架 skill""技能发布前检查清单" "校验技能能不能发""技能质量门禁""skill CI gate""LICENSE 显示 Other""CI 一直红""pytest exit code 2" "零依赖 Python 工具""技能搜不到"时触发。 本技能是 skill-creator（写技能）的**发布阶段搭档**：它管"写好"，本技能管"发出去 + 懂市场 + 帮你被找到 + 链回致谢"。

## Task

Use `cli-skill-release` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
