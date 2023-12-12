import React,{useState, useEffect,useMemo} from 'react'

const Fetch = ({url, renderSuccess=f=>f}) => {
    const [loading,setLoading] = useState(true);
    const [error, setError] = useState();
    const [data,setData] = useState()

    useEffect(()=>{
        if(!url) return
        setLoading(true)
        fetch(url).then((results)=>results.json()).then(setData).then(()=> setLoading(false)).catch(setError);
    }, [url])

    if(error) return (<pre> {JSON.stringify(error,null,2)} </pre>);
    if(loading) return (<div>...Loading</div>);
    if (data) return renderSuccess({data})

}

export default Fetch
