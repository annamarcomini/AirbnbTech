import api from "../../services/api"
import { useNavigate } from "react-router-dom"
import {useForm} from 'react-hook-form'

export default function Login() {
 const {
  register,
  handleSubmit,
 } = useForm()
 const navigate= useNavigate();

 const onSubmit=  async (data)=> {
   const response = await api.post("/sessions", data)
   const {_id} = response.data;
   localStorage.setItem('user', _id);
   navigate("/dashboard")
 }
  return (
    <>
      <p>
        Ofereça <strong>spots</strong> para programadores e encontre{" "}
        <strong>talentos</strong> para sua empresa
        {/* strong deixa a letra negrito */}
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* onSubmit executa algo quando clico no submit desse form */}
        <label htmlFor="email">E-MAIL *</label>
        {/* legenda */}
        <input
        {...register("email",{
         required: 'Email is required',
          })}
          id="email"
          type="email"
          placeholder="Seu melhor e-mail"
          
        />
        
          <button className="page1" type="submit">
            Entrar
          </button>
      
      </form>
    </>
  )
}
