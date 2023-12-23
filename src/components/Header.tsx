import { Link } from "react-router-dom"
import logodark from '../assets/images/LogoDark.png'

export default function Header({
        heading,
        paragraph,
        linkName,
        linkUrl,
        marginTop
    }:{
        heading: string,
        paragraph: string,
        linkName: string,
        linkUrl: string,
        marginTop: string
    }
){
    return(
        <div className={'mb-10 '.concat(marginTop)}>
            <div className="flex justify-center">
                <img 
                    alt=""
                    className="h-14"
                    src={logodark}/>
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                {heading}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 mt-5">
            {paragraph} {' '}
            <Link to={linkUrl} className="font-medium text-primary-light hover:text-primary-light-hover">
                {linkName}
            </Link>
            </p>
        </div>
    )
}