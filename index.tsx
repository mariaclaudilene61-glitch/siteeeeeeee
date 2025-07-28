import Head from "next/head";
import Login from "../components/Login";
import ReviewPanel from "../components/ReviewPanel";

export default function Home() {
  return (
    <>
      <Head>
        <title>Avaliações de Livros</title>
        <meta name="description" content="Avalie livros pouco conhecidos e ganhe pontos!" />
      </Head>
      <header style={{
        background: "#fffde7",
        borderBottom: "2px solid #ffd600",
        padding: "1.5rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        <span style={{ fontSize: "2.5rem", color: "#ffd600" }}>🏆</span>
        <h1 style={{ color: "#ffd600", margin: 0 }}>Avaliações de Livros</h1>
        <Login />
      </header>
      <main style={{
        maxWidth: 600,
        margin: "2rem auto",
        background: "#fff",
        border: "1.5px solid #ffd600",
        borderRadius: "10px",
        padding: "2rem",
        boxShadow: "0 2px 8px #ffd60022"
      }}>
        <ReviewPanel />
        <div style={{ textAlign: "center", marginTop: 32 }}>
          <a href="/politica-pagamento" style={{
            color: "#ffd600",
            textDecoration: "underline",
            fontWeight: "bold"
          }}>
            Política de Pagamento
          </a>
        </div>
      </main>
    </>
  );
}