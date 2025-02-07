function FormInput({register, name, type="text", errors}) {
    // console.log(errors[name])
    // || first true && first false
    return (
        <div>
            <input type={type} placeholder={name}
                {...register(name)}
                className="border w-full border-gray-700 rounded-md p-1 px-4"

            />
            {
                errors[name] && <p className=" text-sm text-red-500">{errors[name].message}</p>
            }

        </div>
    )
}

export default FormInput
