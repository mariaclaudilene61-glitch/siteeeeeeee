import React from "react";

export default function PoliticaPagamento() {
  return (
    <div style={{
      background: "#fffbe6",
      minHeight: "100vh",
      padding: "2rem",
      color: "#222",
      fontFamily: "sans-serif"
    }}>
      <div style={{
        maxWidth: 600,
        margin: "2rem auto",
        background: "#fff",
        border: "2px solid #ffd600",
        borderRadius: 12,
        padding: "2rem"
      }}>
        <div style={{ fontSize: 40, color: "#ffd600", textAlign: "center" }}>🏆</div>
        <h1 style={{ color: "#ffd600", textAlign: "center" }}>Política de Pagamento</h1>
        <h2 style={{ marginTop: 32 }}>Como funciona o VIP?</h2>
        <p>
          O acesso VIP custa <b>R$14,50</b> e é pago via PIX. Com o VIP, você pode fazer até <b>15 avaliações por dia</b>, cada uma valendo 50 pontos, além de receber bônus de 100 pontos.
        </p>
        <h2>Regras e Reembolsos</h2>
        <ul>
          <li>O pagamento é único e válido por 30 dias.</li>
          <li>Não oferecemos reembolso após a ativação do VIP.</li>
          <li>Em caso de problemas, entre em contato pelo e-mail <b>suporte@seudominio.com</b>.</li>
        </ul>
        <h2>Segurança</h2>
        <p>
          O pagamento é processado via PIX, garantindo rapidez e segurança. Seus dados não são compartilhados com terceiros.
        </p>
        <div style={{ marginTop: 32, textAlign: "center" }}>
          <a href="/" style={{
            color: "#ffd600",
            textDecoration: "underline",
            fontWeight: "bold"
          }}>Voltar para o site</a>
        </div>
      </div>
    </div>
  );
}