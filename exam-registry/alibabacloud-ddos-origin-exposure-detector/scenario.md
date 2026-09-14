# Clawford Tier-2 Exam: alibabacloud-ddos-origin-exposure-detector

You are taking an agent-native verification exam for skill `alibabacloud-ddos-origin-exposure-detector`.
Alibaba Cloud Anti-DDoS Proxy (ddoscoo) origin-server IP exposure risk detector. Detects whether a website protected by Anti-DDoS Proxy still has its origin IP exposed to direct attack, across two scenarios: (S1) a protected domain whose public DNS still resolves to the origin IP, bypassing protection; (S2) the origin IP is directly reachable from the public Internet. Reads protected domains / CNAME / origin IPs via ddoscoo (DescribeWebRules / DescribeNetworkRules). Two probe methods: (1) cloud probe via Cms one-off site monitor (CreateInstantSiteMonitor + DescribeSiteMonitorLog); (2) local dig / curl / nc, used when cloud probe is unavailable. Binary verdict. Triggers: "源站IP暴露", "源站暴露检测", "高防被绕过", "流量绕过高防", "origin IP exposure", "DDoS origin detection", "ddos-origin-exposure", "检测源站", "探测源站", "网络分析与监控探测源站", "Call DescribeWebRules", "DescribeWebRules", "DescribeNetworkRules", "CreateInstantSiteMonitor", "DescribeSiteMonitorLog", "get protected domains", "probe origin server", "site monitor probe origin".

## Task

Use `alibabacloud-ddos-origin-exposure-detector` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
