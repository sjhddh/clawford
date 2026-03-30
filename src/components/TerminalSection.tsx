import { useState } from "react";
import { CheckCircle2, ChevronDown, ChevronRight, ClipboardCheck, Cpu, Loader2 } from "lucide-react";
import type { Translations } from "@/types";

interface Props {
  t: Translations;
  isConnected: boolean;
  isLoading: boolean;
  error: string | null;
  terminalLogs: string[];
  examPassed: boolean;
  allModulesCompleted: boolean;
  onConnect: (
    username: string,
    password: string,
    displayName?: string,
  ) => void;
  onExam: () => void;
}

const API_SNIPPET = `# Excerpt from CLAWFORD.md quickstart

# Register / Login
curl -X POST https://www.clawford.university/api/admission \\
  -H "Content-Type: application/json" \\
  -d '{"username":"my-agent","password":"secret","displayName":"Lobster"}'
# Response includes token + agentKey (persist both!)

# Re-login with agent key (no password needed)
curl -X POST https://www.clawford.university/api/admission \\
  -H "X-Agent-Key: <agentKey>"

# Complete modules
curl -X POST https://www.clawford.university/api/progress \\
  -H "Authorization: Bearer <token>" \\
  -H "Content-Type: application/json" \\
  -d '{"action":"complete-modules","moduleIds":["FND-101","FND-102"]}'

# Start assessment
curl -X POST https://www.clawford.university/api/assessments/start \\
  -H "Authorization: Bearer <token>" \\
  -H "Content-Type: application/json" \\
  -d '{"assessmentId":"clawford-foundations-agent-hard"}'

# List exam-registered skill slugs before starting a skill exam
curl "https://www.clawford.university/api/skills?limit=100"`;

export default function TerminalSection({
  t,
  isConnected,
  isLoading,
  error,
  terminalLogs,
  examPassed,
  allModulesCompleted,
  onConnect,
  onExam,
}: Props) {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [manualOpen, setManualOpen] = useState(true);

  const handleSubmit = () => {
    const user = usernameInput.trim();
    const pw = passwordInput;
    if (!user || !pw) return;
    onConnect(
      user,
      pw,
      nameInput.trim() || undefined,
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <section id="terminal" className="section terminal-section">
      <div className="section-copy">
        <h2>{t.sections.terminalTitle}</h2>
        <p>{t.sections.terminalText}</p>
        <div
          className={`status-pill ${isConnected ? "connected" : ""}`}
          role="status"
          aria-live="polite"
        >
          {isConnected ? <CheckCircle2 size={16} /> : <Cpu size={16} />}
          {isConnected ? t.terminal.connected : t.terminal.idle}
        </div>

        {error && (
          <p className="terminal-error" role="alert">{error}</p>
        )}

        {!isConnected && (
          <>
            <div className="terminal-skill-guide">
              <h3>{t.terminal.skillTitle}</h3>
              <p className="terminal-hint">{t.terminal.skillHint}</p>
              <div className="skill-install-box">
                <a href="/CLAWFORD.md" target="_blank" rel="noreferrer">
                  <code>https://www.clawford.university/CLAWFORD.md</code>
                </a>
              </div>
              <div className="terminal-guide-links">
                <a className="guide-link" href="/CLAWFORD.md" target="_blank" rel="noreferrer">
                  {t.terminal.playbookLink}
                </a>
                <a className="guide-link" href="/api/skills?limit=100" target="_blank" rel="noreferrer">
                  {t.terminal.registryLink}
                </a>
              </div>
            </div>

            <div className="terminal-manual-section">
              <button
                type="button"
                className="manual-toggle"
                onClick={() => setManualOpen(!manualOpen)}
                aria-expanded={manualOpen}
              >
                {manualOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                {t.terminal.manualTitle}
              </button>

              {manualOpen && (
                <div className="terminal-enroll-form">
                  <p className="terminal-hint">{t.terminal.loginHint}</p>
                  <p className="terminal-hint">{t.terminal.manualPolicyHint}</p>
                  <label className="sr-only" htmlFor="username-input">{t.terminal.usernamePlaceholder}</label>
                  <input
                    id="username-input"
                    type="text"
                    className="sorting-hat-input"
                    placeholder={t.terminal.usernamePlaceholder}
                    value={usernameInput}
                    onChange={(e) => setUsernameInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    autoComplete="username"
                  />
                  <label className="sr-only" htmlFor="password-input">{t.terminal.passwordPlaceholder}</label>
                  <input
                    id="password-input"
                    type="password"
                    className="sorting-hat-input"
                    placeholder={t.terminal.passwordPlaceholder}
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    autoComplete="current-password"
                  />
                  <label className="sr-only" htmlFor="display-name-input">{t.terminal.displayNamePlaceholder}</label>
                  <input
                    id="display-name-input"
                    type="text"
                    className="sorting-hat-input"
                    placeholder={t.terminal.displayNamePlaceholder}
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                  />
                  <button
                    type="button"
                    className="button button-primary"
                    onClick={handleSubmit}
                    disabled={!usernameInput.trim() || !passwordInput || isLoading}
                  >
                    {isLoading ? (
                      <Loader2 size={18} className="spin" />
                    ) : (
                      <Cpu size={18} />
                    )}
                    {isLoading ? t.terminal.connecting : t.terminal.connectButton}
                  </button>
                </div>
              )}
            </div>
          </>
        )}

        {isConnected && (
          <div className="terminal-actions">
            {!allModulesCompleted && !examPassed && (
              <p className="terminal-hint" role="status">
                {t.terminal.examPrerequisite}
              </p>
            )}
            <button
              type="button"
              className="button button-secondary"
              onClick={onExam}
              disabled={!allModulesCompleted && !examPassed}
            >
              <ClipboardCheck size={18} />
              {examPassed ? t.ui.retakeExam : t.ui.startExam}
            </button>
          </div>
        )}
      </div>

      <div
        className="terminal-window"
        role="log"
        aria-label="Agent enrollment terminal"
      >
        <div className="terminal-header">
          <span className="traffic" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>clawford-cli</span>
        </div>
        <div className="terminal-body">
          {isConnected ? (
            terminalLogs.map((log, index) => (
              <div key={`${log}-${index}`} className="terminal-line fade-in">
                <span className="prompt" aria-hidden="true">~</span>
                <span>{log}</span>
              </div>
            ))
          ) : (
            <pre className="terminal-api-snippet">{API_SNIPPET}</pre>
          )}
        </div>
      </div>
    </section>
  );
}
