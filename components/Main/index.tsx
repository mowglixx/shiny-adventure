import { ReactNode } from "react"

interface PageProps {
  hello: string,
  children: ReactNode
}

function Main(props: PageProps) {
  return (
    <main data-hello={props.hello}>{props.children}</main>
  )
}


export default Main
