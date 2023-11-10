import React from 'react'
import Link from 'next/link';

async function getTicket() {
  const res = await fetch('http://localhost:4000/tickets', {
    next: {
      revalidate: 0 // Use 0 to opt out cache
    }
  });
  return res.json()
}

export default async function TicketList() {
  // imitate delay
  await new Promise(resolve => setTimeout(resolve, 3000))

  const tickets = await getTicket()

  if (tickets.length === 0) {
    return (
      <p className='text-center'>There are no open tickets, Yayy!</p>
    )
  }

  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className='card my-5 cursor-pointer'>
          <Link href={`/tickets/${ticket.id}`}>
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 300)}...</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
          </Link>
        </div>
      ))}
    </>
  )
}
