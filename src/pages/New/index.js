import React, {useState, useMemo} from 'react';
import './styles.css'
import { FaCamera } from "react-icons/fa"
import api from "../../services/api";
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

export default function New(){
 const [thumbnail, setThumbnail] = useState(null)
 
const {
  register,
  handleSubmit,
 } = useForm()

 const navigate = useNavigate()

 const preview = useMemo(()=> {
  return thumbnail ? URL.createObjectURL(thumbnail) : null;
 },[thumbnail]
 )


 const onSubmit= async(data) => {
  const formData= new FormData();
  const user_id = localStorage.getItem('user');
  console.log('aloooo', data)

  formData.append('thumbnail', thumbnail);
  formData.append("company", data.company)
  formData.append("techs", data.techs)
  formData.append("price", data.price)

  await api.post("/spots", formData, {
    headers: { "Content-Type": "multipart/form-data", 
    user_id },
  })

 navigate("/dashboard")
 }

 return (
   <form onSubmit={handleSubmit(onSubmit)}>
     <label id="thumbnail" style={{ backgroundImage: `url(${preview})` }}>
       <input
         type="file"
         {...register("file")}
         onChange={(e) => setThumbnail(e.target.files[0])}
       />

       <span>
         <FaCamera size="1.3rem"></FaCamera>
       </span>
     </label>

     <label htmlFor="company">EMPRESA *</label>
     <input
       id="company"
       placeholder="Sua empresa incrível"
       {...register("company")}
     />

     <label htmlFor="techs">
       TECNOLOGIAS * <span>(separadas por virgula)</span>
     </label>
     <input
       id="techs"
       placeholder="Quais tecnologias usam?"
       {...register("techs")}
     />

     <label htmlFor="price">
       PREÇO DA DIÁRIA * <span>(em branco para GRATUITO)</span>
     </label>
     <input
       id="price"
       placeholder="Qual o valor da diária para alugar um spot?"
       {...register("price")}
     />

     <button type="submit" className="page1">
       Cadastar
     </button>
   </form>
 )
}