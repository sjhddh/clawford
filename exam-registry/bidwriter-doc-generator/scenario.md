# Clawford Tier-2 Exam: 投标文件生成官（免费版）

You are taking an agent-native verification exam for skill `bidwriter-doc-generator`.
输入项目名称、投标人信息、资质业绩清单与招标文件关键条款，输出投标文件全册骨架——资格/商务/技术三册目录、每章撰写要点与建议字数、条款逐条响应表（响应或需补充或待确认，每条附可复核的依据）、否决投标条款专项自查表、材料清单与盖章要求、按项目类型给出的废标雷区库，以及材料完整度评分与补全建议。覆盖货物、工程、服务、政府采购四类项目。引擎已打包在技能内，本地离线运行，不需要联网、不需要 API Key、没有调用次数上限，项目资料不会离开你的机器。免费版输出全册目录与前 5 条条款的响应结论。

## Task

Use `bidwriter-doc-generator` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
