import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function NextProject({ ProjectName, link}){
    return (
    <section>
          <div className="next-project text-center">
            <h3>NEXT PROJECT</h3>
            <Link href={link} passHref={true}><h1>{ProjectName}</h1></Link>
            <Link href={link} passHref={true}><a><FontAwesomeIcon icon={['far', 'fa-arrow-right']} /></a></Link>
          </div>
      </section>
    )
  }