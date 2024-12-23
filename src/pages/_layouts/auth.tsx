import { Pizza } from 'lucide-react'
import { Outlet } from 'react-router'

export function AuthLayout() {
  return (
    <div className="flex min-h-screen flex-col antialiased lg:grid lg:grid-cols-2">
      <div className="flex items-center justify-center bg-muted p-4 text-muted-foreground sm:items-center sm:justify-between sm:border-r sm:p-8 lg:flex lg:h-full lg:flex-col lg:border-foreground/5">
        <div className="flex items-center gap-3 text-lg text-foreground">
          <Pizza className="h-5 w-5" />
          <span className="font-semibold">Pizza.shop</span>
        </div>
        <footer className="absolute bottom-2 text-sm sm:bottom-8">
          Painel do parceiro &copy; pizza.shop - {new Date().getFullYear()}
        </footer>
      </div>

      <div className="relative grid items-center justify-center p-2 py-20 sm:items-center sm:justify-center sm:p-8 lg:flex lg:flex-col">
        <Outlet />
      </div>
    </div>
  )
}
