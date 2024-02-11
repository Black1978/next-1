'use client'

import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const NavigationTestPage = () => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const query = searchParams.get('q')

    console.log(pathname)
    console.log(query)

    const handleOnclick = () => {
        console.log('clicked')
        // router.push('/')
        // router.replace('/')
        // router.refresh()
        // router.back()
        router.forward()
    }
    return (
        <div>
            <Link href='/' prefetch={false}>
                Click here
            </Link>
            <button onClick={handleOnclick}>Write and Redirect</button>
        </div>
    )
}

export default NavigationTestPage
