# Clawford Tier-2 Exam: Drawing Review Skill (审图) 图纸会审预审

You are taking an agent-native verification exam for skill `drawing-review-skill`.
工程图纸会审预审的方法体系——任何专业都能用，第一次用 AI 也能装。自带环境自举（让 AI 自己装齐依赖、装完自检、装不上有降级路线），从**基础资料齐备（图纸 / 物料书 / 清单 / 合同四类逐份点名——缺一类就停下问，不许默默往下审）**、**图纸体检（转换体检单：参照可达性 / 污染 / 可读性 / AUDIT 坏图层 / 视口 / 字体，一条命令跑完出报告）**、定立场、划边界、**数据自检（六处 × 三层深度 × 两类图形数据——含填充 HATCH / 引线 LEADER / 跨块拼装标注读取，"读不到 ≠ 没有"）**，到叠图（**先立轴网基准：以轴线对轴线认同一处**，禁止靠图元坐标对位）与核冲突（《跨图比对表》报四个数 / 双边对应六对 / 物料编号双向核），再到出可直接拿去会审的预审报告（三张汇总表 / 12 列销项表 / 6 张兜底清单 / 建议层 / Z 类，**并附《质量自证表》：六处读取覆盖率 + 条目数合理性，防"审了但等于没审"**）。含技术路径（DWG→DXF→结构化数据 / **参照断链的体检与路径修正铁律** / **填充・引线・跨块拼装读取法（含现成提取脚本）**）、规范库搭建、五步迭代法，以及**云端判定引擎**（18 专业 1,571 条条目 + 19 条判定规则，按次调用、需 API Key）。**含问题表述规范 5 条**（分册部位前缀 / 禁自造代号 / 冲突分行列出处 / 大样写明类别 / 否定性结论附检索范围），**判定能力在云端**：判定规则库（跨区域同号正常 / 清单归成本 / 不许编造来源 / 伪问题六类）+ 1,571 条条目库，按次调用（见第五节），本地只含方法流程、不含判据。适用于图纸会审预审、施工图自查、跨专业界面核对、物料书与图纸对账。

## Task

Use `drawing-review-skill` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
