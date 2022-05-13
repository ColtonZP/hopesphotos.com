import React from 'react'
import Image from 'next/image'
import { Container } from 'react-bootstrap'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="py-4">
      <Container className="d-flex justify-content-center">
        <div className="d-inline mx-3">
          <Link href="/">
            <a>
              <Image src="/mail.svg" alt="mail" width={24} height={24} />
            </a>
          </Link>
        </div>

        <div className="d-inline mx-3">
          <Link href="https://facebook.com">
            <a>
              <Image
                src="/facebook.svg"
                alt="facebook"
                width={24}
                height={24}
              />
            </a>
          </Link>
        </div>

        <div className="d-inline mx-3">
          <Link href="https://instagram.com">
            <a>
              <Image
                src="/instagram.svg"
                alt="instagram"
                width={24}
                height={24}
              />
            </a>
          </Link>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
