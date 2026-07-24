import Router from "@/routes/Router";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerStyle={{ zIndex: 99999 }}
        toastOptions={{
          style: {
            zIndex: 99999,
          },
        }}
      />

      <Router />
    </>
  );
}

export default App;