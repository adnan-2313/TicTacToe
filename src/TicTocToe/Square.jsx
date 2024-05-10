const Square = (porps) => {
  return (
    <>
        <div onClick={porps.onClick} 
        className="  h-[120px] w-[140px] flex 
        items-center content-center border-2 border-solid
         border-black">
            <h5 className="text-[40px] 
        flex p-[50px]">{porps.value}</h5>
        </div>         
    </>
  )
}

export default Square
