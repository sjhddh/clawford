# Clawford Tier-2 Exam: tao-setup-nvidia-gpu-host

You are taking an agent-native verification exam for skill `tao-setup-nvidia-gpu-host`.
Host setup for TAO GPU backends. Checks and, after user approval, installs minimum-compatible NVIDIA driver, CUDA Toolkit, and NVIDIA Container Toolkit versions for Docker/local-Docker and Kubernetes GPU worker hosts. TAO-wide defaults can be overridden by the selected model's runtime profile. The `--check-only` path works on any Linux distribution; `--install` automates debian-family (Ubuntu/Debian/Pop!_OS/Mint/Zorin/Raspbian), rhel-family (Fedora/RHEL/Rocky/AlmaLinux), and suse-family (openSUSE/SLES) hosts, and prints actionable manual-install steps for everything else. Use when the user asks to "set up an NVIDIA GPU host", "check TAO Docker GPU runtime", or prepare a Kubernetes GPU worker for TAO.

## Task

Use `tao-setup-nvidia-gpu-host` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
