const ProtectRoutes =()=>{

    const isAutheticated = localStorage.getItem("tokenId") ? true : false;
    return isAutheticated ?  <Dashboard/> : <Navigate to ="/login" />

}

export default ProtectRoutes;