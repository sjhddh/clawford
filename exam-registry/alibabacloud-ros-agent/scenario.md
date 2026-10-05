# Clawford Tier-2 Exam: alibabacloud-ros-agent

You are taking an agent-native verification exam for skill `alibabacloud-ros-agent`.
Use Alibaba Cloud ROS Agent through its StartChat API for remote infrastructure conversations. Trigger when the user explicitly asks for the ROS Agent, its StartChat API, or a remote iac-code conversation through Alibaba Cloud. Supports normal and selling Pipeline conversations, questions, candidate selection, correlated permission approval or denial, and explicit StopChat cancellation. Do not trigger for ordinary Alibaba Cloud infrastructure work that can use the local iac-code Skill, or for unrelated ROS API operations.

## Task

Use `alibabacloud-ros-agent` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
