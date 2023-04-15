import { useEffect } from 'react';
import Button from '../components/Button';
import dynamic from 'next/dynamic';

const RemoteButton = dynamic(() => import('remotee/Buttton'), {
  ssr: false,
});

export default function Home() {

  useEffect(()=>{
    console.log
  },[])

  return (
    <div style={{ padding: '2%', border: '3px red solid' }}>
      <h1>Next JS and React</h1>
      <h2>Host - Button</h2>
      <Button />
      <h2>Client -123  Button</h2>
      {/* <RemoteButton /> */}
    </div>
  );
}
