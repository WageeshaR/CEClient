const fixedInputClass = "rounded-md appearance-none relative block w-full m-auto px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
const fixedCheckboxInputClass = "focus:outline-none w-4 h-4 text-purple-500 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 mr-10"
const fixedCheckboxLabelClass = "ms-2 font-medium text-gray-500"

export default function Input({
    handleChange,
    value,
    labelText,
    labelFor,
    id,
    name,
    type,
    isRequired=false,
    placeholder,
    customClass
}){
    return(
        <div className="flex items-center mb-4">
            <input
              onChange={handleChange}
              value={value}
              id={id}
              name={name}
              type={type}
              required={isRequired}
              className={type != "checkbox" ? fixedInputClass+customClass : fixedCheckboxInputClass+customClass}
              placeholder={placeholder}
            />
            <label htmlFor={labelFor} className={type != "checkbox" ? "sr-only" : fixedCheckboxLabelClass}>
              {labelText}
            </label>
          </div>
    )
}