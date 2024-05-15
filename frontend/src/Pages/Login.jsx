import React, { useState,useContext } from 'react'
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from '@mui/material'
import {CameraAlt as CameraAltIcon} from '@mui/icons-material'
import { VisuallyHiddenInput } from '../Components/styles/StyledComponents';
import UserContext from '../context/UserContext'
import { Link } from 'react-router-dom'
const Login = () => {
    const[isLogin,setIsLogin]=useState(true)
    const toggleLogin=()=>setIsLogin((prev)=>(!prev))
    const[name,setName]=useState('')
    const[imagePrev,setImagePrev]=useState('')
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState('')
    const{setUser}=useContext(UserContext)
    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({email,password})
    }
    const imageChangeHandler=(e)=>{
        const file=e.target.files[0]
        const reader=new FileReader();
        reader.readAsDataURL(file)
        reader.onloadend=()=>{
            setImagePrev(reader.result)
        }
    }
  return (
    <Container component={'main'} maxWidth='xs'
    sx={{
        height: "100vh",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }}
    >
        <Paper elevation={3}
        sx={{
            padding:4,
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
        }}
        >
            {
                isLogin?(<>
             <Typography variant='h5'>
                Login
            </Typography>
            <form style={{
                width: '100%',
                marginTop:'1rem'
            
            }}
            onSubmit={handleSubmit}>
            <TextField 
            required
            fullWidth
            label="Email"
            margin='normal'
            variant='outlined'
            color='secondary'
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            />
            <TextField 
            required
            fullWidth
            label="Password"
            margin='normal'
            variant='outlined'
            color='secondary'
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            />
           <Link to='/profile'> <Button
            sx={{
                marginTop:"1rem"
            }}
            color='primary'
            variant='contained'
            type='submit'

            >Login</Button></Link>
            <Typography textAlign={'center'} margin={'1rem'}>OR</Typography>
            <Button fullWidth  variant='text' onClick={toggleLogin}>SignUp Instead</Button>
            </form>
                </>):(<>
                    <Typography variant='h5'>
                SignUp
            </Typography>
            <form style={{
                width: '100%',
                marginTop:'1rem'
            }}>
                <Stack position={'relative'} 
                margin={'auto'}
                width={'10rem'}
                >
                <Avatar src={imagePrev} sx={{
                    width:'10rem',
                    height:'10rem',
                    objectFit:'contain'
                }}/>
                <IconButton sx={{
                    position:'absolute',
                    bottom: '0',
                    right: '0',
                    color: "white",
                    bgcolor: "rgba(0,0,0,0.5)",
                    ":hover":{
                      bgcolor:"rgba(0,0,0,0.7)"
                    }
                }}
                component='label'
                >
                    
      <>
      <CameraAltIcon/>
      <VisuallyHiddenInput type='file' onChange={imageChangeHandler}/>
      </>
                </IconButton>
                </Stack>
                
            <TextField
            label='Name'
            required
            fullWidth
            variant='outlined'
            margin='normal'
            value={name}
            onChange={setName}
            />
            <TextField 
            required
            fullWidth
            label="Email"
            margin='normal'
            variant='outlined'
            
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            />
            <TextField 
            required
            fullWidth
            label="Password"
            margin='normal'
            variant='outlined'
            value={password}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            />
            <Button
            sx={{
                marginTop:"1rem"
            }}
            color='primary'
            variant='contained'
            type='submit'
            >SignUp</Button> 
            <Typography textAlign={'center'} margin={'1rem'}>OR</Typography>
            <Button fullWidth  variant='text' onClick={toggleLogin}>Login Instead</Button>
            </form>
                </>)
            }
            
        </Paper>
    </Container>
    
    
  )
}

export default Login