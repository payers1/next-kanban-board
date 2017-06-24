import Link from 'next/link'
import Head from 'next/head'
import { Menu } from 'semantic-ui-react'

export default ({children}) => (
  <div style={{background: 'rgb(242, 242, 245)'}}>
    <Head>
      <title>NextJS KanBan</title>
      <link rel='stylesheet' href='/static/css/bundle.css' />
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"></link>
    </Head>

    <Menu>
      <Menu.Item name='home'>
        <Link href='/'>  HOME </Link>
      </Menu.Item>
    </Menu>

    {children}
  </div>
)
