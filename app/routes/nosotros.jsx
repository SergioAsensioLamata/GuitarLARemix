import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta() {
    return [
        {
            title: 'GuitarLA - Sobre Nosotros',
            description: 'Venta de guitarras, blog de música'
        }
    ]
    
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        },
        {
            rel: 'preload',
            href: imagen,
            as: 'image'
        }
    ]
}

function Nosotros() {
   
    return(
        <main className="contenedor nosotros">
            <h2 className="heading">Nosotros</h2>

            <div className="contenido">
                <img src={imagen} alt="imagen sobre nosotros" />

                <div>
                    <p>Curabitur varius volutpat magna vel dignissim. Praesent tincidunt massa risus, et imperdiet augue hendrerit ut. Curabitur id maximus ipsum, et pretium erat. Nunc varius pretium ultrices. Cras et justo sed metus tincidunt vehicula ut id nisl. Proin at quam ante. Cras eget nunc ultrices, eleifend risus euismod, consequat risus.</p>

                    <p>Curabitur varius volutpat magna vel dignissim. Praesent tincidunt massa risus, et imperdiet augue hendrerit ut. Curabitur id maximus ipsum, et pretium erat. Nunc varius pretium ultrices. Cras et justo sed metus tincidunt vehicula ut id nisl. Proin at quam ante. Cras eget nunc ultrices, eleifend risus euismod, consequat risus.</p>
                </div>

            </div>

        </main>
    )
}

export default Nosotros