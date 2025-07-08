export const getDatoCmsToken = (): string => {
  const hostname = window.location.hostname;

  if (
    hostname === 'ror.sumanthsamala.com' ||
    hostname === 'sumanthsamala.com' ||
    hostname === 'ror.localhost' ||
    hostname === 'localhost' ||
    hostname.includes('nandu-s-portfolio.vercel.app') ||  // ✅ match exact production
    hostname.includes('nandu-s-portfolio.vercel')         // ✅ match previews like git-branch.vercel.app
  ) {
    return process.env.REACT_APP_DATOCMS_ROR_TOKEN ?? '';
  }

  if (
    hostname === 'java.sumanthsamala.com' ||
    hostname === 'java.localhost'
  ) {
    return process.env.REACT_APP_DATOCMS_JAVA_TOKEN ?? '';
  }

  if (
    hostname === 'frontend.sumanthsamala.com' ||
    hostname === 'frontend.localhost'
  ) {
    return process.env.REACT_APP_DATOCMS_FRONTEND_TOKEN ?? '';
  }

  if (
    hostname === 'node.sumanthsamala.com' ||
    hostname === 'node.localhost'
  ) {
    return process.env.REACT_APP_DATOCMS_NODE_TOKEN ?? '';
  }

  console.warn(`⚠️ No DatoCMS token configured for hostname: ${hostname}`);
  return '';
};
