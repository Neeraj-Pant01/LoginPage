import React from 'react'
import styled from 'styled-components';

const Div = styled.div `
height: calc(100vh - 10px);
display:flex;
padding:20px;
box-sizing: border-box;
gap:20px;

@media (max-width: 768px) {
    width: 100vw;
  }
  @media (max-width: 1200) {
    width: 100vw;
  }
`
const Left = styled.div`
flex:1.5;
// border: 2px solid green;
display:flex;
align-items:center;
justify-content:center;

@media (max-width: 768px) {
    display: none
  }

  @media (max-width: 480px) {
    display:none;
  }
`

const Right = styled.div`
flex:2;
border-radius:5px;
box-shadow: 0px 1px 30px #e9e2e2;
display:flex;
flex-direction:column;
gap:10px;
align-items:center;
justify-content:center;
height:100%;
margin-right:30px;

@media (max-width: 768px) {
    width: 100%;
    padding: 0px 10px;
    margin-right:0px;

  }
  @media (max-width: 1200px) {
    width: 100%;
    padding: 0px 10px;
  }
`

const Img = styled.img`
height:60%;
`

const H1 = styled.h1`
`

const Form = styled.form`
display:flex;
flex-direction:column;
gap:14px;

@media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 1200px) {
    width: 100%;
  }
`

const Label = styled.label`
display:flex;
flex-direction:column;
gap:5px;
// font-size: 14px;
`
const Input = styled.input`
margin-bottom:10px;
width:600px;
outline:none;
color:grey;
padding: 15px 10px;
border-radius: 5px;
border: 1px solid rgba(4, 7, 47, 0.4);

@media (max-width: 768px) {
    width: 95%;
  }
  @media (max-width: 1200px) {
    width: 95%;
  }

`
const Span = styled.span`
color: #737B86;
// font-size:14px;
`
const Span2 = styled.span`
font-style: normal;
font-weight: 400;
line-height: 110%;
color: #F78719;
// font-size:14px;
cursor:pointer;
`

const P = styled.p`
width:100%;
display:flex;
align-items:center;
justify-content:center;
`
const Button = styled.button`
background: #1575A7;
border-radius: 8px;
display:flex;
align-self:center;
align-items:center;
justify-content:center;
color:white;
padding:13px;
width: 400px;
margin:20px 0px;
border:none;
outline:none;
cursor:pointer;

@media (max-width: 768px) {
    width: 100%;
  }
`
const BottomDiv = styled.div`
display:flex;
width: 100%;
align-item:center;
justify-content:space-between;
font-size:14px;
color:grey;
`

const CheckBox = styled.input`
border:1px solid grey;
outline:none;
cursor:pointer;
`

const CheckDiv = styled.div`
display:flex;
align-items:center;
gap:5px;
// border: 2px solid green;
`

const Login = () => {
  return (
    <Div >
        <Left>
            <Img src='/assets/img.svg' />
        </Left>
        <Right>
            <H1>Login</H1>
            <Form>
                <Label>Login Id</Label>
                <Input placeholder='enter login ID'/>
                <Label>Password</Label>
                <Input type='password' placeholder='enter password'/>
                <BottomDiv>
                    <CheckDiv>
                        <CheckBox type='checkbox'/>
                    <Span> Remember me</Span>
                    </CheckDiv>
                    <Span2>Change Password</Span2>
                </BottomDiv>
                <CheckDiv>
                        <CheckBox type='checkbox'/>
                    <Span> Agree to</Span>
                    <Span2 style={{textDecoration:"underline #F78719"}}>terms & conditions</Span2>
                    </CheckDiv>

                    <Button>Login</Button>

                    <P>
                        <Span style={{color: "black"}}>Don't have an account ?</Span>
                        <Span2 style={{textDecoration:"underline #F78719"}}>Register Here</Span2>
                    </P>
            </Form>
        </Right>
    </Div>
  )
}

export default Login
