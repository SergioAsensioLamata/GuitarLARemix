import { useState, useEffect } from 'react'
import {
    Meta,
    Links,
    Outlet,
    Scripts,
    LiveReload,
    useRouteError,
    isRouteErrorResponse,
    Link
} from '@remix-run/react'

import styles from '~/styles/index.css'
import Header from '~/components/header'
import Footer from './components/footer'

export function meta() {
    return[
        {charset: 'utf-8'},
        {title: 'GuitarLA - Remix'},
        {viewport: "width=device-width,initial-scale=1"}
    ]
}

<link href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@1,100&family=Krub:ital,wght@0,700;1,400&family=Outfit:wght@400;700;900&display=swap" rel="stylesheet"></link>

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel: 'stylesheet',
            href: styles
        }, 
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossOrigin: "true"
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@1,100&family=Krub:ital,wght@0,700;1,400&family=Outfit:wght@400;700;900&display=swap'
        }
    ]
}

export default function App() {
    const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : null
    const [carrito, setCarrito] = useState(carritoLS)

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])

    const agregarCarrito = guitarra => {
        if(carrito.some(guitarraState => guitarraState.id === guitarra.id)){
            // Iterar sobre el arreglo, e identificar el elemento duplicado
            const carritoAztualizado = carrito.map( guitarraState => {
                if(guitarraState.id === guitarra.id) {

                    // Rescribir la cantidad
                    guitarraState.cantidad = guitarra.cantidad
                }
                return guitarraState
            })
                // Añadir al carrito
                setCarrito(carritoAztualizado)
        } else {
            setCarrito([...carrito, guitarra])
        }

    }

    const actualizarCantidad = guitarra => {
        const carritoAztualizado = carrito.map( guitarraState => {
            if(guitarraState.id === guitarra.id) {
                guitarraState.cantidad = guitarra.cantidad
            }
            return guitarraState
        })
        setCarrito(carritoAztualizado)
    }

    const eliminarGuitarra = id => {
        const carritoAztualizado = carrito.filter( guitarraState => guitarraState.id !== id)
        setCarrito(carritoAztualizado)
    }

    return(
        <Document >
            <Outlet 
                context={{
                    agregarCarrito,
                    carrito,
                    actualizarCantidad,
                    eliminarGuitarra
                }}
            />
        </Document>
    )
}

function Document({ children }) {
    return(
        <html lang="es">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Header />
                {children}
                <Footer />

                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}

/** Manejo de errores */

export function ErrorBoundary() {
    const error = useRouteError()

    if(isRouteErrorResponse(error)){
        return (
            <Document>
                <p className='error'>{error.status} {error.statusText}</p>
                <Link to='/' className='error-enlace'>Tal vez quieras volver a la página principal</Link>
            </Document>
        )
    }
}