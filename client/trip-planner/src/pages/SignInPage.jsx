import LoginPage from "../components/LoginPage"



const SignInPage = ({setIsLoggedIn}) => {
  return (
    <div className="signInPage background" style={{}}>
        <LoginPage setIsLoggedIn={setIsLoggedIn}/>
    </div>
  )
}
export default SignInPage