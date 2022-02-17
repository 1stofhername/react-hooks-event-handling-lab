function Keypad (){
    function changeHandle(event){
        console.log('Entering password...')
    }
    return (
    <input type="password" onChange={changeHandle} /> 
    )
}
export default Keypad