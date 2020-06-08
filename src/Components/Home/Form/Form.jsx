import React from 'react'
import styled from './Form.module.scss'
import { useForm } from "react-hook-form"

const Form = () => {
    const { register, handleSubmit } = useForm()

    const onSubmit = date => {


    }

    return (
        <div>
			<form netlify data-netlify="true" className={styled.wrapper} onSubmit={handleSubmit(onSubmit)}>
            <div className={styled.contactForm}>
              <div className={styled.inputFields}>
                <input type="text" placeholder="Name" className={styled.input} ref={register} />
                <input type="text" placeholder="Email Address"  className={styled.input} ref={register} />
                <input type="text" placeholder="Subject" className={styled.input} ref={register}  />
              </div>
              <div className={styled.msg}>
	               <textarea placeholder="Message" ref={register} />
	                <div type="submit" className={styled.btn}>send</div>
              </div>
            </div>
        </form>
		</div>
    )
}

export default Form