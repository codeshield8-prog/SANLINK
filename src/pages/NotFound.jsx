import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import AmbientGlow from '../components/AmbientGlow.jsx';

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-base pt-28 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade opacity-60" aria-hidden="true" />
      <AmbientGlow color="violet" className="left-1/2 top-1/3 -translate-x-1/2" size="30rem" />
      <div className="container relative flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <p className="font-display text-7xl font-bold text-gradient-brand">404</p>
        <h1 className="mt-4 text-2xl font-bold text-white sm:text-3xl">Page not found</h1>
        <p className="mt-3 max-w-md text-base text-muted">
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
