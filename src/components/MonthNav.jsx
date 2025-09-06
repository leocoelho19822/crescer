// src/components/MonthNav.jsx
// eslint-disable-next-line
import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import PropTypes from "prop-types";

/**
 * Navegação entre meses.
 * props:
 *  - prev: { label: string, to: string } | null
 *  - next: { label: string, to: string } | null
 *  - accent: string (opcional) cor do botão "Próximo"
 */
export default function MonthNav({ prev, next, accent = "#8FD3B8" }) {
  return (
    <div className="mt-12 flex items-center justify-between gap-3">
      {prev ? (
        <Link
          to={prev.to}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition"
          aria-label={`Voltar para ${prev.label}`}
        >
          <FiArrowLeft />
          <span>{prev.label}</span>
        </Link>
      ) : (
        <button
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-100 text-gray-300 bg-gray-50 cursor-not-allowed"
          disabled
          aria-disabled="true"
        >
          <FiArrowLeft />
          <span>Anterior</span>
        </button>
      )}

      {next ? (
        <Link
          to={next.to}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg "
          style={{ backgroundColor: accent }}
          aria-label={`Avançar para ${next.label}`}
        >
          <span>{next.label}</span>
          <FiArrowRight />
        </Link>
      ) : (
        <button
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-100 text-gray-300 bg-gray-50 cursor-not-allowed"
          disabled
          aria-disabled="true"
        >
          <span>Próximo</span>
          <FiArrowRight />
        </button>
      )}
    </div>
  );
}

const navShape = PropTypes.shape({
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
});

MonthNav.propTypes = {
  prev: navShape,
  next: navShape,
  accent: PropTypes.string,
};

MonthNav.defaultProps = {
  prev: null,
  next: null,
  accent: "#8FD3B8",
};
