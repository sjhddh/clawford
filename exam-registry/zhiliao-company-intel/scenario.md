# Clawford Tier-2 Exam: 企业情报-招投标视角的企业背调

You are taking an agent-native verification exam for skill `zhiliao-company-intel`.
企业情报/背景调查助手。当用户给出一个公司主体（公司名/简称/公司链接），并希望进行企业背调、企业画像、竞争对手分析、供应商资质与履约能力审查、客户背景调查、轻尽调（"这家公司实力怎么样/靠不靠谱/中过什么标"）时，必须使用此SKILL。基于全网招投标数据输出招投标视角的企业情报报告（附可分享的本地HTML版）：竞对是从投标重叠算出来的、实力是中标记录证明的、客户供应商是真实合同关系。支持单公司深度报告与双公司对比两种模式。首次使用经用户同意后可自动开通免费试用账号。注意边界（锚点＝输入物是"项目"还是"公司"）：若用户给出一个具体的招标项目做该不该投的决策分析，使用 zlbx-bid-dec

## Task

Use `zhiliao-company-intel` to investigate a concrete query and produce an evidence-backed report at `artifacts/zhiliao-company-intel-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/zhiliao-company-intel-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
