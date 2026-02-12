import { BrowserRouter } from "react-router-dom";
import StateLiftingApp from "./DAY-1/state-lifting up/StateLiftingUp";
import Day2 from "./DAY-2/App";
import Day3 from "./DAY-3/App";
import Day4 from "./DAY-4/App";
import Day5 from "./DAY-5/App";
import { AuthProvider } from "./DAY-8/AuthContext";
import Day8 from "./DAY-8/App";

function App() {
  return (
    <div>
      {/* <StateLiftingApp /> */}
      {/* <Day2/> */}
      {/* <Day3/> */}
      {/* <Day4/> */}
      {/* <Day5/> */}

      <BrowserRouter>
        <AuthProvider>
          <Day8 />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
