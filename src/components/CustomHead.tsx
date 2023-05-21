import Head from 'next/head';

interface ICustomHeadProps {
  pageTitle?: string;
  pageDescription?: string;
  pageImage?: string;
  pageCanonicalUrl?: string;
}

export default function CustomHead({
  pageTitle,
  pageDescription,
  pageImage,
  pageCanonicalUrl,
}: ICustomHeadProps) {
  const defaultTitle = '火箭隊2.0 feat 共同空間｜形象官網';
  const defaultDescription =
    '火箭隊是一個專為軟體工程師設計的線下培訓營。我們提供高質量的技術培訓課程，幫助學員獲得實用的軟體開發技能。透過火箭隊的課程，學員能夠學習到程式設計語言、開發工具和框架，並且獲得實戰經驗。';

  const defaultCanonicalUrl = 'https://rocket-offical-website.vercel.app/';
  const defaultImage = 'https://raw.githubusercontent.com/roceil/Rocket_Offical_Website/main/public/images/customHead/aboutRocket.png';

  return (
    <>
      <Head>
        <title>
          {pageTitle ? `${pageTitle} - ${defaultTitle}` : defaultTitle}
        </title>
        <meta
          name="description"
          content={pageDescription || defaultDescription}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Line */}
        <meta property="line:app_id" content="LINE_APP_ID" />
        <meta property="line:multi_share" content="true" />
        <meta property="og:image" content={pageImage || defaultImage} />

        {/* Discord */}
        <meta property="discord:invite_image" content={defaultImage} />
        <meta property="discord:invite_image:width" content="1200" />
        <meta property="discord:invite_image:height" content="600" />

        {/* Facebook */}
        <meta property="og:site_name" content="拍拍" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={
            pageCanonicalUrl || 'https://rocket-offical-website.vercel.app/'
          }
        />
        <meta property="og:title" content={pageTitle || defaultTitle} />
        <meta
          property="og:description"
          content={pageDescription || defaultDescription}
        />
        <meta property="og:image" content={pageImage || defaultImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />
        <meta property="og:locale" content="zh_TW" />

        {/* Google */}
        <link rel="canonical" href={pageCanonicalUrl || defaultCanonicalUrl} />
      </Head>

      <h1 className="hidden">
        {pageTitle ? `${pageTitle} - ${defaultTitle}` : defaultTitle}
      </h1>
    </>
  );
}
