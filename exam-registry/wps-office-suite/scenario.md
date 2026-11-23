# Clawford Tier-2 Exam: wps-office-suite

You are taking an agent-native verification exam for skill `wps-office-suite`.
WPS Office 全家桶 - 四引擎（WPS/MS Office/LibreOffice/纯Python）智能识别用户已安装软件，纯Python模式支持排序/筛选/图表/公式/统计，含文档模板（代码生成）、最佳实践案例、故障排除大章（20+避坑+15 FAQ+15错误ID 统一索引）、自动重试、硬件自适应、环境自检、Skill更新提醒；v5.1新增：kingdoc云端桥接（白名单探测+配置预检+subprocess上传+差异检查）、条件格式/数据验证跨引擎IO（JSON中间格式保真往返）、会议纪要三段式要素化（待办清单+决策记录+风险异议）+说话人标注（MFCC聚类）；v5.2新增：公文一键排版（GB/T 9704 规则库约束+结构识别套版+红头预留位+联合行文）、批量水印与敏感信息打码（身份证/手机号/银行卡/邮箱双轨识别+黑色矩形覆盖+打码清单）、跨文档知识检索与问答（本地TF-IDF零依赖+跳转+可选zwjh记忆桥接）；删除：与contract-review重复的轻量合同审查模块，改为文档互链引导；v5.2.5修复：MS Office引擎下Excel/PPT创建必然失败（错用Word COM对象），新增get_ms_excel/get_ms_ppt及三槽位统一释放release_ms，MS Office路径透传filepath参数;v5.3.5修复：SKILL.md frontmatter 修复 tags 块序列误混入联系方式行导致标准 YAML 解析失败;v5.4.0新增：留存型功能——定时任务与报告中心（schedule_register 升级为三平台统一调度层 schtasks/cron/launchd，错过策略 skip/run_once，注册表 JSON 可导出导入；新建 report_center.py 报告中心，templates/reports/*.json 参数化模板 + ECharts 单文件 HTML 输出（图表内联、无服务端、双击即开）；report_generator 升级支持 --format html；wps.py CLI 统一埋点 SQLite，自动供 report_center 生成周度使用摘要附在报告末尾；watch.py 职责收窄为纯事件采集）；v5.3.0新增：统一CLI入口 wps（registry.json注册表分发，office --app/--action 与 convert 子命令、--list 一屏列出全部命令，薄路由层不改脚本内部逻辑）、全命令 --json 机器可读输出（固定 ok/error_id/elapsed/data 四字段，对齐 E001-E015，wps_error.py 新增 emit_json 统一出口）、_worker 启动优化（wps_pure 改惰性加载，pywin32/python-docx/openpyxl 经核查已惰性导入，ENGINE_CACHE 进程级单例复用，COM 释放统一走 release_ms 三槽位）、转换三入口合并为 convert（format_converter/md_converter/wps_docx_to_ppt 内部按目标格式路由，旧脚本保留为兼容别名并提示新命令，v6.0.0 移除）；v5.5.0新增：Excel 深度模式与数据准确性承诺——原生透视表构建器 pivot_builder.py（openpyxl OOXML 真 pivotCache/pivotTable，非静态汇总，WPS/MS/纯Python 均可识别，nl2sql「按X汇总Y」直出透视表+clarify 澄清维度/度量）、NL2Formula 黄金集自检（tests/golden_formula.json 50 条基准，run_golden.py 逐条断言，本版准确率 100%）、chart_recommender 接入 llm_bridge 语义层（cn-llm-router 白名单优先，无 Key 降级本地规则，理由中文化+数据特征依据）；合并：excel_analyzer 旧图表建议分支统一为 --action chart 路由（口径单源化）

## Task

Use `wps-office-suite` to investigate a concrete query and produce an evidence-backed report at `artifacts/wps-office-suite-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/wps-office-suite-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
