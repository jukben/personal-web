type Props = {
  title: string;
  data: Array<{ title: string; link: string }>;
  prefix: string;
};

export const Links = ({ data, title, prefix }: Props) => {
  return (
    <>
      <section>
        <h2>{title}</h2>
        <ul>
          {data.map(({ title, link }) => {
            return (
              <li key={title}>
                {prefix}{" "}
                <a className="link" href={link}>
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </section>
      <style jsx>{`
        .section {
          @apply w-full flex flex-col;
        }

        .h2 {
          @apply text-black;
        }

        ul {
          @apply m-0 p-0;
          list-style: none;
        }

        li {
          @apply py-2;
        }

        li:first-of-type {
          @apply pt-0;
        }

        @screen md {
          li {
            @apply py-1;
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
};
