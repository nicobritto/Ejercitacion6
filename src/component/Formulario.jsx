import { useState } from "react";

export const Formulario = () => {
    const [info, setInfo] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== password2) {
            return alert("Las contraseñas no coinciden");
        }

        const usuario = {
            nombre,
            apellido,
            email,
            telefono,
            password,
        };
        setInfo(usuario);
        console.log(usuario);
    };

    return (
        <div className="flex flex-col items-center mt-14">
            <form onSubmit={handleSubmit} className="w-[30%]">
                <div className="mb-5">
                    <label
                        htmlFor="nombre"
                        className="block text-gray-700  uppercase"
                    >
                        Nombre
                    </label>
                    <input
                        id="nombre"
                        className="border-2 w-full p-2 mt-2 rounded-md"
                        type="text"
                        required
                        placeholder="Nombre"
                        value={nombre}
                        onChange={(a) => setNombre(a.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="apellido"
                        className="block text-gray-700  uppercase"
                    >
                        Apellido
                    </label>
                    <input
                        id="apellido"
                        className="border-2 w-full p-2 mt-2 rounded-md"
                        type="text "
                        required
                        placeholder="Apellido"
                        value={apellido}
                        onChange={(a) => setApellido(a.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="block text-gray-700  uppercase"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        className="border-2 w-full p-2 mt-2 rounded-md"
                        type="email"
                        required
                        placeholder="Email"
                        value={email}
                        onChange={(a) => setEmail(a.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="telefono"
                        className="block text-gray-700  uppercase"
                    >
                        Telefono
                    </label>
                    <input
                        id="telefono"
                        className="border-2 w-full p-2 mt-2 rounded-md"
                        type="text"
                        required
                        placeholder="Telefono"
                        value={telefono}
                        onChange={(a) => setTelefono(a.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="password"
                        className="block text-gray-700  uppercase"
                    >
                        Password
                    </label>
                    <input
                        id="password"
                        className="border-2 w-full p-2 mt-2 rounded-md"
                        type="password"
                        required
                        placeholder="Password"
                        value={password}
                        onChange={(a) => setPassword(a.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="confirmPassword"
                        className="block text-gray-700  uppercase"
                    >
                        Confirmar Password
                    </label>
                    <input
                        id="confirmPassword"
                        className="border-2 w-full p-2 mt-2 rounded-md"
                        type="password"
                        required
                        placeholder="Password"
                        value={password2}
                        onChange={(a) => setPassword2(a.target.value)}
                    />
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white 
                    uppercase font-bold hover:bg-indigo-700 cursor-pointer"
                />
            </form>

            <div className="mt-16">
                {info && (
                    <div className="bg-white rounded shadow p-6">
                        <h2 className="text-2xl font-semibold mb-4">
                            Usuario Registrado correctamente:
                        </h2>
                        <p className="mb-2">Nombre: {info.nombre}</p>
                        <p className="mb-2">Apellido: {info.apellido}</p>
                        <p className="mb-2">Email: {info.email}</p>
                        <p className="mb-2">Telefono: {info.telefono}</p>
                        <p className="mb-2">Password: {info.password}</p>
                    </div>
                )}
            </div>
        </div>
    );
};
