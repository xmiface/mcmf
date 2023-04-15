import { useEffect } from 'react';
import Button from '../components/Button';
import dynamic from 'next/dynamic';

const RemoteButton = dynamic(() => import('remote/Button'), {
  ssr: false,
});

const RemoteeButton = dynamic(() => import('remotee/Button'), {
  ssr: false,
});

export default function Home() {

  useEffect(()=>{},[])

  return (
    <div style={{ padding: '2%' }}>
      <h1>Next JS and React</h1>
      <h2>Host - Button</h2>
      <button onClick={()=> console.log(RemoteButton)}>zxc</button>
      <button onClick={()=> console.log(RemoteeButton)}>zxc</button>
      <Button />
      <h2>Client -123  Button</h2>
      <RemoteButton />
      <RemoteeButton />
    </div>
  );
}
