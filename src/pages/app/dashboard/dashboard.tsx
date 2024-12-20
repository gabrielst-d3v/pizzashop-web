import { Helmet } from 'react-helmet-async'

import { DailyOrderNumberCard } from './daily-order-number-ard'
import { MonthCanceledOrderNumberCard } from './month-canceled-orders-number-card'
import { MonthlyIncomeCard } from './monthly-income-card'
import { MonthlyOrderNumberCard } from './monthly-order-number-card'
import { PopularProductsChart } from './popular-products-chart'
import { RevenueChart } from './revenue-chart'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <MonthlyIncomeCard />
          <MonthlyOrderNumberCard />
          <DailyOrderNumberCard />
          <MonthCanceledOrderNumberCard />
        </div>

        <div className="grid gap-4 sm:grid-cols-8 lg:grid-cols-9">
          <RevenueChart />
          <PopularProductsChart />
        </div>
      </div>
    </>
  )
}
