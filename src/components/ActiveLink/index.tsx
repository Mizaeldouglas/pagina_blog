import Link, {LinkProps} from "next/link"
import { ReactElement } from 'react'
import { useRouter } from 'next/router'

interface ActiveLinkProps extends LinkProps{
	children: ReactElement;
	activeClassName:string;
}


export function ActiveLink({children,activeClassName, ...rest}){

	const { asPath } = useRouter()
	const className = asPath === rest.href ? activeClassName : '';

	


	return(
		<Link href="/"> 
			<a>
				test
			</a>
		</Link>
	)
}