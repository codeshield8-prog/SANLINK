import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

export default function NotFound() {
  return (
    <section className="section">
      <div className="container flex min-h-[50vh] flex-col items-center justify-center text-center">
        <p className="font-display text-7xl font-bold text-royal-600">404</p>
        <h1 className="mt-4 text-2xl font-bold text-navy-900 sm:text-3xl">Page not found</h1>
        <p className="mt-3 max-w-md text-base text-slate-600">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <Link to="/" className="btn-primary mt-8">
          <FiArrowLeft aria-hidden="true" />
          Back to Home
        </Link>
      </div>
    </section>
  );
}
