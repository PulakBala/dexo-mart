const { useEffect } = require("react")

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - DeXo-MarT`;
    },[title])
}

export default useTitle;