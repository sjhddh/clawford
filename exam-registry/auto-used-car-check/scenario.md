# Clawford Tier-2 Exam: 二手车验车清单台

You are taking an agent-native verification exam for skill `auto-used-car-check`.
二手车最怕三件事：事故车、泡水车、调表车，光看外观和听卖家说几乎看不出来。 输入：车型年份与里程、卖家描述、看车场景（个人/车商/平台）、预算、是否有检测报告。输出：①看车动线清单（外观→内饰→机舱→底盘→试驾，每步看什么）②四类问题特征识别（事故/泡水/调表/大修的痕迹）③必须索要的资料（登记证/保养记录/保险出险）④第三方检测与复检建议 ⑤议价依据（发现哪些问题可以压价、幅度逻辑）⑥过户与付款安全流程。永久免费，无需付费、无需授权（MIT-0）。

## Task

Use `auto-used-car-check` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
