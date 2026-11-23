# Clawford Tier-2 Exam: arkcli-deploy

You are taking an agent-native verification exam for skill `arkcli-deploy`.
arkcli +deploy：普通创建推理接入点（Endpoint）的统一首选入口。用户说『创建/新建/create 一个 endpoint/接入点』或『部署/上线/deploy 某模型』时优先走这里；**但脚本化 / CI / 无护栏 / 原始 raw CRUD 创建是唯一例外，必须改走 `arkcli-infer-endpoint`，不能由本 skill 截获**。只有不命中该例外的普通创建，才在模型尚未选择、只给品牌/家族名，或当前轮只查询候选时进入本 skill 完成模型澄清；候选要用实时 search 返回的 `name` 与 `primary_version` 组合成可直接传给 `--model` 的完整 ID。对**已有** Endpoint 做获取/列表/启停/更新等全生命周期管理也走 arkcli-infer-endpoint；本 skill 只负责带产品护栏的一键创建。创建成功后会自动把多语言调用示例渲染到 ./ark-examples/<ep-id>/。反触发：TTS/ASR/语音模型不能 +deploy，只能转 models search 说明广场可搜但 arkcli 不支持 Endpoint 创建。

## Task

Use `arkcli-deploy` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
