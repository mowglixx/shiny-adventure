
interface ArticleProps {
  article: {
    header: string,
    body: string
  }
}

export default function Article({ article: { header, body } }: ArticleProps) {
  return (
    <article>
      <header>
        {header}
      </header>
        <p>
          {body}
        </p>
    </article>
  )
}
