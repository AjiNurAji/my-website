import React from 'react';
import { Header } from './header';

interface Props {
  children: React.ReactNode;
}

export const LayoutClient = ({children}: Props) => {
  return (
    <>
      <Header />
      <main className='min-h-screen h-full w-full flex flex-col justify-center items-center bg-background text-foreground'>
        {children}
      </main>
    </>
  )
}