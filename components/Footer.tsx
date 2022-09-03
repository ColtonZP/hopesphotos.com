import React from 'react'
import { Container } from 'react-bootstrap'
import Link from 'next/link'
import { IconBrandFacebook, IconBrandInstagram, IconMail } from '@tabler/icons'

type Props = {
  fixed?: boolean
}

export const Footer = ({ fixed }: Props) => {
  return (
    <footer className={`py-4 ${fixed ? 'fixed-bottom' : ''} bg-white`}>
      <Container className="d-flex justify-content-center">
        <div className="d-inline mx-1 btn btn-primary">
          <Link href="/">
            <a className="text-decoration-none">
              <IconMail color="white" />
            </a>
          </Link>
        </div>

        <div className="d-inline mx-1 btn btn-primary">
          <Link href="https://facebook.com">
            <a className="text-decoration-none">
              <IconBrandFacebook color="white" />
            </a>
          </Link>
        </div>

        <div className="d-inline mx-1 btn btn-primary">
          <Link href="https://instagram.com">
            <a className="text-decoration-none">
              <IconBrandInstagram color="white" />
            </a>
          </Link>
        </div>
      </Container>
    </footer>
  )
}

Footer.defaultProps = {
  fixed: false,
}
