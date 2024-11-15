import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ header, content, footer }) {
  return (
    <div className="flex flex-col space-y-1 p-9 md:p-8 bg-white border border-gray-200 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:border-gray-300">
      {header && (
        <header className="text-lg md:text-3xl font-semibold text-gray-800 mb-2">
          {header}
        </header>
      )}
      {content && (
        <main className="text-gray-600 text-sm md:text-base leading-relaxed">
          {content}
        </main>
      )}
      {footer && (
        <footer className="mt-4 text-sm md:text-base text-blue-600 font-medium">
          {footer}
        </footer>
      )}
    </div>
  );
}

Card.propTypes = {
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  footer: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

Card.defaultProps = {
  header: null,
  content: null,
  footer: null,
};

