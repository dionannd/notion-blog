interface Props {
  siteName: string;
  templateTitle: string;
  description: string;
  logo: string;
}

export function openGraph({
  siteName,
  templateTitle,
  description,
  logo = "https://blog-dion.vercel.app/images/banner.jpg",
}: Props) {
  const ogLogo = encodeURIComponent(logo);
  const ogSiteName = encodeURIComponent(siteName);
  const ogTemplateTitle = templateTitle
    ? encodeURIComponent(templateTitle)
    : undefined;
  const ogDesc = encodeURIComponent(description);

  return `https://og-dion.vercel.app/api/gradient?siteName=${ogSiteName}&description=${ogDesc}&logo=${ogLogo}${
    ogTemplateTitle ? `&templateTitle=${ogTemplateTitle}` : ""
  }`;
}
