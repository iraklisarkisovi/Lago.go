import { useRouter } from 'next/router';
import React from 'react'

const page = () => {
  const router = useRouter()
  const { page } = router.query;

  return (
    <>
      <h1>{page}</h1>
    </>
  );
}

export default page
