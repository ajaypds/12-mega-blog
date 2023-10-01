import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import {Button, Input, Select} from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { useForm } from 'react-hook-form'

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")
    
    const login = async(data) => {
        setError("")
        try{
            const session = await authService.login(data)
            if(session) {
                const userData = authService.getCurrentUser()
                if(userData) dispatch(authLogin(userData))
                navigate("/")
            }
        }catch(error){
            setError(error.message)
        }
    }
  return (
    <div
    className='flex items-center justify-center w-full'
    >Login</div>
  )
}

export default Login