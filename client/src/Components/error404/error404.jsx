// import styles from '../error404/error404.module.css'

export default function Error404(){

    return(
        <section className="flex items-center h-full p-16 ">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-md text-center">
			<h2 className="mb-8 font-extrabold text-9xl text-orange-600">
				<span className="sr-only ">Error</span>404
			</h2>
			<p className="text-2xl font-semibold md:text-3xl">Lo sentimos, No logramos encontrar esta pagina.</p>
			<p className="mt-4 mb-8 ">Pero no te preocupes, puedes encontrar mas sneakers en nuestra pagina de inicio.</p>
			<a  href="/" className="px-8 py-3 font-semibold rounded text-white bg-blue-600 rounded-lg ">Volver al inicio</a>
		</div>
	</div>
</section>
    )
}