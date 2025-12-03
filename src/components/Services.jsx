import './Services.css';

const defaultServices = [
  {
    title: 'Apoio Familiar',
    description: 'Recursos e atividades para fortalecer laços entre pais e filhos.',
    icon: '🤝',
  },
  {
    title: 'Saúde e Desenvolvimento',
    description: 'Informações sobre marcos do desenvolvimento e cuidados essenciais.',
    icon: '🧠',
  },
  {
    title: 'Atividades Educativas',
    description: 'Sugestões de jogos e leituras para estimular o desenvolvimento.',
    icon: '📚',
  },
];

export default function Services({ services = defaultServices }) {
  return (
    <section className="services" aria-label="Serviços">
      <div className="services-container">
        {services.map((s, idx) => (
          <article key={idx} className="service-card">
            <div className="service-icon" aria-hidden>
              {s.icon}
            </div>
            <h3 className="service-title">{s.title}</h3>
            <p className="service-desc">{s.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}


import PropTypes from "prop-types";

Services.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ),
};
