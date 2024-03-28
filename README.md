Crear un servidor que disponibilice una ruta raíz que devuelva un HTML con el
formulario para ingresar la URL de la imagen con estilos CSS de un documento interno en los
archivos del servidor. El formulario debe redirigir a otra ruta del servidor que procese la
imagen y la devuelva en blanco y negro.

Requerimientos
1. El servidor debe disponibilizar una ruta raíz que devuelva un HTML con el formulario
para el ingreso de la URL de la imagen a tratar. 
2. Los estilos de este HTML deben ser definidos por un archivo CSS alojado en el servidor. 
3. El formulario debe redirigir a otra ruta del servidor que deberá procesar la imagen
tomada por la URL enviada del formulario con el paquete Jimp. La imagen debe ser
procesada en escala de grises y redimensionada a unos 350px de ancho. 
4. La imagen alterada debe ser almacenada con un nombre incluya una porción de un
UUID y con extensión “jpg”, por ejemplo: 3dcb6d.jpeg. 
