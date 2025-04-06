import { AppLayout } from "./components/AppLayout/AppLayout";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";

import { DataProvider } from "./context/DataContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <DataProvider>
        <AppLayout>
          <Header />
          <Main />
        </AppLayout>
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;
