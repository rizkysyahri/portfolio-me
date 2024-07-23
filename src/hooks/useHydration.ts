'use client'

import * as React from 'react'

export function useHydration() {
    const [hydrate, setHydrated] = React.useState(false)

    React.useEffect(() => {
        setHydrated(true)
    }, [])

    return hydrate
}