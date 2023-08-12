import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import ContactHeader from "./components/ContactHeader/ContactHeader";
import ContactForm from "./components/ContactForm/ContactForm";
function App() {
  return (
    <>
      <Navigation />
      <main className="main">
        <ContactHeader />
        <ContactForm />
      </main>
    </>
  );
}

export default App;
