import React, { useEffect } from 'react'

const OwnershipAnnouncement = () => {
  const testSize = window.innerHeight
  useEffect(() => {
    console.log(testSize)
  }, [testSize])

  return (
    <div className='text-center bg-primary text-light font-weight-bolder py-3'>
      This is a demo website which is a practice of using React Hooks to imitate
      Linksmate website.The author doesn't have the ownership of all the assets
      of this website.
    </div>
  )
}

export default OwnershipAnnouncement
