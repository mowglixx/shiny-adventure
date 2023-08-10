import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export default function page({ params }: { params: Params }) {
  return (
    <div>
      <pre>
        {JSON.stringify(params, null, 2)}
      </pre >
    </div>
  )
}
