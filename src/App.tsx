import { Button } from "~/components/ui/button";
import { LayoutClient } from "./components/layouts/client/layout-client";

const App = () => {
  return (
    <LayoutClient>
      WELCOME TO REACT TSX + TAILWIND CSS + VITE
      <Button variant="link">Shadcn</Button>
    </LayoutClient>
  );
};

export default App;
