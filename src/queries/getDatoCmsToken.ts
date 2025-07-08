export const getDatoCmsToken = (): string => {
  const hostname = window.location.hostname;

  // ✅ Dynamic support for Vercel preview URLs
  if (hostname.includes('nandu-s-portfolio.vercel.app') || hostname.includes('nandu-s-portfolio-git-')) {
    return process.env.REACT_APP_DATOCMS_ROR_TOKEN ?? '';
  }

  switch (hostname) {
    case 'ror.sumanthsamala.com':
    case 'sumanthsamala.com':
    case 'ror.localhost':
    case 'localhost':
      return process.env.REACT_APP_DATOCMS_ROR_TOKEN ?? '';

    case 'java.sumanthsamala.com':
    case 'java.localhost':
      return process.env.REACT_APP_DATOCMS_JAVA_TOKEN ?? '';

    case 'frontend.sumanthsamala.com':
    case 'frontend.localhost':
      return process.env.REACT_APP_DATOCMS_FRONTEND_TOKEN ?? '';

    case 'node.sumanthsamala.com':
    case 'node.localhost':
      return process.env.REACT_APP_DATOCMS_NODE_TOKEN ?? '';

    default:
      console.warn(`⚠️ No DatoCMS token configured for hostname: ${hostname}`);
      return '';
  }
};
