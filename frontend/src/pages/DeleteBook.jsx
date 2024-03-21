import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { SnackbarProvider, enqueueSnackbar , useSnackbar } from 'notistack';
const DeleteBook = () => {
    const [loading,setLoading] = useState(false)
    const { enqueueSnackbar} = useSnackbar()
    const navigate = useNavigate()
    const {id}= useParams()
    const handleDeleteBook=()=>{
        setLoading(true);
        axios
        .delete(`http://192.168.1.14:5555/books/${id}`)
        .then(()=>{
            setLoading(false)
            enqueueSnackbar("Book Deleted successfully",{variant:'success'})
            navigate('/')
        }).catch((error)=>{
            setLoading(false)
            enqueueSnackbar("Error",{variant:'error'})
            console.log(error)
        })
    }
  return (
    <div className='p-4'>
        <BackButton/>
        <h1 className='text-3xl my-4'>Delete Book</h1>
        {loading?<Spinner/>:''}
        <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
            <h3 className='text-2xl'>Are you  sure to delete this book?</h3>
            <button onClick={handleDeleteBook} className='p-4 bg-red-600 text-white m-8 w-full'>Yes,Delete it</button>
        </div>
    </div>
  )
}

export default DeleteBook
