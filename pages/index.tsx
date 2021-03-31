import Head from "next/head";
import { Links } from "../components/links";
import { articles, podcasts, socials } from "../data";

const GlobalStyle = () => (
  <>
    <Head>
      <title>Jakub Beneš</title>
      <meta
        name="description"
        content="Hey! I'm Jakub Beneš, Engineering Manager at productboard, Web
        Enthusiast and this is my personal website."
      />
      <meta
        name="keywords"
        content="Jakub Beneš, jukben, frontend, engineering manager"
      />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Jakub Beneš" />
      <link rel="preload" href="/montserrat-light.ttf" as="font" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
    <style global jsx>{`
      body {
        @apply bg-white p-4 m-0;
        font-family: "Montserrat", sans-serif;
      }

      @screen md {
        body {
          @apply p-8;
        }
      }

      @font-face {
        font-family: "Montserrat";
        src: url("/montserrat-light.ttf");
        font-weight: light;
        font-style: normal;
        font-display: swap;
      }
    `}</style>
  </>
);

export default function Welcome() {
  return (
    <>
      <GlobalStyle />
      <h1>Jakub Beneš</h1>
      <main>
        <div className="🤓">
          <div className="photo" />
        </div>
        <aside>
          <header>
            <p>
              👋 Hey! I'm Jakub Beneš, Engineering Manager (and web enthusiast)
              at productboard, based in Prague.
            </p>
            <p>
              In case you have any questions, or simply if you'd like to get in
              touch, don't hesitate to drop me a message on any socials or use
              the old good <a href="mailto:jukben@gmail.com">email</a>. Looking
              forward!
            </p>
          </header>
          <Links title={"Articles"} data={articles} />
          <Links title={"Podcasts"} data={podcasts} />
          <Links title={"Follow me"} data={socials} prefix={"on"} />
        </aside>
      </main>
      <style jsx>{`
        h1 {
          @apply hidden;
        }

        main {
          @apply flex items-center justify-center flex-col items-start;
        }

        @screen md {
          main {
            @apply flex-row;
          }
        }

        aside {
          @apply flex-1;
        }

        @screen md {
          aside {
            @apply px-4;
          }
        }

        @screen lg {
          aside {
            @apply px-8;
          }
        }

        header {
          @apply pt-4 text-base;
        }

        header > p:first-of-type {
          @apply mt-0;
        }

        @screen md {
          header {
            @apply pt-0 text-lg;
          }
        }

        .🤓 {
          @apply w-8/12;
        }

        .photo {
          @apply w-full shadow-2xl rounded-lg bg-contain;
          background-image: url("/me.jpg");
        }

        .photo:after {
          @apply block;
          content: "";
          padding-bottom: 100%;
        }

        @screen md {
          .🤓 {
            @apply w-4/12;
          }
        }

        @screen lg {
          .🤓 {
            @apply w-3/12;
          }
        }

        a {
          @apply text-blue-700 no-underline;
        }

        a:hover {
          @apply underline;
        }
      `}</style>
    </>
  );
}
