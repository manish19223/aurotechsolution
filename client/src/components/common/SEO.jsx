import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  keywords = "web development, app development, software solutions, technology services, digital solutions",
  image = "/assets/logo.jpg",
  url = window.location.href,
  type = "website",
}) => {
  const siteName = "Auro Tech Solutions";
  const defaultDescription =
    "Auro Tech Solutions - Your Technology Partner. We develop innovative and reliable products & services for your business needs.";

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph meta tags */}
      <meta
        property="og:title"
        content={title ? `${title} | ${siteName}` : siteName}
      />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content={title ? `${title} | ${siteName}` : siteName}
      />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Auro Tech Solutions" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
