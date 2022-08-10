import { useRouter } from 'next/router'

import LogoComponent from 'public/logo.svg'

export const Logo = () => {
  const router = useRouter()

  return (
    <div onClick={() => router.push('/')}>
      <LogoComponent />
    </div>
  )
}
