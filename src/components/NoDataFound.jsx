const NoDataFound = ({source}) => {
  return (
    <>
    <div className="flex h-[40vh] justify-center">
        <img src={source}/>
    </div>
    <div className='flex justify-center'>
            <h1 className='text-green-700 text-xl text-bold'>No Data Found</h1>
    </div>
    </>
  )
}

export default NoDataFound
