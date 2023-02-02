import { ThemeProvider } from "styled-components"
import { Button } from "./components/Button"
import { defaultTheme } from "./styles/themes/default"

export function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <Button variant="primary" />
      </ThemeProvider>
    </div>
  )
}

