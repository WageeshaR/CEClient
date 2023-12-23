const fixedInputClass = "rounded-md appearance-none relative block w-full m-auto px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-light focus:border-primary-light focus:z-10 sm:text-sm"
const fixedCheckboxInputClass = "focus:outline-none w-4 h-4 rounded mr-10"
const fixedCheckboxLabelClass = "ms-2 font-medium text-gray-500"

export default function Input({
    handleChange,
    value,
    labelText,
    labelFor,
    id,
    name,
    type,
    isRequired = false,
    placeholder,
    customClass
  }:{
    handleChange: any,
    value: any,
    labelText: string,
    labelFor: string,
    id: string,
    name: string,
    type: string,
    isRequired: boolean,
    placeholder: string,
    customClass: any
  }
){
    return(
        <div className="flex items-center mb-4">
            <input
              onClick={handleChange}
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