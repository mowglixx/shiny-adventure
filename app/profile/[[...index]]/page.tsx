import { Params } from "next/dist/shared/lib/router/utils/route-matcher";


export interface ModularPageData {
  [key: string]: string | string[]
  request: string;
}

export default function page({ params }: Params) {
  const username = params.index[0]
  let data: string[] = params.index.splice(1)

  let pageData: ModularPageData = { username, request: 'none' };

  data.forEach((item: string, i: number, arr: string[]) => {
    if (!(i % 2)) {
      pageData[item] = decodeURI(arr[i + 1]);
      pageData.request = item
    }
  })


  if (!!username) {

    return (
      <div>Welcome, @{username} <br /> Here is your request:
        <pre>
          {JSON.stringify(pageData, null, 2)}
        </pre></div>
    )
  }
  return <>Please enter a username</>;
}