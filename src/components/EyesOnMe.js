function EyesOnMe (){
    function focusHandler(event){

        if (event.type==='focus') {
            console.log('Good!');

        } else if (event.type==='blur'){
            console.log('Hey! Eyes on me!');
        }
    }
    return (
    
    <button onBlur={focusHandler} onFocus={focusHandler}>Eyes on me</button>
    )
}

export default EyesOnMe