import { Outlet } from 'react-router'

import { Header } from '@/components/header'

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Header />

      <div className="flex flex-1 flex-col gap-4 p-4 pt-6 sm:p-8 sm:pt-6">
        <Outlet />
      </div>
    </div>
  )
}
