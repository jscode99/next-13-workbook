import React, { Suspense } from 'react'
// Components
import TicketList from './TicketList'
import Loading from './loading'
import Link from 'next/link'

function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p><small>Currently open tickets.</small></p>
        </div>
        <Link href="/tickets/create" className="ml-auto">
          <button className="btn-primary">New Ticket</button>
        </Link>

      </nav>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  )
}

export default Tickets