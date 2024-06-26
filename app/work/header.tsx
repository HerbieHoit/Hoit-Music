'use client'

import Section from '@/components/Section'
import { ServicesQueryResult } from '@/sanity/sanity-types'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

export default function WorksHeader({
  services
}: {
  services: ServicesQueryResult
}) {
  const selectedService = useSelectedLayoutSegment()
  return (
    <Section>
      <div className={`flex items-center w-full justify-around`}>
        {services.map(service => (
          <Link
            href={`/work/${service.slug}`}
            key={service._id}
            className={`p-2 rounded ${selectedService === service.slug ? 'bg-accent text-bg' : ''} font-heading`}>
            {service.title}
          </Link>
        ))}
      </div>
    </Section>
  )
}
