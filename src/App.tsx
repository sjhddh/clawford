import { useCallback, useMemo, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AssessmentSection from "@/components/AssessmentSection";
import CourseCatalogSection from "@/components/CourseCatalogSection";
import CurriculumSection from "@/components/CurriculumSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import JourneySection from "@/components/JourneySection";
import PrinciplesSection from "@/components/PrinciplesSection";
import SortingHatSection from "@/components/SortingHatSection";
import StudentWallSection from "@/components/StudentWallSection";
import StudentsPage from "@/components/StudentsPage";
import StructureSection from "@/components/StructureSection";
import TerminalSection from "@/components/TerminalSection";
import { useSession } from "@/contexts/SessionContext";
import translations from "@/i18n";
import type { Lang } from "@/types";

const BOOT_LOGS = [
  "> boot clawford://foundations",
  "> scan skill manifest",
  "> hydrate first-party curriculum",
  "> reserve exam seat",
  "> reserve academy candidate profile",
];

const MAX_TERMINAL_LOGS = 200;

function appendLogs(prev: string[], ...lines: string[]): string[] {
  const next = [...prev, ...lines];
  return next.length > MAX_TERMINAL_LOGS ? next.slice(-MAX_TERMINAL_LOGS) : next;
}

interface MainSiteProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

function MainSite({ lang, setLang }: MainSiteProps) {
  const {
    transcript,
    isLoading,
    error,
    connect,
    studyModule,
    takeExam,
    updateDisplayName,
  } = useSession();

  const [terminalLogs, setTerminalLogs] = useState<string[]>(BOOT_LOGS);

  const t = translations[lang];

  const isConnected = !!transcript;
  const completedModules = useMemo(
    () => transcript?.foundationsStatus.completedModules ?? [],
    [transcript],
  );
  const examPassed = transcript?.foundationsStatus.status === "completed";
  const allModulesCompleted = completedModules.length >= 8;

  const handleConnect = useCallback(
    async (username: string, password: string, displayName?: string) => {
      setTerminalLogs((prev) => appendLogs(prev, `> authenticating: ${username}...`));
      try {
        await connect(username, password, displayName);
        setTerminalLogs((prev) =>
          appendLogs(prev,
            "> identity verified",
            `> user: ${username}`,
            "> foundations enrolled",
            "> course graph ready",
          ),
        );
      } catch (e) {
        const msg = e instanceof Error ? e.message : "connection failed";
        setTerminalLogs((prev) => appendLogs(prev, `> ERROR: ${msg}`));
      }
    },
    [connect],
  );

  const handleStudy = useCallback(
    async (moduleId: string) => {
      if (!isConnected || completedModules.includes(moduleId)) return;
      try {
        await studyModule(moduleId);
        setTerminalLogs((prev) =>
          appendLogs(prev,
            `> module complete: ${moduleId}`,
            "> evidence captured: notes + checklist",
          ),
        );
      } catch (e) {
        const msg = e instanceof Error ? e.message : "module study failed";
        setTerminalLogs((prev) => appendLogs(prev, `> ERROR: ${msg}`));
      }
    },
    [isConnected, completedModules, studyModule],
  );

  const handleExam = useCallback(async () => {
    if (!isConnected) return;
    try {
      await takeExam();
      setTerminalLogs((prev) =>
        appendLogs(prev,
          "> exam start: scenario-based assessment",
          "> assessment submitted",
          examPassed
            ? "> retake recorded: best score leaderboard recalculated"
            : "> graduation granted: clawford foundations",
        ),
      );
    } catch (e) {
      const msg = e instanceof Error ? e.message : "exam submission failed";
      setTerminalLogs((prev) => appendLogs(prev, `> ERROR: ${msg}`));
    }
  }, [examPassed, isConnected, takeExam]);

  return (
    <div className="app-shell">
      <div className="backdrop-orb backdrop-orb-a" aria-hidden="true" />
      <div className="backdrop-orb backdrop-orb-b" aria-hidden="true" />

      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <Header lang={lang} setLang={setLang} t={t} />

      <main id="main-content">
        <Hero t={t} />
        <StructureSection lang={lang} t={t} />

        <TerminalSection
          t={t}
          isConnected={isConnected}
          isLoading={isLoading}
          error={error}
          terminalLogs={terminalLogs}
          examPassed={examPassed}
          allModulesCompleted={allModulesCompleted}
          onConnect={handleConnect}
          onExam={handleExam}
        />

        <CurriculumSection
          lang={lang}
          t={t}
          completedModules={completedModules}
          isConnected={isConnected}
          onStudy={handleStudy}
        />

        <SortingHatSection
          lang={lang}
          t={t}
          uid={transcript?.uid ?? null}
          displayName={transcript?.displayName ?? ""}
          house={transcript?.house ?? null}
          linkedIds={transcript?.linkedIds ?? []}
          onUpdateDisplayName={updateDisplayName}
        />

        <StudentWallSection lang={lang} t={t} />

        <CourseCatalogSection
          lang={lang}
          t={t}
          examPassed={examPassed}
          house={transcript?.house ?? null}
        />

        <JourneySection lang={lang} t={t} />
        <PrinciplesSection lang={lang} t={t} />
        <AssessmentSection lang={lang} t={t} />
      </main>

      <Footer t={t} />
    </div>
  );
}

function App() {
  const [lang, setLang] = useState<Lang>("zh");

  return (
    <Routes>
      <Route path="/students" element={<StudentsPage lang={lang} setLang={setLang} />} />
      <Route path="*" element={<MainSite lang={lang} setLang={setLang} />} />
    </Routes>
  );
}

export default App;
