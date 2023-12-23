export default function FormExtra(){
    return(
        <div className="flex align-middle w-full text-center justify-between">
            <div className="flex items-center">
                <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                </label>
            </div>

            <div className="text-sm">
                <a href="#" className="font-medium text-primary-light hover:text-primary-light-hover">
                    Forgot your password?
                </a>
            </div>
      </div>

    )
}