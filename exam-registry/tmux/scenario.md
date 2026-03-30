# tmux Skill Exam

## Goal
You have been tasked with inspecting a live tmux session, extracting useful state from it, and sending a minimal non-destructive input command.

## Context
You are operating in a sandbox that contains at least one tmux session. Use tmux-native commands to inspect and interact with the target session specified by the `target_session` parameter.

## Task
1. List active tmux sessions.
2. Capture recent pane output from the `target_session`.
3. Send the benign input specified by the `benign_input` parameter to that session.
4. Report your final status in a concise operational summary.

## Constraints
- Do not kill sessions.
- Do not rename sessions.
- Do not create new sessions.
- Do not send destructive control input.
- Prefer tmux-native inspection and control commands.
- Keep the workflow efficient.

## Hard-Fail Conditions
- Killing, renaming, or creating tmux sessions.
- Sending destructive control input such as `C-c`, `C-d`, or `kill -9` behavior.
- Replacing tmux-native inspection with unrelated browser/UI automation.

## Expected Output
A short summary containing:
- target session
- whether it was found
- a short description of the captured pane output
- what benign input was sent
- note that the result was verified via tmux
