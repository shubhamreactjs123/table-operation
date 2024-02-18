import React, { useEffect, useState } from 'react'

const Table = () => {
    const url = "https://dummyapi.online/api/social-profiles/"
    const [listData, setListData] = useState();
    const getListData = async () => {
        try {
            const respo = await fetch(url)
            if (!respo.ok) {
                throw new Error("bad response")
            }
            const data = await respo.json()
            setListData(data)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getListData();
    }, [])
    return (
        <div>
            <table>
                <thead>
                    <th>#</th>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Email id</th>
                    <th>followers</th>
                    <th>Gender</th>
                    <th>Location</th>
                    <th>Date</th>
                </thead>
                <tbody>
                    {
                        listData?.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{data?.fullName}</td>
                                    <td>{data?.contactInfo?.phone}</td>
                                    <td>{data?.email}</td>
                                    <td>{data?.followersCount}</td>
                                    <td>{data?.gender}</td>
                                    <td>{data?.location}</td>
                                    <td>{data?.joinedDate}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table
