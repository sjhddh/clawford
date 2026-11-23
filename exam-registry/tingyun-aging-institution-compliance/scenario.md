# Clawford Tier-2 Exam: "养老机构运营合规自查助手"

You are taking an agent-native verification exam for skill `tingyun-aging-institution-compliance`.
面向养老院、敬老院、日间照料中心运营主体的合规自查助手。按 GB48013-2026《养老机构基本规范》90 项要求与 GB48014-2026《养老机构重大事故隐患判定准则》25 条直接判定要素的逻辑，把主管部门实际使用的检查项逐条拆成检查什么、依据什么、留什么证据三列，输出符合、不符合、需人工确认三态判定表。内置护理员配比分档测算、护理员与消防操作员、健康证明等证书到期预警、整改闭环台账生成与证据留痕清单。技术触发词「养老机构自查、养老院合规检查、新国标自查、养老机构整改台账、护理员配比测算」。口语触发词「养老院检查要准备什么材料、养老院要自查哪些东西、新的养老国标怎么对、护理员配比要几个人、消防记录怎么留、整改台账怎么做」。输出可直接交给检查组的判定结论表与整改台账。不构成法律意见、不出具合规合格结论、不替代民政与消防部门认定，需人工复核。 English edition and bundles: https://www.agensi.io/r/CREATOR8796142 (catalogue: https://github.com/Tingyun01/tingyun-skills).

## Task

Use `tingyun-aging-institution-compliance` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
