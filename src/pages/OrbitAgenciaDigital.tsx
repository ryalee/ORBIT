import React from "react";
import "./orbit-agencia-digital.css";

const OrbitAgenciaDigital: React.FC = () => {
  return (
    <div className="orbit-root">
      <nav className="orbit-nav">
        <div className="orbit-nav-logo">ORBIT</div>
        <div className="orbit-nav-links">
          <a href="#servicos">Serviços</a>
          <a href="#processo">Processo</a>
          <a href="#resultados">Resultados</a>
        </div>
        <button className="orbit-nav-cta" type="button">
          <span>Falar com especialista</span>
        </button>
      </nav>

      <section className="orbit-hero">
        <div className="orbit-hero-bg-img">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80"
            alt=""
          />
        </div>

        <div className="orbit-hero-eyebrow">
          <div className="orbit-eyebrow-dot" />
          <span className="orbit-eyebrow-text">
            Agência de crescimento digital · São Paulo, BR
          </span>
        </div>

        <h1 className="orbit-hero-title">
          Transformamos
          <br />
          <span className="orbit-line2">tráfego em</span>
          <br />
          <span className="orbit-accent">receita real.</span>
        </h1>

        <p className="orbit-hero-sub">
          Estratégia, tráfego pago e automações que escalam o seu negócio. Sem
          enrolação, sem relatório bonito pra distrair — só resultado.
        </p>

        <div className="orbit-hero-actions">
          <a href="#servicos" className="orbit-btn-neon">
            Ver nossos serviços
          </a>
          <a href="#resultados" className="orbit-btn-outline">
            Ver cases
          </a>
        </div>

        <div className="orbit-metrics">
          <div className="orbit-metric-item">
            <div className="orbit-metric-val">R$40M+</div>
            <div className="orbit-metric-label">em receita gerada</div>
          </div>
          <div className="orbit-metric-item">
            <div className="orbit-metric-val">120+</div>
            <div className="orbit-metric-label">clientes ativos</div>
          </div>
          <div className="orbit-metric-item">
            <div className="orbit-metric-val">4.8×</div>
            <div className="orbit-metric-label">ROAS médio</div>
          </div>
          <div className="orbit-metric-item">
            <div className="orbit-metric-val">98%</div>
            <div className="orbit-metric-label">retenção</div>
          </div>
        </div>
      </section>

      <div className="orbit-marquee-wrap">
        <div className="orbit-marquee-track">
          {[
            "Google Ads",
            "Meta Ads",
            "SEO",
            "CRO",
            "Automação",
            "Email Marketing",
            "Funil de vendas",
            "Analytics",
          ].map((t, idx) => (
            <React.Fragment key={`${t}-${idx}`}>
              <span className="orbit-marquee-item">
                {t}
                <span className="orbit-dot">◆</span>
              </span>
            </React.Fragment>
          ))}
          {[
            "Google Ads",
            "Meta Ads",
            "SEO",
            "CRO",
            "Automação",
            "Email Marketing",
            "Funil de vendas",
            "Analytics",
          ].map((t, idx) => (
            <React.Fragment key={`${t}-b-${idx}`}>
              <span className="orbit-marquee-item">
                {t}
                <span className="orbit-dot">◆</span>
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <section className="orbit-services" id="servicos">
        <div className="orbit-services-header">
          <div>
            <span className="orbit-section-label">// 01 — Serviços</span>
            <h2 className="orbit-section-h2">O que entregamos</h2>
          </div>
        </div>

        <div className="orbit-services-grid">
          <div className="orbit-svc" role="button" tabIndex={0}>
            <div className="orbit-svc-num">01 —</div>
            <h3>Tráfego Pago</h3>
            <p>
              Google, Meta, TikTok e YouTube Ads. Campanhas estruturadas para
              ROI positivo desde o 1º mês. Nada de teste infinito sem resultado.
            </p>
            <div className="orbit-svc-tags">
              <span className="orbit-tag">Google Ads</span>
              <span className="orbit-tag">Meta Ads</span>
              <span className="orbit-tag">TikTok</span>
            </div>
            <div className="orbit-svc-price">
              R$ 1.800 <small>/mês</small>
            </div>
          </div>

          <div className="orbit-svc" role="button" tabIndex={0}>
            <div className="orbit-svc-num">02 —</div>
            <h3>SEO & Conteúdo</h3>
            <p>
              Posicionamento orgânico de longo prazo. Estratégia de palavras-
              chave, produção de conteúdo e link building com autoridade real.
            </p>
            <div className="orbit-svc-tags">
              <span className="orbit-tag">SEO Técnico</span>
              <span className="orbit-tag">Conteúdo</span>
              <span className="orbit-tag">Links</span>
            </div>
            <div className="orbit-svc-price">
              R$ 2.200 <small>/mês</small>
            </div>
          </div>

          <div className="orbit-svc" role="button" tabIndex={0}>
            <div className="orbit-svc-num">03 —</div>
            <h3>Growth Completo</h3>
            <p>
              Estratégia 360: tráfego pago + SEO + automação + CRO. Para quem
              quer escalar de verdade. Inclui gestão de funil e BI mensal.
            </p>
            <div className="orbit-svc-tags">
              <span className="orbit-tag">All-in-one</span>
              <span className="orbit-tag">CRO</span>
              <span className="orbit-tag">BI</span>
            </div>
            <div className="orbit-svc-price">
              R$ 4.500 <small>/mês</small>
            </div>
          </div>
        </div>
      </section>

      <section className="orbit-process" id="processo">
        <span className="orbit-section-label">// 02 — Processo</span>
        <h2 className="orbit-section-h2">Como trabalhamos</h2>

        <div className="orbit-process-list">
          <div className="orbit-process-item">
            <div className="orbit-process-n">01 —</div>
            <div>
              <h4>Diagnóstico estratégico</h4>
              <p>
                Auditamos suas campanhas, site e funil atual. Identificamos onde
                estão os buracos e quanto está sendo desperdiçado.
              </p>
            </div>
          </div>

          <div className="orbit-process-item">
            <div className="orbit-process-n">02 —</div>
            <div>
              <h4>Plano de crescimento</h4>
              <p>
                Criamos um roadmap com metas claras, canais prioritários e
                projeções realistas de crescimento mês a mês.
              </p>
            </div>
          </div>

          <div className="orbit-process-item">
            <div className="orbit-process-n">03 —</div>
            <div>
              <h4>Execução e otimização</h4>
              <p>
                Ativamos as campanhas, monitoramos diariamente e otimizamos
                baseados em dados reais — não em feeling.
              </p>
            </div>
          </div>

          <div className="orbit-process-item">
            <div className="orbit-process-n">04 —</div>
            <div>
              <h4>Report e escala</h4>
              <p>
                Relatório mensal completo com o que funcionou, o que não
                funcionou e o próximo passo para escalar ainda mais.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="orbit-results" id="resultados">
        <span className="orbit-section-label">// 03 — Resultados</span>
        <h2 className="orbit-section-h2">Cases reais</h2>

        <div className="orbit-results-grid">
          <div className="orbit-result-card">
            <div className="orbit-card-img">
              <img
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80"
                alt=""
              />
            </div>
            <h3>+340%</h3>
            <div className="orbit-client">E-COMMERCE · MODA</div>
            <p>
              Crescimento em receita em 4 meses. Saímos de R$50k/mês para
              R$220k/mês com otimização de Meta Ads e criação de funil de
              recompra.
            </p>
          </div>

          <div className="orbit-result-card">
            <div className="orbit-card-img">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80"
                alt=""
              />
            </div>
            <h3>4.2× ROAS</h3>
            <div className="orbit-client">INFOPRODUTO · CURSOS</div>
            <p>
              De R$0.80 de retorno por real investido para R$4.20.
              Reestruturação completa de campanhas Google e funil de e-mail.
            </p>
          </div>

          <div className="orbit-result-card">
            <div className="orbit-card-img">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"
                alt=""
              />
            </div>
            <h3>−60% CAC</h3>
            <div className="orbit-client">SAAS · B2B</div>
            <p>
              Redução do custo de aquisição de cliente de R$380 para R$152.
              Estratégia de SEO + retargeting + qualificação de leads.
            </p>
          </div>

          <div className="orbit-result-card">
            <div className="orbit-card-img">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
                alt=""
              />
            </div>
            <h3>R$2.8M</h3>
            <div className="orbit-client">LANÇAMENTO · MENTORIA</div>
            <p>
              Faturamento em um único lançamento de 7 dias. Gestão completa de
              tráfego pago nos 4 principais canais digitais.
            </p>
          </div>
        </div>
      </section>

      <section className="orbit-cta-section">
        <div className="orbit-cta-glow" />
        <h2>
          Chega de <span>jogar dinheiro</span> fora
        </h2>
        <p>
          Fale com um especialista gratuitamente. Diagnóstico de 30 minutos para
          entender onde seu marketing está falhando.
        </p>
        <div className="orbit-cta-input-row">
          <input
            className="orbit-cta-input"
            type="email"
            placeholder="seu@email.com.br"
          />
          <button className="orbit-btn-neon" type="button">
            Quero diagnóstico grátis
          </button>
        </div>
      </section>

      <footer className="orbit-footer">
        <div className="orbit-footer-logo">ORBIT</div>
        <p>© 2025 ORBIT Agency · CNPJ 00.000.000/0001-00</p>
      </footer>
    </div>
  );
};

export default OrbitAgenciaDigital;
