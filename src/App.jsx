import Header from "./components/Header";
import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header
        title="Interactive Profile Card"
        subtitle="Tugas Week 4 Bootcamp"
      />

      <main className="card-grid">
        <Card
          nama="Zukovski"
          role="Frontend Explorer"
          bio="Suka belajar React dan eksplorasi web modern."
        />

        <Card
          nama="Udin"
          role="UI/UX Designer"
          bio="Fokus merancang desain antarmuka yang simpel dan bersih."
        />

        <Card
          nama="Udon"
          role="Backend Engineer"
          bio="Pencinta logika server, optimasi database, dan API."
        />

        <Card
          nama="Asep"
          role="Data Enthusiast"
          bio="Tertarik pada analisis data dan machine learning."
        />

        <Card
          nama="Asap"
          role="DevOps Engineer"
          bio="Gemar otomasi deployment dan manajemen cloud server."
        />
      </main>
    </div>
  );
}

export default App;