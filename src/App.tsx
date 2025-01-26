import { DarkThemeToggle } from "flowbite-react";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <main className="flex min-h-screen items-center justify-center gap-2 dark:bg-gray-800">
      <h1 className="text-2xl dark:text-white">
        {t("Flowbite React")} + {t("Vite")}
      </h1>
      <DarkThemeToggle />.


    </main>
  );
}

export default App;
