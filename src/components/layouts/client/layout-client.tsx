import { Outlet } from '@tanstack/react-router';
import { Header } from './header';

export const LayoutClient = () => {
  return (
    <>
      <Header />
      <main className='min-h-screen h-full w-full flex flex-col justify-center items-center bg-background text-foreground'>
        <Outlet />
      </main>
    </>
  )
}