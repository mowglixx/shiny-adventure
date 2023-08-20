import Article from "@/components/Article"


const articles: Array<{ header: string, body: string }> = [
  {
    header: 'This is article 1',
    body: 'This is the body 1'
  },
  {
    header: 'This is article 2',
    body: 'This is the body 2'
  },
  {
    header: 'This is article 3',
    body: 'This is the body 3'
  },
  {
    header: 'This is article 4',
    body: 'This is the body 4, oooo'
  },
];

function page() {
  return <>Hey, go to<br /> http://192.168.1.19:3000/search/(YOUR NAME HERE)</>
}


export default page
