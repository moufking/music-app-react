import {createContext, react, useCallback, useContext, useMemo, useState} from 'react';

export const LearnContext = () => {


    // eslint-disable-next-line react-hooks/rules-of-hooks
    const handleSubmit  = useCallback((value) => {

        console.log('[handleSubmit]', value)
    }, [])
    return  (
        <>
        <div className="container">
            <FormContext defaultValue= {{name: 'Doe', prenom: 'John'}} onSubmit={ handleSubmit}>
                <FormField name="name">Nom </FormField>
                <FormField name="prenom">Prénom </FormField>
                <PrimaryButton>Envoyer</PrimaryButton>
            </FormContext>
        </div>
        
    </>
    )
   

}

const ReactFormContext = createContext({})


const FormContext = ({defaultValue, children, onSubmit}) => {


    const [data, setData] = useState(defaultValue)

    const changeValue  = (name, value) => {
        console.log('changeValue ', value);
        setData({...data, [name]: value})

    }

    const value = useMemo(()=> {
        return {
            data,
            changeValue 
        }
    })

    const onSubmitForm = (e) => {
        e.preventDefault()
        console.log(value)
        onSubmit(value)
    }
    
  
    return (

        <>
            <ReactFormContext.Provider value={value} >
                <form onSubmit={onSubmitForm}>
                    {children}
                </form>
            </ReactFormContext.Provider>
        </>
    ) 
    

}

const FormField = ({name, children}) => {

    const {data, changeValue} =  useContext(ReactFormContext)


    const handleChange = (e) => {
        console.log(e.target.value, '[handleChange]')
        changeValue(name,e.target.value)
    }


    return (
        <>
            <div className='form-group'>
                <label>{children}</label>
                <input type="text" name={name} value={data[name]} className="form-control" onChange={(e)=> handleChange(e)}/>
            </div>
        </>

    )
    

}

const PrimaryButton = ({children}) => {
    return(
        
        <>
            <button className="btn btn-primary">{children}</button>
        </>
    ) 

}

