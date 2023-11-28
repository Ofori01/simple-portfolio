import React,{useState, useEffect} from 'react'

const Fetch = ({url, renderSuccess=f=>f}) => {
    const [loading,setLoading] = useState(true);
    const [error, setError] = useState();
    const [data,setData] = useState()

    useEffect(()=>{
        if(!url) return
        setLoading(true)
        fetch(url).then((results)=>results.json()).then(setData).catch(setError);
        setLoading(false)
    }, [url])

    if(loading) return (<div>...Loading</div>)
    if(error) return (<p><pre> {JSON.stringify(error,null,2)} </pre></p>)
    return renderSuccess(data)

}

export default Fetch
