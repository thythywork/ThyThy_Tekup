import React from 'react';
import Navbar from "../components/navbar/Navbar";
import Card from "../components/card/Card";

const Main = () => {
  return (
    <div className='flex flex-col gap-5'>
      <Navbar/>
      <div className="flex flex-wrap gap-2 justify-center leading-5	">
      <Card img='https://tekup.vn/wp-content/uploads/2022/09/image-1.png' title='TOI 3D Customize E-commerce'/>
      <Card img='https://tekup.vn/wp-content/uploads/2022/09/image.png' title='E-learning – Internal training platform'/>
      <Card img='https://tekup.vn/wp-content/uploads/2022/08/summer21-thumbnail.png' title='Summer 21 Cosmetic E-commerce Platform'/>
      <Card img='https://tekup.vn/wp-content/uploads/2022/08/kiva-thumbnail.png' title='Kiva – Ambition to digital transformation in the brokerage assiduity'/>
      <Card img='https://tekup.vn/wp-content/uploads/2022/08/boxgo-thumbnail.png' title='Boxgo – Professional Warehouse Management'/>
      </div>
    </div>
  )
}

export default Main
