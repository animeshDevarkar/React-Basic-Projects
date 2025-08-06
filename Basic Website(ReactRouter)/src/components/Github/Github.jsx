import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch("https://api.github.com/users/animeshDevarkar")
        .then(response => response.json())
        .then(data=>{
            console.log(data);
            setData(data)            
        })
    },[])
    return (
        <div className="flex justify-center my-6">
  <div className="bg-gray-800 text-white p-6 rounded-2xl shadow-lg w-full max-w-md">
    <h2 className="text-2xl font-bold text-center mb-4">
      GitHub Profile
    </h2>

    <div className="flex items-center gap-4">
      <img
        src={data.avatar_url}
        alt="Avatar"
        className="w-20 h-20 rounded-full border-4 border-white shadow-md"
      />
      <div>
        <p className="text-lg font-semibold">{data.name || data.login}</p>
        <p className="text-sm text-gray-200">@{data.login}</p>
        <p className="text-xs text-gray-300">ID: {data.id}</p>
      </div>
    </div>

    <div className="grid grid-cols-3 text-center mt-6">
      <div>
        <p className="text-xl font-bold">{data.followers}</p>
        <p className="text-sm text-gray-200">Followers</p>
      </div>
      <div>
        <p className="text-xl font-bold">{data.following}</p>
        <p className="text-sm text-gray-200">Following</p>
      </div>
      <div>
        <p className="text-xl font-bold">{data.public_repos}</p>
        <p className="text-sm text-gray-200">Repos</p>
      </div>
    </div>
  </div>
</div>

    )
}

export default Github
