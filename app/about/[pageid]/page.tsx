import { useRouter } from "next/router"


export interface pageId {}

export default function pageId(props: pageId){
    const router = useRouter()

    return (
        <div>
            <h1>This page ID</h1>
            <p>Querry: {JSON.stringify(router.query)}</p>    
        </div>

        
    )
}