import { Component, type ReactNode } from "react";
import translations from "@/i18n";
import { getInitialLang } from "@/i18n/locale";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      const lang = getInitialLang();
      const t = translations[lang];
      return (
        <div
          style={{
            display: "grid",
            placeItems: "center",
            minHeight: "100vh",
            color: "#93a9c4",
            fontFamily: "system-ui, sans-serif",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <div>
            <h1 style={{ color: "#ebf4ff", marginBottom: "0.5rem" }}>
              {t.common.errorTitle}
            </h1>
            <p>{t.common.errorMessage}</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
