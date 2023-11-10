import React from 'react'
import Link from 'next/link';
import { notFound } from "next/navigation"

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const tickets = await fetch('http://localhost:4000/tickets').then((data) => data.json());
  return tickets.map((ticket) => ({
    id: ticket.id
  }))
}

async function getTicket(id) {
  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 60
    }
  });

  if (!res.ok) {
    notFound()
  }

  return res.json()
}

async function TicketDetails({ params }) {
  const ticket = await getTicket(params.id)
  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <h3 className='font-semibold'><Link href='/tickets'>
        Go Back
      </Link></h3>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  )
}

export default TicketDetails